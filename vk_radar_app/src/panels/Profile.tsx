import { useState, useEffect } from 'react';
import {
  Panel,
  Flex,
  Group,
  SimpleCell,
  Title,
  Text,
  Avatar,
  Spacing,
  // CardGrid,
  // Card,
  Header,
  // Tappable,
  Gradient,
  MiniInfoCell,
  Headline,
  Caption,
  Button,
  FormLayoutGroup,
  FormItem,
  Input,
  Textarea,
  Badge
} from '@vkontakte/vkui';
import {
  Icon28SettingsOutline,
  // Icon28HomeOutline,
  Icon28ArticleOutline,
  Icon28CompassOutline,
  // Icon28ServicesOutline,
  Icon28Hearts2Outline,
  // Icon28CarOutline,
  // Icon28MoneyCircleOutline,
  // Icon28BookOutline,
  // Icon28DiscountOutline,
  Icon24ChevronRight,
  Icon28ShieldKeyholeOutline,
  Icon28CheckCircleOutline
} from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { vkFetch } from '../utils/api';
import bridgePkg from '@vkontakte/vk-bridge';

const bridge = bridgePkg && 'default' in bridgePkg ? (bridgePkg as any).default : bridgePkg;

type StoredUserProfile = {
  vkId?: string;
  firstName?: string | null;
  lastName?: string | null;
  screenName?: string | null;
  avatarUrl?: string | null;
  photo200?: string | null;
  cityName?: string | null;
  bio?: string | null;
  roleLabel?: string | null;
  contactPhone?: string | null;
  contactTelegram?: string | null;
  contactEmail?: string | null;
  homeCityName?: string | null;
  homeLat?: number | null;
  homeLng?: number | null;
  preferences?: string[] | null;
  karmaScore?: number;
  achievements?: string[] | null;
};

type ProfileForm = {
  bio: string;
  roleLabel: string;
  contactPhone: string;
  contactTelegram: string;
  contactEmail: string;
  homeCityName: string;
  homeLat: string;
  homeLng: string;
  preferencesInput: string;
};

type VkBridgeUserProfile = {
  id?: number | string;
  first_name?: string;
  last_name?: string;
  screen_name?: string;
  photo_200?: string;
  city?: { title?: string } | null;
};

const mapBridgeUserToProfile = (user: VkBridgeUserProfile | null): StoredUserProfile | null => {
  if (!user) return null;

  return {
    vkId: user.id ? String(user.id) : undefined,
    firstName: user.first_name || null,
    lastName: user.last_name || null,
    screenName: user.screen_name || null,
    avatarUrl: user.photo_200 || null,
    photo200: user.photo_200 || null,
    cityName: user.city?.title || null
  };
};

const mergeProfiles = (
  storedProfile: StoredUserProfile | null,
  bridgeProfile: VkBridgeUserProfile | null
) => {
  const fallbackProfile = mapBridgeUserToProfile(bridgeProfile);

  if (!storedProfile) {
    return fallbackProfile;
  }

  return {
    ...fallbackProfile,
    ...storedProfile,
    vkId: storedProfile.vkId || fallbackProfile?.vkId
  };
};

const createProfileForm = (profile: StoredUserProfile | null = null): ProfileForm => ({
  bio: profile?.bio || '',
  roleLabel: profile?.roleLabel || '',
  contactPhone: profile?.contactPhone || '',
  contactTelegram: profile?.contactTelegram || '',
  contactEmail: profile?.contactEmail || '',
  homeCityName: profile?.homeCityName || profile?.cityName || '',
  homeLat: profile?.homeLat !== null && profile?.homeLat !== undefined ? String(profile.homeLat) : '',
  homeLng: profile?.homeLng !== null && profile?.homeLng !== undefined ? String(profile.homeLng) : '',
  preferencesInput: Array.isArray(profile?.preferences) ? profile.preferences.join(', ') : ''
});

const getDisplayName = (profile: StoredUserProfile | null) => {
  if (!profile) return 'Загрузка...';

  const fullName = [profile.firstName, profile.lastName].filter(Boolean).join(' ');
  return fullName || (profile.vkId ? `ID ${profile.vkId}` : 'Пользователь VK');
};

