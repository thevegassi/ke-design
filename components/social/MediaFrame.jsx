import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Tag } from './Tag.jsx';

/* YouTube thumbnail (1280×720) and cover-art frame: photo darkened 37%,
   logo top-left at the 72px margin, optional lime tag top-right,
   Manrope Bold title bar across the lower third. */
export function MediaFrame({ image, title, tag, width = 1280, height = 720, background = 'var(--ke-thumb-yellow)', titleSize = 96, style, children, ...rest }) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden', background, ...style }} {...rest}>
      {image ? <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `var(--photo-scrim-soft), url(${image}) center / cover no-repeat` }} /> : null}
      <div style={{ position: 'absolute', left: 72, top: 72 }}><Logo height={72} color="var(--ke-white)" /></div>
      {tag ? <div style={{ position: 'absolute', right: 72, top: 84 }}><Tag size={41.46931076049805}>{tag}</Tag></div> : null}
      {title ? (
        <div style={{ position: 'absolute', left: 72, right: 0, bottom: 73, display: 'flex', alignItems: 'center', padding: 24, boxSizing: 'border-box' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: titleSize, lineHeight: 1.0402272939682007, color: 'var(--ke-white)', textWrap: 'balance' }}>{title}</span>
        </div>
      ) : null}
      {children}
    </div>
  );
}
export default MediaFrame;
