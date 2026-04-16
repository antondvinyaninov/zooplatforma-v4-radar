import { FC, useState, useEffect } from 'react';
import { 
  Panel, PanelHeader, PanelHeaderBack, FormItem, Textarea, 
  Button, Group, Select, File, CustomSelect, CustomSelectOption
} from '@vkontakte/vkui';
import { Icon24Camera } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { vkFetch } from '../utils/api';
import { MediaGrid } from '../components/MediaGrid';

export const CreatePost: FC<{ id: string }> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  
  const [text, setText] = useState('');
  const [tag, setTag] = useState('');
  
  const [cities, setCities] = useState<any[]>([]);
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<any | null>(null);

  const [media, setMedia] = useState<{ url: string; type: string }[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [allowedTags, setAllowedTags] = useState<string[]>(["Найден", "Потерян", "Ищет дом", "Сборы", "Инфо"]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const groupId = params.get('vk_group_id') || '123'; // 123 for local mock
    if (groupId) {
       vkFetch(`/community/${groupId}/managers`).then(res => {
         if (res && res.community && res.community.acceptedTags) {
           setAllowedTags(res.community.acceptedTags);
         }
       }).catch(e => console.error("Could not fetch community tags", e));
    }
  }, []);

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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setIsUploading(true);
    try {
      const files = Array.from(e.target.files);
      const formData = new FormData();
      files.forEach(file => {
        formData.append('media', file);
      });

      const response = await vkFetch('/upload', {
        method: 'POST',
        body: formData
      });
      
      // Бэкенд теперь возвращает массив {url, type}[]
      if (Array.isArray(response)) {
        setMedia(prev => [...prev, ...response]);
      }
    } catch (err) {
      console.error('Ошибка загрузки медиа:', err);
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const removeMedia = (indexToRemove: number) => {
    setMedia(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const submitPost = async () => {
    if (!text.trim() || !tag || isLoading || isUploading) return;
    setIsLoading(true);
    
    try {
      await vkFetch('/posts', {
        method: 'POST',
        body: JSON.stringify({ 
          content: text.trim(),
          tag,
          cityId: selectedCity?.id || null,
          cityName: selectedCity?.title || undefined,
          regionName: selectedCity?.region || undefined,
          media
        })
      });
      routeNavigator.back();
    } catch (error) {
      console.error('Ошибка публикации:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Создать пост
      </PanelHeader>

      <Group>
        <FormItem top="Тематика объявления" status={!tag ? 'error' : 'default'} bottom={!tag ? 'Обязательное поле' : ''}>
          <Select 
            placeholder="Выберите категорию" 
            options={allowedTags.map(t => ({ label: t, value: t }))}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </FormItem>

        <FormItem top="Описание" status={!text.trim() ? 'error' : 'default'} bottom={!text.trim() ? 'Обязательное поле' : ''}>
          <Textarea 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Подробно опишите животное, обстоятельства и контакты..." 
            disabled={isLoading}
          />
        </FormItem>

        <FormItem top="Город" bottom="Животное будет привязано к этому городу (необязательно)">
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

        <FormItem top="Фотографии и Видео">
          {media.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <MediaGrid media={media} onRemove={removeMedia} />
            </div>
          )}
          
          <File 
            before={<Icon24Camera role="presentation" />} 
            size="m" 
            mode="secondary"
            multiple
            accept="image/*,video/*"
            onChange={handleFileUpload}
            loading={isUploading}
          >
            Прикрепить фото или видео
          </File>
        </FormItem>

        <FormItem>
          <Button 
            size="l" 
            stretched 
            disabled={!text.trim() || !tag || isLoading || isUploading} 
            loading={isLoading} 
            onClick={submitPost}
          >
            Предложить публикацию
          </Button>
        </FormItem>
      </Group>
    </Panel>
  );
};
