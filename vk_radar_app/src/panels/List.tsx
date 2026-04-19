import { useState, useEffect } from 'react';
import { Panel, PanelHeader, Text, Placeholder, Spacing, Group, Card, Button, Badge, Tabs, TabsItem, RichCell, Avatar, ButtonGroup, Div } from '@vkontakte/vkui';
import { Icon56NewsfeedOutline, Icon28CompassOutline, Icon28MessageOutline, Icon28ArchiveOutline, Icon28WarningTriangleOutline, Icon28HomeOutline } from '@vkontakte/icons';
import { vkFetch } from '../utils/api';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

interface FeedItem {
  id: number;
  type: 'pin' | 'post';
  subType: string;
  title: string;
  description: string;
  createdAt: string;
  lat?: number;
  lng?: number;
  authorName?: string;
}

export const List = ({ id }: { id: string }) => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'radar' | 'rehome'>('all');
  const routeNavigator = useRouteNavigator();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await vkFetch('/radar/pins');
        if (Array.isArray(data)) {
          const formatted = data.map(p => ({
            id: p.id,
            type: 'pin' as const,
            subType: p.type,
            title: p.title,
            description: p.description || '',
            createdAt: p.createdAt,
            lat: p.lat,
            lng: p.lng,
            authorName: p.author?.vkId ? `ID ${p.author.vkId}` : 'Аноним'
          }));
          formatted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setItems(formatted);
        }
      } catch (e) {
        console.error('Failed to fetch feed:', e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const goToMap = (item: FeedItem) => {
    if (item.lat && item.lng) {
      localStorage.setItem('radar_target_pin', JSON.stringify({ lat: item.lat, lng: item.lng }));
      routeNavigator.push('/');
    }
  };

  const filteredItems = items.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'radar') return item.type === 'pin';
    if (activeTab === 'rehome') return item.type === 'post';
    return true;
  });

  return (
    <Panel id={id}>
      <PanelHeader delimiter="none">Список</PanelHeader>
      
      <Tabs mode="default">
        <TabsItem selected={activeTab === 'all'} onClick={() => setActiveTab('all')}>Все</TabsItem>
        <TabsItem selected={activeTab === 'radar'} onClick={() => setActiveTab('radar')}>Радар</TabsItem>
        <TabsItem selected={activeTab === 'rehome'} onClick={() => setActiveTab('rehome')}>Пристрой</TabsItem>
      </Tabs>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
          <div style={{ color: 'var(--vkui--color_text_secondary)' }}>Загрузка событий...</div>
        </div>
      ) : filteredItems.length === 0 ? (
        <Placeholder
          icon={<Icon56NewsfeedOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
        >
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Здесь пока тишина</div>
          <Text weight="2" style={{ color: 'var(--vkui--color_text_secondary)', textAlign: 'center' }}>
            В вашем районе пока нет активных событий или объявлений.
          </Text>
        </Placeholder>
      ) : (
        <Group style={{ padding: '0 12px' }}>
          {filteredItems.map(item => (
            <Card key={`${item.type}-${item.id}`} mode="shadow" style={{ marginBottom: 12 }}>
              <RichCell
                disabled
                before={
                  <Avatar size={48} style={{ background: item.type === 'pin' ? 'var(--vkui--color_background_negative_tint)' : 'var(--vkui--color_background_positive_tint)' }}>
                    {item.type === 'pin' ? <Icon28WarningTriangleOutline style={{ color: 'var(--vkui--color_icon_negative)' }} /> : <Icon28HomeOutline style={{ color: 'var(--vkui--color_icon_positive)' }} />}
                  </Avatar>
                }
                subtitle={new Date(item.createdAt).toLocaleDateString()}
                after={
                  <Badge mode={item.subType === 'sos' ? 'prominent' : 'new'}>
                    {item.type === 'pin' ? item.subType.toUpperCase() : 'ПРИСТРОЙ'}
                  </Badge>
                }
              >
                {item.title}
              </RichCell>
              
              <Div style={{ paddingTop: 0 }}>
                <Text style={{ color: 'var(--vkui--color_text_secondary)', marginBottom: 16 }}>{item.description}</Text>
                
                <ButtonGroup mode="horizontal" gap="s" stretched>
                  {item.type === 'pin' ? (
                    <Button 
                      stretched 
                      size="m" 
                      before={<Icon28CompassOutline width={20} height={20} />}
                      onClick={() => goToMap(item)}
                    >
                      На карте
                    </Button>
                  ) : (
                    <Button 
                      stretched 
                      mode="secondary"
                      size="m" 
                      before={<Icon28ArchiveOutline width={20} height={20} />}
                    >
                      Подробнее
                    </Button>
                  )}
                  <Button 
                    mode="tertiary" 
                    size="m" 
                  >
                    <Icon28MessageOutline width={24} height={24} />
                  </Button>
                </ButtonGroup>
              </Div>
            </Card>
          ))}
          <Spacing size={80} />
        </Group>
      )}
    </Panel>
  );
};
