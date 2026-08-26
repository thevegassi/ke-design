import React from 'react';

/* Deck content row: 16px radius, rgba(255,255,255,.05) ground, 30px padding,
   Inter Regular 32px / 1.1 tracked -0.05em. */
export function GlassRow({ children, size = 32, ink = 'var(--ke-white)', style, ...rest }) {
  return (
    <div style={{ borderRadius: 16, background: 'var(--surface-row-glass)', padding: 30, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'flex-start', boxSizing: 'border-box', ...style }} {...rest}>
      <span style={{ flexGrow: 1, fontFamily: 'var(--font-deck)', fontWeight: 400, fontSize: size, lineHeight: 1.1, letterSpacing: '-0.05em', color: ink, textWrap: 'pretty' }}>{children}</span>
    </div>
  );
}
export default GlassRow;
