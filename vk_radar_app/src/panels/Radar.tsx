import bridgePkg from '@vkontakte/vk-bridge';
import { Panel, Button, Title, Text, useColorScheme, ModalPage, ModalPageHeader, Group, FormLayoutGroup, FormItem, Input, Textarea, SegmentedControl, SimpleCell, ButtonGroup } from '@vkontakte/vkui';
import { Icon28CompassOutline, Icon28WarningTriangleOutline, Icon28SmileOutline, Icon28MessageOutline, Icon28CheckCircleOutline } from '@vkontakte/icons';
import { useState, useEffect, useRef } from 'react';
import { useRouteNavigator, useParams, useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { vkFetch } from '../utils/api';
import { DEFAULT_MODALS } from '../routes';

const bridge = bridgePkg && 'default' in bridgePkg ? (bridgePkg as any).default : bridgePkg;

declare const mmrgl: any;

interface RadarPin {
  id: number;
  type: string;
  lat: number;
  lng: number;
  title: string;
  description: string | null;
}

interface RadarProps {
  id: string;
  isModalRoot?: boolean;
}

export const Radar = ({ id, isModalRoot }: RadarProps) => {
  const routeNavigator = useRouteNavigator();
  const params = useParams();
  const { modal: activeModal } = useActiveVkuiLocation();
  
  const [selectedPin, setSelectedPin] = useState<RadarPin | null>(null);
  const [isSosLoading, setIsSosLoading] = useState(false);
  const [addFormData, setAddFormData] = useState({ title: '', description: '', type: 'sos' });
  const [viewerRole, setViewerRole] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const userMarkerRef = useRef<any>(null);
  const watchIdRef = useRef<number | null>(null);
  const pinsRef = useRef<RadarPin[]>([]);

  const appearance = useColorScheme();

  // Обработка Deep Link / Директ-линков на метку
  useEffect(() => {
    if (params?.id && pinsRef.current.length > 0) {
      const pin = pinsRef.current.find(p => String(p.id) === params.id);
      if (pin) {
        console.log('[Radar] 📍 Deep Link detected for pin:', pin.id);
        setSelectedPin(pin);
        // Центрируем карту на метку
        if (mapRef.current) {
          mapRef.current.flyTo({ center: [pin.lng, pin.lat], zoom: 17 });
        }
        // Если мы не в модалке просмотра, открываем её
        if (activeModal !== DEFAULT_MODALS.VIEW_PIN) {
           routeNavigator.showModal(DEFAULT_MODALS.VIEW_PIN);
        }
      }
    }
  }, [params?.id, pinsRef.current.length]);

  // Синхронизация стиля карты
  useEffect(() => {
    if (mapRef.current) {
      const styleUrl = appearance === 'dark' 
        ? 'mmr://api/styles/dark_style.json' 
        : 'mmr://api/styles/main_style.json';
      
      const updateStyle = () => {
        mapRef.current.setStyle(styleUrl);
      };

      if (mapRef.current.loaded()) {
        updateStyle();
      } else {
        mapRef.current.once('load', updateStyle);
      }
    }
  }, [appearance]);

  // Инициализация карты
  useEffect(() => {
    if (isModalRoot) return; // Не инициализируем карту в ModalRoot

    if (typeof mmrgl !== 'undefined' && mapContainerRef.current && !mapRef.current) {
      mmrgl.accessToken = import.meta.env.VITE_VK_MAPS_API_KEY;
      
      const urlParams = new URLSearchParams(window.location.search);
      const gId = urlParams.get('vk_group_id');
      const role = urlParams.get('vk_viewer_role');
      
      setViewerRole(role || 'member');

      const localDefault = JSON.parse(localStorage.getItem('radar_default_pos') || 'null');
      const lastPos = JSON.parse(localStorage.getItem('radar_last_pos') || '{"lng":37.6165,"lat":55.7505}');
      const initialPos = localDefault || lastPos;

      const map = new mmrgl.Map({
        container: mapContainerRef.current,
        zoom: initialPos.zoom || 13,
        center: [initialPos.lng, initialPos.lat],
        style: appearance === 'dark' ? 'mmr://api/styles/dark_style.json' : 'mmr://api/styles/main_style.json',
        hash: false,
        attributionControl: false,
        accessToken: '0d0de26be2e82dd183b246cb465db703d284268f4fb61fd89642d9fff3e7564e'
      });

      mapRef.current = map;

      const initMapFocus = async () => {
        // Если есть ID в URL, не сбиваем фокус
        if (params?.id) return;

        const targetPin = JSON.parse(localStorage.getItem('radar_target_pin') || 'null');
        if (targetPin) {
          map.flyTo({ center: [targetPin.lng, targetPin.lat], zoom: 17, speed: 1.5 });
          localStorage.removeItem('radar_target_pin');
          locateMe(false);
          return;
        }

        if (gId) {
          try {
            const data = await vkFetch(`/community/${gId}`);
            if (data && data.lat && data.lng) {
              map.flyTo({ center: [data.lng, data.lat], zoom: 13, speed: 1.5 });
              locateMe(false);
              return;
            }
          } catch (e) {
            console.warn('Failed to load community settings', e);
          }
        }

        locateMe(true);
      };

      map.once('load', () => {
        initMapFocus();
        fetchPins();
        
        // Запускаем точное отслеживание
        if ("geolocation" in navigator) {
          watchIdRef.current = navigator.geolocation.watchPosition(
            (pos) => {
              const { latitude, longitude } = pos.coords;
              updateUserPosition(latitude, longitude, false);
            },
            (err) => console.warn('[Geolocation] Watch failed:', err),
            { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
          );
        }
      });

      map.on('click', (e: any) => {
        const { lng, lat } = e.lngLat;
        updateUserPosition(lat, lng, false);
      });

      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
        if (watchIdRef.current !== null) {
          navigator.geolocation.clearWatch(watchIdRef.current);
          watchIdRef.current = null;
        }
      };
    }
  }, [id, isModalRoot, appearance]);

  // Модальные окна
  if (isModalRoot) {
    return (
      <>
        <ModalPage 
          id={DEFAULT_MODALS.ADD_PIN} 
          onClose={() => routeNavigator.hideModal()} 
          header={<ModalPageHeader>Новое событие</ModalPageHeader>}
        >
          <Group>
            <FormLayoutGroup mode="vertical">
              <FormItem top="Тип события">
                <SegmentedControl
                  size="l"
                  value={addFormData.type}
                  onChange={(val) => setAddFormData(prev => ({...prev, type: val as string}))}
                  options={[
                    { label: 'SOS / Опасно', value: 'sos' },
                    { label: 'Потеряшка', value: 'lost' }
                  ]}
                />
              </FormItem>
              <FormItem top="Что случилось?">
                <Input 
                  placeholder="Заголовок события"
                  value={addFormData.title}
                  onChange={(e) => setAddFormData(prev => ({...prev, title: e.target.value}))}
                />
              </FormItem>
              <FormItem top="Подробности">
                <Textarea
                  placeholder="Детали (ориентиры, время...)"
                  value={addFormData.description || ''}
                  onChange={(e) => setAddFormData(prev => ({...prev, description: e.target.value}))}
                />
              </FormItem>
              <FormItem>
                <Button 
                    size="l" stretched 
                    appearance="accent"
                    loading={isSosLoading}
                    className="rounded-lg"
                    onClick={async () => {
                      if (!addFormData.title) return;
                      setIsSosLoading(true);
                      try {
                        const center = { lat: 0, lng: 0 }; // В реальном приложении берем из стейта карты
                        await vkFetch('/radar/pins', {
                          method: 'POST',
                          body: JSON.stringify({
                            type: addFormData.type,
                            lat: center.lat,
                            lng: center.lng,
                            title: addFormData.title,
                            description: addFormData.description
                          })
                        });
                        routeNavigator.hideModal();
                      } catch (e) {
                        console.error('Failed to create pin', e);
                      } finally {
                        setIsSosLoading(false);
                      }
                    }}
                >
                  Опубликовать на Радаре
                </Button>
              </FormItem>
            </FormLayoutGroup>
          </Group>
        </ModalPage>

        <ModalPage 
          id={DEFAULT_MODALS.RADAR_SETTINGS} 
          onClose={() => routeNavigator.hideModal()} 
          header={<ModalPageHeader>Настройки Радара</ModalPageHeader>}
        >
          <Group>
            <SimpleCell
              before={<Icon28CheckCircleOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
              subtitle="Радар будет открываться здесь только у вас"
              onClick={() => {
                // Логика сохранения лок. настроек
                routeNavigator.hideModal();
              }}
            >
              Закрепить мой город
            </SimpleCell>
            {(viewerRole === 'admin') && (
              <SimpleCell
                before={<Icon28CheckCircleOutline style={{ color: 'var(--vkui--color_icon_positive)' }} />}
                subtitle="Для всех участников сообщества"
                onClick={() => {
                  // Логика админа
                  routeNavigator.hideModal();
                }}
              >
                Закрепить для сообщества
              </SimpleCell>
            )}
            <FormItem>
              <Button size="l" mode="secondary" stretched onClick={() => routeNavigator.hideModal()}>
                Сбросить настройки
              </Button>
            </FormItem>
          </Group>
        </ModalPage>

        {selectedPin && (
          <ModalPage 
            id={DEFAULT_MODALS.VIEW_PIN} 
            onClose={() => { routeNavigator.hideModal(); setSelectedPin(null); }}
          >
            <div style={{ padding: '24px 16px 32px', textAlign: 'center' }}>
               <div style={{ 
                 display: 'inline-flex', padding: 16, borderRadius: '50%', 
                 backgroundColor: selectedPin.type === 'lost' ? 'var(--vkui--color_background_negative_tint)' : 'var(--vkui--color_background_accent_tint)', 
                 color: selectedPin.type === 'lost' ? 'var(--vkui--color_icon_negative)' : 'var(--vkui--color_icon_accent)', 
                 marginBottom: 16 
               }}>
                  {selectedPin.type === 'lost' ? <Icon28WarningTriangleOutline width={36} height={36} /> : <Icon28SmileOutline width={36} height={36} />}
               </div>
               <Title level="1" weight="2" style={{ marginBottom: 16 }}>{selectedPin.title}</Title>
               <Text style={{ marginBottom: 24, color: 'var(--vkui--color_text_secondary)', whiteSpace: 'pre-wrap' }}>
                 {selectedPin.description}
               </Text>
               <ButtonGroup stretched gap="m">
                  <Button size="l" stretched appearance={selectedPin.type === 'lost' ? 'negative' : 'accent'} className="rounded-lg">
                     {selectedPin.type === 'lost' ? 'Я рядом, иду искать' : 'Готов помочь'}
                  </Button>
                  <Button size="l" mode="secondary" before={<Icon28MessageOutline />} className="rounded-lg" />
               </ButtonGroup>
            </div>
          </ModalPage>
        )}
      </>
    );
  }

  // Логика загрузки и управления метками (упрощено для примера)
  const fetchPins = async () => {
    try {
      const data = await vkFetch('/radar/pins');
      if (Array.isArray(data)) {
        pinsRef.current = data;
        markersRef.current.forEach(m => m.remove());
        markersRef.current = [];
        data.forEach(pin => {
          const marker = new mmrgl.Marker({ color: pin.type === 'lost' ? '#ef4444' : '#fb923c' })
            .setLngLat([pin.lng, pin.lat])
            .addTo(mapRef.current);
          marker.getElement().addEventListener('click', () => {
            setSelectedPin(pin);
            routeNavigator.showModal(DEFAULT_MODALS.VIEW_PIN);
          });
          markersRef.current.push(marker);
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const locateMe = (fly: boolean) => {
    bridge.send('VKWebAppGetGeodata').then((geo: any) => {
      if (geo.available) updateUserPosition(geo.lat, geo.long, fly);
    }).catch((e: any) => console.warn(e));
  };

  const updateUserPosition = (lat: number, lng: number, fly: boolean) => {
    if (!userMarkerRef.current && mapRef.current) {
      const el = document.createElement('div');
      el.className = 'user-location-marker';
      el.innerHTML = '<div class="user-location-dot"></div><div class="user-location-pulse"></div>';
      userMarkerRef.current = new mmrgl.Marker({ element: el }).setLngLat([lng, lat]).addTo(mapRef.current);
    } else if (userMarkerRef.current) {
      userMarkerRef.current.setLngLat([lng, lat]);
    }
    if (fly && mapRef.current) mapRef.current.flyTo({ center: [lng, lat], zoom: 15 });
  };

  return (
    <Panel id={id} style={{ backgroundColor: 'var(--vkui--color_background_content)' }}>
      <div style={{ 
        position: 'relative', 
        height: '100%', 
        minHeight: 'calc(100vh - 48px - env(safe-area-inset-bottom))',
        width: '100%',
        overflow: 'hidden' 
      }}>
        
        {/* Кнопка SOS */}
        <div style={{ 
          position: 'absolute', 
          bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))', 
          right: 20, 
          zIndex: 10 
        }}>
          <div 
            onClick={() => {
              setAddFormData({ title: '', description: '', type: 'sos' });
              routeNavigator.showModal(DEFAULT_MODALS.ADD_PIN);
            }}
            style={{ 
              backgroundColor: '#ef4444', borderRadius: '50%', width: 72, height: 72, 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              border: '4px solid #fff', fontSize: 20, fontWeight: 900, color: '#fff', 
              cursor: 'pointer', boxShadow: '0 8px 32px rgba(239, 68, 68, 0.5)',
              animation: 'pulse-red 2s infinite'
            }}
          >
            SOS
          </div>
        </div>

        {/* Кнопка Моя позиция */}
        <div style={{ 
          position: 'absolute', 
          bottom: 'calc(110px + env(safe-area-inset-bottom, 0px))', 
          right: 20, 
          zIndex: 10 
        }}>
          <div 
            onClick={() => locateMe(true)}
            style={{ 
              backgroundColor: 'var(--vkui--color_background_modal)', 
              borderRadius: 12, width: 44, height: 44, 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              cursor: 'pointer', border: '1px solid var(--vkui--color_separator_primary_alpha)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              backdropFilter: 'blur(10px)'
            } as any}
          >
            <Icon28CompassOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />
          </div>
        </div>

        <div ref={mapContainerRef} style={{ width: '100%', height: '100%', position: 'absolute' }} />
      </div>

      <style>{`
        .user-location-marker { width: 20px; height: 20px; }
        .user-location-dot { width: 14px; height: 14px; background: #3b82f6; border: 2px solid white; border-radius: 50%; }
        .user-location-pulse { position: absolute; width: 40px; height: 40px; background: rgba(59, 130, 246, 0.4); border-radius: 50%; animation: user-pulse 2s infinite; }
        @keyframes user-pulse { 0% { transform: scale(0.5); opacity: 0.8; } 100% { transform: scale(2.5); opacity: 0; } }
        @keyframes pulse-red { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); } 100% { transform: scale(1); } }
        .rounded-lg { border-radius: 8px !important; }
      `}</style>
    </Panel>
  );
};
