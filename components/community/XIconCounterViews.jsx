import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function XIconCounterViews({ count = '12.4K', ...rest }) {
  return (
    <div style={{ height: 24, display: 'flex', gap: 6, padding: '0 3px', alignItems: 'center', boxSizing: 'border-box', ...rest.style }} {...rest}>
      <div style={{ width: 16, height: 16, opacity: 0.7, flexShrink: 0, color: 'var(--chrome-meta)' }}><Icon name="Views16" size={16} /></div>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14, whiteSpace: 'nowrap', lineHeight: '16px', color: 'var(--chrome-meta)' }}>{count}</span>
    </div>
  );
}
export default XIconCounterViews;
