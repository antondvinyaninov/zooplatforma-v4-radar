import { useState, useEffect } from 'react';
import bridgePkg, { UserInfo } from '@vkontakte/vk-bridge';
import { vkFetch } from '../utils/api';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { ModerationPostCard } from '../components/ModerationPostCard';
import { 
  SplitLayout, 
  SplitCol, 
  View, 
  Panel, 
  Group, 
  FormItem, 
  Textarea, 
  Button, 
  ModalRoot, 
  ModalCard,
  Flex,
  Tabs,
  TabsItem,
  Header,
  MiniInfoCell,
  Spacing,
  Title,
  Avatar,
  File,
  Input,
  Spinner,
  CustomSelect,
  CustomSelectOption,
  Checkbox,
  Accordion,
  SegmentedControl
} from '@vkontakte/vkui';
import { Icon20CheckCircleOn, Icon20ErrorCircleOutline, Icon24CameraOutline, Icon16Clear, Icon20InfoCircleOutline, Icon24WriteOutline, Icon24DeleteOutline, Icon24Settings, Icon24ShareOutline, Icon24NotificationOutline } from '@vkontakte/icons';

import { ScheduleList } from '../components/ScheduleList';

const bridge = bridgePkg && 'default' in bridgePkg ? (bridgePkg as any).default : bridgePkg;

