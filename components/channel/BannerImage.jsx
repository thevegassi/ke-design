import React from 'react';
import { Logo } from '../brand/Logo.jsx';

/* Channel-art canvas with the platform's published safe areas overlaid.
   Geometry from the source file's "Banner image" guide symbol:
   2560×1440 canvas · 1546×423 mobile safe · 1855×423 tablet safe ·
   2560×423 desktop safe · 2560×1440 TV-only bleed. */
const AREAS = [
  { w: 2560, h: 1440, label: 'TV Only Area  2560 × 1440' },
  { w: 2560, h: 423, label: 'Max Desktop Safe Area  2560 × 423' },
  { w: 1855, h: 423, label: 'Tablet Safe Area  1855 × 423' },
  { w: 1546, h: 423, label: 'Mobile Safe Area  1546 × 423' },
];

export function BannerImage({ image, headline = 'your partner in the world of music', guides = true, scale = 1, background = 'var(--surface-deck)', ...rest }) {
  return (
    <div style={{ width: 2560 * scale, height: 1440 * scale, overflow: 'hidden', flexShrink: 0, ...rest.style }} {...rest}>
      <div style={{ position: 'relative', width: 2560, height: 1440, overflow: 'hidden', background, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {image ? <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `var(--photo-scrim), url(${image}) center / cover no-repeat` }} /> : null}
        <img aria-hidden="true" src="../../assets/patterns/pattern-deck-tile-lime.svg" alt="" style={{ position: 'absolute', left: 0, top: 0, width: 2808, opacity: 0.18 }} />
        <div style={{ position: 'absolute', left: 0, right: 0, top: 508, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 60 }}>
          <Logo height={230} color="var(--ke-white)" />
          <span style={{ fontFamily: 'var(--font-deck)', fontWeight: 300, fontSize: 96, letterSpacing: '-0.05em', color: 'var(--ke-lime)' }}>{headline}</span>
        </div>
        {guides ? AREAS.map((a, i) => (
          <div key={i} aria-hidden="true" style={{ position: 'absolute', left: (2560 - a.w) / 2, top: (1440 - a.h) / 2, width: a.w, height: a.h, boxShadow: 'inset 0 0 0 4px rgba(211,255,51,.55)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', pointerEvents: 'none' }}>
            <span style={{ marginTop: 12, padding: '6px 16px', background: 'rgba(12,35,80,.75)', fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 28, color: 'var(--ke-lime)', whiteSpace: 'nowrap' }}>{a.label}</span>
          </div>
        )) : null}
      </div>
    </div>
  );
}
export default BannerImage;
