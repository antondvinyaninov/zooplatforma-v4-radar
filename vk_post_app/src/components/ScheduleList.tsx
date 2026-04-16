import { FC } from 'react';
import { Button } from '@vkontakte/vkui';
import { ModerationPostCard } from './ModerationPostCard';
import { vkFetch } from '../utils/api';

interface ScheduleListProps {
  posts: any[];
  setPosts: (posts: any[]) => void;
  onContentUpdated: (id: number, content: string) => void;
  onArchive: (id: number) => void;
  intervalMinutes?: number;
}

export const ScheduleList: FC<ScheduleListProps> = ({
  posts,
  setPosts,
  onContentUpdated,
  onArchive,
  intervalMinutes = 60
}) => {
  const sorted = [...posts].sort(
    (a, b) => new Date(a.publishDate || a.createdAt).getTime() - new Date(b.publishDate || b.createdAt).getTime()
  );

  const shiftPost = async (post: any, direction: 'earlier' | 'later') => {
    const delta = direction === 'earlier' ? -1 : 1;
    const current = new Date(post.publishDate);
    const newDate = new Date(current.getTime() + delta * intervalMinutes * 60000);

    try {
      await vkFetch(`/posts/${post.id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'approved', publishDate: newDate.toISOString() })
      });
      setPosts(posts.map(p => p.id === post.id ? { ...p, publishDate: newDate.toISOString() } : p));
    } catch (e) {
      console.error('Failed to shift post time', e);
    }
  };

  if (sorted.length === 0) {
    return (
      <div style={{ padding: '32px 16px', color: 'var(--vkui--color_text_subhead)', textAlign: 'center' }}>
        В расписании пока нет постов
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {sorted.map(post => {
        const publishDate = post.publishDate ? new Date(post.publishDate) : null;
        const dateStr = publishDate
          ? publishDate.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' }) +
            ' в ' +
            publishDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
          : 'Дата не назначена';

        return (
          <div key={post.id}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 6,
              padding: '4px 4px 0'
            }}>
              <span style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--vkui--color_text_accent)',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />
                {dateStr}
              </span>
              {publishDate && (
                <div style={{ display: 'flex', gap: 4 }}>
                  <Button
                    size="s"
                    mode="tertiary"
                    onClick={() => shiftPost(post, 'earlier')}
                    title="Сдвинуть раньше"
                  >
                    ↑
                  </Button>
                  <Button
                    size="s"
                    mode="tertiary"
                    onClick={() => shiftPost(post, 'later')}
                    title="Сдвинуть позже"
                  >
                    ↓
                  </Button>
                </div>
              )}
            </div>
            <ModerationPostCard
              post={post}
              onApprove={() => {}}
              onReject={() => {}}
              onContentUpdated={onContentUpdated}
              isScheduleView={true}
              onArchive={() => onArchive(post.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
