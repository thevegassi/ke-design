import React from 'react';
import { XAvatarCircle } from './XAvatarCircle.jsx';
import { XActionsPageMenuButton } from './XActionsPageMenuButton.jsx';
import { XTitleLayout125 } from './XTitleLayout125.jsx';

export function CommunitiesOfferNers({ title = 'Интересные страницы', name = 'Key Records', category = 'Студия звукозаписи', width = 232, ...rest }) {
  return (
    <div style={{ width, borderRadius: 5, background: 'var(--chrome-surface)', boxShadow: 'inset 0 0 0 1px var(--chrome-border), inset 0 -1px 0 0 var(--chrome-border-strong)', display: 'flex', flexDirection: 'column', gap: 10, padding: '13px 16px', boxSizing: 'border-box', ...rest.style }} {...rest}>
      <XTitleLayout125 title={title} />
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <XAvatarCircle size={40} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 13, lineHeight: '17px', color: 'var(--chrome-link)' }}>{name}</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 12.5, lineHeight: '16px', color: 'var(--chrome-icon)' }}>{category}</span>
        </div>
      </div>
      <XActionsPageMenuButton label="Подписаться" width={199} />
    </div>
  );
}
export default CommunitiesOfferNers;
