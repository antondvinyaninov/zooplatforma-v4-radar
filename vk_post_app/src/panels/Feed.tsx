import { FC, useEffect, useState } from 'react';
import { Panel, PanelHeader, PanelHeaderBack, Placeholder, Button, Group, SimpleCell, Avatar, Spinner } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { vkFetch } from '../utils/api';
import { MediaGrid } from '../components/MediaGrid';

interface Post {
  id: number;
  content: string;
  createdAt: string;
  author: {
    vkId: string;
  };
  media?: {url: string; type: string}[];
}

export const Feed: FC<{ id: string }> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await vkFetch('/posts');
        setPosts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Лента постов
      </PanelHeader>

      {isLoading ? (
        <Spinner size="l" style={{ margin: '20px 0' }} />
      ) : posts.length === 0 ? (
        <Placeholder 
          icon={<div style={{ fontSize: 64 }}>📝</div>}
          action={<Button size="m" onClick={() => routeNavigator.push('/create_post')}>Написать первый пост</Button>}
        >
          <span style={{ fontWeight: 'bold', display: 'block', marginBottom: 8 }}>Постов пока нет</span>
          Здесь будут отображаться посты, загруженные с бэкенда.
        </Placeholder>
      ) : (
        <Group>
          {posts.map(post => (
            <div key={post.id} style={{ background: 'var(--vkui--color_background_content)', marginBottom: 12, paddingBottom: 12, borderRadius: 12 }}>
              <SimpleCell
                before={<Avatar size={44} src={`https://vk.com/images/camera_50.png`} />}
                subtitle={new Date(post.createdAt).toLocaleString()}
              >
                Без подписи
              </SimpleCell>
              
              <div style={{ padding: '0 16px' }}>
                <div style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap', marginBottom: 8, fontSize: 15 }}>
                  {post.content}
                </div>
                
                {post.media && post.media.length > 0 && (
                  <div style={{ marginTop: '12px' }}>
                    <MediaGrid media={post.media} />
                  </div>
                )}
              </div>
            </div>
          ))}
          <div style={{ padding: 16 }}>
            <Button size="l" stretched onClick={() => routeNavigator.push('/create_post')}>
              Новый пост
            </Button>
          </div>
        </Group>
      )}
    </Panel>
  );
};
