import React from 'react';
import { AvatarsSmall } from './AvatarsSmall.jsx';

export function XAvatarsRow({ images, label = '18 452 подписчика', ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center', ...rest.style }} {...rest}>
      <AvatarsSmall images={images} />
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, lineHeight: '18px', color: 'var(--chrome-link)' }}>{label}</span>
    </div>
  );
}
export default XAvatarsRow;
