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
    if (item.type === 'pin') {
      routeNavigator.push(`/radar/${item.id}`);
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
      <PanelHeader delimiter="none">События</PanelHeader>
      
      <Tabs mode="default" style={{ marginBottom: 8 }}>
        <TabsItem selected={activeTab === 'all'} onClick={() => setActiveTab('all')}>Все</TabsItem>
        <TabsItem selected={activeTab === 'radar'} onClick={() => setActiveTab('radar')}>Радар</TabsItem>
        <TabsItem selected={activeTab === 'rehome'} onClick={() => setActiveTab('rehome')}>Пристрой</TabsItem>
      </Tabs>

      {loading ? (
        <Div style={{ textAlign: 'center', padding: 40, color: 'var(--vkui--color_text_secondary)' }}>Загрузка...</Div>
      ) : filteredItems.length === 0 ? (
        <Placeholder
          icon={<Icon56NewsfeedOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
        >
          Здесь пока тишина
        </Placeholder>
      ) : (
        <Group style={{ padding: '0 8px' }}>
          {filteredItems.map(item => (
            <Card key={`${item.type}-${item.id}`} mode="shadow" style={{ marginBottom: 12, borderRadius: 8 }}>
              <RichCell
                disabled
                before={
                  <Avatar size={48} style={{ 
                    background: item.type === 'pin' ? 'var(--vkui--color_background_negative_tint)' : 'var(--vkui--color_background_positive_tint)' 
                  }}>
                    {item.type === 'pin' ? <Icon28WarningTriangleOutline style={{ color: 'var(--vkui--color_icon_negative)' }} /> : <Icon28HomeOutline style={{ color: 'var(--vkui--color_icon_positive)' }} />}
                  </Avatar>
                }
                subtitle={new Date(item.createdAt).toLocaleDateString()}
                after={
                  <Badge mode={item.subType === 'sos' ? 'prominent' : 'new'}>
                    {item.subType.toUpperCase()}
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
                      className="rounded-lg"
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
                      className="rounded-lg"
                      before={<Icon28ArchiveOutline width={20} height={20} />}
                    >
                      Подробнее
                    </Button>
                  )}
                  <Button 
                    mode="tertiary" 
                    size="m" 
                    className="rounded-lg"
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
      <style>{`.rounded-lg { border-radius: 8px !important; }`}</style>
    </Panel>
  );
};
