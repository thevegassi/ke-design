import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function XIconCounter({ icon = 'Likes24', count = 21, active = false, ...rest }) {
  return (
    <div style={{ position: 'relative', height: 24, display: 'flex', flexDirection: 'row', gap: 6, padding: '0 3px', alignItems: 'center', boxSizing: 'border-box', ...rest.style }} {...rest}>
      <div style={{ width: 24, height: 24, opacity: active ? 1 : 0.7, flexShrink: 0, color: active ? 'var(--ke-lime-deep)' : 'var(--chrome-meta)' }}><Icon name={icon} size={24} /></div>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14, whiteSpace: 'nowrap', lineHeight: '16px', color: active ? 'var(--ke-lime-deep)' : 'var(--chrome-meta)' }}>{count}</span>
    </div>
  );
}
export default XIconCounter;
