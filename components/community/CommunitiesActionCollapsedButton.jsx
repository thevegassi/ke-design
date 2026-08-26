import React from 'react';
import { XActionsPageMenuButton } from './XActionsPageMenuButton.jsx';
import { XActionsPageMenuItem } from './XActionsPageMenuItem.jsx';

export function CommunitiesActionCollapsedButton({ primary = 'Подписаться', items, ...rest }) {
  const rows = items ?? [
    { icon: 'Notification24', label: 'Уведомления' },
    { icon: 'Share24', label: 'Рассказать друзьям' },
    { icon: 'More24', label: 'Еще' },
  ];
  return (
    <div style={{ position: 'relative', width: 232, borderRadius: 5, background: 'var(--chrome-surface)', boxShadow: 'inset 0 0 0 1px var(--chrome-border), inset 0 -1px 0 0 var(--chrome-border-strong)', display: 'flex', flexDirection: 'column', gap: 6, padding: '13px 16px', alignItems: 'flex-start', boxSizing: 'border-box', ...rest.style }} {...rest}>
      <XActionsPageMenuButton label={primary} width={199} />
      <div aria-hidden="true" style={{ height: 1, background: 'var(--chrome-border)', alignSelf: 'stretch', flexShrink: 0 }} />
      <div style={{ width: 200, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {rows.map((r, i) => <XActionsPageMenuItem key={i} icon={r.icon} label={r.label} />)}
      </div>
    </div>
  );
}
export default CommunitiesActionCollapsedButton;
