import { FC, useState } from 'react';
import { Avatar, Button, IconButton, Textarea, Link } from '@vkontakte/vkui';
import { Icon24WriteOutline, Icon24CheckCircleOutline, Icon24CancelOutline, Icon24ChevronDown, Icon24ChevronUp } from '@vkontakte/icons';
import { MediaGrid } from './MediaGrid';
import { vkFetch } from '../utils/api';

export const ModerationPostCard: FC<{
  post: any;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onContentUpdated: (id: number, content: string) => void;
  isScheduleView?: boolean;
  onArchive?: () => void;
}> = ({ post, onApprove, onReject, onContentUpdated, isScheduleView, onArchive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(post.content || post.text || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const text = post.content || post.text || '';
  const preview = text.length > 80 ? text.slice(0, 80) + '…' : text;
  const hasMedia = post.media && post.media.length > 0;

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const updated = await vkFetch(`/posts/${post.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ content: editText, tag: post.tag })
      });
      onContentUpdated(post.id, updated.content);
      setIsEditing(false);
    } catch (e) {
      console.error(e);
      alert('Ошибка при сохранении текста');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{
      borderRadius: 12,
      background: 'var(--vkui--color_background_content)',
      border: '1px solid var(--vkui--color_separator_primary)',
      overflow: 'hidden'
    }}>
      {/* Шапка — всегда видна, кликабельна */}
      <div
        onClick={() => !isEditing && setIsExpanded(v => !v)}
        style={{
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          cursor: isEditing ? 'default' : 'pointer',
          userSelect: 'none'
        }}
      >
        <Avatar size={32} src={post.author?.photo_200} initials="🐾" style={{ flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            {post.tag && (
              <span style={{
                padding: '2px 7px',
                borderRadius: 6,
                background: 'var(--vkui--color_background_secondary)',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                color: 'var(--vkui--color_text_primary)',
                flexShrink: 0
              }}>
                #{post.tag}
              </span>
            )}
            <span style={{
              fontSize: 13,
              color: 'var(--vkui--color_text_subhead)',
              flexShrink: 0
            }}>
              #{post.id} · {post.createdAt ? new Date(post.createdAt).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' }) : '—'}
            </span>
          </div>
          {!isExpanded && (
            <div style={{
              fontSize: 14,
              color: 'var(--vkui--color_text_primary)',
              marginTop: 2,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}>
              {preview}
              {hasMedia && !text && <span style={{ color: 'var(--vkui--color_text_subhead)' }}>📷 {post.media.length} фото</span>}
            </div>
          )}
        </div>
        <div style={{ color: 'var(--vkui--color_icon_secondary)', flexShrink: 0 }}>
          {isExpanded ? <Icon24ChevronUp /> : <Icon24ChevronDown />}
        </div>
      </div>

      {/* Разворачиваемая часть */}
      {isExpanded && (
        <div style={{ padding: '0 16px 16px' }}>
          <div style={{ borderTop: '1px solid var(--vkui--color_separator_primary)', paddingTop: 12, marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div style={{ fontSize: 13, color: 'var(--vkui--color_text_subhead)' }}>
                {post.createdAt ? new Date(post.createdAt).toLocaleString('ru-RU') : 'Неизвестно'}
                {post.author?.vkId && (
                  <span> · <Link href={`https://vk.com/id${post.author.vkId}`} target="_blank">Профиль VK</Link></span>
                )}
              </div>
              {!isEditing && (
                <Button
                  mode="tertiary"
                  size="s"
                  onClick={e => { e.stopPropagation(); setIsEditing(true); }}
                  before={<Icon24WriteOutline />}
                >
                  Изменить
                </Button>
              )}
            </div>

            {isEditing ? (
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ flexGrow: 1 }}>
                  <Textarea
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    disabled={isSaving}
                    getRef={textarea => {
                      if (textarea) {
                        textarea.style.height = 'auto';
                        textarea.style.height = textarea.scrollHeight + 'px';
                      }
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <IconButton onClick={handleSave} disabled={isSaving}>
                    <Icon24CheckCircleOutline fill="var(--vkui--color_icon_positive)" />
                  </IconButton>
                  <IconButton onClick={() => { setIsEditing(false); setEditText(text); }} disabled={isSaving}>
                    <Icon24CancelOutline fill="var(--vkui--color_icon_negative)" />
                  </IconButton>
                </div>
              </div>
            ) : (
              <div style={{ fontSize: 15, lineHeight: 1.5, marginBottom: 12, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {text}
              </div>
            )}

            {hasMedia && (
              <div style={{ marginBottom: 12 }}>
                <MediaGrid media={post.media} />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            {isScheduleView ? (
              <Button size="l" mode="primary" stretched onClick={onArchive} before={<Icon24CheckCircleOutline />}>
                В архив
              </Button>
            ) : post.status === 'published' ? (
              <Button size="l" mode="secondary" stretched disabled>
                Уже в архиве
              </Button>
            ) : (
              <>
                <Button size="l" mode="primary" stretched onClick={() => onApprove(post.id)}>Одобрить</Button>
                <Button size="l" mode="secondary" stretched onClick={() => onReject(post.id)}>Отклонить</Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
