import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  createModal,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';
export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  RADAR: 'radar',
  LIST: 'list',
  MY_ADS: 'my_ads',
  CREATE_AD: 'create_ad',
  PROFILE: 'profile',
  MODERATION: 'moderation',
  SETTINGS: 'settings',
} as const;

export const DEFAULT_MODALS = {
  ADD_PIN: 'add_pin',
  RADAR_SETTINGS: 'radar_settings',
  VIEW_PIN: 'view_pin',
  EDIT_AD: 'edit_ad',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.RADAR, '/', [
        createModal(DEFAULT_MODALS.ADD_PIN, '/add_pin'),
        createModal(DEFAULT_MODALS.RADAR_SETTINGS, '/radar_settings'),
        createModal(DEFAULT_MODALS.VIEW_PIN, '/view_pin/:id'),
      ]),
      createPanel(DEFAULT_VIEW_PANELS.RADAR, '/radar/:id', [
        createModal(DEFAULT_MODALS.VIEW_PIN, '/radar/:id/view'),
      ]),
      createPanel(DEFAULT_VIEW_PANELS.LIST, `/${DEFAULT_VIEW_PANELS.LIST}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MY_ADS, `/${DEFAULT_VIEW_PANELS.MY_ADS}`, [
        createModal(DEFAULT_MODALS.EDIT_AD, `/${DEFAULT_VIEW_PANELS.MY_ADS}/edit`),
      ]),
      createPanel(DEFAULT_VIEW_PANELS.CREATE_AD, `/${DEFAULT_VIEW_PANELS.CREATE_AD}`, []),
      createPanel(DEFAULT_VIEW_PANELS.PROFILE, `/${DEFAULT_VIEW_PANELS.PROFILE}`, []),
      createPanel(DEFAULT_VIEW_PANELS.MODERATION, `/${DEFAULT_VIEW_PANELS.MODERATION}`, []),
      createPanel(DEFAULT_VIEW_PANELS.SETTINGS, `/${DEFAULT_VIEW_PANELS.SETTINGS}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
