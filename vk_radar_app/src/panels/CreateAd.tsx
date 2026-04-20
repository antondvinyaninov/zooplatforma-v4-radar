import { useState } from 'react';
import { Panel, PanelHeader, PanelHeaderBack, Group, FormLayoutGroup, FormItem, Input, Textarea, CustomSelect, Button, Placeholder, Spacing, Div, Title, Text } from '@vkontakte/vkui';
import { Icon56NewsfeedOutline, Icon28CheckCircleOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { vkFetch } from '../utils/api';

export const CreateAd = ({ id }: { id: string }) => {
  const routeNavigator = useRouteNavigator();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('собака');

  const handleSubmit = async () => {
    if (!title || !description) return;
    setLoading(true);
    try {
      const gId = new URLSearchParams(window.location.search).get('vk_group_id');
      await vkFetch('/posts', {
        method: 'POST',
        body: JSON.stringify({ 
          content: `${title}\n\n${description}`, 
          tag, 
          status: 'pending', 
          groupId: gId || 'default' 
        })
      });
      setSuccess(true);
    } catch (e) { 
      console.error(e); 
    } finally { 
      setLoading(false); 
    }
  };

  if (success) {
    return (
      <Panel id={id}>
        <PanelHeader delimiter="none" before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>Объявление</PanelHeader>
        <Placeholder
          icon={<Icon28CheckCircleOutline width={56} height={56} style={{ color: 'var(--vkui--color_icon_positive)' }} />}
          action={<Button size="l" className="rounded-lg" onClick={() => setSuccess(false)}>Подать еще одно</Button>}
        >
          Отправлено на проверку!
        </Placeholder>
      </Panel>
    );
  }

  return (
    <Panel id={id}>
      <PanelHeader delimiter="none" before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>Объявление</PanelHeader>
      
      <Group>
        <Div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 24, marginTop: 12 }}>
            <Icon56NewsfeedOutline style={{ color: 'var(--vkui--color_icon_accent)', marginBottom: 16 }} />
            <Title level="2" weight="1" style={{ marginBottom: 8 }}>Новое объявление</Title>
            <Text style={{ color: 'var(--vkui--color_text_secondary)', padding: '0 20px' }}>
              Ваша запись появится в ленте сообщества после модерации.
            </Text>
          </div>
        </Div>

        <FormLayoutGroup mode="vertical">
          <FormItem top="Заголовок">
            <Input 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              placeholder="Например: Поиск дома для Дружка" 
            />
          </FormItem>

          <FormItem top="Категория">
            <CustomSelect 
              value={tag} 
              onChange={e => setTag(e.target.value)} 
              options={[
                {label: 'Собака', value: 'собака'},
                {label: 'Кошка', value: 'кошка'},
                {label: 'Помощь', value: 'помощь'},
                {label: 'Другое', value: 'другое'}
              ]} 
              placeholder="Выберите категорию"
            />
          </FormItem>

          <FormItem top="Описание">
            <Textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="Опишите подробности и укажите контакты" 
              rows={6}
            />
          </FormItem>

          <FormItem>
            <Button 
              stretched 
              size="l" 
              loading={loading} 
              onClick={handleSubmit}
              className="rounded-lg"
            >
              Отправить в группу
            </Button>
          </FormItem>
        </FormLayoutGroup>
      </Group>

      <Spacing size={80} />
      <style>{`.rounded-lg { border-radius: 8px !important; }`}</style>
    </Panel>
  );
};
