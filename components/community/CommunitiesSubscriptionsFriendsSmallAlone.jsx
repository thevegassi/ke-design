import React from 'react';
import { XTitleLayout125 } from './XTitleLayout125.jsx';
import { XAvatarsRow } from './XAvatarsRow.jsx';

export function CommunitiesSubscriptionsFriendsSmallAlone({ title = 'Подписчики', count = '18 452', images, width = 232, ...rest }) {
  return (
    <div style={{ width, borderRadius: 5, background: 'var(--chrome-surface)', boxShadow: 'inset 0 0 0 1px var(--chrome-border), inset 0 -1px 0 0 var(--chrome-border-strong)', display: 'flex', flexDirection: 'column', gap: 10, padding: '13px 16px', boxSizing: 'border-box', ...rest.style }} {...rest}>
      <XTitleLayout125 title={title} count={count} />
      <XAvatarsRow images={images} label="Смотреть всех" />
    </div>
  );
}
export default CommunitiesSubscriptionsFriendsSmallAlone;
