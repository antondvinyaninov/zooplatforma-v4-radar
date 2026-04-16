import { FC, ReactNode } from 'react';
import { Icon24Dismiss } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

export type MediaItem = { url: string; type: string };

interface MediaGridProps {
  media: MediaItem[];
  onRemove?: (index: number) => void;
}

export const MediaGrid: FC<MediaGridProps> = ({ media, onRemove }) => {
  if (!media || media.length === 0) return null;

  const renderMediaContent = (item: MediaItem, idx: number) => {
    return (
      <>
        {item.type === 'video' ? (
          <video 
            src={item.url} 
            controls
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        ) : (
          <img 
            src={item.url} 
            alt="media" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        )}
        {onRemove && (
          <IconButton 
            onClick={() => onRemove(idx)}
            style={{ 
              position: 'absolute', top: 4, right: 4, 
              backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', 
              borderRadius: '50%', padding: 4 
            }}
          >
            <Icon24Dismiss width={16} height={16} />
          </IconButton>
        )}
      </>
    );
  };

  const wrapItem = (content: ReactNode, customStyle: any = {}) => (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 8, ...customStyle }}>
      {content}
    </div>
  );

  const len = media.length;

  if (len === 1) {
    return wrapItem(renderMediaContent(media[0], 0), { width: '100%', maxHeight: 400 });
  }

  if (len === 2) {
    return (
       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, height: 250 }}>
         {wrapItem(renderMediaContent(media[0], 0))}
         {wrapItem(renderMediaContent(media[1], 1))}
       </div>
    );
  }

  if (len === 3) {
    return (
       <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '1fr 1fr', gap: 4, height: 350 }}>
         {wrapItem(renderMediaContent(media[0], 0), { gridColumn: '1', gridRow: '1 / 3' })}
         {wrapItem(renderMediaContent(media[1], 1), { gridColumn: '2', gridRow: '1' })}
         {wrapItem(renderMediaContent(media[2], 2), { gridColumn: '2', gridRow: '2' })}
       </div>
    );
  }

  if (len === 4) {
    return (
       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 4, height: 350 }}>
         {media.map((item, idx) => wrapItem(renderMediaContent(item, idx)))}
       </div>
    );
  }

  // 5 and more
  return (
     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 4 }}>
       {media.map((item, idx) => wrapItem(renderMediaContent(item, idx), { aspectRatio: '1' }))}
     </div>
  );
};
