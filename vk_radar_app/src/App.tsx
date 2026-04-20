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

const withTimeout = async <T,>(promise: Promise<T>, timeoutMs: number) => {
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
    routeNavigator.push(panel === DEFAULT_VIEW_PANELS.RADAR ? '/' : `/${panel}`);
  };

  return (
    <AppRoot>
      <SplitLayout 
        header={null} 
        popout={popout}
        modal={
          <ModalRoot activeModal={activeModal || null} onClose={() => routeNavigator.hideModal()}>
            {/* Модалки будут рендериться внутри панелей или централизованно здесь */}
            <Radar id={DEFAULT_VIEW_PANELS.RADAR} isModalRoot />
            <List id={DEFAULT_VIEW_PANELS.LIST} />
            <MyAds id={DEFAULT_VIEW_PANELS.MY_ADS} isModalRoot />
            <CreateAd id={DEFAULT_VIEW_PANELS.CREATE_AD} />
            <Profile id={DEFAULT_VIEW_PANELS.PROFILE} />
            <Moderation id={DEFAULT_VIEW_PANELS.MODERATION} />
            <AppSettings id={DEFAULT_VIEW_PANELS.SETTINGS} />
          </ModalRoot>
        }
      >
        <SplitCol>
          <Epic
            activeStory={activePanel}
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
            <View id={activePanel} activePanel={activePanel}>
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
