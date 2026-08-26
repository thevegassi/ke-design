import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Tag } from './Tag.jsx';

/* Instagram post / story frame. Square posts are 1080×1080, stories 1080×1920.
   Photo full-bleed, logo at the 65px margin, lime tag, then the Nunito Sans
   Bold display line. `scale` renders the frame smaller without changing ratios. */
export function PostFrame({ image, tag, title, subtitle, format = 'square', background = 'var(--ke-lime)', ink = 'var(--ke-white)', titleSize, scale = 1, style, children, ...rest }) {
  const w = 1080, h = format === 'story' ? 1920 : 1080;
  const ts = titleSize ?? (format === 'story' ? 162.43943786621094 : 110);
  return (
    <div style={{ width: w * scale, height: h * scale, flexShrink: 0, ...style }} {...rest}>
      <div style={{ position: 'relative', width: w, height: h, overflow: 'hidden', background, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {image ? <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `url(${image}) center / cover no-repeat` }} /> : null}
        <div style={{ position: 'absolute', left: 65, top: format === 'story' ? 485 : 65 }}><Logo height={82.718} color={ink} /></div>
        <div style={{ position: 'absolute', left: 65, bottom: format === 'story' ? 485 : 65, display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'flex-start', maxWidth: 950 }}>
          {tag ? <Tag>{tag}</Tag> : null}
          {title ? <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: ts, lineHeight: 1.0402272939682007, color: ink, whiteSpace: 'pre-line' }}>{title}</span> : null}
          {subtitle ? <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 40, lineHeight: 1.1, color: ink, opacity: 0.7 }}>{subtitle}</span> : null}
        </div>
        {children}
      </div>
    </div>
  );
}
export default PostFrame;
