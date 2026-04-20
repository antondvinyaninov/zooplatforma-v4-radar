import { Request, Router } from 'express';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

import { validateVkSignature } from '../../shared/middleware/vkAuth';
import { prisma } from '../../shared/db';
import { publishVkPost, searchVkCities, callVkApi } from '../../utils/vkApi';

const router = Router();

type VkUserProfilePayload = {
  id?: number | string;
  first_name?: string | null;
  last_name?: string | null;
  screen_name?: string | null;
  photo_100?: string | null;
  photo_200?: string | null;
  city?: { title?: string | null } | string | null;
  sex?: number | string | null;
  bdate?: string | null;
  email?: string | null;
  phone?: string | null;
  access_token?: string | null;
};

type EditableProfilePayload = {
  bio?: string | null;
  roleLabel?: string | null;
  contactPhone?: string | null;
  contactTelegram?: string | null;
  contactEmail?: string | null;
  homeCityName?: string | null;
  homeLat?: number | string | null;
  homeLng?: number | string | null;
  preferences?: string[] | string | null;
  karmaScore?: number;
  achievements?: string[] | string | null;
};

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    const uploadPath = path.join(__dirname, '../../../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `media-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage });

const normalizeOptionalString = (value: unknown) => {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

const normalizeOptionalNumber = (value: unknown) => {
  if (value === undefined || value === null || value === '') return null;
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : null;
};

const normalizeStringArray = (value: unknown) => {
  if (Array.isArray(value)) {
    return value
      .map((item) => normalizeOptionalString(item))
      .filter((item): item is string => Boolean(item));
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => normalizeOptionalString(item))
      .filter((item): item is string => Boolean(item));
  }

  return [] as string[];
};

const parseJsonArray = (value: unknown) => {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string') return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const getPrimaryTag = (value: string | null) => {
  const normalized = normalizeOptionalString(value);
  if (!normalized) return null;

  const parsed = parseJsonArray(normalized);
  if (parsed.length > 0) {
    const firstValue = normalizeOptionalString(parsed[0]);
    return firstValue || normalized;
  }

  return normalized;
};

const jsonValueToStringArray = (value: unknown) => {
  if (Array.isArray(value)) {
    return value
      .map((item) => normalizeOptionalString(item))
      .filter((item): item is string => Boolean(item));
  }

  return [];
};

const decimalToNumber = (value: unknown) => {
  if (value === null || value === undefined) return null;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  if (typeof value === 'object' && value && 'toNumber' in value && typeof (value as { toNumber: () => number }).toNumber === 'function') {
    return (value as { toNumber: () => number }).toNumber();
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const isPlaceholderEmail = (email: string | null | undefined) => {
  return Boolean(email && email.endsWith('@vk.placeholder'));
};

const isPrismaUniqueConstraintError = (error: unknown) => {
  return Boolean(
    error &&
      typeof error === 'object' &&
      'code' in error &&
      (error as { code?: string }).code === 'P2002'
  );
};

const getVkUserId = (req: Request) => {
  const rawValue = req.body?.vk_user_id || req.query?.vk_user_id || (req as { vk_user_id?: string }).vk_user_id;
  return rawValue ? String(rawValue) : null;
};

const getVkGroupId = (req: Request) => {
  const rawValue =
    req.body?.vk_group_id ||
    req.query?.vk_group_id ||
    req.body?.groupId ||
    req.query?.groupId ||
    (req as { vk_group_id?: string }).vk_group_id;

  return rawValue ? String(rawValue) : null;
};

const toVkNumericId = (vkId: string) => {
  const numericId = Number(vkId);
  if (!Number.isFinite(numericId)) {
    throw new Error(`Invalid VK user id: ${vkId}`);
  }
  return numericId;
};

const buildVkUserData = (profile?: VkUserProfilePayload) => {
  const data: Record<string, unknown> = {
    lastSeen: new Date()
  };

  if (!profile) {
    return data;
  }

  const firstName = normalizeOptionalString(profile.first_name);
  const lastName = normalizeOptionalString(profile.last_name);
  const avatar = normalizeOptionalString(profile.photo_200) || normalizeOptionalString(profile.photo_100);
  const city =
    typeof profile.city === 'string'
      ? normalizeOptionalString(profile.city)
      : normalizeOptionalString(profile.city?.title);
  const email = normalizeOptionalString(profile.email);
  const phone = normalizeOptionalString(profile.phone);
  const accessToken = normalizeOptionalString(profile.access_token);

  if (firstName) data.name = firstName;
  if (lastName !== undefined) data.lastName = lastName;
  if (avatar !== undefined) data.avatar = avatar;
  if (city !== undefined) data.location = city;
  if (phone !== undefined) data.phone = phone;
  if (accessToken !== undefined) data.vkAccessToken = accessToken;
  if (email) data.email = email;

  return data;
};

const buildVkAppSettingsData = (payload?: EditableProfilePayload) => {
  const data: Record<string, unknown> = {};

  if (!payload || typeof payload !== 'object') {
    return data;
  }

  if ('roleLabel' in payload) data.roleLabel = normalizeOptionalString(payload.roleLabel);
  if ('contactTelegram' in payload) data.contactTelegram = normalizeOptionalString(payload.contactTelegram);
  if ('contactEmail' in payload) data.contactEmail = normalizeOptionalString(payload.contactEmail);
  if ('homeCityName' in payload) data.homeCityName = normalizeOptionalString(payload.homeCityName);
  if ('homeLat' in payload) data.homeLat = normalizeOptionalNumber(payload.homeLat);
  if ('homeLng' in payload) data.homeLng = normalizeOptionalNumber(payload.homeLng);
  if ('preferences' in payload) data.preferences = normalizeStringArray(payload.preferences);
  if ('karmaScore' in payload && payload.karmaScore !== undefined) data.karmaScore = normalizeOptionalNumber(payload.karmaScore);
  if ('achievements' in payload) data.achievements = normalizeStringArray(payload.achievements);

  return data;
};

const serializeAuthor = (user: {
  id: number;
  vkId: number | null;
  name: string;
  lastName: string | null;
  avatar: string | null;
} | null | undefined) => {
  if (!user) return null;

  return {
    id: user.id,
    vkId: user.vkId ? String(user.vkId) : null,
    firstName: user.name,
    lastName: user.lastName,
    avatarUrl: user.avatar,
    photo200: user.avatar
  };
};

const serializeUserProfile = (
  user: {
    id: number;
    vkId: number | null;
    name: string;
    lastName: string | null;
    email: string;
    bio: string | null;
    phone: string | null;
    location: string | null;
    avatar: string | null;
    coverPhoto: string | null;
    profileVisibility: string | null;
    showPhone: string | null;
    showEmail: string | null;
    allowMessages: string | null;
    showOnline: string | null;
    verified: boolean | null;
    verifiedAt: Date | null;
    createdAt: Date | null;
    lastSeen: Date | null;
  },
  settings: {
    roleLabel: string | null;
    contactTelegram: string | null;
    contactEmail: string | null;
    homeCityName: string | null;
    homeLat: unknown;
    homeLng: unknown;
    preferences: unknown;
    onboardingProgress: number;
    onboardingCompleted: boolean;
    karmaScore: number;
    achievements: unknown;
  } | null
) => ({
  id: user.id,
  vkId: user.vkId ? String(user.vkId) : null,
  firstName: user.name,
  lastName: user.lastName,
  screenName: null,
  avatarUrl: user.avatar,
  photo200: user.avatar,
  cityName: user.location,
  bio: user.bio,
  roleLabel: settings?.roleLabel || null,
  contactPhone: user.phone,
  contactTelegram: settings?.contactTelegram || null,
  contactEmail: settings?.contactEmail || (isPlaceholderEmail(user.email) ? null : user.email),
  homeCityName: settings?.homeCityName || null,
  homeLat: decimalToNumber(settings?.homeLat),
  homeLng: decimalToNumber(settings?.homeLng),
  preferences: jsonValueToStringArray(settings?.preferences),
  coverPhoto: user.coverPhoto,
  profileVisibility: user.profileVisibility,
  showPhone: user.showPhone,
  showEmail: user.showEmail,
  allowMessages: user.allowMessages,
  showOnline: user.showOnline,
  verified: Boolean(user.verified),
  verifiedAt: user.verifiedAt,
  createdAt: user.createdAt,
  lastSeen: user.lastSeen,
  onboardingProgress: settings?.onboardingProgress || 0,
  onboardingCompleted: settings?.onboardingCompleted || false,
  karmaScore: settings?.karmaScore || 0,
  achievements: jsonValueToStringArray(settings?.achievements),
  viewerRole: (user as any).viewerRole || null
});

const serializeCommunity = (
  community:
    | ({
        organization: {
          name: string;
          logo: string | null;
          city: string | null;
          region: string | null;
          geoLat: unknown;
          geoLng: unknown;
          communityAdmins?: Array<{ userId: number }>;
        };
      } & {
        vkGroupId: bigint;
        acceptCrossPosts: boolean;
        cityId: number | null;
        cityName: string | null;
        regionName: string | null;
        lat: unknown;
        lng: unknown;
        dutyAdminUserId: number | null;
        scheduleIntervalMinutes: number;
        scheduleStartTime: string;
        scheduleEndTime: string;
        acceptedTags: unknown;
      })
    | null
) => {
  if (!community) return null;

  return {
    id: community.vkGroupId.toString(),
    name: community.organization.name,
    avatarUrl: community.organization.logo,
    acceptCrossPosts: community.acceptCrossPosts,
    cityId: community.cityId,
    cityName: community.cityName || community.organization.city,
    regionName: community.regionName || community.organization.region,
    lat: decimalToNumber(community.lat) ?? decimalToNumber(community.organization.geoLat),
    lng: decimalToNumber(community.lng) ?? decimalToNumber(community.organization.geoLng),
    dutyAdminId: community.dutyAdminUserId ? String(community.dutyAdminUserId) : '',
    notifyAdminIds: (community.organization.communityAdmins || []).map((admin) => String(admin.userId)),
    acceptedTags: jsonValueToStringArray(community.acceptedTags),
    scheduleIntervalMinutes: community.scheduleIntervalMinutes,
    scheduleStartTime: community.scheduleStartTime,
    scheduleEndTime: community.scheduleEndTime
  };
};

const serializePost = (
  post:
    | ({
        author: {
          id: number;
          vkId: number | null;
          name: string;
          lastName: string | null;
          avatar: string | null;
        };
        publication: {
          vkGroupId: bigint;
          moderationStatus: string;
          publishDate: Date | null;
          vkPostId: bigint | null;
          chatLink: string | null;
          cityId: number | null;
          cityName: string | null;
          regionName: string | null;
        } | null;
      } & {
        id: number;
        content: string | null;
        tags: string | null;
        attachments: string | null;
        mediaUrls: string | null;
        status: string | null;
        createdAt: Date | null;
      })
    | null
) => {
  if (!post) return null;

  const media = post.attachments || post.mediaUrls || '[]';

  return {
    id: post.id,
    content: post.content || '',
    tag: getPrimaryTag(post.tags),
    media,
    status: post.publication?.moderationStatus || post.status || 'pending',
    publishDate: post.publication?.publishDate || null,
    vkPostId: post.publication?.vkPostId ? String(post.publication.vkPostId) : null,
    chatLink: post.publication?.chatLink || null,
    cityId: post.publication?.cityId || null,
    cityName: post.publication?.cityName || null,
    regionName: post.publication?.regionName || null,
    groupId: post.publication?.vkGroupId ? post.publication.vkGroupId.toString() : null,
    createdAt: post.createdAt || new Date(),
    author: serializeAuthor(post.author)
  };
};

const serializeRadarPin = (
  pin:
    | ({
        user: {
          id: number;
          vkId: number | null;
          name: string;
          lastName: string | null;
          avatar: string | null;
        } | null;
      } & {
        id: number;
        type: string;
        lat: unknown;
        lng: unknown;
        title: string;
        description: string | null;
        createdAt: Date | null;
      })
    | null
) => {
  if (!pin) return null;

  return {
    id: pin.id,
    type: pin.type,
    lat: decimalToNumber(pin.lat),
    lng: decimalToNumber(pin.lng),
    title: pin.title,
    description: pin.description,
    createdAt: pin.createdAt || new Date(),
    author: serializeAuthor(pin.user)
  };
};

async function ensureVkAppSettings(userId: number) {
  const existing = await prisma.vkAppUserSettings.findUnique({
    where: { userId }
  });

  if (existing) {
    return existing;
  }

  try {
    return await prisma.vkAppUserSettings.create({
      data: {
        userId
      }
    });
  } catch (error) {
    if (isPrismaUniqueConstraintError(error)) {
      const settings = await prisma.vkAppUserSettings.findUnique({
        where: { userId }
      });

      if (settings) {
        return settings;
      }
    }

    throw error;
  }
}

async function resolveOrCreateUserByVk(vkIdString: string, profile?: VkUserProfilePayload) {
  const vkId = toVkNumericId(vkIdString);
  const userData = buildVkUserData(profile);
  const requestedEmail = normalizeOptionalString(profile?.email);
  let user = await prisma.user.findUnique({ where: { vkId } });

  if (user) {
    const updateData: Record<string, unknown> = {
      ...userData
    };

    if (requestedEmail && isPlaceholderEmail(user.email)) {
      updateData.email = requestedEmail;
    }

    user = await prisma.user.update({
      where: { id: user.id },
      data: updateData
    });
  } else {
    const email = requestedEmail || `vk${vkId}@vk.placeholder`;
    const passwordHash = await bcrypt.hash(`vk:${vkId}:${Date.now()}`, 10);

    user = await prisma.user.create({
      data: {
        name: normalizeOptionalString(profile?.first_name) || `VK ${vkId}`,
        lastName: normalizeOptionalString(profile?.last_name),
        email,
        passwordHash,
        vkId,
        avatar:
          normalizeOptionalString(profile?.photo_200) ||
          normalizeOptionalString(profile?.photo_100),
        location:
          typeof profile?.city === 'string'
            ? normalizeOptionalString(profile.city)
            : normalizeOptionalString(profile?.city?.title),
        phone: normalizeOptionalString(profile?.phone),
        lastSeen: new Date(),
        vkAccessToken: normalizeOptionalString(profile?.access_token)
      }
    });
  }

  const settings = await ensureVkAppSettings(user.id);
  return { user, settings };
}

async function resolveProfileResponse(vkIdString: string, profile?: VkUserProfilePayload) {
  const { user, settings } = await resolveOrCreateUserByVk(vkIdString, profile);
  return serializeUserProfile(user, settings);
}

async function fetchCommunityByVkGroupId(vkGroupIdRaw: string) {
  return prisma.community.findUnique({
    where: { vkGroupId: BigInt(vkGroupIdRaw) },
    include: {
      organization: {
        include: {
          communityAdmins: true
        }
      },
      dutyAdmin: true
    }
  });
}

async function ensureCommunityByVkGroupId(
  vkGroupIdRaw: string,
  seed?: {
    name?: string | null;
    avatarUrl?: string | null;
    cityId?: number | null;
    cityName?: string | null;
    regionName?: string | null;
    lat?: number | string | null;
    lng?: number | string | null;
    accessToken?: string | null;
  }
) {
  const existing = await fetchCommunityByVkGroupId(vkGroupIdRaw);
  if (existing) {
    return existing;
  }

  const vkGroupId = BigInt(vkGroupIdRaw);
  let name = normalizeOptionalString(seed?.name) || `VK Group ${vkGroupIdRaw}`;
  let logo = normalizeOptionalString(seed?.avatarUrl);

  const serviceToken =
    process.env.VK_SERVICE_KEY ||
    process.env.VK_MAIN_GROUP_TOKEN ||
    process.env.VK_GROUP_TOKEN;

  if (serviceToken) {
    try {
      const groupInfo = await callVkApi('groups.getById', { group_id: vkGroupIdRaw }, serviceToken);
      if (groupInfo?.[0]) {
        name = groupInfo[0].name || name;
        logo = groupInfo[0].photo_50 || logo;
      }
    } catch (error) {
      console.error('Failed to fetch VK group info while creating community:', error);
    }
  }

  const organization = await prisma.organization.create({
    data: {
      name,
      type: 'other',
      logo,
      city: normalizeOptionalString(seed?.cityName),
      region: normalizeOptionalString(seed?.regionName),
      vkLink: `https://vk.com/club${vkGroupIdRaw}`,
      geoLat: normalizeOptionalNumber(seed?.lat),
      geoLng: normalizeOptionalNumber(seed?.lng)
    }
  });

  try {
    return await prisma.community.create({
      data: {
        organizationId: organization.id,
        vkGroupId,
        accessToken: normalizeOptionalString(seed?.accessToken) || '',
        cityId: seed?.cityId ?? null,
        cityName: normalizeOptionalString(seed?.cityName),
        regionName: normalizeOptionalString(seed?.regionName),
        lat: normalizeOptionalNumber(seed?.lat),
        lng: normalizeOptionalNumber(seed?.lng)
      },
      include: {
        organization: {
          include: {
            communityAdmins: true
          }
        },
        dutyAdmin: true
      }
    });
  } catch (error) {
    if (isPrismaUniqueConstraintError(error)) {
      await prisma.organization.delete({
        where: { id: organization.id }
      }).catch(() => undefined);

      const community = await fetchCommunityByVkGroupId(vkGroupIdRaw);
      if (community) {
        return community;
      }
    }

    throw error;
  }
}

async function syncNotificationAdmins(organizationId: number, notifyAdminIds: unknown) {
  if (!Array.isArray(notifyAdminIds)) {
    return;
  }

  const normalizedUserIds = notifyAdminIds
    .map((value) => normalizeOptionalNumber(value))
    .filter((value): value is number => value !== null);

  await prisma.communityNotificationAdmin.deleteMany({
    where: { organizationId }
  });

  if (normalizedUserIds.length === 0) {
    return;
  }

  await prisma.communityNotificationAdmin.createMany({
    data: normalizedUserIds.map((userId) => ({
      organizationId,
      userId
    })),
    skipDuplicates: true
  });
}

async function getNextAvailableSlot(organizationId: number) {
  const community = await prisma.community.findUnique({
    where: { organizationId }
  });

  if (!community) return new Date();

  const intervalMinutes = community.scheduleIntervalMinutes || 60;
  const startParts = community.scheduleStartTime.split(':').map(Number);
  const endParts = community.scheduleEndTime.split(':').map(Number);
  const startMinutes = startParts[0] * 60 + startParts[1];
  const endMinutes = endParts[0] * 60 + endParts[1];
  const now = new Date();
  const availableSlots: number[] = [];

  for (let i = 0; i < 14; i += 1) {
    const slotDate = new Date();
    slotDate.setDate(now.getDate() + i);
    slotDate.setHours(0, 0, 0, 0);

    for (let currentMinutes = startMinutes; currentMinutes <= endMinutes; currentMinutes += intervalMinutes) {
      const slotTime = new Date(slotDate.getTime() + currentMinutes * 60000);
      if (slotTime > now) {
        availableSlots.push(slotTime.getTime());
      }
    }
  }

  const occupiedPublications = await prisma.postPublication.findMany({
    where: {
      organizationId,
      moderationStatus: { in: ['approved', 'published'] },
      publishDate: { not: null }
    },
    select: {
      publishDate: true
    }
  });

  const isOccupied = (slotTime: number) => {
    return occupiedPublications.some((publication) => {
      if (!publication.publishDate) return false;
      return Math.abs(publication.publishDate.getTime() - slotTime) < 300000;
    });
  };

  for (const slot of availableSlots) {
    if (!isOccupied(slot)) {
      return new Date(slot);
    }
  }

  return new Date();
}

const buildStoredMedia = (media: unknown) => {
  if (typeof media === 'string') return media;
  if (Array.isArray(media)) return JSON.stringify(media);
  return '[]';
};

// Публичные community-настройки
router.get('/community/:id', async (req, res) => {
  try {
    const community = await fetchCommunityByVkGroupId(req.params.id);
    if (!community) {
      return res.status(404).json({ error: 'Community not found' });
    }

    return res.json(serializeCommunity(community));
  } catch (error) {
    console.error('Failed to fetch community settings:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

router.use(validateVkSignature);

router.post('/profile/bootstrap', async (req, res) => {
  try {
    const vkId = getVkUserId(req);
    if (!vkId) return res.status(401).json({ error: 'No user ID' });

    const profile = req.body.profile as VkUserProfilePayload | undefined;
    if (profile?.id && String(profile.id) !== vkId) {
      return res.status(400).json({ error: 'VK user mismatch' });
    }

    const response = await resolveProfileResponse(vkId, profile);
    return res.json(response);
  } catch (error) {
    console.error('Failed to bootstrap user profile:', error);
    return res.status(500).json({ error: 'Failed to bootstrap user profile' });
  }
});

router.get('/profile/me', async (req, res) => {
  try {
    const vkId = getVkUserId(req);
    if (!vkId) return res.status(401).json({ error: 'No user ID' });

    const response = await resolveProfileResponse(vkId);
    if (response) {
      (response as any).viewerRole = (req as any).vk_viewer_role || null;
    }
    return res.json(response);
  } catch (error) {
    console.error('Failed to fetch current user profile:', error);
    return res.status(500).json({ error: 'Failed to fetch current user profile' });
  }
});

router.patch('/profile/me', async (req, res) => {
  try {
    const vkId = getVkUserId(req);
    if (!vkId) return res.status(401).json({ error: 'No user ID' });

    const { user, settings } = await resolveOrCreateUserByVk(vkId);
    const editableProfileData = req.body as EditableProfilePayload;
    const userUpdateData: Record<string, unknown> = {};

    if ('bio' in editableProfileData) userUpdateData.bio = normalizeOptionalString(editableProfileData.bio);
    if ('contactPhone' in editableProfileData) userUpdateData.phone = normalizeOptionalString(editableProfileData.contactPhone);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: userUpdateData
    });

    const updatedSettings = await prisma.vkAppUserSettings.update({
      where: { userId: settings.userId },
      data: buildVkAppSettingsData(editableProfileData)
    });

    return res.json(serializeUserProfile(updatedUser, updatedSettings));
  } catch (error) {
    console.error('Failed to update current user profile:', error);
    return res.status(500).json({ error: 'Failed to update current user profile' });
  }
});

router.get('/radar/pins', async (_req, res) => {
  try {
    const pins = await prisma.radarPin.findMany({
      where: {
        expiresAt: { gt: new Date() }
      },
      take: 100,
      include: {
        user: true,
        post: {
          include: {
            author: true,
            publication: true
          }
        }
      }
    });

    return res.json(pins.map((pin) => serializeRadarPin(pin)));
  } catch (error) {
    console.error('Failed to fetch radar pins:', error);
    return res.status(500).json({ error: 'Failed to fetch radar pins' });
  }
});

router.post('/radar/pins', async (req, res) => {
  try {
    const vkId = getVkUserId(req);
    if (!vkId) return res.status(401).json({ error: 'No user ID' });

    const { type, lat, lng, title, description } = req.body;
    if (!lat || !lng || !title) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { user } = await resolveOrCreateUserByVk(vkId);
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 48);

    const pin = await prisma.radarPin.create({
      data: {
        userId: user.id,
        type: normalizeOptionalString(type) || 'sos',
        lat: Number(lat),
        lng: Number(lng),
        title,
        description: normalizeOptionalString(description),
        expiresAt
      },
      include: {
        user: true
      }
    });

    return res.json(serializeRadarPin(pin));
  } catch (error) {
    console.error('Failed to create radar pin:', error);
    return res.status(500).json({ error: 'Failed to create radar pin' });
  }
});

router.get('/radar/pins/my', async (req, res) => {
  try {
    const vkId = getVkUserId(req);
    if (!vkId) return res.status(401).json({ error: 'No user ID' });

    const { user } = await resolveOrCreateUserByVk(vkId);
    const pins = await prisma.radarPin.findMany({
      where: {
        userId: user.id
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: true
      }
    });

    return res.json(pins.map((pin) => serializeRadarPin(pin)));
  } catch (error) {
    console.error('Failed to fetch user pins:', error);
    return res.status(500).json({ error: 'Failed to fetch user pins' });
  }
});

router.get('/posts', async (req, res) => {
  try {
    const groupId = getVkGroupId(req);
    if (!groupId) return res.status(400).json({ error: 'Missing vk_group_id' });

    const posts = await prisma.post.findMany({
      where: {
        isDeleted: false,
        publication: {
          is: {
            vkGroupId: BigInt(groupId),
            moderationStatus: 'approved'
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: { author: true, publication: true }
    });

    return res.json(posts.map((post) => serializePost(post)));
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

router.get('/posts/my', async (req, res) => {
  try {
    const vkId = getVkUserId(req);
    const groupId = getVkGroupId(req);
    if (!vkId || !groupId) return res.status(401).json({ error: 'No user ID or group ID' });

    const { user } = await resolveOrCreateUserByVk(vkId);
    const posts = await prisma.post.findMany({
      where: {
        authorId: user.id,
        publication: {
          is: {
            vkGroupId: BigInt(groupId)
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      include: { author: true, publication: true }
    });

    return res.json(posts.map((post) => serializePost(post)));
  } catch (error) {
    console.error('Failed to fetch my posts:', error);
    return res.status(500).json({ error: 'Failed to fetch my posts' });
  }
});

router.get('/posts/moderation', async (req, res) => {
  try {
    const groupId = getVkGroupId(req);
    if (!groupId) return res.status(400).json({ error: 'Missing vk_group_id' });

    const statusFilter = (req.query.status as string) || 'pending';
    const posts = await prisma.post.findMany({
      where: {
        publication: {
          is: {
            vkGroupId: BigInt(groupId),
            moderationStatus: statusFilter
          }
        }
      },
      orderBy: { createdAt: 'asc' },
      include: { author: true, publication: true }
    });

    return res.json(posts.map((post) => serializePost(post)));
  } catch (error) {
    console.error('Failed to fetch moderation queue:', error);
    return res.status(500).json({ error: 'Failed to fetch moderation queue' });
  }
});

router.patch('/posts/:id', async (req, res) => {
  try {
    const vkUserId = getVkUserId(req);
    const { content, tag } = req.body;
    const existingPost = await prisma.post.findUnique({
      where: { id: Number(req.params.id) },
      include: { author: true, publication: true }
    });

    if (!existingPost) return res.status(404).json({ error: 'Post not found' });

    const numericVkUserId = vkUserId ? toVkNumericId(vkUserId) : null;
    const isAuthor = existingPost.author.vkId === numericVkUserId;

    if (!isAuthor && req.body.vk_viewer_role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const updatedPost = await prisma.post.update({
      where: { id: existingPost.id },
      data: {
        content,
        tags: normalizeOptionalString(tag),
        status: 'pending'
      },
      include: { author: true, publication: true }
    });

    if (existingPost.publication) {
      await prisma.postPublication.update({
        where: { postId: existingPost.id },
        data: { moderationStatus: 'pending' }
      });
    }

    return res.json(serializePost(updatedPost));
  } catch (error) {
    console.error('Failed to update post:', error);
    return res.status(500).json({ error: 'Failed to update post' });
  }
});

router.delete('/posts/:id', async (req, res) => {
  try {
    const vkUserId = getVkUserId(req);
    const existingPost = await prisma.post.findUnique({
      where: { id: Number(req.params.id) },
      include: { author: true }
    });

    if (!existingPost) return res.status(404).json({ error: 'Post not found' });

    const numericVkUserId = vkUserId ? toVkNumericId(vkUserId) : null;
    const isAuthor = existingPost.author.vkId === numericVkUserId;

    if (!isAuthor && req.body.vk_viewer_role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    await prisma.post.delete({ where: { id: existingPost.id } });
    return res.json({ success: true });
  } catch (error) {
    console.error('Failed to delete post:', error);
    return res.status(500).json({ error: 'Failed to delete post' });
  }
});

router.patch('/radar/pins/:id', async (req, res) => {
  try {
    const vkUserId = getVkUserId(req);
    const existingPin = await prisma.radarPin.findUnique({
      where: { id: Number(req.params.id) },
      include: { user: true }
    });

    if (!existingPin) return res.status(404).json({ error: 'Pin not found' });

    const numericVkUserId = vkUserId ? toVkNumericId(vkUserId) : null;
    const isOwner = existingPin.user?.vkId === numericVkUserId;

    if (!isOwner && req.body.vk_viewer_role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const updatedPin = await prisma.radarPin.update({
      where: { id: existingPin.id },
      data: {
        title: req.body.title,
        description: normalizeOptionalString(req.body.description)
      },
      include: {
        user: true
      }
    });

    return res.json(serializeRadarPin(updatedPin));
  } catch (error) {
    console.error('Failed to update pin:', error);
    return res.status(500).json({ error: 'Failed to update pin' });
  }
});

router.delete('/radar/pins/:id', async (req, res) => {
  try {
    const vkUserId = getVkUserId(req);
    const existingPin = await prisma.radarPin.findUnique({
      where: { id: Number(req.params.id) },
      include: { user: true }
    });

    if (!existingPin) return res.status(404).json({ error: 'Pin not found' });

    const numericVkUserId = vkUserId ? toVkNumericId(vkUserId) : null;
    const isOwner = existingPin.user?.vkId === numericVkUserId;

    if (!isOwner && req.body.vk_viewer_role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    await prisma.radarPin.delete({ where: { id: existingPin.id } });
    return res.json({ success: true });
  } catch (error) {
    console.error('Failed to delete pin:', error);
    return res.status(500).json({ error: 'Failed to delete pin' });
  }
});

router.patch('/posts/swap-time', async (req, res) => {
  try {
    const activeId = Number(req.body.activeId);
    const overId = Number(req.body.overId);
    if (!activeId || !overId) {
      return res.status(400).json({ error: 'Missing activeId or overId' });
    }

    const publication1 = await prisma.postPublication.findUnique({ where: { postId: activeId } });
    const publication2 = await prisma.postPublication.findUnique({ where: { postId: overId } });

    if (!publication1 || !publication2) {
      return res.status(404).json({ error: 'Post publication not found' });
    }

    await prisma.$transaction([
      prisma.postPublication.update({
        where: { postId: activeId },
        data: { publishDate: publication2.publishDate }
      }),
      prisma.postPublication.update({
        where: { postId: overId },
        data: { publishDate: publication1.publishDate }
      })
    ]);

    return res.json({ success: true });
  } catch (error) {
    console.error('Failed to swap post dates:', error);
    return res.status(500).json({ error: 'Failed to swap dates' });
  }
});

router.patch('/posts/:id/status', async (req, res) => {
  try {
    const { status, publishDate } = req.body;
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const currentPost = await prisma.post.findUnique({
      where: { id: Number(req.params.id) },
      include: { author: true, publication: true }
    });

    if (!currentPost || !currentPost.publication) {
      return res.status(404).json({ error: 'Post publication not found' });
    }

    let targetPublishDate = publishDate ? new Date(publishDate) : null;
    if (status === 'approved' && !targetPublishDate) {
      targetPublishDate = await getNextAvailableSlot(currentPost.publication.organizationId);
    }

    await prisma.post.update({
      where: { id: currentPost.id },
      data: { status }
    });

    await prisma.postPublication.update({
      where: { postId: currentPost.id },
      data: {
        moderationStatus: status,
        ...(status !== 'rejected' && targetPublishDate ? { publishDate: targetPublishDate } : {})
      }
    });

    const refreshedPost = await prisma.post.findUnique({
      where: { id: currentPost.id },
      include: { author: true, publication: true }
    });

    if (!refreshedPost || !refreshedPost.publication) {
      return res.status(404).json({ error: 'Post publication not found after update' });
    }

    const community = await prisma.community.findUnique({
      where: { organizationId: refreshedPost.publication.organizationId }
    });

    if (status === 'approved' && community?.accessToken) {
      try {
        const mediaArr = parseJsonArray(refreshedPost.attachments || refreshedPost.mediaUrls);
        const localPaths = mediaArr
          .map((item) => {
            if (!item || typeof item !== 'object' || !('url' in item)) return null;
            const fileName = String((item as { url: string }).url).split('/').pop();
            return fileName ? path.join(__dirname, '../../../uploads', fileName) : null;
          })
          .filter((item): item is string => Boolean(item));

        let finalContent = refreshedPost.content || '';
        const tag = getPrimaryTag(refreshedPost.tags);

        if (tag) {
          finalContent = `#${tag} | ${finalContent}`;
        }

        if (refreshedPost.author.vkId) {
          finalContent += `\n\nПредложил: @id${refreshedPost.author.vkId}`;
        }

        if (refreshedPost.publication.chatLink) {
          finalContent += `\n💬 Чат: ${refreshedPost.publication.chatLink}`;
        }

        if (refreshedPost.publication.cityName) {
          finalContent += `\n#${refreshedPost.publication.cityName.replace(/\s+/g, '')}`;
          if (refreshedPost.publication.regionName) {
            finalContent += ` (${refreshedPost.publication.regionName})`;
          }
        }

        finalContent += `\n#объявление${refreshedPost.id}`;

        const publishedVkPostId = await publishVkPost(
          refreshedPost.publication.vkGroupId.toString(),
          community.accessToken,
          finalContent,
          localPaths,
          refreshedPost.publication.publishDate || undefined
        );

        if (publishedVkPostId) {
          await prisma.postPublication.update({
            where: { postId: refreshedPost.id },
            data: { vkPostId: BigInt(publishedVkPostId) }
          });
        }
      } catch (vkError) {
        console.error(`VK post publication failed for post ${refreshedPost.id}:`, vkError);
      }
    }

    const finalPost = await prisma.post.findUnique({
      where: { id: currentPost.id },
      include: { author: true, publication: true }
    });

    return res.json(serializePost(finalPost));
  } catch (error) {
    console.error('Failed to update post status:', error);
    return res.status(500).json({ error: 'Failed to update post status' });
  }
});

router.post('/community/token', async (req, res) => {
  try {
    const groupId = normalizeOptionalString(req.body.groupId);
    const accessToken = normalizeOptionalString(req.body.accessToken);
    if (!groupId || !accessToken) {
      return res.status(400).json({ error: 'Missing groupId or accessToken' });
    }

    const community = await ensureCommunityByVkGroupId(groupId, { accessToken });
    await prisma.community.update({
      where: { id: community.id },
      data: { accessToken }
    });

    return res.json({ success: true, communityId: community.vkGroupId.toString() });
  } catch (error) {
    console.error('Failed to update community token:', error);
    return res.status(500).json({ error: 'Failed to update community token' });
  }
});

router.patch('/community/:id', async (req, res) => {
  const viewerRole = req.body.vk_viewer_role || (req as any).vk_viewer_role;
  
  if (viewerRole !== 'admin' && viewerRole !== 'editor') {
    console.warn(`[Security] Unauthorized access attempt to PATCH /community/${req.params.id} by user with role: ${viewerRole}`);
    return res.status(403).json({ error: 'Only administrators or editors can change community settings' });
  }

  try {
    const groupId = req.params.id;
    const community = await ensureCommunityByVkGroupId(groupId, {
      name: normalizeOptionalString(req.body.name),
      avatarUrl: normalizeOptionalString(req.body.avatarUrl),
      cityId: normalizeOptionalNumber(req.body.cityId),
      cityName: normalizeOptionalString(req.body.cityName),
      regionName: normalizeOptionalString(req.body.regionName),
      lat: req.body.lat,
      lng: req.body.lng
    });

    let name = normalizeOptionalString(req.body.name) || community.organization.name;
    let logo = normalizeOptionalString(req.body.avatarUrl) || community.organization.logo;
    const serviceToken =
      process.env.VK_SERVICE_KEY ||
      process.env.VK_MAIN_GROUP_TOKEN ||
      process.env.VK_GROUP_TOKEN;

    if (serviceToken) {
      try {
        const info = await callVkApi('groups.getById', { group_id: groupId }, serviceToken);
        if (info?.[0]) {
          name = info[0].name || name;
          logo = info[0].photo_50 || logo;
        }
      } catch (error) {
        console.error('Failed to sync VK group info during community update:', error);
      }
    }

    await prisma.organization.update({
      where: { id: community.organizationId },
      data: {
        name,
        logo,
        city: normalizeOptionalString(req.body.cityName),
        region: normalizeOptionalString(req.body.regionName),
        geoLat: normalizeOptionalNumber(req.body.lat),
        geoLng: normalizeOptionalNumber(req.body.lng)
      }
    });

    await prisma.community.update({
      where: { id: community.id },
      data: {
        cityId: normalizeOptionalNumber(req.body.cityId),
        cityName: normalizeOptionalString(req.body.cityName),
        regionName: normalizeOptionalString(req.body.regionName),
        dutyAdminUserId: normalizeOptionalNumber(req.body.dutyAdminId),
        acceptCrossPosts: Boolean(req.body.acceptCrossPosts),
        acceptedTags: normalizeStringArray(req.body.acceptedTags),
        scheduleIntervalMinutes: normalizeOptionalNumber(req.body.scheduleIntervalMinutes) || 60,
        scheduleStartTime: normalizeOptionalString(req.body.scheduleStartTime) || '09:00',
        scheduleEndTime: normalizeOptionalString(req.body.scheduleEndTime) || '21:00',
        lat: normalizeOptionalNumber(req.body.lat),
        lng: normalizeOptionalNumber(req.body.lng)
      }
    });

    await syncNotificationAdmins(community.organizationId, req.body.notifyAdminIds);

    const refreshedCommunity = await fetchCommunityByVkGroupId(groupId);
    return res.json(serializeCommunity(refreshedCommunity));
  } catch (error) {
    console.error('Failed to update community details:', error);
    return res.status(500).json({ error: 'Failed to update community details' });
  }
});

router.get('/utils/cities', async (req, res) => {
  const q = req.query.q as string;
  if (!q) return res.json({ items: [] });

  if (!process.env.VK_SERVICE_KEY) {
    return res.status(500).json({ error: 'VK_SERVICE_KEY not configured' });
  }

  try {
    const vkResult = await searchVkCities(q, process.env.VK_SERVICE_KEY);
    if (!vkResult || !vkResult.items || vkResult.items.length === 0) {
      console.log(`[Cities] No results found for query: "${q}"`);
    }
    return res.json(vkResult);
  } catch (error) {
    console.error('Failed to fetch cities:', error);
    return res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

router.post('/utils/shorten', async (req, res) => {
  const url = normalizeOptionalString(req.body.url);
  if (!url) return res.status(400).json({ error: 'No URL provided' });

  const serviceToken = process.env.VK_SERVICE_KEY || process.env.VK_GROUP_TOKEN;
  if (!serviceToken) return res.status(500).json({ error: 'No service token' });

  try {
    const vkResult = await callVkApi('utils.getShortLink', { url, private: 1 }, serviceToken);
    return res.json({ short_url: vkResult.short_url });
  } catch (error) {
    console.error('Failed to shorten url:', error);
    return res.status(500).json({ error: 'Failed to shorten url' });
  }
});

router.get('/community/city/:cityId', async (req, res) => {
  try {
    const communities = await prisma.community.findMany({
      where: {
        cityId: Number(req.params.cityId),
        acceptCrossPosts: true
      },
      include: {
        organization: true
      }
    });

    return res.json(
      communities.map((community) => ({
        id: community.vkGroupId.toString(),
        name: community.organization.name,
        avatarUrl: community.organization.logo,
        acceptedTags: jsonValueToStringArray(community.acceptedTags)
      }))
    );
  } catch (error) {
    console.error('Failed to fetch city communities:', error);
    return res.status(500).json({ error: 'Failed to fetch city communities' });
  }
});

router.get('/community/:id/managers', async (req, res) => {
  try {
    const community = await fetchCommunityByVkGroupId(req.params.id);
    const currentVkUserId = getVkUserId(req);

    const knownUserIds = new Set<number>();

    if (currentVkUserId) {
      const { user } = await resolveOrCreateUserByVk(currentVkUserId);
      knownUserIds.add(user.id);
    }

    if (community?.dutyAdminUserId) {
      knownUserIds.add(community.dutyAdminUserId);
    }

    if (community?.organization.communityAdmins) {
      community.organization.communityAdmins.forEach((admin) => knownUserIds.add(admin.userId));
    }

    const items =
      knownUserIds.size > 0
        ? await prisma.user.findMany({
            where: { id: { in: Array.from(knownUserIds) } },
            orderBy: { name: 'asc' }
          })
        : [];

    return res.json({
      items: items.map((user) => ({
        id: user.id,
        first_name: user.name,
        last_name: user.lastName,
        photo_50: user.avatar
      })),
      community: serializeCommunity(community)
    });
  } catch (error) {
    console.error('Failed to fetch managers:', error);
    return res.status(500).json({ error: 'Failed to fetch managers' });
  }
});

router.post('/posts', async (req, res) => {
  try {
    const vkId = getVkUserId(req);
    const originalGroupId = getVkGroupId(req);
    const { content, tag, media, cityId, cityName, regionName, groupIds, chatLink } = req.body;

    if (!vkId || !content || !originalGroupId) {
      return res.status(400).json({ error: 'Missing req fields' });
    }

    const { user } = await resolveOrCreateUserByVk(vkId, req.body.profile as VkUserProfilePayload | undefined);
    const targetGroups = Array.isArray(groupIds) && groupIds.length > 0 ? groupIds.map(String) : [String(originalGroupId)];
    const createdPosts: Array<ReturnType<typeof serializePost>> = [];

    for (const groupId of targetGroups) {
      const community = await ensureCommunityByVkGroupId(groupId, {
        cityId: normalizeOptionalNumber(cityId),
        cityName: normalizeOptionalString(cityName),
        regionName: normalizeOptionalString(regionName)
      });

      const post = await prisma.post.create({
        data: {
          content,
          tags: normalizeOptionalString(tag),
          attachments: buildStoredMedia(media),
          mediaUrls: buildStoredMedia(media),
          status: 'pending',
          authorId: user.id,
          authorType: 'user'
        },
        include: { author: true, publication: true }
      });

      await prisma.postPublication.create({
        data: {
          postId: post.id,
          organizationId: community.organizationId,
          vkGroupId: community.vkGroupId,
          moderationStatus: 'pending',
          chatLink: normalizeOptionalString(chatLink),
          cityId: normalizeOptionalNumber(cityId),
          cityName: normalizeOptionalString(cityName),
          regionName: normalizeOptionalString(regionName)
        }
      });

      if ((tag === 'Потерян' || tag === 'Найден') && req.body.lat && req.body.lng) {
        try {
          const expiresAt = new Date();
          expiresAt.setHours(expiresAt.getHours() + 24 * 7);
          await prisma.radarPin.create({
            data: {
              userId: user.id,
              organizationId: community.organizationId,
              postId: post.id,
              type: tag === 'Потерян' ? 'lost' : 'found',
              lat: Number(req.body.lat),
              lng: Number(req.body.lng),
              title: tag === 'Потерян' ? 'Пропало животное' : 'Найдено животное',
              description: content.substring(0, 100),
              expiresAt
            }
          });
        } catch (pinError) {
          console.error('Failed to auto-create radar pin:', pinError);
        }
      }

      const refreshedPost = await prisma.post.findUnique({
        where: { id: post.id },
        include: { author: true, publication: true }
      });
      createdPosts.push(serializePost(refreshedPost));
    }

    const primaryPost =
      createdPosts.find((post) => post?.groupId === String(originalGroupId)) ||
      createdPosts[0] ||
      null;

    return res.json(primaryPost);
  } catch (error) {
    console.error('Failed to create post:', error);
    return res.status(500).json({ error: 'Failed to create post' });
  }
});

router.post('/upload', upload.array('media', 10), (req, res) => {
  const files = req.files as Express.Multer.File[];
  if (!files || files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }

  const results = files.map((file) => ({
    url: `http://localhost:3000/uploads/${file.filename}`,
    type: file.mimetype.startsWith('image') ? 'image' : 'video'
  }));

  return res.json(results);
});

export default router;
