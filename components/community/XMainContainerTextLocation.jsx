import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function XMainContainerTextLocation({ address = 'Алматы, Казахстан', lines = ['ул. Абая 150', 'пн–пт 10:00–19:00'], width = 516, ...rest }) {
  return (
    <div style={{ width, display: 'flex', flexDirection: 'column', gap: 6, ...rest.style }} {...rest}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
        <div style={{ width: 24, height: 24, flexShrink: 0, color: 'var(--chrome-icon)' }}><Icon name="Point24" size={24} /></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, lineHeight: '18px', color: 'var(--chrome-link)' }}>{address}</span>
          {lines.map((l, i) => <span key={i} style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, lineHeight: '18px', color: 'var(--chrome-meta)' }}>{l}</span>)}
        </div>
      </div>
      <div aria-hidden="true" style={{ height: 92, borderRadius: 5, background: 'var(--ke-lavender)', boxShadow: 'inset 0 0 0 1px var(--chrome-border)' }} />
    </div>
  );
}
export default XMainContainerTextLocation;
