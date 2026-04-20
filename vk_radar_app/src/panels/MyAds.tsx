import { useState, useEffect, useCallback } from 'react';
import { Panel, PanelHeader, Text, Placeholder, Spacing, Group, Card, Button, Badge, RichCell, Avatar, Div, ModalPage, ModalPageHeader, PanelHeaderClose, FormLayoutGroup, FormItem, Input, Textarea, ToolButton } from '@vkontakte/vkui';
import { Icon56UserCircleOutline, Icon28WarningTriangleOutline, Icon28ArticleOutline, Icon24Write, Icon28CompassOutline, Icon28DeleteOutline } from '@vkontakte/icons';
import { vkFetch } from '../utils/api';
import { useRouteNavigator, useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_MODALS } from '../routes';

interface MyAdItem {
  id: string;
  type: 'pin' | 'post';
  subType: string;
  title: string;
  description: string;
  createdAt: string;
  lat?: number;
  lng?: number;
  status?: string;
}

interface MyAdsProps {
  id: string;
  isModalRoot?: boolean;
}

export const MyAds = ({ id, isModalRoot }: MyAdsProps) => {
  const [items, setItems] = useState<MyAdItem[]>([]);
  const [loading, setLoading] = useState(true);
  const routeNavigator = useRouteNavigator();
  const { modal: activeModal } = useActiveVkuiLocation();

  const [editingItem, setEditingItem] = useState<MyAdItem | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = useCallback(() => {
    setLoading(true);
    Promise.all([
      vkFetch('/radar/pins/my').catch(() => []),
      vkFetch('/posts/my').catch(() => [])
    ])
    .then(([pinsData, postsData]) => {
      let combined: MyAdItem[] = [];
      if (Array.isArray(pinsData)) {
        combined = combined.concat(pinsData.map(p => ({
          id: `pin_${p.id}`,
          type: 'pin',
          subType: p.type,
          title: p.title,
          description: p.description || '',
          createdAt: p.createdAt,
          lat: p.lat,
          lng: p.lng
        })));
      }
      if (Array.isArray(postsData)) {
        combined = combined.concat(postsData.map(p => ({
          id: `post_${p.id}`,
          type: 'post',
          subType: p.tag || 'Объявление',
          title: p.content ? p.content.split('\n')[0] : 'Без заголовка',
          description: p.content || '',
          createdAt: p.createdAt,
          status: p.status
        })));
      }
      combined.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setItems(combined);
    })
    .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!isModalRoot) loadData();
  }, [loadData, isModalRoot]);

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title,
        description: editingItem.description.replace(editingItem.title + '\n\n', '')
      });
    }
  }, [editingItem]);

  const saveEdit = async () => {
    if (!editingItem || !formData.title) return;
    setIsSaving(true);
    try {
      const dbId = editingItem.id.split('_')[1];
      if (editingItem.type === 'post') {
        const fullContent = formData.description ? `${formData.title}\n\n${formData.description}` : formData.title;
        await vkFetch(`/posts/${dbId}`, {
          method: 'PATCH',
          body: JSON.stringify({ content: fullContent, tag: editingItem.subType })
        });
      } else {
        await vkFetch(`/radar/pins/${dbId}`, {
          method: 'PATCH',
          body: JSON.stringify({ title: formData.title, description: formData.description })
        });
      }
      routeNavigator.hideModal();
      setEditingItem(null);
      loadData();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  const deleteItem = async (targetItem?: MyAdItem) => {
    const itemToDelete = targetItem || editingItem;
    if (!itemToDelete) return;
    if (!window.confirm('Вы уверены, что хотите удалить эту запись?')) return;
    
    setIsDeleting(true);
    try {
      const dbId = itemToDelete.id.split('_')[1];
      if (itemToDelete.type === 'post') {
        await vkFetch(`/posts/${dbId}`, { method: 'DELETE' });
      } else {
        await vkFetch(`/radar/pins/${dbId}`, { method: 'DELETE' });
      }
      setItems(prev => prev.filter(i => i.id !== itemToDelete.id));
      if (!targetItem || (editingItem && targetItem.id === editingItem.id)) {
        routeNavigator.hideModal();
        setEditingItem(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isModalRoot) {
    if (activeModal === DEFAULT_MODALS.EDIT_AD && editingItem) {
      return (
        <ModalPage 
          id={DEFAULT_MODALS.EDIT_AD} 
          onClose={() => { routeNavigator.hideModal(); setEditingItem(null); }}
          header={
            <ModalPageHeader 
              before={<PanelHeaderClose onClick={() => { routeNavigator.hideModal(); setEditingItem(null); }} />}
            >
              Редактировать
            </ModalPageHeader>
          }
        >
          <Group>
            <FormLayoutGroup mode="vertical">
              <FormItem top="Заголовок">
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                />
              </FormItem>
              <FormItem top="Описание">
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                />
              </FormItem>
              <FormItem>
                <Button size="l" stretched appearance="accent" loading={isSaving} onClick={saveEdit} className="rounded-lg">
                  Сохранить
                </Button>
              </FormItem>
              <FormItem>
                <Button 
                  size="l" stretched mode="secondary" appearance="negative" 
                  loading={isDeleting} onClick={() => deleteItem()}
                  before={<Icon28DeleteOutline />}
                  className="rounded-lg"
                >
                  Удалить
                </Button>
              </FormItem>
            </FormLayoutGroup>
          </Group>
        </ModalPage>
      );
    }
    return null;
  }

  const openEditModal = (item: MyAdItem) => {
    setEditingItem(item);
    routeNavigator.showModal(DEFAULT_MODALS.EDIT_AD);
  };

  const goToMap = (item: MyAdItem) => {
    if (item.lat && item.lng) {
      localStorage.setItem('radar_target_pin', JSON.stringify({ lat: item.lat, lng: item.lng }));
      routeNavigator.push('/');
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader delimiter="none">Объявления</PanelHeader>
      
      {loading ? (
        <Div style={{ textAlign: 'center', color: 'var(--vkui--color_text_secondary)' }}>Загрузка...</Div>
      ) : items.length === 0 ? (
        <Placeholder
          icon={<Icon56UserCircleOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
          action={<Button size="l" onClick={() => routeNavigator.push('/create_ad')} className="rounded-lg">Создать</Button>}
        >
          Здесь пока пусто
        </Placeholder>
      ) : (
        <Group style={{ padding: '0 8px' }}>
          <Div>
            <Button size="l" stretched appearance="accent" onClick={() => routeNavigator.push('/create_ad')} className="rounded-lg">
              Новая публикация
            </Button>
          </Div>
          {items.map(item => (
            <Card key={item.id} mode="shadow" style={{ marginBottom: 12, borderRadius: 8 }}>
              <RichCell
                disabled
                before={
                  <Avatar size={48} style={{ 
                    background: item.type === 'pin' && item.subType === 'sos' ? 'var(--vkui--color_background_negative_tint)' : 'var(--vkui--color_background_accent_tint)'
                  }}>
                    {item.type === 'post' ? <Icon28ArticleOutline style={{ color: 'var(--vkui--color_icon_accent)' }} /> : <Icon28WarningTriangleOutline style={{ color: 'var(--vkui--color_icon_negative)' }} />}
                  </Avatar>
                }
                subtitle={new Date(item.createdAt).toLocaleDateString()}
                after={
                  <Badge mode={item.type === 'pin' && item.subType === 'sos' ? 'prominent' : 'new'}>
                    {item.subType.toUpperCase()}
                  </Badge>
                }
              >
                {item.title}
              </RichCell>
              <Div style={{ paddingTop: 0 }}>
                <Text style={{ color: 'var(--vkui--color_text_secondary)', marginBottom: 12 }}>{item.description}</Text>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.lat && item.lng ? (
                    <Button 
                      size="m" mode="secondary" appearance="accent" onClick={() => goToMap(item)}
                      before={<Icon28CompassOutline height={20} width={20} />}
                      className="rounded-lg"
                    >
                      Карта
                    </Button>
                  ) : <div></div>}
                  <div style={{ display: 'flex', gap: 4 }}>
                    <ToolButton mode="secondary" onClick={() => openEditModal(item)} IconRegular={Icon24Write} IconCompact={Icon24Write} className="rounded-lg" />
                    <ToolButton mode="secondary" onClick={() => deleteItem(item)} IconRegular={Icon28DeleteOutline} IconCompact={Icon28DeleteOutline} className="rounded-lg" />
                  </div>
                </div>
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
