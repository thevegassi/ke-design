import React from 'react';
import { Logo } from '../brand/Logo.jsx';

export function ProfilePicture({ image, size = 200, ...rest }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 5, overflow: 'hidden', background: image ? `url(${image}) center / cover no-repeat` : 'var(--ke-oxford-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...rest.style }} {...rest}>
      {image ? null : <Logo variant="mark" height={size * 0.46} color="var(--ke-lime)" />}
    </div>
  );
}
export default ProfilePicture;
