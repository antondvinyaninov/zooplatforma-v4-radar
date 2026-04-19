import { useState } from 'react';
import { Panel, PanelHeader, PanelHeaderBack, Group, FormLayoutGroup, FormItem, Input, Textarea, CustomSelect, Button, Placeholder, Spacing, Div, Title, Text } from '@vkontakte/vkui';
import { Icon56NewsfeedOutline, Icon28CheckCircleOutline } from '@vkontakte/icons';
import { vkFetch } from '../utils/api';

export const CreateAd = ({ id }: { id: string }) => {
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
        <PanelHeader delimiter="none" before={<PanelHeaderBack onClick={() => window.history.back()} />}>Пристрой</PanelHeader>
        <Placeholder
          icon={<Icon28CheckCircleOutline width={56} height={56} style={{ color: 'var(--vkui--color_icon_positive)' }} />}
          action={<Button size="m" onClick={() => setSuccess(false)}>Подать еще одно</Button>}
        >
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Отправлено!</div>
          <Text weight="2" style={{ color: 'var(--vkui--color_text_secondary)', textAlign: 'center' }}>
            Ваше объявление отправлено на модерацию в группу. Оно появится на стене сообщества после проверки.
          </Text>
        </Placeholder>
      </Panel>
    );
  }

  return (
    <Panel id={id}>
      <PanelHeader delimiter="none" before={<PanelHeaderBack onClick={() => window.history.back()} />}>Пристрой</PanelHeader>
      
      <Group>
        <Div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 24, marginTop: 12 }}>
            <Icon56NewsfeedOutline style={{ color: 'var(--vkui--color_icon_accent)', marginBottom: 16 }} />
            <Title level="2" weight="1" style={{ marginBottom: 8 }}>Новое объявление</Title>
            <Text style={{ color: 'var(--vkui--color_text_secondary)', padding: '0 20px' }}>
              Заполните анкету, и мы опубликуем её на стене нашего сообщества.
            </Text>
          </div>
        </Div>

        <FormLayoutGroup mode="vertical">
          <FormItem top="Имя / Заголовок" htmlFor="ad-title">
            <Input 
              id="ad-title"
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              placeholder="Например: Барсик ищет дом" 
            />
          </FormItem>

          <FormItem top="Категория" htmlFor="ad-tag">
            <CustomSelect 
              id="ad-tag"
              value={tag} 
              onChange={e => setTag(e.target.value)} 
              options={[
                {label: 'Собака', value: 'собака'},
                {label: 'Кошка', value: 'кошка'},
                {label: 'Экзотика', value: 'экзотика'},
                {label: 'Срочно', value: 'срочно'},
                {label: 'Корм/Лекарства', value: 'помощь'},
                {label: 'Другое', value: 'другое'}
              ]} 
              placeholder="Выберите категорию..."
            />
          </FormItem>

          <FormItem top="Описание животного и контакты" htmlFor="ad-desc">
            <Textarea 
              id="ad-desc"
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="Опишите характер, возраст и как с вами связаться..." 
              rows={6}
            />
          </FormItem>

          <FormItem>
            <Button 
              stretched 
              size="l" 
              loading={loading} 
              onClick={handleSubmit}
            >
              Опубликовать в группу
            </Button>
          </FormItem>
        </FormLayoutGroup>
      </Group>

      <Spacing size={80} />
    </Panel>
  );
};
