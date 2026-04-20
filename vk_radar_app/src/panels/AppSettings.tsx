import { useState, useEffect } from 'react';
import { 
  Panel, 
  PanelHeader, 
  PanelHeaderBack, 
  Group, 
  FormLayoutGroup,
  FormItem, 
  Input, 
  Select, 
  Button, 
  Spacing, 
  Header, 
  SimpleCell, 
  Avatar, 
  CustomSelect,
  CustomSelectOption,
  Title,
  Text,
} from '@vkontakte/vkui';
import { 
  Icon28InfoOutline
} from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { vkFetch } from '../utils/api';

export const AppSettings = ({ id }: { id: string }) => {
  const routeNavigator = useRouteNavigator();
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState<any>({
    cityName: '',
    cityId: null,
    dutyAdminId: '',
    scheduleIntervalMinutes: 60,
    scheduleStartTime: '09:00',
    scheduleEndTime: '21:00',
    acceptCrossPosts: false
  });
  const [managers, setManagers] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [isSearchingCities, setIsSearchingCities] = useState(false);

  const fetchConfig = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const groupId = params.get('vk_group_id');
      if (!groupId) return;

      const data = await vkFetch(`/community/${groupId}/managers?vk_user_id=${params.get('vk_user_id')}`);
      setManagers(data.items || []);
      if (data.community) {
        setConfig(data.community);
      }
    } catch (e) {
      console.error('Failed to fetch group config', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  const searchCities = async (q: string) => {
    if (!q || q.length < 2) {
      setCities([]);
      return;
    }
    setIsSearchingCities(true);
    try {
      const data = await vkFetch(`/utils/cities?q=${q}`);
      setCities(data.items || []);
    } catch (e) {
      console.error('City search failed', e);
    } finally {
      setIsSearchingCities(false);
    }
  };

  const handleSave = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const groupId = params.get('vk_group_id');
      
      await vkFetch(`/community/${groupId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          ...config,
          vk_viewer_role: params.get('vk_viewer_role') // Для проверки прав на бэкенде
        })
      });
      alert('Настройки успешно сохранены');
      routeNavigator.back();
    } catch (e) {
      alert('Ошибка при сохранении: ' + (e instanceof Error ? e.message : 'Неизвестная ошибка'));
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader 
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Настройки группы
      </PanelHeader>

      <div style={{ padding: '0 16px', marginTop: 16 }}>
        <Title level="2" weight="2" style={{ marginBottom: 8 }}>ZooPlatform Radar</Title>
        <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
          Эти настройки определяют, как приложение будет работать именно в вашем сообществе.
        </Text>
      </div>

      <Group header={<Header>Локация и ответственные</Header>}>
        <FormLayoutGroup mode="vertical">
          <FormItem top="Ваш город" bottom="Посты будут автоматически привязываться к этому городу" htmlFor="city">
            <CustomSelect
              id="city"
              placeholder="Начните вводить название города"
              searchable
              onInputChange={(e) => searchCities(e.target.value)}
              options={cities.map(c => ({ label: c.title, value: c.id }))}
              filterFn={false}
              fetching={isSearchingCities}
              value={config.cityId}
              onChange={(e) => {
                const cityId = Number(e.target.value);
                const city = cities.find(c => c.id === cityId);
                if (city) {
                  setConfig({ ...config, cityId: city.id, cityName: city.title });
                }
              }}
            />
          </FormItem>

          <FormItem top="Дежурный администратор" bottom="Его профиль будет указан в подписи к постам" htmlFor="admin">
            <Select
              id="admin"
              placeholder="Выберите из участников"
              options={managers.map(m => ({ 
                label: `${m.first_name} ${m.last_name}`, 
                value: String(m.id),
                avatar: m.photo_50 
              }))}
              value={String(config.dutyAdminId)}
              onChange={(e) => setConfig({ ...config, dutyAdminId: e.target.value })}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption 
                  {...restProps} 
                  before={<Avatar size={24} src={option.avatar} />}
                >
                  {option.label}
                </CustomSelectOption>
              )}
            />
          </FormItem>
        </FormLayoutGroup>
      </Group>

      <Group header={<Header>Расписание публикаций</Header>}>
        <FormLayoutGroup mode="horizontal">
          <FormItem top="Интервал (мин)" htmlFor="interval">
            <Select
              id="interval"
              value={config.scheduleIntervalMinutes}
              onChange={(e) => setConfig({ ...config, scheduleIntervalMinutes: Number(e.target.value) })}
              options={[
                { label: '30 мин', value: 30 },
                { label: '1 час', value: 60 },
                { label: '2 часа', value: 120 },
                { label: '3 часа', value: 180 },
              ]}
            />
          </FormItem>
          
          <FormItem top="Начало дня" htmlFor="start-time">
            <Input 
              id="start-time"
              type="time" 
              value={config.scheduleStartTime}
              onChange={(e) => setConfig({ ...config, scheduleStartTime: e.target.value })}
            />
          </FormItem>
          
          <FormItem top="Конец дня" htmlFor="end-time">
            <Input 
              id="end-time"
              type="time" 
              value={config.scheduleEndTime}
              onChange={(e) => setConfig({ ...config, scheduleEndTime: e.target.value })}
            />
          </FormItem>
        </FormLayoutGroup>
        <div style={{ padding: '0 16px 16px 16px' }}>
          <Text size={12} weight="3" style={{ color: 'var(--vkui--color_text_secondary)' }}>
             Бот будет автоматически распределять одобренные посты в этом временном диапазоне с указанным интервалом.
          </Text>
        </div>
      </Group>

      <Group header={<Header>Дополнительно</Header>}>
        <SimpleCell
          before={<Icon28InfoOutline style={{ color: 'var(--vkui--color_icon_secondary)' }} />}
          multiline
          subtitle="Если включено, посты из других партнерских групп будут предлагаться вашим пользователям."
        >
          Кросс-постинг (в разработке)
        </SimpleCell>
        <FormItem>
          <Button 
            size="l" 
            stretched 
            appearance="accent" 
            mode="primary"
            onClick={handleSave}
            loading={loading}
            className="rounded-lg"
          >
            Сохранить настройки
          </Button>
        </FormItem>
      </Group>

      <Spacing size={80} />
      <style>{`.rounded-lg { border-radius: 8px !important; }`}</style>
    </Panel>
  );
};