const getRoleLabel = (role: string | null) => {
  switch (role) {
    case 'admin':
      return 'Администратор сообщества';
    case 'editor':
      return 'Редактор сообщества';
    case 'moder':
      return 'Модератор сообщества';
    case 'member':
      return 'Подписчик сообщества';
    case 'none':
      return 'Гость';
    default:
      return 'Пользователь';
  }
};

const withTimeout = async <T,>(promise: Promise<T>, timeoutMs: number) => {
  return Promise.race<T | null>([
    promise,
    new Promise<null>((resolve) => setTimeout(() => resolve(null), timeoutMs))
  ]);
};

export const Profile = ({ id }: { id: string }) => {
  const launchParams =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : null;
  const routeNavigator = useRouteNavigator();
  const [userData, setUserData] = useState<StoredUserProfile | null>(null);
  const [profileForm, setProfileForm] = useState<ProfileForm>(() => createProfileForm());
  const [myPins, setMyPins] = useState<any[]>([]);
  const [myPosts, setMyPosts] = useState<any[]>([]);
  const [viewerRole, setViewerRole] = useState<string | null>(launchParams?.get('vk_viewer_role') ?? 'none');
  const [groupId, setGroupId] = useState<string | null>(launchParams?.get('vk_group_id') ?? null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        // 1. Читаем из URL
        const params = new URLSearchParams(window.location.search);
        let role = params.get('vk_viewer_role') || 'none';
        let gId = params.get('vk_group_id');
        
        console.log('Launch Params from URL:', { role, gId });

        // 2. Пробуем получить через VK Bridge
        try {
          const launchData = await withTimeout(
            bridge.send('VKWebAppGetLaunchParams') as Promise<any>,
            2000
          );
          console.log('Launch Params from Bridge:', launchData);
          if (launchData) {
            if (launchData.vk_viewer_role && launchData.vk_viewer_role !== 'none') {
              role = launchData.vk_viewer_role;
            }
            if (launchData.vk_group_id) {
              gId = String(launchData.vk_group_id);
            }
          }
        } catch (launchErr) {
          console.warn('VKWebAppGetLaunchParams failed', launchErr);
        }

        setGroupId(gId);
        setViewerRole(role);

        // ... rest of the fetch logic ...
        const [profile, pins, posts] = await Promise.all([
          vkFetch('/profile/me').catch(() => null),
          vkFetch('/radar/pins/my').catch(() => []),
          vkFetch('/posts/my').catch(() => [])
        ]);

        if (profile && (profile as any).viewerRole) {
          console.log('Role from Server:', (profile as any).viewerRole);
          setViewerRole((profile as any).viewerRole);
        }

        const mergedProfile = mergeProfiles(profile as StoredUserProfile | null, null);
        setUserData(mergedProfile);
        setProfileForm(createProfileForm(mergedProfile));

        if (Array.isArray(pins)) setMyPins(pins);
        if (Array.isArray(posts)) setMyPosts(posts);

        try {
          const bridgeUser = await withTimeout(
            bridge.send('VKWebAppGetUserInfo') as Promise<VkBridgeUserProfile>,
            2000
          );

          if (bridgeUser) {
            const bridgeMergedProfile = mergeProfiles(profile as StoredUserProfile | null, bridgeUser);
            setUserData(bridgeMergedProfile);
            setProfileForm(createProfileForm(bridgeMergedProfile));
          }
        } catch (bridgeError) {
          console.warn('Failed to fetch VK bridge user info', bridgeError);
        }
      } catch (e) {
        console.error('Profile init error:', e);
      }
    }

    init();
  }, []);

  const isAdmin = viewerRole === 'admin' || viewerRole === 'editor';
  const displayName = getDisplayName(userData);
  const viewerRoleLabel = getRoleLabel(viewerRole);
  const hasHomeCoordinates = userData?.homeLat != null && userData?.homeLng != null;
  const hasCustomProfileData = Boolean(
    userData?.bio ||
      userData?.roleLabel ||
      userData?.contactPhone ||
      userData?.contactTelegram ||
      userData?.contactEmail ||
      userData?.homeCityName ||
      hasHomeCoordinates ||
      (userData?.preferences && userData.preferences.length > 0)
  );

  /*
  const services = [
    { id: 'vet', title: 'Онлайн Вет', sub: '24/7 врач', color: '#44c355', icon: <Icon28ServicesOutline /> },
    { id: 'dating', title: 'Знакомства', sub: 'Прогулки', color: '#ff2d55', icon: <Icon28Hearts2Outline /> },
    { id: 'taxi', title: 'Зоотакси', sub: 'Комфорт', color: '#007aff', icon: <Icon28CarOutline /> },
    { id: 'fund', title: 'Сборы', sub: 'Помощь', color: '#ff9500', icon: <Icon28MoneyCircleOutline /> },
    { id: 'wiki', title: 'База знаний', sub: 'Гайды', color: '#af52de', icon: <Icon28BookOutline /> },
    { id: 'discount', title: 'Скидки', sub: 'Промокоды', color: '#5856d6', icon: <Icon28DiscountOutline /> }
  ];
  */

  const updateProfileForm = (field: keyof ProfileForm, value: string) => {
    setProfileForm((prev) => ({ ...prev, [field]: value }));
  };

  const syncHomeLocationFromRadar = () => {
    const rawPosition = localStorage.getItem('radar_default_pos');
    if (!rawPosition) {
      alert('Сначала сохрани домашнюю точку в Радаре.');
      return;
    }

    try {
      const parsedPosition = JSON.parse(rawPosition);
      if (parsedPosition?.lat === undefined || parsedPosition?.lng === undefined) {
        throw new Error('Invalid radar position');
      }

      setProfileForm((prev) => ({
        ...prev,
        homeLat: String(parsedPosition.lat),
        homeLng: String(parsedPosition.lng)
      }));
    } catch (error) {
      console.error('Failed to parse radar home position', error);
      alert('Не удалось прочитать домашнюю точку из Радара.');
    }
  };

  const handleCancelProfileEdit = () => {
    setProfileForm(createProfileForm(userData));
    setIsEditingProfile(false);
  };

  const handleSaveProfile = async () => {
    setIsSavingProfile(true);

    try {
      const updatedProfile = await vkFetch('/profile/me', {
        method: 'PATCH',
        body: JSON.stringify({
          bio: profileForm.bio,
          roleLabel: profileForm.roleLabel,
          contactPhone: profileForm.contactPhone,
          contactTelegram: profileForm.contactTelegram,
          contactEmail: profileForm.contactEmail,
          homeCityName: profileForm.homeCityName,
          homeLat: profileForm.homeLat,
          homeLng: profileForm.homeLng,
          preferences: profileForm.preferencesInput
        })
      });

      const mergedProfile = {
        ...(userData || {}),
        ...(updatedProfile as StoredUserProfile)
      };

      setUserData(mergedProfile);
      setProfileForm(createProfileForm(mergedProfile));
      setIsEditingProfile(false);
    } catch (error) {
      console.error('Failed to update profile', error);
      alert('Не удалось сохранить профиль.');
    } finally {
      setIsSavingProfile(false);
    }
  };

  return (
    <Panel id={id}>
      <Flex
        justify="space-between"
        align="center"
        gap="m"
        noWrap
        paddingInline="m"
        paddingBlock="s"
        style={{
          paddingTop: 'max(var(--vkui--spacing_size_s), env(safe-area-inset-top, 0px))',
          boxSizing: 'border-box',
          minBlockSize: 'var(--vkui--size_panel_header_height--regular)',
          background: 'var(--vkui--color_background_content)',
          borderBottom: '1px solid var(--vkui--color_separator_primary_alpha)'
        }}
      >
        <Title level="2" weight="2" style={{ margin: 0 }}>
          Профиль
        </Title>
        <Button
          size="s"
          mode="secondary"
          appearance="accent"
          rounded
          onClick={() => (isEditingProfile ? handleCancelProfileEdit() : setIsEditingProfile(true))}
        >
          {isEditingProfile ? 'Отмена' : 'Редактировать'}
        </Button>
      </Flex>

      <Gradient
        mode="tint"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px 16px 28px',
          textAlign: 'center'
        }}
      >
        <Avatar
          size={104}
          src={userData?.photo200 || userData?.avatarUrl || undefined}
          style={{
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            border: '4px solid var(--vkui--color_background_content)',
            marginBottom: 16
          }}
        />

        <Title level="1" weight="1" style={{ marginBottom: 10 }}>
          {displayName}
        </Title>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '100%',
            padding: '8px 14px',
            borderRadius: 999,
            marginBottom: 16,
            background:
              viewerRole === 'admin' || viewerRole === 'editor'
                ? 'linear-gradient(135deg, rgba(0, 119, 255, 0.14), rgba(88, 86, 214, 0.12))'
                : 'var(--vkui--color_background_secondary_alpha)',
            border: '1px solid var(--vkui--color_separator_primary_alpha)',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)'
          }}
        >
          <Text
            weight="2"
            style={{
              color: 'var(--vkui--color_text_accent)',
              fontSize: 14,
              lineHeight: '18px',
              textAlign: 'center'
            }}
          >
            Роль входа: {viewerRoleLabel}
          </Text>
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: 360,
            marginBottom: 4,
            padding: '14px 12px',
            borderRadius: 18,
            background: 'var(--vkui--color_background_modal)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
            border: '1px solid var(--vkui--color_separator_primary_alpha)'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: 0
            }}
          >
            <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
              <Headline weight="2" style={{ fontSize: 22, lineHeight: '26px' }}>
                {myPins.length + myPosts.length}
              </Headline>
              <Caption
                level="2"
                weight="1"
                style={{
                  color: 'var(--vkui--color_text_secondary)',
                  textTransform: 'uppercase',
                  marginTop: 4,
                  letterSpacing: '0.02em'
                }}
              >
                События
              </Caption>
            </div>
            <div
              style={{
                width: 1,
                alignSelf: 'stretch',
                minHeight: 40,
                backgroundColor: 'var(--vkui--color_separator_primary)',
                opacity: 0.55,
                margin: '4px 0'
              }}
            />
            <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
              <Headline weight="2" style={{ fontSize: 22, lineHeight: '26px', color: 'var(--vkui--color_text_accent)' }}>
                {userData?.karmaScore || 0}
              </Headline>
              <Caption
                level="2"
                weight="1"
                style={{
                  color: 'var(--vkui--color_text_secondary)',
                  textTransform: 'uppercase',
                  marginTop: 4,
                  letterSpacing: '0.02em'
                }}
              >
                Карма
              </Caption>
            </div>
            <div
              style={{
                width: 1,
                alignSelf: 'stretch',
                minHeight: 40,
                backgroundColor: 'var(--vkui--color_separator_primary)',
                opacity: 0.55,
                margin: '4px 0'
              }}
            />
            <div style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
              <Headline weight="2" style={{ fontSize: 22, lineHeight: '26px' }}>
                4.9
              </Headline>
              <Caption
                level="2"
                weight="1"
                style={{
                  color: 'var(--vkui--color_text_secondary)',
                  textTransform: 'uppercase',
                  marginTop: 4,
                  letterSpacing: '0.02em'
                }}
              >
                Рейтинг
              </Caption>
            </div>
          </div>
        </div>

        {/* Бейджи (Ачивки) */}
        <div style={{ marginTop: 16, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', maxWidth: '100%' }}>
          {[
            { id: 'verified', icon: <Icon28ShieldKeyholeOutline width={24} height={24} />, title: 'Доверенный', bgColor: 'rgba(68, 195, 85, 0.15)', color: '#44c355' },
            { id: 'scout', icon: <Icon28CompassOutline width={24} height={24} />, title: 'Следопыт', bgColor: 'rgba(255, 149, 0, 0.15)', color: '#ff9500' },
            { id: 'guardian', icon: <Icon28Hearts2Outline width={24} height={24} />, title: 'Опекун', bgColor: 'rgba(255, 45, 85, 0.15)', color: '#ff2d55' }
          ].map((badge) => {
            const hasBadge = userData?.achievements?.includes(badge.id);
            return (
              <div
                key={badge.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  opacity: hasBadge ? 1 : 0.4,
                  filter: hasBadge ? 'none' : 'grayscale(100%)',
                  transition: 'opacity 0.2s, filter 0.2s',
                  width: 64
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: badge.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: badge.color,
                    marginBottom: 6,
                    boxShadow: hasBadge ? `0 2px 8px ${badge.bgColor}` : 'none'
                  }}
                >
                  {badge.icon}
                </div>
                <Text style={{ fontSize: 11, lineHeight: '13px', textAlign: 'center', color: 'var(--vkui--color_text_primary)' }} weight={hasBadge ? '2' : '3'}>
                  {badge.title}
                </Text>
              </div>
            );
          })}
        </div>
      </Gradient>

      {isAdmin && groupId && (
        <Group mode="card" header={<Header>Управление сообществом</Header>}>
          <SimpleCell
            before={<Icon28CheckCircleOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
            subtitle="Проверить и согласовать предложенные посты"
            after={<Icon24ChevronRight />}
            onClick={() => routeNavigator.push('/moderation')}
          >
            Модерация
          </SimpleCell>
          <SimpleCell
            before={<Icon28SettingsOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
            subtitle="Настроить город, расписание и админов"
            after={<Icon24ChevronRight />}
            onClick={() => routeNavigator.push('/settings')}
          >
            Настройки приложения
          </SimpleCell>
          <SimpleCell
            before={<Icon28CompassOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
            subtitle="Закрепить текущие координаты как домашние"
            after={<Icon24ChevronRight />}
          >
            Закрепить локацию Радара
          </SimpleCell>
        </Group>
      )}

      <Group mode="card" header={<Header>Моя активность</Header>}>
        <SimpleCell
          before={<Icon28CompassOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
          subtitle={`${myPins.length} событий`}
          after={<Icon24ChevronRight />}
        >
          Мои метки на карте
        </SimpleCell>
        <SimpleCell
          before={<Icon28ArticleOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
          subtitle={`${myPosts.length} объявлений`}
          after={<Icon24ChevronRight />}
        >
          Мои объявления
        </SimpleCell>
      </Group>

      <Group mode="card">
        {isEditingProfile ? (
          <FormLayoutGroup mode="vertical">
            <FormItem top="Роль в сервисе">
              <Input
                value={profileForm.roleLabel}
                onChange={(e) => updateProfileForm('roleLabel', e.target.value)}
                placeholder="Например: волонтёр, куратор, кинолог"
              />
            </FormItem>

            <FormItem top="О себе">
              <Textarea
                value={profileForm.bio}
                onChange={(e) => updateProfileForm('bio', e.target.value)}
                placeholder="Коротко расскажи, чем ты можешь быть полезен"
              />
            </FormItem>

            <FormItem top="Телефон">
              <Input
                value={profileForm.contactPhone}
                onChange={(e) => updateProfileForm('contactPhone', e.target.value)}
                placeholder="+7 ..."
              />
            </FormItem>

            <FormItem top="Telegram">
              <Input
                value={profileForm.contactTelegram}
                onChange={(e) => updateProfileForm('contactTelegram', e.target.value)}
                placeholder="@nickname"
              />
            </FormItem>

            <FormItem top="Email">
              <Input
                type="email"
                value={profileForm.contactEmail}
                onChange={(e) => updateProfileForm('contactEmail', e.target.value)}
                placeholder="name@example.com"
              />
            </FormItem>

            <FormItem top="Домашний город">
              <Input
                value={profileForm.homeCityName}
                onChange={(e) => updateProfileForm('homeCityName', e.target.value)}
                placeholder="Город, где тебе удобнее помогать"
              />
            </FormItem>

            <FormItem top="Широта домашней точки">
              <Input
                value={profileForm.homeLat}
                onChange={(e) => updateProfileForm('homeLat', e.target.value)}
                placeholder="55.75"
              />
            </FormItem>

            <FormItem top="Долгота домашней точки" bottom="Можно подтянуть координаты из сохранённой домашней точки Радара">
              <Input
                value={profileForm.homeLng}
                onChange={(e) => updateProfileForm('homeLng', e.target.value)}
                placeholder="37.61"
              />
            </FormItem>

            <FormItem>
              <Button stretched mode="secondary" onClick={syncHomeLocationFromRadar}>
                Взять домашнюю точку из Радара
              </Button>
            </FormItem>

            <FormItem top="Предпочтения" bottom="Через запятую: передержка, прогулки, помощь на машине">
              <Input
                value={profileForm.preferencesInput}
                onChange={(e) => updateProfileForm('preferencesInput', e.target.value)}
                placeholder="Например: передержка, прогулки, пристрой"
              />
            </FormItem>

            <FormItem>
              <Button stretched size="l" loading={isSavingProfile} onClick={handleSaveProfile}>
                Сохранить профиль
              </Button>
            </FormItem>
          </FormLayoutGroup>
        ) : (
          <>
            {userData?.screenName && (
              <MiniInfoCell textWrap="nowrap">@{userData.screenName}</MiniInfoCell>
            )}

            {userData?.roleLabel && (
              <MiniInfoCell textWrap="nowrap">{userData.roleLabel}</MiniInfoCell>
            )}

            {userData?.bio && (
              <div style={{ padding: '0 16px 16px' }}>
                <Text style={{ whiteSpace: 'pre-wrap' }}>{userData.bio}</Text>
              </div>
            )}

            {!hasCustomProfileData && (
              <div style={{ padding: '0 16px 16px' }}>
                <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
                  Пока заполнены только базовые данные из VK. Нажми «Редактировать» вверху экрана, чтобы добавить описание, контакты, домашнюю локацию и предпочтения.
                </Text>
              </div>
            )}

            {(userData?.contactPhone || userData?.contactTelegram || userData?.contactEmail) && (
              <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {userData.contactPhone && (
                  <Text>Телефон: {userData.contactPhone}</Text>
                )}
                {userData.contactTelegram && (
                  <Text>Telegram: {userData.contactTelegram}</Text>
                )}
                {userData.contactEmail && (
                  <Text>Email: {userData.contactEmail}</Text>
                )}
              </div>
            )}

            {userData?.preferences && userData.preferences.length > 0 && (
              <div style={{ padding: '0 16px 16px' }}>
                <Text weight="2" style={{ marginBottom: 8 }}>
                  Предпочтения
                </Text>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                  {userData.preferences.map((preference) => (
                    <Badge key={preference} mode="new">
                      {preference}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Group>

      {/* 
      <Group mode="card" header={<Header>Сервисы ZooPlatform</Header>}>
        <CardGrid size="s" style={{ padding: '0 8px' }}>
          {services.map((srv) => (
            <Card key={srv.id} style={{ marginBottom: 12, borderRadius: 20, overflow: 'hidden' }}>
              <Tappable style={{ padding: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    backgroundColor: `${srv.color}15`,
                    color: srv.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 12
                  }}
                >
                  {srv.icon}
                </div>
                <Text weight="2" style={{ fontSize: 13, marginBottom: 2 }}>{srv.title}</Text>
                <Text size={11} style={{ color: 'var(--vkui--color_text_secondary)', lineHeight: '14px' }}>{srv.sub}</Text>
              </Tappable>
            </Card>
          ))}
        </CardGrid>
      </Group>
      */}

      {/*
      <Group mode="card" header={<Header>Безопасность и настройки</Header>}>
        <SimpleCell
          before={<Icon28HomeOutline style={{ color: 'var(--vkui--color_icon_secondary)' }} />}
          subtitle="Сбросить домашнюю точку на карте"
          onClick={() => {
            localStorage.removeItem('radar_default_pos');
            alert('Сброшено');
          }}
        >
          Вернуть город по умолчанию
        </SimpleCell>
        <SimpleCell
          before={<Icon28ShieldKeyholeOutline style={{ color: 'var(--vkui--color_icon_secondary)' }} />}
          after={<Icon24ChevronRight />}
        >
          Параметры безопасности
        </SimpleCell>
      </Group>
      */}

      <Spacing size={80} />
    </Panel>
  );
};
