import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function XLeftMenuRow({ icon = 'Home24Solid', label = 'Моя страница', active = false, ...rest }) {
  return (
    <div style={{ position: 'relative', width: 153, height: 28, borderRadius: 2, ...rest.style }} {...rest}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 115, height: 27, display: 'flex', flexDirection: 'row', gap: 7, alignItems: 'flex-start' }}>
        <div style={{ position: 'relative', width: 24, height: 24, opacity: active ? 1 : 0.45, flexShrink: 0, color: 'var(--chrome-nav-ink)' }}>
          <Icon name={icon} size={24} />
        </div>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 12.5, whiteSpace: 'nowrap', lineHeight: '27px', color: active ? 'var(--ke-lime)' : 'var(--chrome-nav-ink)' }}>{label}</span>
      </div>
    </div>
  );
}
export default XLeftMenuRow;
