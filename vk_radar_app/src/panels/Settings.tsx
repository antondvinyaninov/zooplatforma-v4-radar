import { useState, useEffect } from 'react';
import { Panel, PanelHeader, Group, SimpleCell, Title, Text, Spacing } from '@vkontakte/vkui';
import { Icon28Users3Outline, Icon28HomeOutline } from '@vkontakte/icons';
import { vkFetch } from '../utils/api';

export const Settings = ({ id }: { id: string }) => {
  const [viewerRole, setViewerRole] = useState<string | null>(null);
  const [groupId, setGroupId] = useState<string | null>(null);
  const [communityCity, setCommunityCity] = useState<string>('Загрузка...');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gId = params.get('vk_group_id');
    const role = params.get('vk_viewer_role');
    
    setGroupId(gId);
    setViewerRole(role || 'member');

    if (gId) {
      vkFetch(`/community/${gId}`)
        .then(data => {
           if (data && data.lat) {
             setCommunityCity(`Задано (${data.lat.toFixed(2)}, ${data.lng.toFixed(2)})`);
           } else {
             setCommunityCity('Не задано (по умолчанию Москва)');
           }
        })
        .catch(() => setCommunityCity('Ошибка загрузки'));
    }
  }, []);

  const resetPersonalPos = () => {
    localStorage.removeItem('radar_default_pos');
    // Можно добавить Toast здесь
    alert('Личные настройки сброшены');
  };

  const isAdmin = viewerRole === 'admin' || viewerRole === 'editor';

  return (
    <Panel id={id}>
      <PanelHeader delimiter="none">Настройки</PanelHeader>
      
      <Group header={<Title level="3" weight="2" style={{ padding: '0 16px', marginBottom: 8, color: 'rgba(0,0,0,0.5)', fontSize: 13, textTransform: 'uppercase' }}>Личные настройки</Title>}>
        <SimpleCell
          before={<Icon28HomeOutline />}
          subtitle="Сбросить домашнюю локацию к заводским (Москва)"
          onClick={resetPersonalPos}
        >
          Мой город
        </SimpleCell>
      </Group>

      {groupId && (
        <Group header={<Title level="3" weight="2" style={{ padding: '0 16px', marginBottom: 8, color: 'rgba(0,0,0,0.5)', fontSize: 13, textTransform: 'uppercase' }}>Настройки Сообщества</Title>}>
          <SimpleCell
            before={<Icon28Users3Outline />}
            subtitle={communityCity}
            disabled
          >
            Город привязки группы
          </SimpleCell>
          
          {isAdmin ? (
            <Text style={{ padding: '8px 16px', fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>
              Администратор может закрепить текущий вид карты как основной в разделе "Радар".
            </Text>
          ) : (
            <Text style={{ padding: '8px 16px', fontSize: 13, color: 'rgba(0,0,0,0.4)' }}>
              Только администраторы могут менять город привязки для всех участников.
            </Text>
          )}
        </Group>
      )}

      <Group header={<Title level="3" weight="2" style={{ padding: '0 16px', marginBottom: 8, color: 'rgba(0,0,0,0.5)', fontSize: 13, textTransform: 'uppercase' }}>О приложении</Title>}>
        <SimpleCell disabled subtitle="v4.0.0 Stable">Версия ZooPlatform Radar</SimpleCell>
        <SimpleCell disabled subtitle="VK Maps API & GeoLibrary">Технологии</SimpleCell>
      </Group>

      <Spacing size={80} />
    </Panel>
  );
};
