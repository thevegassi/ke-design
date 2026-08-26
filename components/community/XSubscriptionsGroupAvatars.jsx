import React from 'react';
import { Logo } from '../brand/Logo.jsx';

export function XSubscriptionsGroupAvatars({ items = [1, 2, 3, 4, 5, 6], size = 74, ...rest }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, ...rest.style }} {...rest}>
      {items.map((it, i) => (
        <div key={i} style={{ width: size, height: size, borderRadius: 5, overflow: 'hidden', background: typeof it === 'string' ? `url(${it}) center / cover no-repeat` : 'var(--ke-periwinkle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {typeof it === 'string' ? null : <Logo variant="mark" height={size * 0.4} color="var(--ke-oxford-blue)" />}
        </div>
      ))}
    </div>
  );
}
export default XSubscriptionsGroupAvatars;
