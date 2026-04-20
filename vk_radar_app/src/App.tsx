import { useState, useEffect } from 'react';
import bridgePkg from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, AppRoot } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28CompassOutline, Icon28ListOutline, Icon28UserCircleOutline, Icon28ArticleOutline } from '@vkontakte/icons';

import { Radar, List, CreateAd, Profile, Moderation, AppSettings, MyAds } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';
import { ModalRoot } from '@vkontakte/vkui';
import { vkFetch } from './utils/api';

const bridge = bridgePkg && 'default' in bridgePkg ? (bridgePkg as any).default : bridgePkg;

interface VkLaunchParams {
  vk_user_id?: string;
  vk_app_id?: string;
  vk_is_app_user?: string;
  vk_are_notifications_enabled?: string;
  vk_language?: string;
  vk_ref?: string;
  vk_access_token_settings?: string;
  vk_group_id?: string;
  vk_viewer_group_role?: string;
  vk_platform?: string;
  vk_is_favorite?: string;
  vk_ts?: string;
  vk_user_id_from?: string;
  vk_user_id_to?: string;
  vk_viewer_role?: string;
}

type VkBridgeUserProfile = {
  id?: number | string;
  first_name?: string;
  last_name?: string;
  screen_name?: string;
  photo_100?: string;
  photo_200?: string;
  city?: { title?: string } | null;
  sex?: number;
  bdate?: string;
};

const withTimeout = async <T,>(promise: Promise<T>, timeoutMs: number): Promise<T | null> => {
  return Promise.race<T | null>([
    promise,
    new Promise<null>((resolve) => setTimeout(() => resolve(null), timeoutMs))
  ]);
};

const AppContent = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.RADAR, modal: activeModal } = useActiveVkuiLocation();
  const routeNavigator = useRouteNavigator();
  
  const [popout, setPopout] = useState<React.ReactElement | null>(
    <div style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>Загрузка...</div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopout(null);
    }, 2000);

    async function fetchData() {
      let vkProfile: VkBridgeUserProfile | null = null;

      try {
        vkProfile = await withTimeout(
          bridge.send('VKWebAppGetUserInfo') as Promise<VkBridgeUserProfile>,
          1500
        );
      } catch (e) {
        console.warn('VK bridge user info is unavailable in current environment', e);
      }

      try {
        await vkFetch('/profile/bootstrap', {
          method: 'POST',
          body: JSON.stringify(vkProfile ? { profile: vkProfile } : {})
        });
      } catch (e) {
        console.error('Failed to bootstrap user profile', e);
      } finally {
        setPopout(null);
        clearTimeout(timer);
      }
    }
    fetchData();
    return () => clearTimeout(timer);
  }, []);

  const onTabChange = (panel: string) => {
    routeNavigator.replace(panel === DEFAULT_VIEW_PANELS.RADAR ? '/' : `/${panel}`);
  };

  return (
    <AppRoot>
      <SplitLayout 
        header={null} 
        popout={popout}
        modal={
          <ModalRoot activeModal={activeModal || null} onClose={() => routeNavigator.hideModal()}>
            <Radar id={DEFAULT_VIEW_PANELS.RADAR} isModalRoot />
            <MyAds id={DEFAULT_VIEW_PANELS.MY_ADS} isModalRoot />
          </ModalRoot>
        }
      >
        <SplitCol>
          <Epic
            activeStory="main_view"
            tabbar={
              <Tabbar style={{ 
                paddingBottom: 'env(safe-area-inset-bottom)',
                height: 'calc(48px + env(safe-area-inset-bottom))',
                backgroundColor: 'var(--vkui--color_background_content)',
                borderTop: '1px solid var(--vkui--color_separator_primary)'
              }}>
                <TabbarItem
                  onClick={() => onTabChange(DEFAULT_VIEW_PANELS.RADAR)}
                  selected={activePanel === DEFAULT_VIEW_PANELS.RADAR}
                  aria-label="Радар"
                >
                  <Icon28CompassOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={() => onTabChange(DEFAULT_VIEW_PANELS.LIST)}
                  selected={activePanel === DEFAULT_VIEW_PANELS.LIST}
                  aria-label="События"
                >
                  <Icon28ListOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={() => onTabChange(DEFAULT_VIEW_PANELS.MY_ADS)}
                  selected={activePanel === DEFAULT_VIEW_PANELS.MY_ADS || activePanel === DEFAULT_VIEW_PANELS.CREATE_AD}
                  aria-label="Объявления"
                >
                  <Icon28ArticleOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={() => onTabChange(DEFAULT_VIEW_PANELS.PROFILE)}
                  selected={activePanel === DEFAULT_VIEW_PANELS.PROFILE}
                  aria-label="Профиль"
                >
                  <Icon28UserCircleOutline />
                </TabbarItem>
              </Tabbar>
            }
          >
            <View id="main_view" activePanel={activePanel}>
              <Radar id={DEFAULT_VIEW_PANELS.RADAR} />
              <List id={DEFAULT_VIEW_PANELS.LIST} />
              <MyAds id={DEFAULT_VIEW_PANELS.MY_ADS} />
              <CreateAd id={DEFAULT_VIEW_PANELS.CREATE_AD} />
              <Profile id={DEFAULT_VIEW_PANELS.PROFILE} />
              <Moderation id={DEFAULT_VIEW_PANELS.MODERATION} />
              <AppSettings id={DEFAULT_VIEW_PANELS.SETTINGS} />
            </View>
          </Epic>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export const App = () => {
  return (
    <AppContent />
  );
};
