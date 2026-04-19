import bridgePkg from '@vkontakte/vk-bridge';
import { Panel, Button, Title, Text, useColorScheme, ModalPage, ModalPageHeader, Group, FormLayoutGroup, FormItem, Input, Textarea, SegmentedControl, SimpleCell, ButtonGroup } from '@vkontakte/vkui';
import { Icon28CompassOutline, Icon28WarningTriangleOutline, Icon28SmileOutline, Icon28MessageOutline, Icon28CheckCircleOutline } from '@vkontakte/icons';
import { useState, useEffect, useRef } from 'react';
import { vkFetch } from '../utils/api';
import { useModal } from '../ModalContext';

const bridge = bridgePkg && 'default' in bridgePkg ? (bridgePkg as any).default : bridgePkg;

// Объявляем mmrgl для TypeScript
declare const mmrgl: any;

interface RadarPin {
  id: number;
  type: string;
  lat: number;
  lng: number;
  title: string;
  description: string | null;
}

export const Radar = ({ id }: { id: string }) => {
  const { setActiveModal, registerModal, unregisterModal } = useModal();
  const [selectedPin, setSelectedPin] = useState<RadarPin | null>(null);
  const [isSosLoading, setIsSosLoading] = useState(false);
  const [addFormData, setAddFormData] = useState({ title: '', description: '', type: 'sos' });
  const [viewerRole, setViewerRole] = useState<string | null>(null);
  const [groupId, setGroupId] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const userMarkerRef = useRef<any>(null);
  const watchIdRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<{ lat: number; lng: number; time: number }>({ lat: 0, lng: 0, time: 0 });
  
  // Состояния для поиска
  const appearance = useColorScheme();

  // Динамическое переключение стиля карты при смене темы
  useEffect(() => {
    if (mapRef.current) {
      // Используем main_style для светлой темы, так как он гарантированно есть в SDK
      const styleUrl = appearance === 'dark' 
        ? 'mmr://api/styles/dark_style.json' 
        : 'mmr://api/styles/main_style.json';
      
      const updateStyle = () => {
        console.log('🌓 Theme Sync:', appearance, '-> Styling Map:', styleUrl);
        mapRef.current.setStyle(styleUrl);
      };

      if (mapRef.current.loaded()) {
        updateStyle();
      } else {
        mapRef.current.once('load', updateStyle);
      }
    }
  }, [appearance]);

  // Весь код поиска закомментирован для устранения ошибок компиляции
  // и чистоты интерфейса

  // Инициализация карты
  useEffect(() => {
    // Инициализация карты и загрузка данных
    if (typeof mmrgl !== 'undefined' && mapContainerRef.current && !mapRef.current) {
      mmrgl.accessToken = import.meta.env.VITE_VK_MAPS_API_KEY;
      
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const gId = params.get('vk_group_id');
      const role = params.get('vk_viewer_role');
      
      setGroupId(gId);
      setViewerRole(role || 'member');

      // Приоритет старта: 1. Настройки сообщества 2. Личный дефолт 3. Последняя позиция 4. Москва
      const localDefault = JSON.parse(localStorage.getItem('radar_default_pos') || 'null');
      const lastPos = JSON.parse(localStorage.getItem('radar_last_pos') || '{"lng":37.6165,"lat":55.7505}');
      const initialPos = localDefault || lastPos;

      const isDark = appearance === 'dark';
      const initialStyle = isDark 
        ? 'mmr://api/styles/dark_style.json' 
        : 'mmr://api/styles/main_style.json';

      const map = new mmrgl.Map({
        container: mapContainerRef.current,
        zoom: initialPos.zoom || 13,
        center: [initialPos.lng, initialPos.lat],
        style: initialStyle,
        hash: false,
        attributionControl: false,
        accessToken: '0d0de26be2e82dd183b246cb465db703d284268f4fb61fd89642d9fff3e7564e'
      });

      mapRef.current = map;

      // Функция безопасного перелета (ждет окончания загрузки карты)
      const flyToSafely = (options: any) => {
        if (map.loaded()) {
          map.flyTo(options);
        } else {
          map.once('load', () => map.flyTo(options));
        }
      };

      // Запускаем асинхронную инициализацию фокуса карты
      const initMapFocus = async () => {
        // 1. Приоритет: Целевая метка из ленты
        const targetPin = JSON.parse(localStorage.getItem('radar_target_pin') || 'null');
        if (targetPin) {
          console.log('Focussing on target pin:', targetPin);
          flyToSafely({ center: [targetPin.lng, targetPin.lat], zoom: 17, speed: 1.5 });
          localStorage.removeItem('radar_target_pin');
          locateMe(false); // Подключаем локацию, но не сбрасываем фокус
          return;
        }

        // 2. Приоритет: Настройки сообщества (если открыт внутри сообщества)
        if (gId) {
          try {
            const data = await vkFetch(`/community/${gId}`);
            if (data && data.lat && data.lng) {
              console.log('Community Bound City Found:', data.cityName, data.lat, data.lng);
              flyToSafely({ center: [data.lng, data.lat], zoom: 13, speed: 1.5 });
              locateMe(false);
              return;
            }
          } catch (e) {
            console.warn('Failed to load community settings', e);
          }
        }

        // 3. Приоритет: Настройки профиля пользователя (Мой город)
        try {
          const profile = await vkFetch('/profile/me');
          if (profile && profile.homeLat && profile.homeLng) {
            console.log('User Home Bound Found:', profile.homeLat, profile.homeLng);
            flyToSafely({ center: [profile.homeLng, profile.homeLat], zoom: 13, speed: 1.5 });
            locateMe(false);
            return;
          }
        } catch (e) {
          console.warn('Failed to load profile tracking', e);
        }

        // 3.5. Приоритет: Локальное сохранение (если профиль не ответил или пуст)
        const localDefault = JSON.parse(localStorage.getItem('radar_default_pos') || 'null');
        if (localDefault && localDefault.lat && localDefault.lng) {
            flyToSafely({ center: [localDefault.lng, localDefault.lat], zoom: localDefault.zoom || 13, speed: 1.5 });
            locateMe(false);
            return;
        }

        // 4. Фолбэк: GPS (центруем по местоположению)
        locateMe(true);
      };

      initMapFocus();

      // Ручной выбор локации кликом по карте
      map.on('click', (e: any) => {
        const { lng, lat } = e.lngLat;
        updateUserPosition(lat, lng, 0, false);
      });

      // Первичная загрузка меток и определение позиции
      fetchPins();

      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
        if (watchIdRef.current !== null) {
          navigator.geolocation.clearWatch(watchIdRef.current);
        }
      };
    }
  }, []);

  // --- Регистрация нативных модалок VKUI ---
  useEffect(() => {
    registerModal('add_pin', (
      <ModalPage id="add_pin" onClose={() => setActiveModal(null)} header={<ModalPageHeader>Новое событие</ModalPageHeader>}>
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
            <FormItem top="Что случилось?" htmlFor="pin_title">
              <Input 
                id="pin_title"
                placeholder="Заголовок события"
                value={addFormData.title}
                onChange={(e) => setAddFormData(prev => ({...prev, title: e.target.value}))}
              />
            </FormItem>
            <FormItem top="Подробности" htmlFor="pin_desc">
              <Textarea
                id="pin_desc"
                placeholder="Расскажите детали (ориентиры, время...)"
                value={addFormData.description || ''}
                onChange={(e) => setAddFormData(prev => ({...prev, description: e.target.value}))}
              />
            </FormItem>
            <FormItem>
              <Button 
                  size="l" stretched 
                  appearance="accent"
                  loading={isSosLoading}
                  onClick={async () => {
                    if (!addFormData.title || !mapRef.current) return;
                    setIsSosLoading(true);
                    try {
                      const center = mapRef.current.getCenter();
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
                      await fetchPins();
                      setActiveModal(null);
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
    ));

    registerModal('radar_settings', (
      <ModalPage id="radar_settings" onClose={() => setActiveModal(null)} header={<ModalPageHeader>Настройки Радара</ModalPageHeader>}>
        <Group>
          <FormItem>
            <SimpleCell
              before={<Icon28CheckCircleOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />}
              subtitle="Радар будет открываться здесь только у вас"
              onClick={async () => {
                if (mapRef.current) {
                  const center = mapRef.current.getCenter();
                  localStorage.setItem('radar_default_pos', JSON.stringify({ lng: center.lng, lat: center.lat, zoom: mapRef.current.getZoom() }));
                  
                  try {
                    await vkFetch('/profile/me', {
                      method: 'PATCH',
                      body: JSON.stringify({ homeLat: center.lat, homeLng: center.lng })
                    });
                  } catch (e) {
                    console.warn('Failed to sync profile settings', e);
                  }

                  setActiveModal(null);
                }
              }}
            >
              Мой город (лично для меня)
            </SimpleCell>
          </FormItem>
          {(viewerRole === 'admin' || viewerRole === 'editor') && groupId && (
            <FormItem>
              <SimpleCell
                before={<Icon28CheckCircleOutline style={{ color: 'var(--vkui--color_icon_positive)' }} />}
                subtitle="ДЛЯ АДМИНОВ: Радар будет открываться здесь у всех"
                onClick={async () => {
                  if (mapRef.current) {
                    try {
                      const center = mapRef.current.getCenter();
                      await vkFetch(`/community/${groupId}`, { method: 'PATCH', body: JSON.stringify({ lat: center.lat, lng: center.lng }) });
                      setActiveModal(null);
                    } catch (e) { console.error(e); }
                  }
                }}
              >
                Закрепить за сообществом
              </SimpleCell>
            </FormItem>
          )}
          <FormItem>
            <Button size="l" mode="secondary" stretched onClick={() => { localStorage.removeItem('radar_default_pos'); setActiveModal(null); }}>
              Сбросить к заводским (Москва)
            </Button>
          </FormItem>
        </Group>
      </ModalPage>
    ));

    return () => {
      unregisterModal('add_pin');
      unregisterModal('radar_settings');
    }
  }, [addFormData, isSosLoading, viewerRole, groupId]);

  useEffect(() => {
    if (selectedPin) {
      registerModal('view_pin', (
        <ModalPage id="view_pin" onClose={() => { setActiveModal(null); setSelectedPin(null); }}>
          <div style={{ padding: '24px 16px 32px', textAlign: 'center' }}>
             <div style={{ display: 'inline-flex', padding: 16, borderRadius: '50%', backgroundColor: selectedPin.type === 'lost' ? 'var(--vkui--color_background_negative_tint)' : 'var(--vkui--color_background_accent_tint)', color: selectedPin.type === 'lost' ? 'var(--vkui--color_icon_negative)' : 'var(--vkui--color_icon_accent)', marginBottom: 16 }}>
                {selectedPin.type === 'lost' ? <Icon28WarningTriangleOutline width={36} height={36} /> : <Icon28SmileOutline width={36} height={36} />}
             </div>
             <Title level="1" weight="2" style={{ marginBottom: 16 }}>{selectedPin.title}</Title>
             <Text style={{ marginBottom: 24, color: 'var(--vkui--color_text_secondary)', whiteSpace: 'pre-wrap' }}>{selectedPin.description}</Text>
             <ButtonGroup stretched gap="m">
                <Button size="l" stretched appearance={selectedPin.type === 'lost' ? 'negative' : 'accent'}>
                   {selectedPin.type === 'lost' ? 'Я рядом, иду искать' : 'Готов помочь'}
                </Button>
                <Button size="l" mode="secondary" before={<Icon28MessageOutline />} />
             </ButtonGroup>
          </div>
        </ModalPage>
      ));
    }
    return () => unregisterModal('view_pin');
  }, [selectedPin]);

  // Функция загрузки меток из БД
  const fetchPins = async () => {
    try {
      const data = await vkFetch('/radar/pins');
      
      if (!Array.isArray(data)) {
        console.error('Expected array but got:', data);
        return;
      }

      console.log(`[RADAR] Successfully fetched ${data.length} pins from backend`);

      // Очищаем старые маркеры
      markersRef.current.forEach((m: any) => m.remove());
      markersRef.current = [];

      // Добавляем новые
      data.forEach((pin: RadarPin) => {
        const marker = new mmrgl.Marker({
          color: pin.type === 'lost' ? '#ef4444' : '#fb923c'
        })
          .setLngLat([pin.lng, pin.lat])
          .addTo(mapRef.current);

        // При клике на маркер — открываем карточку
        marker.getElement().addEventListener('click', () => {
          setSelectedPin(pin);
          setActiveModal('view_pin');
        });

        markersRef.current.push(marker);
      });
    } catch (error) {
      console.error('Failed to fetch pins:', error);
    }
  };

  // Функция определения местоположения
  const locateMe = async (isInitial = false) => {
    try {
      console.log('Locating user (watch mode)...');
      
      // Очищаем старый вочер
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }

      // 1. Сначала быстрый замер через VK Bridge
      try {
        if (bridge && typeof bridge.send === 'function') {
          const geo = await bridge.send('VKWebAppGetGeodata');
          if (geo && geo.available && geo.lat !== 0) {
            const { lat, long } = geo;
            updateUserPosition(lat, long, (geo as any).accuracy || 0, isInitial);
          }
        }
      } catch (e) {
        console.warn('VK Bridge location failed', e);
      }

      // 2. Включаем постоянное слежение через Native Geolocation
      if (navigator.geolocation) {
        const startWatch = () => {
          
          const watchId = navigator.geolocation.watchPosition(
            (position) => {
              const { latitude, longitude, accuracy } = position.coords;
              const now = Date.now();
              const last = lastUpdateRef.current;
              
              // Если это самое первое обновление — просто ставим точку
              if (last.time === 0) {
                updateUserPosition(latitude, longitude, Math.round(accuracy), isInitial);
                lastUpdateRef.current = { lat: latitude, lng: longitude, time: now };
                return;
              }

              // Расчет расстояния от последней ПРИНЯТОЙ точки
              const dist = Math.sqrt(Math.pow(latitude - last.lat, 2) + Math.pow(longitude - last.lng, 2)) * 111320;
              
              // Коэффициент сглаживания (0.2 = очень плавно, 1.0 = мгновенно)
              // Если точность плохая (> 30м), сглаживаем сильнее
              const alpha = accuracy < 30 ? 0.4 : 0.15;
              
              // Применяем сглаживание координат (EMA)
              const smoothedLat = last.lat * (1 - alpha) + latitude * alpha;
              const smoothedLng = last.lng * (1 - alpha) + longitude * alpha;

              // Обновляем только если:
              // 1. Мы реально сдвинулись (сглаженно) больше чем на 1 метр
              // 2. ИЛИ прошло много времени (5 сек) и есть хоть какое-то смещение > 5м
              const smoothedDist = Math.sqrt(Math.pow(smoothedLat - last.lat, 2) + Math.pow(smoothedLng - last.lng, 2)) * 111320;

              if (smoothedDist > 1 || (dist > 5 && (now - last.time) > 5000)) {
                updateUserPosition(smoothedLat, smoothedLng, Math.round(accuracy), isInitial);
                lastUpdateRef.current = { lat: smoothedLat, lng: smoothedLng, time: now };
              }
            },
            (err) => {
              console.warn('Native watch failed:', err.code, err.message);
              
              if (isInitial) tryIpFallback();
              
              // Если это таймаут или временная ошибка — пробуем перезапуститься через 5 сек
              if (err.code === 3 || err.code === 2) {
                setTimeout(startWatch, 5000);
              }
            },
            { 
              enableHighAccuracy: true, 
              timeout: 20000, 
              maximumAge: 0 
            }
          );
          watchIdRef.current = watchId;
        };

        startWatch();
      } else {
        tryIpFallback();
      }
    } catch (e) {
      console.error('Failed to init location', e);
    }
  };
  const tryIpFallback = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/').catch(() => null);
      if (!response) return;
      const data = await response.json();
      if (data.latitude && data.longitude) {
        updateUserPosition(data.latitude, data.longitude, 5000, true);
      }
    } catch (e) {
      // Мы используем console.warn вместо error, чтобы не пугать пользователя CORS-ошибками, 
      // которые ожидаемы на localhost
      console.warn('IP Fallback failed (expected in some environments)', e);
    }
  };

  const updateUserPosition = (lat: number, lng: number, accuracy: any = 0, isInitial = false) => {
    const accNum = typeof accuracy === 'number' ? accuracy : 0;

    // Обновляем маркер пользователя
    if (!userMarkerRef.current && mapRef.current) {
      const el = document.createElement('div');
      el.className = 'user-location-marker';
      el.innerHTML = `
        <div class="user-location-dot"></div>
        <div class="user-location-pulse"></div>
      `;
      
      userMarkerRef.current = new mmrgl.Marker({
        element: el,
        anchor: 'center'
      })
        .setLngLat([lng, lat])
        .addTo(mapRef.current);

      const addAccuracyCircle = () => {
        if (!mapRef.current) return;
        // Добавляем слой круга точности (если еще нет)
        if (!mapRef.current.getSource('accuracy-circle')) {
          mapRef.current.addSource('accuracy-circle', {
            type: 'geojson',
            data: createGeoJSONCircle([lng, lat], accNum / 1000)
          });

          mapRef.current.addLayer({
            id: 'accuracy-circle-layer',
            type: 'fill',
            source: 'accuracy-circle',
            layout: {},
            paint: {
              'fill-color': '#3b82f6',
              'fill-opacity': accNum < 500 ? 0.15 : 0, // Скрываем гигантские круги
              'fill-outline-color': accNum < 500 ? '#3b82f6' : 'transparent'
            }
          });
        }
      };

      if (mapRef.current.loaded()) {
        addAccuracyCircle();
      } else {
        mapRef.current.once('load', addAccuracyCircle);
      }

    } else if (userMarkerRef.current && mapRef.current) {
      userMarkerRef.current.setLngLat([lng, lat]);
      
      const updateAccuracyCircle = () => {
        if (!mapRef.current) return;
        // Обновляем круг точности
        const source = mapRef.current.getSource('accuracy-circle');
        if (source) {
          source.setData(createGeoJSONCircle([lng, lat], accNum / 1000));
          
          // Обновляем видимость круга в зависимости от точности
          if (mapRef.current.getLayer('accuracy-circle-layer')) {
            mapRef.current.setPaintProperty('accuracy-circle-layer', 'fill-opacity', accNum < 500 ? 0.15 : 0);
            mapRef.current.setPaintProperty('accuracy-circle-layer', 'fill-outline-color', accNum < 500 ? '#3b82f6' : 'transparent');
          }
        }
      };

      if (mapRef.current.loaded()) {
        updateAccuracyCircle();
      } else {
        mapRef.current.once('load', updateAccuracyCircle);
      }
    }

    // Сохраняем позицию в localStorage для следующего старта
    localStorage.setItem('radar_last_pos', JSON.stringify({ 
      lat: lat, 
      lng: lng, 
      zoom: mapRef.current?.getZoom() 
    }));

    // Перемещаем карту только если это первый раз ИЛИ если точность стала высокой
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom();
      const shouldFly = isInitial || (accNum < 50 && accNum > 0 && currentZoom < 16);
      
      if (shouldFly) {
        const options = {
          center: [lng, lat],
          zoom: accNum < 30 ? 17 : 15,
          speed: 1.2,
          curve: 1
        };
        // Используем безопасный перелет, если карта еще не готова
        if (mapRef.current.loaded()) {
          mapRef.current.flyTo(options);
        } else {
          mapRef.current.once('load', () => mapRef.current.flyTo(options));
        }
      }
    }
  };

  // Хелпер для создания GeoJSON круга (радиус в км)
  const createGeoJSONCircle = (center: [number, number], radiusInKm: number, points = 64) => {
    const coords = [];
    const distanceX = radiusInKm / (111.32 * Math.cos(center[1] * Math.PI / 180));
    const distanceY = radiusInKm / 110.57;

    for (let i = 0; i < points; i++) {
      const theta = (i / points) * (2 * Math.PI);
      const x = distanceX * Math.cos(theta);
      const y = distanceY * Math.sin(theta);
      coords.push([center[0] + x, center[1] + y]);
    }
    coords.push(coords[0]);

    return {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [coords]
      }
    };
  };

  return (
    <Panel id={id} style={{ backgroundColor: '#0f172a' }}>
      <style>{`
        .user-location-marker {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .user-location-dot {
          width: 14px;
          height: 14px;
          background: #3b82f6;
          border: 2px solid white;
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .user-location-pulse {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.4);
          border-radius: 50%;
          z-index: 1;
          animation: user-pulse 2s infinite;
        }
        @keyframes user-pulse {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes pulse-red {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); transform: scale(1); }
          70% { box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); transform: scale(1.05); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); transform: scale(1); }
        }
        @keyframes glow-red {
          from { box-shadow: 0 0 10px #ef4444, 0 0 20px #ef4444, inset 0 0 10px rgba(255,255,255,0.2); }
          to { box-shadow: 0 0 20px #ef4444, 0 0 40px #ef4444, inset 0 0 15px rgba(255,255,255,0.4); }
        }
        /* Поднимаем аттрибуцию карт выше таббара */
      `}</style>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        
        {/* Поисковая строка (Скрыто по просьбе пользователя)
        <div style={{ position: 'absolute', top: 20, left: 20, width: 'calc(100% - 110px)', zIndex: 60 }}>
          <div style={{ 
            background: 'rgba(28, 28, 30, 0.8)', 
            backdropFilter: 'blur(10px)',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
          }}>
            <Search 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск адреса или места..."
              style={{ background: 'transparent' }}
              after={isSearching ? <div style={{ marginRight: 12, color: '#3b82f6', fontSize: 12 }}>...</div> : null}
            />
          </div>
          
          {suggestions && suggestions.length > 0 && (
            <div style={{
              marginTop: 8,
              background: '#1c1c1e',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              padding: '8px 0'
            }}>
              {suggestions.map((s) => (
                <div
                  key={s.address + s.name}
                  onClick={() => handleSuggestionClick(s)}
                  style={{ 
                    padding: '12px 16px', 
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div style={{ color: '#ffffff', fontSize: 16, fontWeight: 500, marginBottom: 2 }}>{s.name}</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 13 }}>{s.address}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        */}

        {/* Кнопка SOS */}
        <div style={{ position: 'absolute', bottom: 220, right: 20, zIndex: 10 }}>
          <div 
            onClick={() => {
              setAddFormData({ title: '', description: '', type: 'sos' });
              setActiveModal('add_pin');
            }}
            style={{ 
              backgroundColor: '#ef4444', 
              borderRadius: '50%',
              width: 65,
              height: 65,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid #fff',
              fontSize: 18,
              fontWeight: 900,
              color: '#fff',
              cursor: 'pointer',
              userSelect: 'none',
              animation: 'pulse-red 2s infinite, glow-red 1.5s ease-in-out infinite alternate',
              textShadow: '0 0 10px rgba(255,255,255,0.5)',
              transition: 'transform 0.1s ease'
            } as any}
            onMouseDown={(e: any) => e.currentTarget.style.transform = 'scale(0.9)'}
            onMouseUp={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
          >
            SOS
          </div>
        </div>


        {/* Кнопка Моя позиция */}
        <div style={{ position: 'absolute', bottom: 140, right: 20, zIndex: 10, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div 
            onClick={() => locateMe(true)}
            style={{ 
              backgroundColor: 'var(--vkui--color_background_content)', 
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              borderRadius: '50%',
              width: 60,
              height: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              border: appearance === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid var(--vkui--color_separator_primary)',
              transition: 'transform 0.1s ease'
            } as any}
            onMouseDown={(e: any) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Icon28CompassOutline style={{ color: 'var(--vkui--color_icon_accent)' }} />
          </div>
        </div>

        <div ref={mapContainerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />

        {/* Декоративная сетка поверх карты (события проходят сквозь неё) */}
        <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, zIndex: 5 }}>
          <div style={{
            position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 300, height: 300, border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 500, height: 500, border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '50%'
          }} />
        </div>
      </div>
    </Panel>
  );
};