export const Home = ({ id }: { id: string }) => {
  const routeNavigator = useRouteNavigator();
  const [activeTab, setActiveTab] = useState<'ads' | 'settings' | 'moderation'>(
    (typeof window !== 'undefined' && window.location.hash.includes('moderation')) ? 'moderation' : 'ads'
  );
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [postText, setPostText] = useState('');
  const [groupId, setGroupId] = useState<string | null>(null);
  const [groupRole, setGroupRole] = useState<string | null>(null);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [moderationTab, setModerationTab] = useState<'pending'|'approved'|'published'>('pending');
  const [posts, setPosts] = useState<any[]>([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const [media, setMedia] = useState<{url: string, type: string, file?: File}[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [approvingPostId, setApprovingPostId] = useState<number | null>(null);
  const [publishDate, setPublishDate] = useState<string>('');
  
  const [cities, setCities] = useState<any[]>([]);
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<any | null>(null);
  
  const [dutyAdminId, setDutyAdminId] = useState('');
  const [managers, setManagers] = useState<any[]>([]);
  const [notifyAdminIds, setNotifyAdminIds] = useState<string[]>([]);
  const [acceptCrossPosts, setAcceptCrossPosts] = useState(false);
  const [acceptedTags, setAcceptedTags] = useState<string[]>(['Найден', 'Потерян', 'Ищет дом', 'Сборы', 'Инфо']);
  const [scheduleIntervalMinutes, setScheduleIntervalMinutes] = useState(60);
  const [scheduleStartTime, setScheduleStartTime] = useState('09:00');
  const [scheduleEndTime, setScheduleEndTime] = useState('21:00');
  const [partnerGroups, setPartnerGroups] = useState<any[]>([]);
  const [selectedPartnerGroups, setSelectedPartnerGroups] = useState<string[]>([]);
  const [chatLink, setChatLink] = useState('');
  const [isShortening, setIsShortening] = useState(false);

  useEffect(() => {
    if (!citySearchQuery) {
      setCities([]);
      return;
    }
    const t = setTimeout(() => {
      vkFetch(`/utils/cities?q=${encodeURIComponent(citySearchQuery)}`).then(res => {
        if (res && res.items) setCities(res.items);
      });
    }, 400);
    return () => clearTimeout(t);
  }, [citySearchQuery]);

  useEffect(() => {
    setPosts([]);
    setIsFetchingPosts(true);

    if (activeTab === 'moderation') {
      vkFetch(`/posts/moderation?status=${moderationTab}`)
        .then(data => {
          if (Array.isArray(data)) setPosts(data);
        })
        .catch((e) => console.error("API Error", e))
        .finally(() => setIsFetchingPosts(false));
    } else if (activeTab === 'ads') {
      vkFetch('/posts/my')
        .then(data => {
          if (Array.isArray(data)) {
            const formattedPosts = data.map((p: any) => ({
              id: p.id,
              text: p.content,
              media: p.media,
              tag: p.tag,
              date: p.createdAt,
              status: p.status
            }));
            setPosts(formattedPosts);
          }
        })
        .catch((e) => console.error("API Error", e))
        .finally(() => setIsFetchingPosts(false));
    }
  }, [activeTab, moderationTab]);

  useEffect(() => {
    if (activeTab === 'settings' && groupId) {
      vkFetch(`/community/${groupId}/managers`).then(res => {
        if (res) {
           if (res.items) setManagers(res.items);
           if (res.community) {
             if (res.community.notifyAdminIds) setNotifyAdminIds(res.community.notifyAdminIds);
             if (res.community.acceptCrossPosts !== undefined) setAcceptCrossPosts(res.community.acceptCrossPosts);
             if (res.community.acceptedTags?.length > 0) setAcceptedTags(res.community.acceptedTags);
             if (res.community.cityId) setSelectedCity({ id: res.community.cityId, title: res.community.cityName, region: res.community.regionName });
             if (res.community.dutyAdminId) setDutyAdminId(res.community.dutyAdminId);
             if (res.community.scheduleIntervalMinutes) setScheduleIntervalMinutes(res.community.scheduleIntervalMinutes);
             if (res.community.scheduleStartTime) setScheduleStartTime(res.community.scheduleStartTime);
             if (res.community.scheduleEndTime) setScheduleEndTime(res.community.scheduleEndTime);
           }
        }
      }).catch(console.error);
    }
  }, [activeTab, groupId]);

  useEffect(() => {
    // Кросс-постинг убран — очищаем на всякий случай
    setPartnerGroups([]);
    setSelectedPartnerGroups([]);
  }, [activeTab, showAddForm, selectedCity, groupId]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlGroupId = params.get('vk_group_id');
    const urlGroupRole = params.get('vk_viewer_group_role');
    const rawSearch = window.location.search;
    
    setGroupId(urlGroupId);
    setGroupRole(urlGroupRole);
    (window as any).debugSearch = rawSearch;

    // Подставляем мок-данные при локальной разработке
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      setTimeout(() => {
        setGroupId(urlGroupId || '123');
        setGroupRole(urlGroupRole || 'admin'); // Изменено на 'admin', чтобы были видны Настройки
        setUser({
          id: 123456,
          first_name: 'Денис',
          last_name: 'Тестировщик',
          photo_200: 'https://sun1-89.userapi.com/s/v1/ig2/lGPEW82D9W2sZfVlYl0W7sZfVlYl0W7sZfVlYl0.jpg?size=200x200&quality=95&crop=0,0,500,500&ava=1',
        } as any);
      }, 300);
    } else {
      bridge.send('VKWebAppGetUserInfo').then(setUser).catch(console.error);
    }
  }, []);

  const MODAL_CONFIRM = 'confirm_publish';
  const MODAL_APPROVE = 'approve_time';

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
      <ModalCard
        id={MODAL_CONFIRM}
        onClose={() => setActiveModal(null)}
        title="Подтверждение"
        description="Вы уверены, что хотите опубликовать эту запись?"
        actions={
          <Flex direction="column" gap={8} style={{ width: '100%' }}>
            <Button size="l" mode="primary" stretched onClick={async () => {
              setActiveModal(null);
              try {
                // 1. Сначала загружаем все выбранные файлы на /upload
                const uploadedMedia = [];
                for (const item of media) {
                  if (item.file) {
                    const formData = new FormData();
                    formData.append('media', item.file);
                    const uploadData = await vkFetch('/upload', {
                      method: 'POST',
                      body: formData // browser will set multipart/form-data boundary automatically
                    });
                    uploadedMedia.push({ url: uploadData.url, type: uploadData.type });
                  } else {
                    uploadedMedia.push({ url: item.url, type: item.type });
                  }
                }

                // 2. Публикуем пост только в текущую группу
                const p = await vkFetch('/posts', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ 
                    content: postText, 
                    tag: selectedTag, 
                    media: uploadedMedia,
                    groupIds: [String(groupId)],
                    cityId: selectedCity?.id || null,
                    cityName: selectedCity?.title || null,
                    regionName: selectedCity?.region || null,
                    chatLink: selectedTag === 'Сборы' ? chatLink : null
                  })
                });
                
                // Keep the UI optimistic by formatting the resulting DB object to match frontend state
                const newPost = { id: p.id, text: p.content, media: p.media, tag: p.tag,  date: p.createdAt, status: p.status };
                setPosts([newPost, ...posts]);
                setPostText('');
                setMedia([]);
                setSelectedTag(null);
                setChatLink('');
                setShowPreview(false);
                setShowAddForm(false);
              } catch (e) {
                console.error(e);
                alert("Ошибка публикации API");
              }
            }}>
              Опубликовать
            </Button>
            <Button size="l" mode="secondary" stretched onClick={() => setActiveModal(null)}>
              Отмена
            </Button>
          </Flex>
        }
      />

      <ModalCard
        id={MODAL_APPROVE}
        onClose={() => { setActiveModal(null); setApprovingPostId(null); }}
        title="Время публикации"
        description="Выберите дату и время для отсроченной публикации. Если оставить пустым, запись выйдет сейчас."
        actions={
          <Flex direction="column" gap={8} style={{ width: '100%' }}>
            <Button size="l" mode="primary" stretched onClick={async () => {
              if (approvingPostId) {
                await vkFetch(`/posts/${approvingPostId}/status`, { 
                  method: 'PATCH', 
                  headers: { 'Content-Type': 'application/json' }, 
                  body: JSON.stringify({ status: 'approved', publishDate: publishDate || undefined }) 
                });
                setPosts(posts.filter(p => p.id !== approvingPostId));
                setActiveModal(null);
                setApprovingPostId(null);
              }
            }}>
              Одобрить и запланировать
            </Button>
          </Flex>
        }
      >
        <FormItem top="Дата и время" style={{ padding: 0, marginTop: 16 }}>
          <Input 
            type="datetime-local" 
            value={publishDate} 
            onChange={e => setPublishDate(e.target.value)} 
          />
        </FormItem>
      </ModalCard>
    </ModalRoot>
  );

  const handleArchivePost = async (id: number) => {
    try {
      await vkFetch(`/posts/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status: 'published' })
      });
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (e) {
      console.error(e);
      alert('Ошибка при архивации поста');
    }
  };

  return (
    <>
      <SplitLayout>
        <SplitCol width="100%">
          <View activePanel={id}>
            <Panel id={id}>
              <Spacing size={6} />
              <Group mode="plain" style={{ padding: 0, background: 'transparent' }}>
                <div style={{ display: 'flex', alignItems: 'stretch', gap: '8px', width: '100%' }}>
                  {/* 1. Карточка логотипа */}
                  <style>{`
                    @media (max-width: 600px) {
                      .hide-on-mobile {
                        display: none !important;
                      }
                    }
                  `}</style>
                  {/* 2. Карточка вкладок и переключателя темы */}
                  <div style={{ 
                    background: 'var(--vkui--color_background_content)', 
                    borderRadius: 12, 
                    overflow: 'hidden', 
                    flex: 1,
                    boxShadow: 'var(--vkui--elevation1, 0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 4px 16px 0px rgba(0, 0, 0, 0.04))'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 12, height: '100%', width: '100%', boxSizing: 'border-box' }}>
                      <Tabs style={{ flexGrow: 1, paddingLeft: 8 }}>
                        <TabsItem
                          selected={activeTab === 'ads'}
                          onClick={() => {
                            setActiveTab('ads');
                            setShowAddForm(false);
                          }}
                        >
                          Объявления
                        </TabsItem>
                        {groupRole === 'admin' && (
                          <>
                            <TabsItem
                              selected={activeTab === 'moderation'}
                              onClick={() => setActiveTab('moderation')}
                            >
                              Модерация
                            </TabsItem>
                            <TabsItem
                              selected={activeTab === 'settings'}
                              onClick={() => setActiveTab('settings')}
                            >
                              Настройки
                            </TabsItem>
                          </>
                        )}
                      </Tabs>
                    </div>
                  </div>
                </div>
              </Group>

              {activeTab === 'ads' && !showAddForm && (
                <>
                  <style>{`
                    .hero-banner-content {
                      display: flex;
                      align-items: center;
                      gap: 24px;
                      width: 100%;
                      position: relative;
                      overflow: hidden;
                      padding: 36px 28px;
                      box-sizing: border-box;
                    }
                    .hero-header-wrap {
                      display: flex;
                      align-items: center;
                      gap: 24px;
                      z-index: 1;
                    }
                    .hero-checks-wrap {
                      margin-left: auto;
                      z-index: 1;
                      display: flex;
                      flex-direction: column;
                      gap: 8px;
                    }
                    .hero-check-badge {
                      background: rgba(255,255,255,0.15);
                      backdrop-filter: blur(12px);
                      -webkit-backdrop-filter: blur(12px);
                      padding: 8px 12px;
                      border-radius: 12px;
                      border: 1px solid rgba(255,255,255,0.25);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 8px;
                      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                      transition: all 0.2s ease;
                    }
                    @media (max-width: 600px) {
                      .hero-banner-content {
                        flex-direction: column;
                        align-items: stretch;
                        padding: 24px 20px;
                        gap: 20px;
                      }
                      .hero-header-wrap {
                        gap: 16px;
                      }
                      .hero-checks-wrap {
                        margin-left: 0;
                        width: 100%;
                      }
                      .hero-check-badge {
                        width: 100%;
                        box-sizing: border-box;
                      }
                      /* We can target the Avatar via its container styling */
                    }
                  `}</style>
                  <Group mode="plain" style={{ padding: 0 }}>
                   <div style={{ 
                      borderRadius: 12, 
                      overflow: 'hidden', 
                      boxShadow: 'var(--vkui--elevation1, 0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 4px 16px 0px rgba(0, 0, 0, 0.04))' 
                   }}>
                    {/* Ultra-Premium Hero Banner Area */}
                    <div 
                      className="hero-banner-content"
                      style={{ 
                        background: 'linear-gradient(135deg, #0077FF 0%, #0044FF 100%)', 
                        color: '#FFFFFF'
                      }}
                    >
                      {/* Floating glowing orbs for a modern macOS/iOS glass effect */}
                      <div style={{ position: 'absolute', top: -40, right: -20, width: 140, height: 140, background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(10px)' }} />
                      <div style={{ position: 'absolute', bottom: -50, right: 80, width: 180, height: 180, background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(20px)' }} />
                      <div style={{ position: 'absolute', top: 20, left: -20, width: 100, height: 100, background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(15px)' }} />
                      
                      <div className="hero-header-wrap">
                        <Avatar 
                          size={72} 
                          src={user?.photo_200} 
                          initials={user?.first_name ? user.first_name[0] : '🐾'}
                          style={{ border: '4px solid rgba(255,255,255,0.4)', boxShadow: '0 8px 16px rgba(0,119,255,0.3)', flexShrink: 0, background: '#CCE4FF', color: '#0077FF' }} 
                        />
                        
                        <div style={{ zIndex: 1, textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                          <Title level="1" weight="1" style={{ marginBottom: 6, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                            Привет, {user?.first_name || 'друг'}! 👋
                          </Title>
                          <div style={{ fontSize: 16, opacity: 0.95, lineHeight: 1.4, fontWeight: 500 }}>
                            Вместе мы помогаем хвостикам <br/>найти свой дом.
                          </div>
                        </div>
                      </div>

                      {/* Onboarding Checks Area */}
                      <div className="hero-checks-wrap">
                        {groupId ? (
                          <>
                            <div className="hero-check-badge"
                              style={{ cursor: (groupRole === 'none' || !groupRole) ? 'pointer' : 'default' }}
                              onClick={() => {
                                if (groupRole === 'none' || !groupRole) {
                                  // В реальном приложении: bridge.send('VKWebAppJoinGroup', { group_id: Number(groupId) })
                                  // Для демо просто меняем статус
                                  setGroupRole('member');
                                }
                              }}>
                              {groupRole && groupRole !== 'none' ? (
                                <>
                                  <Icon20CheckCircleOn fill="#4BB34B" />
                                  <span style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>Вы в сообществе ({groupRole})</span>
                                </>
                              ) : (
                                <>
                                  <Icon20ErrorCircleOutline fill="#FF3347" />
                                  <span style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>Подписаться</span>
                                </>
                              )}
                            </div>
                            
                            <div className="hero-check-badge"
                              style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.25)' }}
                              onClick={async () => {
                                try {
                                  await bridge.send('VKWebAppAllowMessagesFromGroup', { group_id: Number(groupId) });
                                  alert('Разрешение получено! Теперь ваш бекенд может отправлять сообщения в личку этому пользователю.');
                                } catch (error) {
                                  console.error('Пользователь отменил или произошла ошибка:', error);
                                }
                              }}>
                              <Icon24WriteOutline width={18} height={18} fill="#fff" />
                              <span style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>Отправить "Привет"</span>
                            </div>
                          </>
                        ) : (
                          <div className="hero-check-badge">
                            <span style={{ fontSize: 11, fontWeight: 500, color: '#fff', opacity: 0.8 }}>
                              Запуск вне группы<br/>
                              Role: {groupRole || 'null'}, ID: {groupId || 'null'}<br/>
                              URL: {(window as any).debugSearch?.substring(0, 30)}...
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{ padding: '16px 20px', background: 'var(--vkui--color_background_content)' }}>
                      <Button size="l" stretched mode="primary" onClick={() => routeNavigator.push('/create_post')}>
                        Добавить объявление
                      </Button>
                    </div>
                   </div>
                  </Group>

                  <Group mode="card" style={{ borderRadius: 12, overflow: 'hidden' }}>
                    <Header>Мои объявления</Header>
                    {posts.length === 0 ? (
                      <div style={{ padding: '32px 16px', color: 'var(--vkui--color_text_subhead)', textAlign: 'center' }}>
                        Здесь будет список ваших активных объявлений. Создайте первую запись!
                      </div>
                    ) : (
                      <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {posts.map(post => (
                          <div key={post.id} style={{ 
                            padding: 16, 
                            borderRadius: 12, 
                            background: 'var(--vkui--color_background_content)',
                            border: '1px solid var(--vkui--color_separator_primary)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Avatar size={36} src={user?.photo_200} initials={user?.first_name ? user.first_name[0] : '🐾'} />
                                <div>
                                  <div style={{ fontSize: 14, fontWeight: 500 }}>
                                    {user?.first_name || 'Вы'} {user?.last_name || ''} <span style={{color: 'var(--vkui--color_text_subhead)', fontWeight: 400}}>• Запись #{post.id}</span>
                                  </div>
                                  <div style={{ fontSize: 13, color: 'var(--vkui--color_text_subhead)' }}>{post.createdAt ? new Date(post.createdAt).toLocaleString() : 'Только что'}</div>
                                </div>
                              </div>
                              <div style={{ display: 'flex', gap: 4, margin: '-8px -8px 0 0' }}>
                                <div 
                                  style={{ padding: 8, cursor: 'pointer', color: 'var(--vkui--color_icon_secondary)', borderRadius: '50%', transition: 'background 0.2s' }}
                                  onClick={() => {
                                    setPostText(post.text || '');
                                    setMedia(post.media || []);
                                    setSelectedTag(post.tag || null);
                                    setShowPreview(false);
                                    setShowAddForm(true);
                                    setPosts(posts.filter(p => p.id !== post.id));
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  title="Редактировать"
                                >
                                  <Icon24WriteOutline />
                                </div>
                                <div 
                                  style={{ padding: 8, cursor: 'pointer', color: 'var(--vkui--color_icon_secondary)', borderRadius: '50%', transition: 'background 0.2s' }}
                                  onClick={() => setPosts(posts.filter(p => p.id !== post.id))}
                                  title="Удалить"
                                >
                                  <Icon24DeleteOutline />
                                </div>
                              </div>
                            </div>
                            {post.tag && (
                              <div style={{ display: 'inline-block', padding: '4px 8px', borderRadius: 8, background: 'var(--vkui--color_background_secondary)', color: 'var(--vkui--color_text_primary)', fontSize: 12, fontWeight: 500, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.2px' }}>
                                # {post.tag}
                              </div>
                            )}
                            {post.media && post.media.length > 0 && (
                              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                                {post.media.map((item: {url: string, type: string}, i: number) => (
                                  <div key={i} style={{ width: 100, height: 100, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--vkui--color_separator_primary)', position: 'relative' }}>
                                    {item.type === 'video' ? (
                                      <video src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} controls controlsList="nodownload" />
                                    ) : (
                                      <div style={{ width: '100%', height: '100%', backgroundImage: `url(${item.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            <div style={{ fontSize: 15, lineHeight: 1.4, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                              {post.text}
                            </div>
                            
                            <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid var(--vkui--color_separator_primary)', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--vkui--color_background_secondary)', padding: '4px 8px', borderRadius: 8 }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: post.status === 'approved' ? 'var(--vkui--color_icon_positive)' : post.status === 'rejected' ? 'var(--vkui--color_icon_negative)' : 'var(--vkui--color_icon_accent)' }} />
                                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--vkui--color_text_primary)' }}>
                                  {post.status === 'approved' ? 'Опубликовано' : post.status === 'rejected' ? 'Отклонено' : 'На модерации'}
                                </span>
                              </div>
                              <div style={{ fontSize: 13, color: 'var(--vkui--color_text_subhead)' }}>
                                {post.status === 'approved' 
                                  ? `Размещено ${new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })}` 
                                  : post.status === 'rejected' ? 'Отклонено модератором' : 'Ожидает проверки модератором'}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </Group>
                </>
              )}

              {activeTab === 'ads' && showAddForm && (
                <Group mode="card" style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <Header>
                    Новое объявление
                  </Header>
                  <FormItem top="Категория">
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {['Найден', 'Потерян', 'Ищет дом', 'Сборы', 'Инфо'].map((tag) => (
                        <div 
                          key={tag}
                          onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                          style={{
                            padding: '6px 14px',
                            borderRadius: 16,
                            fontSize: 14,
                            cursor: 'pointer',
                            fontWeight: 500,
                            background: selectedTag === tag ? 'var(--vkui--color_background_accent)' : 'var(--vkui--color_background_secondary)',
                            color: selectedTag === tag ? '#fff' : 'var(--vkui--color_text_primary)',
                            transition: 'all 0.2s',
                            userSelect: 'none'
                          }}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </FormItem>
                  
                  {selectedTag === 'Сборы' && (
                    <FormItem top="Ссылка-приглашение в чат помощи" bottom="Куда добавляться желающим помочь (https://vk.me/join/...)">
                      <div style={{ display: 'flex', gap: 8 }}>
                        <Input
                          type="url"
                          placeholder="Вставьте ссылку на беседу ВК..."
                          value={chatLink}
                          onChange={(e) => setChatLink(e.target.value)}
                          style={{ flex: 1 }}
                        />
                        {chatLink && !chatLink.includes('vk.cc') && (
                          <Button 
                            mode="secondary" 
                            disabled={isShortening}
                            loading={isShortening}
                            onClick={async () => {
                              setIsShortening(true);
                              try {
                                const res = await vkFetch('/utils/shorten', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ url: chatLink })
                                });
                                if (res.short_url) setChatLink(res.short_url);
                                else alert('Не удалось сократить ссылку');
                              } catch (e) {
                                alert('Не удалось сократить ссылку');
                              } finally {
                                setIsShortening(false);
                              }
                            }}
                          >
                            vk.cc
                          </Button>
                        )}
                      </div>
                    </FormItem>
                  )}

                  <FormItem top="Текст записи">
                    <Textarea 
                      placeholder="Что будем искать или отдавать?" 
                      style={{ minHeight: 140 }}
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                    />
                  </FormItem>

                  <FormItem>
                    <File 
                      before={<Icon24CameraOutline />} 
                      mode="secondary" 
                      multiple 
                      accept="image/*,video/*"
                      onChange={(e: any) => {
                        if (!e.target.files?.length) return;
                        const files = Array.from(e.target.files) as File[];
                        const newMedia = files.map(f => ({
                          url: URL.createObjectURL(f),
                          type: f.type.startsWith('video/') ? 'video' : 'image',
                          file: f
                        }));
                        setMedia([...media, ...newMedia]);
                        e.target.value = '';
                      }}
                    >
                      Прикрепить фото или видео
                    </File>
                    {media.length > 0 && (
                      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                        {media.map((item, i) => (
                          <div key={i} style={{ width: 80, height: 80, borderRadius: 12, position: 'relative', overflow: 'hidden', border: '1px solid var(--vkui--color_separator_primary)' }}>
                            {item.type === 'video' ? (
                              <video src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} muted playsInline />
                            ) : (
                              <div style={{ width: '100%', height: '100%', backgroundImage: `url(${item.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            )}
                            <div 
                              style={{ position: 'absolute', top: 4, right: 4, background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: 4, cursor: 'pointer', display: 'flex' }} 
                              onClick={() => setMedia(media.filter((_, index) => index !== i))}
                            >
                              <Icon16Clear fill="#fff" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </FormItem>

                  <FormItem top="Город" bottom="Животное будет привязано к этому городу">
                    <CustomSelect
                      placeholder="Начните вводить название..."
                      searchable
                      onInputChange={(e) => setCitySearchQuery(e.target.value)}
                      options={cities.map((city: any) => ({
                        label: `${city.title}${city.region ? ` (${city.region})` : ''}`,
                        value: city.id,
                        cityData: city
                      }))}
                      value={selectedCity?.id}
                      onChange={(e) => {
                        const targetCity = cities.find((c: any) => c.id === Number(e.target.value));
                        if (targetCity) setSelectedCity(targetCity);
                      }}
                      renderOption={({ option, ...restProps }) => {
                        const { cityData, ...validProps } = restProps as any;
                        return (
                          <CustomSelectOption {...validProps} description={option.cityData?.region}>
                            {option.cityData?.title}
                          </CustomSelectOption>
                        );
                      }}
                    />
                  </FormItem>


                  <div style={{ padding: '6px 16px 16px' }}>
                    <MiniInfoCell 
                      before={<Icon20InfoCircleOutline fill="var(--vkui--color_icon_accent)" />} 
                      textWrap="full" 
                      style={{ background: 'var(--vkui--color_background_secondary)', borderRadius: 12, padding: '8px 12px' }}
                    >
                      Пожалуйста, убедитесь, что у вас <b>открыты личные сообщения</b>, чтобы другие пользователи могли связаться с вами по поводу объявления.
                    </MiniInfoCell>
                  </div>

                  <FormItem>
                    <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
                      <Flex gap={8}>
                        <Button 
                          size="l" 
                          stretched 
                          onClick={() => setActiveModal(MODAL_CONFIRM)}
                          disabled={!postText.trim() && media.length === 0}
                        >
                          Опубликовать
                        </Button>
                        <Button 
                          size="l" 
                          mode="secondary"
                          stretched 
                          onClick={() => setShowPreview(!showPreview)}
                        >
                          {showPreview ? 'Скрыть превью' : 'Предпросмотр'}
                        </Button>
                      </Flex>
                      <Button 
                        size="l" 
                        mode="tertiary" 
                        stretched
                        onClick={() => setShowAddForm(false)}
                      >
                        Отмена
                      </Button>
                    </div>
                  </FormItem>

                  {showPreview && (postText.trim() || media.length > 0 || selectedTag) && (
                    <>
                      <Header>Предпросмотр записи</Header>
                      <div style={{ padding: '0 16px 16px' }}>
                        <div style={{ 
                          padding: 16, 
                          borderRadius: 12, 
                          background: 'var(--vkui--color_background_content)',
                          border: '1px solid var(--vkui--color_separator_primary)',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                            <Avatar size={36} src={user?.photo_200} initials={user?.first_name ? user.first_name[0] : '🐾'} />
                            <div>
                              <div style={{ fontSize: 14, fontWeight: 500 }}>{user?.first_name || 'Вы'} {user?.last_name || ''}</div>
                              <div style={{ fontSize: 13, color: 'var(--vkui--color_text_subhead)' }}>Только что</div>
                            </div>
                          </div>
                          {selectedTag && (
                            <div style={{ display: 'inline-block', padding: '4px 8px', borderRadius: 8, background: 'var(--vkui--color_background_secondary)', color: 'var(--vkui--color_text_primary)', fontSize: 12, fontWeight: 500, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.2px' }}>
                              # {selectedTag}
                            </div>
                          )}
                          {media && media.length > 0 && (
                            <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                              {media.map((item: {url: string, type: string}, i: number) => (
                                <div key={i} style={{ width: 100, height: 100, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--vkui--color_separator_primary)', position: 'relative' }}>
                                  {item.type === 'video' ? (
                                    <video src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} muted playsInline />
                                  ) : (
                                    <div style={{ width: '100%', height: '100%', backgroundImage: `url(${item.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          <div style={{ fontSize: 15, lineHeight: 1.4, whiteSpace: 'pre-wrap', wordBreak: 'break-word', opacity: postText ? 1 : 0.6 }}>
                            {postText || 'Текст объявления...'}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </Group>
              )}

              {activeTab === 'moderation' && (
                <div style={{ padding: '16px' }}>
                  <SegmentedControl
                    size="m"
                    name="moderationTabs"
                    options={[
                      { label: 'Предложенные', value: 'pending' },
                      { label: 'Расписание', value: 'approved' },
                      { label: 'Архив', value: 'published' }
                    ]}
                    value={moderationTab}
                    onChange={(v) => setModerationTab(v as any)}
                    style={{ marginBottom: 16 }}
                  />
                  <Group mode="card" style={{ borderRadius: 12, overflow: 'hidden' }}>
                    <Header>{moderationTab === 'pending' ? 'Очередь постов' : moderationTab === 'approved' ? 'Расписание постов' : 'Архив постов'}</Header>
                    {isFetchingPosts ? (
                      <div style={{ padding: '32px 16px', display: 'flex', justifyContent: 'center' }}>
                        <Spinner size="m" />
                      </div>
                    ) : posts.length === 0 ? (
                      <div style={{ padding: '32px 16px', color: 'var(--vkui--color_text_subhead)', textAlign: 'center' }}>
                        {moderationTab === 'pending' ? 'Очередь чиста. Все предложенные записи проверены!' :
                         moderationTab === 'approved' ? 'В расписании пока нет постов' :
                         'Архив пуст'}
                      </div>
                    ) : moderationTab === 'approved' ? (
                      <div style={{ padding: '0 16px 16px' }}>
                        <ScheduleList
                          posts={posts}
                          setPosts={setPosts}
                          intervalMinutes={scheduleIntervalMinutes}
                          onContentUpdated={(id: number, content: string) => {
                            setPosts(prev => prev.map(p => p.id === id ? { ...p, text: content, content } : p));
                          }}
                          onArchive={handleArchivePost}
                        />
                      </div>
                    ) : (
                      <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {posts.map(post => (
                          <ModerationPostCard
                            key={post.id}
                            post={post}
                            onApprove={(id) => {
                              setApprovingPostId(id);
                              setPublishDate('');
                              setActiveModal(MODAL_APPROVE);
                            }}
                            onReject={async (id) => {
                              await vkFetch(`/posts/${id}/status`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: 'rejected' }) });
                              setPosts(posts.filter(p => p.id !== id));
                            }}
                            onContentUpdated={(id: number, content: string) => {
                              setPosts(posts.map(p => p.id === id ? { ...p, content } : p));
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </Group>
                </div>
              )}

              {activeTab === 'settings' && (
                <Group mode="card" style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <Header>Настройки сообщества</Header>
                  
                  {groupRole === 'admin' ? (
                    <>
                      <div style={{ padding: '0 16px 16px' }}>
                        <Button 
                          size="l" 
                          stretched 
                          mode="primary" 
                          onClick={() => routeNavigator.push('/moderation')}
                        >
                          Перейти к модерации предложки
                        </Button>
                      </div>
                      <Accordion defaultExpanded>
                          <Accordion.Summary>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <Icon24Settings fill="var(--vkui--color_icon_accent)" />
                              <span style={{ fontSize: 16, fontWeight: 500 }}>Базовые параметры сообщества</span>
                            </div>
                          </Accordion.Summary>
                          <Accordion.Content>
                            <FormItem top="Город сообщества" bottom="Будет подставляться как хештег">
                              <CustomSelect
                                placeholder="Начните вводить название..."
                                searchable
                                onInputChange={(e) => setCitySearchQuery(e.target.value)}
                                options={cities.map(c => ({
                                  label: `${c.title} (${c.region || 'Россия'})`,
                                  value: c.id,
                                  cityData: c
                                }))}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  const city = cities.find(c => c.id === val);
                                  if (city) setSelectedCity(city);
                                }}
                                value={selectedCity?.id}
                                renderOption={({ option, ...restProps }) => {
                                  const { cityData, ...validProps } = restProps as any;
                                  return (
                                    <div {...validProps} style={{ padding: '8px 16px', cursor: 'pointer' }}>
                                      <div style={{ fontSize: 15 }}>{option.cityData?.title}</div>
                                      <div style={{ fontSize: 13, color: 'var(--vkui--color_text_subhead)' }}>{option.cityData?.region || 'Россия'}</div>
                                    </div>
                                  );
                                }}
                              />
                            </FormItem>
                            <FormItem top="Какие категории (теги) вы принимаете?" bottom="Если снять галочку, авторы не смогут предложить вам пост с таким тегом">
                              {['Найден', 'Потерян', 'Ищет дом', 'Сборы', 'Инфо'].map(tag => (
                                <Checkbox
                                  key={tag}
                                  checked={acceptedTags.includes(tag)}
                                  onChange={(e) => {
                                    if (e.target.checked) setAcceptedTags(prev => [...prev, tag]);
                                    else setAcceptedTags(prev => prev.filter(t => t !== tag));
                                  }}
                                >
                                  <span style={{ fontSize: 15 }}>{tag}</span>
                                </Checkbox>
                              ))}
                            </FormItem>
                          </Accordion.Content>
                      </Accordion>

                      <div style={{ padding: '0 16px' }}><div style={{ height: 1, backgroundColor: 'var(--vkui--color_separator_primary)' }} /></div>

                      <Accordion>
                          <Accordion.Summary>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <Icon24ShareOutline fill="var(--vkui--color_icon_accent)" />
                              <span style={{ fontSize: 16, fontWeight: 500 }}>Публикация и Кросс-постинг</span>
                            </div>
                          </Accordion.Summary>
                          <Accordion.Content>
                            <div style={{ padding: '16px', textAlign: 'center', background: 'var(--vkui--color_background_secondary)', margin: '0 16px', borderRadius: 12 }}>
                              <div style={{ marginBottom: 12, fontSize: 14 }}>Для автопостинга на стену паблика необходимо разовое разрешение.</div>
                              <Button 
                                mode="primary" 
                                size="m"
                                onClick={async () => {
                                  try {
                                    const tokenData = await bridge.send('VKWebAppGetCommunityToken', {
                                      app_id: 54490430,
                                      group_id: Number(groupId),
                                      scope: 'wall,photos,docs'
                                    });
                                    await vkFetch('/community/token', {
                                      method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({ groupId, accessToken: tokenData.access_token })
                                    });
                                    alert('Успешно подключено! Теперь автопостинг работает.');
                                  } catch (error) {
                                    console.error(error);
                                    alert('Не удалось получить доступ к сообществу');
                                  }
                                }}
                              >
                                Подключить автопостинг
                              </Button>
                            </div>

                            <FormItem top="Автор поста от группы" bottom="Дежурный администратор. По умолчанию посты публикуются без подписи">
                              <CustomSelect
                                placeholder="Не выбран (без подписи)"
                                options={[
                                  { label: 'Не выбран (без подписи)', value: '' },
                                  ...managers.map(m => ({
                                    label: `${m.first_name} ${m.last_name}`,
                                    value: `@id${m.id}`,
                                    avatar: m.photo_50
                                  }))
                                ] as any[]}
                                value={dutyAdminId}
                                onChange={(e) => setDutyAdminId(e.target.value)}
                                renderOption={({ option, ...restProps }) => {
                                  const { avatar, ...validProps } = restProps as any;
                                  return (
                                    <div {...validProps} style={{ padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
                                      {option.avatar && <Avatar size={28} src={option.avatar} />}
                                      <div style={{ fontSize: 15 }}>{option.label}</div>
                                    </div>
                                  );
                                }}
                              />
                            </FormItem>
                            <FormItem top="Кросс-постинг" bottom="Пока не используется — кросс-постинг временно отключён">
                              <Checkbox 
                                checked={acceptCrossPosts}
                                onChange={(e) => setAcceptCrossPosts(e.target.checked)}
                                disabled
                              >
                                <span style={{ fontSize: 15, color: 'var(--vkui--color_text_secondary)' }}>Принимать объявления из других групп города (скоро)</span>
                              </Checkbox>
                            </FormItem>
                          </Accordion.Content>
                      </Accordion>

                      <div style={{ padding: '0 16px' }}><div style={{ height: 1, backgroundColor: 'var(--vkui--color_separator_primary)' }} /></div>

                      <Accordion>
                          <Accordion.Summary>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <Icon24NotificationOutline fill="var(--vkui--color_icon_accent)" />
                              <span style={{ fontSize: 16, fontWeight: 500 }}>Уведомления и Системные сообщения</span>
                            </div>
                          </Accordion.Summary>
                          <Accordion.Content>
                            <FormItem top="Уведомления о новых объявлениях" bottom="Кому присылать ЛС от имени главной группы при новых заявках">
                              {managers.map(m => (
                                <Checkbox
                                  key={m.id}
                                  checked={notifyAdminIds.includes(String(m.id))}
                                  onChange={(e) => {
                                    const idStr = String(m.id);
                                    if (e.target.checked) setNotifyAdminIds(prev => [...prev, idStr]);
                                    else setNotifyAdminIds(prev => prev.filter(id => id !== idStr));
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <Avatar size={24} src={m.photo_50} />
                                    <span style={{ fontSize: 15 }}>{m.first_name} {m.last_name}</span>
                                  </div>
                                </Checkbox>
                              ))}
                            </FormItem>
                            <div style={{ padding: '0 16px 16px' }}>
                              <MiniInfoCell 
                                before={<Icon20InfoCircleOutline fill="var(--vkui--color_icon_accent)" />} 
                                textWrap="full" 
                                style={{ background: 'var(--vkui--color_background_secondary)', borderRadius: 12, padding: '8px 12px', marginBottom: 16 }}
                              >
                                Приложение (фронтенд) не может само отправлять сообщения из соображений безопасности. Оно может лишь запросить разрешение, а сама отправка происходит с сервера.
                              </MiniInfoCell>
                              <Button 
                                size="l" 
                                mode="secondary" 
                                stretched
                                onClick={async () => {
                                  try {
                                    const MAIN_GROUP_ID = 165434330;
                                    await bridge.send('VKWebAppAllowMessagesFromGroup', { group_id: MAIN_GROUP_ID });
                                    alert('Разрешение получено! Теперь главная группа сможет присылать вам рассылки.');
                                  } catch (error) {
                                    console.error(error);
                                  }
                                }}
                              >
                                Тест отправки «Привета»
                              </Button>
                            </div>
                          </Accordion.Content>
                       </Accordion>

                       <Accordion defaultExpanded>
                          <Accordion.Summary>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <Icon24Settings fill="var(--vkui--color_icon_accent)" />
                              <span style={{ fontSize: 16, fontWeight: 500 }}>Сетка вещания (Авто-Слоттинг)</span>
                            </div>
                          </Accordion.Summary>
                          <Accordion.Content>
                            <FormItem top="Интервал публикаций" bottom="Как часто публиковать посты в сетке">
                              <CustomSelect 
                                value={String(scheduleIntervalMinutes)}
                                onChange={e => setScheduleIntervalMinutes(Number(e.target.value) || 60)}
                                options={[
                                  { label: 'Каждые 30 минут', value: '30' },
                                  { label: 'Каждый 1 час', value: '60' },
                                  { label: 'Каждые 2 часа', value: '120' },
                                  { label: 'Каждые 3 часа', value: '180' },
                                  { label: 'Каждые 4 часа', value: '240' },
                                ]}
                              />
                            </FormItem>
                            <div style={{ display: 'flex', gap: 12 }}>
                              <FormItem top="Время начала" style={{ flexGrow: 1 }}>
                                <Input 
                                  type="time" 
                                  value={scheduleStartTime}
                                  onChange={e => setScheduleStartTime(e.target.value)}
                                />
                              </FormItem>
                              <FormItem top="Время окончания" style={{ flexGrow: 1 }}>
                                <Input 
                                  type="time" 
                                  value={scheduleEndTime}
                                  onChange={e => setScheduleEndTime(e.target.value)}
                                />
                              </FormItem>
                            </div>
                            <div style={{ padding: '0 16px', color: 'var(--vkui--color_text_subhead)', fontSize: 13 }}>
                              При одобрении постов система автоматически будет распределять их по свободным окнам в этом диапазоне.
                            </div>
                          </Accordion.Content>
                       </Accordion>

                       <div style={{ padding: '16px', borderTop: '1px solid var(--vkui--color_separator_primary)' }}>
                        <Button 
                          mode="primary" 
                          size="l" 
                          stretched
                          onClick={async () => {
                            if (!groupId) return;
                            try {
                              await vkFetch(`/community/${groupId}`, {
                                method: 'PATCH',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                  cityId: selectedCity?.id || null,
                                  cityName: selectedCity?.title || null,
                                  regionName: selectedCity?.region || null,
                                  dutyAdminId: dutyAdminId || null,
                                  notifyAdminIds,
                                  acceptCrossPosts,
                                  acceptedTags,
                                  scheduleIntervalMinutes,
                                  scheduleStartTime,
                                  scheduleEndTime
                                })
                              });
                              alert('Профиль сообщества обновлен!');
                            } catch (error) {
                              alert('Ошибка при сохранении');
                            }
                          }}
                        >
                          Сохранить профиль
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div style={{ padding: '32px 16px', color: 'var(--vkui--color_text_subhead)', textAlign: 'center' }}>
                      Настройки доступны только администраторам сообщества.
                    </div>
                  )}
                </Group>
              )}
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
      {modal}
    </>
  );
}
