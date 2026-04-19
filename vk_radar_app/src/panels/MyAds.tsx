import { useState, useEffect, useCallback } from 'react';
import { Panel, PanelHeader, Text, Placeholder, Spacing, Group, Card, Button, Badge, RichCell, Avatar, Div, ModalPage, ModalPageHeader, PanelHeaderClose, FormLayoutGroup, FormItem, Input, Textarea, ToolButton } from '@vkontakte/vkui';
import { Icon56UserCircleOutline, Icon28DeleteOutline, Icon24DeleteOutline, Icon28WarningTriangleOutline, Icon28HomeOutline, Icon28ArticleOutline, Icon24Write, Icon28CompassOutline } from '@vkontakte/icons';
import { vkFetch } from '../utils/api';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useModal } from '../ModalContext';

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

export const MyAds = ({ id }: { id: string }) => {
  const [items, setItems] = useState<MyAdItem[]>([]);
  const [loading, setLoading] = useState(true);
  const routeNavigator = useRouteNavigator();
  const { setActiveModal, registerModal, unregisterModal } = useModal();

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
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title,
        description: editingItem.description.replace(editingItem.title + '\n\n', '') // Убираем заголовок из описания поста для чистого редактирования
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
      setActiveModal(null);
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
        setActiveModal(null);
        setEditingItem(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    if (editingItem) {
      registerModal('edit_ad', (
        <ModalPage 
          id="edit_ad" 
          onClose={() => { setActiveModal(null); setEditingItem(null); }}
          header={
            <ModalPageHeader 
              before={<PanelHeaderClose onClick={() => { setActiveModal(null); setEditingItem(null); }} />}
            >
              Редактировать
            </ModalPageHeader>
          }
        >
          <Group>
            <FormLayoutGroup mode="vertical">
              <FormItem top="Заголовок" htmlFor="edit_title">
                <Input 
                  id="edit_title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                />
              </FormItem>
              <FormItem top="Описание" htmlFor="edit_desc">
                <Textarea 
                  id="edit_desc"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                />
              </FormItem>
              
              <FormItem>
                <Button 
                  size="l" stretched 
                  appearance="accent" 
                  loading={isSaving} 
                  onClick={saveEdit}
                >
                  Опубликовать изменения
                </Button>
              </FormItem>
              <FormItem>
                <Button 
                  size="l" stretched 
                  mode="secondary"
                  appearance="negative" 
                  loading={isDeleting} 
                  onClick={() => deleteItem()}
                  before={<Icon28DeleteOutline />}
                >
                  Удалить навсегда
                </Button>
              </FormItem>
            </FormLayoutGroup>
          </Group>
        </ModalPage>
      ));
      
      return () => unregisterModal('edit_ad');
    }
  }, [editingItem, formData, isSaving, isDeleting, registerModal, unregisterModal, setActiveModal]);

  const openEditModal = (item: MyAdItem) => {
    setEditingItem(item);
    setActiveModal('edit_ad');
  };

  const goToMap = (item: MyAdItem) => {
    if (item.lat && item.lng) {
      localStorage.setItem('radar_target_pin', JSON.stringify({ lat: item.lat, lng: item.lng }));
      routeNavigator.push('/');
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader delimiter="none">Мои объявления</PanelHeader>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
          <div style={{ color: 'var(--vkui--color_text_secondary)' }}>Загрузка ваших объявлений...</div>
        </div>
      ) : items.length === 0 ? (
        <Placeholder
          icon={<Icon56UserCircleOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
          action={<Button size="l" onClick={() => routeNavigator.push('/create_ad')}>Создать объявление</Button>}
        >
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Вы пока ничего не создали</div>
          <Text weight="2" style={{ color: 'var(--vkui--color_text_secondary)', textAlign: 'center' }}>
            Все ваши SOS-сигналы, метки на карте и публикации будут отображаться здесь.
          </Text>
        </Placeholder>
      ) : (
        <Group style={{ padding: '0 12px' }}>
          <Div>
            <Button size="l" stretched appearance="accent" onClick={() => routeNavigator.push('/create_ad')}>
              Создать объявление
            </Button>
          </Div>
          <Text style={{ margin: '8px 4px 16px', color: 'var(--vkui--color_text_secondary)', fontSize: 13 }}>
            Всего записей: {items.length}
          </Text>
          {items.map(item => (
            <Card key={item.id} mode="shadow" style={{ marginBottom: 12 }}>
              <RichCell
                disabled
                before={
                  <Avatar 
                    size={48} 
                    style={{ 
                      background: item.type === 'pin' && item.subType === 'sos' ? 'var(--vkui--color_background_negative_tint)' 
                        : item.type === 'post' ? 'var(--vkui--color_background_accent_tint)'
                        : 'var(--vkui--color_background_positive_tint)' 
                    }}
                  >
                    {item.type === 'post' ? <Icon28ArticleOutline style={{ color: 'var(--vkui--color_icon_accent)' }} /> 
                     : item.subType === 'sos' ? <Icon28WarningTriangleOutline style={{ color: 'var(--vkui--color_icon_negative)' }} /> 
                     : <Icon28HomeOutline style={{ color: 'var(--vkui--color_icon_positive)' }} />}
                  </Avatar>
                }
                subtitle={new Date(item.createdAt).toLocaleDateString()}
                after={
                  <Badge mode={item.type === 'pin' && item.subType === 'sos' ? 'prominent' : 'new'}>
                    {item.type === 'post' ? item.subType.toUpperCase() : item.subType === 'sos' ? 'SOS' : item.subType === 'lost' ? 'ПОТЕРЯН' : 'ПРИСТРОЙ'}
                  </Badge>
                }
              >
                {item.title}
              </RichCell>
              
              <Div style={{ paddingTop: 0 }}>
                <Text style={{ color: 'var(--vkui--color_text_secondary)', marginBottom: 16 }}>{item.description}</Text>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.type === 'post' ? (
                    <Text weight="3" style={{ fontSize: 13, color: item.status === 'pending' ? 'var(--vkui--color_text_secondary)' : 'var(--vkui--color_text_positive)' }}>
                      {item.status === 'pending' ? '⏳ На модерации' : item.status === 'approved' ? '✅ Опубликовано' : '❌ Отклонено'}
                    </Text>
                  ) : item.lat && item.lng ? (
                    <Button 
                      size="m" 
                      mode={item.subType === 'sos' ? 'primary' : 'secondary'}
                      appearance={item.subType === 'sos' ? 'negative' : 'accent'}
                      onClick={() => goToMap(item)}
                      before={<Icon28CompassOutline height={20} width={20} />}
                    >
                      На карту
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  <div style={{ display: 'flex', gap: 4 }}>
                    <ToolButton 
                      mode="secondary"
                      aria-label="Настройки" 
                      onClick={() => openEditModal(item)}
                      IconRegular={Icon24Write}
                      IconCompact={Icon24Write}
                    />
                    <ToolButton 
                      mode="secondary"
                      aria-label="Удалить" 
                      onClick={() => deleteItem(item)}
                      IconRegular={Icon24DeleteOutline}
                      IconCompact={Icon24DeleteOutline}
                    />
                  </div>
                </div>
              </Div>
            </Card>
          ))}
          <Spacing size={80} />
        </Group>
      )}
    </Panel>
  );
};
