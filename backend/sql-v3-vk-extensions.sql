CREATE TABLE IF NOT EXISTS vk_app_user_settings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    role_label TEXT,
    contact_telegram TEXT,
    contact_email TEXT,
    home_city_name TEXT,
    home_lat NUMERIC(10, 8),
    home_lng NUMERIC(11, 8),
    preferences JSONB NOT NULL DEFAULT '[]'::jsonb,
    onboarding_progress INTEGER NOT NULL DEFAULT 0,
    onboarding_completed BOOLEAN NOT NULL DEFAULT FALSE,
    karma_score INTEGER NOT NULL DEFAULT 0,
    achievements JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS organization_vk_settings (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL UNIQUE REFERENCES organizations(id) ON DELETE CASCADE,
    vk_group_id BIGINT NOT NULL UNIQUE,
    access_token TEXT NOT NULL,
    accept_cross_posts BOOLEAN NOT NULL DEFAULT FALSE,
    accepted_tags JSONB NOT NULL DEFAULT '[]'::jsonb,
    schedule_interval_minutes INTEGER NOT NULL DEFAULT 60,
    schedule_start_time TEXT NOT NULL DEFAULT '09:00',
    schedule_end_time TEXT NOT NULL DEFAULT '21:00',
    duty_admin_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    city_id INTEGER,
    city_name TEXT,
    region_name TEXT,
    lat NUMERIC(10, 8),
    lng NUMERIC(11, 8),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS organization_vk_notification_admins (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (organization_id, user_id)
);

CREATE TABLE IF NOT EXISTS vk_post_publications (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL UNIQUE REFERENCES posts(id) ON DELETE CASCADE,
    organization_id INTEGER NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    vk_group_id BIGINT NOT NULL,
    moderation_status TEXT NOT NULL DEFAULT 'pending',
    publish_date TIMESTAMP,
    vk_post_id BIGINT,
    chat_link TEXT,
    city_id INTEGER,
    city_name TEXT,
    region_name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS vk_radar_pins (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    post_id INTEGER UNIQUE REFERENCES posts(id) ON DELETE SET NULL,
    organization_id INTEGER REFERENCES organizations(id) ON DELETE SET NULL,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    lat NUMERIC(10, 8) NOT NULL,
    lng NUMERIC(11, 8) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_v3_vk_app_user_settings_user_id
    ON vk_app_user_settings(user_id);

CREATE INDEX IF NOT EXISTS idx_v3_organization_vk_settings_group
    ON organization_vk_settings(vk_group_id);

CREATE INDEX IF NOT EXISTS idx_v3_organization_vk_settings_city_crossposts
    ON organization_vk_settings(city_id, accept_cross_posts);

CREATE INDEX IF NOT EXISTS idx_v3_organization_vk_notification_admins_org
    ON organization_vk_notification_admins(organization_id);

CREATE INDEX IF NOT EXISTS idx_v3_vk_post_publications_org_status
    ON vk_post_publications(organization_id, moderation_status);

CREATE INDEX IF NOT EXISTS idx_v3_vk_post_publications_group_status
    ON vk_post_publications(vk_group_id, moderation_status);

CREATE INDEX IF NOT EXISTS idx_v3_vk_radar_pins_expires
    ON vk_radar_pins(expires_at);

CREATE INDEX IF NOT EXISTS idx_v3_vk_radar_pins_user
    ON vk_radar_pins(user_id);
