import { FC, useMemo } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ModerationPostCard } from './ModerationPostCard';

const SortableItem: FC<{ 
  item: any; 
  onContentUpdated: (id: number, content: string) => void;
  onArchive: (id: number) => void; 
}> = ({ item, onContentUpdated, onArchive }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: item.id, disabled: item.isEmpty });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.7 : 1,
    zIndex: isDragging ? 1 : 0,
    position: 'relative' as const,
    height: '100%'
  };

  if (item.isEmpty) {
    const dDate = new Date(item.time);
    const timeStr = dDate.toLocaleTimeString(['ru-RU'], { hour: '2-digit', minute: '2-digit' });
    const dateStr = dDate.toLocaleDateString(['ru-RU'], { day: '2-digit', month: 'long' });
    return (
      <div ref={setNodeRef} style={style}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'stretch', height: '100%' }}>
          <div style={{ 
            flexGrow: 1, 
            padding: '20px 16px', 
            borderRadius: 12, 
            border: '2px dashed var(--vkui--color_separator_primary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'var(--vkui--color_text_subhead)', 
            background: 'var(--vkui--color_background_secondary)',
            fontSize: 14,
            fontWeight: 500
          }}>
             Пустое окно — {timeStr} ({dateStr})
          </div>
        </div>
      </div>
    );
  }

  const scheduledTimeStr = item.post?.publishDate 
    ? new Date(item.post.publishDate).toLocaleTimeString(['ru-RU'], { hour: '2-digit', minute: '2-digit' })
    : 'Вне сетки';

  return (
    <div ref={setNodeRef} style={style}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'stretch', height: '100%' }}>
        <div 
          {...attributes} 
          {...listeners} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'grab', 
            padding: '0 4px',
            color: 'var(--vkui--color_icon_secondary)',
            touchAction: 'none'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 16 }}>
             <div style={{ width: '100%', height: 2, background: 'currentColor', borderRadius: 2 }} />
             <div style={{ width: '100%', height: 2, background: 'currentColor', borderRadius: 2 }} />
             <div style={{ width: '100%', height: 2, background: 'currentColor', borderRadius: 2 }} />
          </div>
        </div>
        
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
           <div style={{ marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: 'var(--vkui--color_text_accent)' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
              Слот: {scheduledTimeStr}
           </div>
           <ModerationPostCard 
              post={item.post}
              onApprove={() => {}}
              onReject={() => {}}
              onContentUpdated={onContentUpdated}
              isScheduleView={true}
              onArchive={() => onArchive(item.post.id)}
            />
        </div>
      </div>
    </div>
  );
};

interface SortableScheduleListProps {
  posts: any[];
  setPosts: (posts: any[]) => void;
  onContentUpdated: (id: number, content: string) => void;
  onArchive: (id: number) => void;
  date: Date;
  scheduleIntervalMinutes?: number;
  scheduleStartTime?: string;
  scheduleEndTime?: string;
}

