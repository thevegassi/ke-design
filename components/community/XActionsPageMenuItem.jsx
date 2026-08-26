import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function XActionsPageMenuItem({ icon = 'Notification24', label = 'Уведомления', width = 200, ...rest }) {
  return (
    <div style={{ position: 'relative', width, height: 36, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', ...rest.style }} {...rest}>
      <div style={{ width: 24, height: 24, flexShrink: 0, color: 'var(--chrome-meta)' }}><Icon name={icon} size={24} /></div>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, whiteSpace: 'nowrap', lineHeight: '18px', color: 'var(--ke-black)' }}>{label}</span>
    </div>
  );
}
export default XActionsPageMenuItem;
