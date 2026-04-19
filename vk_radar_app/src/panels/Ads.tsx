import { useState, useEffect } from 'react';
import { Panel, PanelHeader, Text, Placeholder, Spacing, Group, Card, Button, Badge } from '@vkontakte/vkui';
import { Icon56NewsfeedOutline, Icon28CompassOutline, Icon28MessageOutline } from '@vkontakte/icons';
import { vkFetch } from '../utils/api';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

interface RadarPin {
  id: number;
  type: string;
  lat: number;
  lng: number;
  title: string;
  description: string | null;
  createdAt: string;
}

export const Ads = ({ id }: { id: string }) => {
  const [pins, setPins] = useState<RadarPin[]>([]);
  const [loading, setLoading] = useState(true);
  const routeNavigator = useRouteNavigator();

  useEffect(() => {
    vkFetch('/radar/pins')
      .then(data => {
        if (Array.isArray(data)) setPins(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const goToMap = (pin: RadarPin) => {
    // Сохраняем таргет в localStorage, чтобы Radar мог сфокусироваться
    localStorage.setItem('radar_target_pin', JSON.stringify({ lat: pin.lat, lng: pin.lng }));
    routeNavigator.push('/');
  };

  return (
    <Panel id={id}>
      <PanelHeader delimiter="none">Объявления</PanelHeader>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
          <div style={{ color: 'var(--vkui--color_text_secondary)' }}>Загрузка объявлений...</div>
        </div>
      ) : pins.length === 0 ? (
        <Placeholder
          icon={<Icon56NewsfeedOutline style={{ color: '#3b82f6' }} />}
        >
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Пока пусто</div>
          <Text weight="2" style={{ color: 'var(--vkui--color_text_secondary)', textAlign: 'center' }}>
            В вашем районе пока не создано ни одного объявления.
          </Text>
        </Placeholder>
      ) : (
        <Group style={{ padding: '0 12px' }}>
          {pins.map(pin => (
            <Card key={pin.id} mode="shadow" style={{ marginBottom: 16, padding: 16, borderRadius: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <Badge mode={pin.type === 'sos' ? 'prominent' : undefined}>
                  {pin.type === 'sos' ? 'ЭКСТРЕННО' : pin.type === 'lost' ? 'ПОТЕРЯН' : 'НАЙДЕН'}
                </Badge>
                <Text style={{ fontSize: 12, color: 'var(--vkui--color_text_secondary)' }}>
                  {new Date(pin.createdAt).toLocaleDateString()}
                </Text>
              </div>
              
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{pin.title}</div>
              <Text style={{ color: 'var(--vkui--color_text_secondary)', marginBottom: 16 }}>{pin.description}</Text>
              
              <div style={{ display: 'flex', gap: 8 }}>
                <Button 
                  stretched 
                  size="m" 
                  before={<Icon28CompassOutline width={20} height={20} />}
                  onClick={() => goToMap(pin)}
                  style={{ borderRadius: 12 }}
                >
                  На карту
                </Button>
                <Button 
                  mode="secondary" 
                  size="m" 
                  style={{ borderRadius: 12, width: 44, padding: 0 }}
                  onClick={() => {}}
                >
                  <Icon28MessageOutline width={20} height={20} />
                </Button>
              </div>
            </Card>
          ))}
          <Spacing size={80} />
        </Group>
      )}
    </Panel>
  );
};