export const SortableScheduleList: FC<SortableScheduleListProps> = ({ 
  posts, setPosts, onContentUpdated, onArchive, date,
  scheduleIntervalMinutes = 60, scheduleStartTime = '09:00', scheduleEndTime = '21:00' 
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const gridItems = useMemo(() => {
    const items: any[] = [];
    
    // Создаем сетку времени
    const startParts = scheduleStartTime.split(':').map(Number);
    const endParts = scheduleEndTime.split(':').map(Number);
    const startMins = startParts[0] * 60 + startParts[1];
    const endMins = endParts[0] * 60 + endParts[1];

    const slotTimes: number[] = [];
    const slotDate = new Date(date);
    slotDate.setHours(0, 0, 0, 0);

    for (let cur = startMins; cur <= endMins; cur += scheduleIntervalMinutes) {
      const t = new Date(slotDate.getTime() + cur * 60000);
      slotTimes.push(t.getTime());
    }

    // Сопоставляем посты и слоты
    const usedPosts = new Set();
    slotTimes.forEach(slotTime => {
      // Ищем пост, который попадает в этот слот
      const post = posts.find(p => !usedPosts.has(p.id) && p.publishDate && Math.abs(new Date(p.publishDate).getTime() - slotTime) < (scheduleIntervalMinutes * 60000 / 2));
      if (post) {
        items.push({ id: String(post.id), isPost: true, post });
        usedPosts.add(post.id);
      } else {
        items.push({ id: `empty-${slotTime}`, isEmpty: true, time: slotTime });
      }
    });

    // Добавляем зависшие посты только для текущего выбранного дня
    const isSameDay = (d1: Date, d2: Date) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    
    posts.filter(p => !usedPosts.has(p.id)).forEach(post => {
      const pDate = new Date(post.publishDate || post.createdAt);
      if (isSameDay(pDate, date)) {
        items.push({ id: String(post.id), isPost: true, post });
      }
      // Посты других дней просто не попадают в выдачу для этой вкладки pagination
    });

    // Сортируем все по времени
    return items.sort((a, b) => {
      const timeA = a.isPost ? new Date(a.post.publishDate || a.post.createdAt).getTime() : a.time;
      const timeB = b.isPost ? new Date(b.post.publishDate || b.post.createdAt).getTime() : b.time;
      return timeA - timeB;
    });

  }, [posts, date, scheduleIntervalMinutes, scheduleStartTime, scheduleEndTime]);

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    let activeItem = gridItems.find(i => i.id === active.id);
    if (!activeItem) {
      const p = posts.find(p => String(p.id) === active.id);
      if (p) activeItem = { id: String(p.id), isPost: true, post: p };
    }

    let overItem = gridItems.find(i => i.id === over.id);
    if (!overItem) {
      const p = posts.find(p => String(p.id) === over.id);
      if (p) overItem = { id: String(p.id), isPost: true, post: p };
    }

    if (!activeItem?.isPost || !overItem) return;

    // Прямой свап постов
    if (overItem.isPost) {
      try {
        await fetch(`http://localhost:3000/api/posts/swap-time`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ activeId: Number(active.id), overId: Number(over.id) })
        });
        
        // Оптимистичное обновление
        const newPosts = [...posts];
        const p1 = newPosts.find(p => p.id === Number(active.id));
        const p2 = newPosts.find(p => p.id === Number(over.id));
        if (p1 && p2) {
          const temp = p1.publishDate;
          p1.publishDate = p2.publishDate;
          p2.publishDate = temp;
          setPosts(newPosts);
        }
      } catch (e) {
        console.error("Failed to swap dates", e);
      }
    } 
    // Драг на пустой слот
    else if (overItem.isEmpty) {
      try {
        const newDate = new Date(overItem.time);
        await fetch(`http://localhost:3000/api/posts/${active.id}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'approved', publishDate: newDate.toISOString() })
        });
        
        const newPosts = posts.map(p => p.id === Number(active.id) ? { ...p, publishDate: newDate.toISOString() } : p);
        setPosts(newPosts);
      } catch (e) {
        console.error("Failed to set slot time", e);
      }
    }
  };

  const otherDaysPosts = posts.filter(p => {
    const isAlreadyInGrid = gridItems.some(i => i.isPost && i.post?.id === p.id);
    return !isAlreadyInGrid;
  }).sort((a, b) => new Date(a.publishDate || a.createdAt).getTime() - new Date(b.publishDate || b.createdAt).getTime());

  if (!scheduleIntervalMinutes) return null;

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={gridItems.map(p => p.id)} strategy={rectSortingStrategy}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
          {gridItems.map((item) => (
            <SortableItem 
              key={item.id} 
              item={item} 
              onContentUpdated={onContentUpdated} 
              onArchive={onArchive} 
            />
          ))}
        </div>
      </SortableContext>

      {otherDaysPosts.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Посты на другие дни ({otherDaysPosts.length})</div>
          <SortableContext items={otherDaysPosts.map(p => String(p.id))} strategy={rectSortingStrategy}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
              {otherDaysPosts.map(post => (
                <SortableItem 
                  key={post.id} 
                  item={{ id: String(post.id), isPost: true, post }} 
                  onContentUpdated={onContentUpdated} 
                  onArchive={onArchive} 
                />
              ))}
            </div>
          </SortableContext>
        </div>
      )}
    </DndContext>
  );
};
