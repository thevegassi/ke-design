import React from 'react';
import { XTitleLayout125 } from './XTitleLayout125.jsx';
import { XSubscriptionsGroupAvatars } from './XSubscriptionsGroupAvatars.jsx';

export function CommunitiesSubscriptionsAll({ title = 'Подписки', count = 41, items, width = 552, ...rest }) {
  return (
    <div style={{ width, borderRadius: 5, background: 'var(--chrome-surface)', boxShadow: 'inset 0 0 0 1px var(--chrome-border), inset 0 -1px 0 0 var(--chrome-border-strong)', display: 'flex', flexDirection: 'column', gap: 10, padding: '13px 16px', boxSizing: 'border-box', ...rest.style }} {...rest}>
      <XTitleLayout125 title={title} count={count} />
      <XSubscriptionsGroupAvatars items={items} />
    </div>
  );
}
export default CommunitiesSubscriptionsAll;
