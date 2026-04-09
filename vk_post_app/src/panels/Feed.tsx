import { FC, useEffect, useState } from 'react';
import { Panel, PanelHeader, PanelHeaderBack, Placeholder, Button, Group, RichCell, Avatar, Spinner } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { vkFetch } from '../utils/api';

interface Post {
  id: number;
  content: string;
  createdAt: string;
  author: {
    vkId: string;
  };
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
            <RichCell
              key={post.id}
              before={<Avatar size={48} src={`https://vk.com/images/camera_50.png`} />}
              subtitle={new Date(post.createdAt).toLocaleString()}
            >
              <div style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
                {post.content}
              </div>
            </RichCell>
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
