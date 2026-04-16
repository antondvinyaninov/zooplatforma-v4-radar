import { useState, useEffect, ReactNode } from 'react';
import bridgePkg, { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Home, Feed, CreatePost } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';

const bridge = bridgePkg && 'default' in bridgePkg ? (bridgePkg as any).default : bridgePkg;

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [, setUser] = useState<UserInfo | undefined>();
  const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner />);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchPromise = bridge.send('VKWebAppGetUserInfo');
        // Ставим таймаут 2 секунды, чтобы на локалхосте (без ВКонтакте) кружок не зависал вечно
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 2000));
        
        const user = await Promise.race([fetchPromise, timeoutPromise]) as UserInfo;
        setUser(user);
      } catch (error) {
        console.warn('Работаем без данных VK Bridge (локально или timeout)');
      } finally {
        setPopout(null);
      }
    }
    fetchData();
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id={DEFAULT_VIEW_PANELS.HOME} />
          <Feed id={DEFAULT_VIEW_PANELS.FEED} />
          <CreatePost id={DEFAULT_VIEW_PANELS.CREATE_POST} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
