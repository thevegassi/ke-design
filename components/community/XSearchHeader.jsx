import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function XSearchHeader({ placeholder = 'Поиск', width = 230, ...rest }) {
  return (
    <div style={{ position: 'relative', width, height: 28, borderRadius: 14, background: 'var(--chrome-nav-field)', ...rest.style }} {...rest}>
      <div style={{ position: 'absolute', left: 7, top: 6, width: 16, height: 16, color: 'var(--chrome-nav-ink-muted)' }}><Icon name="Search16" size={16} /></div>
      <span style={{ position: 'absolute', left: 28, top: 6, fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, whiteSpace: 'nowrap', lineHeight: '16px', color: 'var(--chrome-nav-ink-muted)' }}>{placeholder}</span>
    </div>
  );
}
export default XSearchHeader;
