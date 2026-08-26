import React from 'react';
import { Logo } from '../brand/Logo.jsx';

export function XAvatarCircle({ size = 50, image, ...rest }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, borderRadius: '50%', overflow: 'hidden', background: image ? `url(${image}) center / cover no-repeat` : 'var(--ke-oxford-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...rest.style }} {...rest}>
      {image ? null : <Logo variant="mark" height={size * 0.52} color="var(--ke-lime)" />}
    </div>
  );
}
export default XAvatarCircle;
