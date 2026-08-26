import React from 'react';
import { XAvatarCircle } from './XAvatarCircle.jsx';

export function AvatarsSmall({ images = [undefined, undefined, undefined], size = 24, overlap = 8, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ...rest.style }} {...rest}>
      {images.map((src, i) => (
        <div key={i} style={{ marginLeft: i === 0 ? 0 : -overlap, borderRadius: '50%', boxShadow: '0 0 0 2px var(--chrome-surface)', display: 'flex' }}>
          <XAvatarCircle size={size} image={src} />
        </div>
      ))}
    </div>
  );
}
export default AvatarsSmall;
