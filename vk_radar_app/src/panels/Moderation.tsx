import { useState, useEffect } from 'react';
import { 
  Panel, 
  PanelHeader, 
  PanelHeaderBack, 
  Group, 
  Tabs, 
  TabsItem, 
  SimpleCell, 
  Button, 
  ButtonGroup, 
  Card, 
  Text, 
  Avatar, 
  Spacing, 
  CardGrid,
  Title,
  Caption,
  Spinner,
  RichCell,
  Div
} from '@vkontakte/vkui';
import { 
  Icon28CheckCircleOutline, 
  Icon28CancelOutline, 
  Icon24LikeOutline, 
  Icon24CommentOutline, 
  Icon24ShareOutline, 
  Icon24ViewOutline, 
  Icon28ShareExternalOutline
} from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { vkFetch } from '../utils/api';
import bridgePkg from '@vkontakte/vk-bridge';

const bridge = bridgePkg && 'default' in bridgePkg ? (bridgePkg as any).default : bridgePkg;

type ModerationTab = 'pending' | 'approved';

export const Moderation = ({ id }: { id: string }) => {
  const routeNavigator = useRouteNavigator();
  const [activeTab, setActiveTab] = useState<ModerationTab>('pending');
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Record<string, any>>({});

  const fetchPosts = async (tab: ModerationTab) => {
    setLoading(true);
    try {
      const data = await vkFetch(`/posts/moderation?status=${tab}`);
      setPosts(data);
      
      // Если это архив, подгрузим статистику из ВК
      if (tab === 'approved') {
        const postsWithId = data.filter((p: any) => p.vkPostId);
        if (postsWithId.length > 0) {
          fetchVkStats(postsWithId);
        }
      }
    } catch (e) {
      console.error('Failed to fetch moderation posts', e);
    } finally {
      setLoading(false);
    }
  };

  const fetchVkStats = async (approvedPosts: any[]) => {
    try {
      // Формируем массив id в формате ownerId_postId
      const postIds = approvedPosts.map(p => `-${p.groupId}_${p.vkPostId}`).join(',');
      
      const response = await bridge.send('VKWebAppCallAPIMethod', {
        method: 'wall.getById',
        params: {
          posts: postIds,
          v: '5.131'
        }
      });

      const statsMap: Record<string, any> = {};
      response.response.forEach((item: any) => {
        statsMap[item.id] = {
          likes: item.likes?.count || 0,
          comments: item.comments?.count || 0,
          reposts: item.reposts?.count || 0,
          views: item.views?.count || 0,
        };
      });
      setStats(prev => ({ ...prev, ...statsMap }));
    } catch (e) {
      console.error('Failed to fetch VK stats', e);
    }
  };

  useEffect(() => {
    fetchPosts(activeTab);
  }, [activeTab]);

  const handleStatusUpdate = async (postId: number, status: 'approved' | 'rejected') => {
    try {
      await vkFetch(`/posts/${postId}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status })
      });
      // Обновляем список локально
      setPosts(prev => prev.filter(p => p.id !== postId));
    } catch (e) {
      alert('Ошибка при обновлении статуса');
    }
  };

  const renderPost = (post: any) => {
    const postVkKey = `-${post.groupId}_${post.vkPostId}`;
    const postStat = stats[postVkKey];
    const authorName = [post.author?.firstName, post.author?.lastName]
      .filter(Boolean)
      .join(' ') || (post.author?.vkId ? `ID ${post.author.vkId}` : 'Пользователь VK');

    return (
      <Card key={post.id} mode="shadow" style={{ marginBottom: 16, padding: 16, borderRadius: 8 }}>
        <SimpleCell
          before={<Avatar size={40} src={post.author?.photo200 || post.author?.avatarUrl} />}
          subtitle={new Date(post.createdAt).toLocaleString()}
          after={post.tag && <Caption level="1" weight="1" style={{ backgroundColor: 'var(--vkui--color_background_secondary)', padding: '4px 8px', borderRadius: 8 }}>#{post.tag}</Caption>}
        >
          {authorName}
        </SimpleCell>
        
        <Spacing size={12} />
        
        <Text weight="3" style={{ lineHeight: '20px', whiteSpace: 'pre-wrap' }}>{post.content}</Text>
        
        {post.media && Array.isArray(JSON.parse(post.media)) && JSON.parse(post.media).length > 0 && (
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginTop: 12, paddingBottom: 8 }}>
            {JSON.parse(post.media).map((m: any, idx: number) => (
              <img 
                key={idx} 
                src={m.url} 
                alt="media" 
                style={{ height: 120, borderRadius: 8, objectFit: 'cover' }} 
              />
            ))}
          </div>
        )}

        {activeTab === 'pending' ? (
          <ButtonGroup mode="horizontal" gap="s" stretched style={{ marginTop: 16 }}>
            <Button 
              size="l" 
              stretched 
              appearance="positive" 
              className="rounded-lg"
              before={<Icon28CheckCircleOutline />}
              onClick={() => handleStatusUpdate(post.id, 'approved')}
            >
              Одобрить
            </Button>
            <Button 
              size="l" 
              stretched 
              appearance="negative" 
              className="rounded-lg"
              before={<Icon28CancelOutline />}
              onClick={() => handleStatusUpdate(post.id, 'rejected')}
            >
              Отклонить
            </Button>
          </ButtonGroup>
        ) : (
          <Div style={{ marginTop: 16, padding: 0 }}>
             <Group mode="plain" style={{ backgroundColor: 'var(--vkui--color_background_secondary)', borderRadius: 8, overflow: 'hidden' }}>
               <RichCell
                 disabled
                 before={<Avatar size={36}><Icon24ViewOutline /></Avatar>}
                 subtitle={`Опубликовано: ${post.publishDate ? new Date(post.publishDate).toLocaleString() : 'Недавно'}`}
                 after={<Icon28ShareExternalOutline style={{ color: 'var(--vkui--color_icon_accent)' }} onClick={() => window.open(`https://vk.com/wall-${post.groupId}_${post.vkPostId}`, '_blank')} />}
               >
                 Статистика из ВКонтакте
               </RichCell>
               
               {post.vkPostId && postStat && (
                 <Div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--vkui--color_text_secondary)' }}>
                      <Icon24LikeOutline width={20} height={20} />
                      <Text weight="2">{postStat.likes}</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--vkui--color_text_secondary)' }}>
                      <Icon24CommentOutline width={20} height={20} />
                      <Text weight="2">{postStat.comments}</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--vkui--color_text_secondary)' }}>
                      <Icon24ShareOutline width={20} height={20} />
                      <Text weight="2">{postStat.reposts}</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--vkui--color_text_secondary)' }}>
                      <Icon24ViewOutline width={20} height={20} />
                      <Text weight="2">{postStat.views}</Text>
                    </div>
                 </Div>
               )}
             </Group>
          </Div>
        )}
      </Card>
    );
  };

  return (
    <Panel id={id}>
      <PanelHeader 
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Модерация
      </PanelHeader>

      <div 
        style={{ 
          position: 'sticky', 
          insetBlockStart: 'calc(var(--vkui--size_panel_header_height--regular) + env(safe-area-inset-top))', 
          zIndex: 10,
          backgroundColor: 'var(--vkui--color_background_content)'
        }}
      >
        <Tabs>
          <TabsItem 
            selected={activeTab === 'pending'} 
            onClick={() => setActiveTab('pending')}
          >
            На утверждении
          </TabsItem>
          <TabsItem 
            selected={activeTab === 'approved'} 
            onClick={() => setActiveTab('approved')}
          >
            Архив
          </TabsItem>
        </Tabs>
      </div>

      <Group style={{ marginTop: 52 }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
            <Spinner size="l" />
          </div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--vkui--color_text_secondary)' }}>
            <Title level="2" weight="2" style={{ marginBottom: 12 }}>Здесь пока пусто</Title>
            <Text>
              {activeTab === 'pending' ? 'Нет новых предложенных постов для модерации.' : 'Вы еще не одобрили ни одного объявления.'}
            </Text>
          </div>
        ) : (
          <CardGrid size="l">
            {posts.map(renderPost)}
          </CardGrid>
        )}
      </Group>

      <Spacing size={40} />
      <style>{`.rounded-lg { border-radius: 8px !important; }`}</style>
    </Panel>
  );
};
