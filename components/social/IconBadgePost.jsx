import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* The icon-badge post: a single glyph blown up to 640px inside a 960px circle
   with a 60px black ring, on a flat brand ground. 1080×1080. */
export function IconBadgePost({ icon = 'TablerIconBrandSpotify', background = 'var(--ke-lime-deep)', ring = 'var(--ke-lime-bright)', ink = 'var(--ke-black)', scale = 1, ...rest }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, flexShrink: 0, ...rest.style }} {...rest}>
      <div style={{ position: 'relative', width: 1080, height: 1080, overflow: 'hidden', background, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <div style={{ position: 'absolute', left: 60, top: 60, width: 960, height: 960, borderRadius: 960, background: ring, boxShadow: '0 0 0 60px rgb(0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} size={640} style={{ color: ink }} />
        </div>
      </div>
    </div>
  );
}
export default IconBadgePost;
