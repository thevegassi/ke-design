import React from 'react';
import { Logo } from './Logo.jsx';

/* The brand's only decorative device: the compact mark, tiled or oversized,
   dropped to 20% (brandbook chapter pages) or 30% overlay (deck pages).
   `mode="wash"` = one oversized mark bleeding off the left edge.
   `mode="tile"` = repeated mark grid.  */
export function PatternField({ mode = 'wash', color = 'var(--ke-tropical-indigo)', opacity, size = 180, children, style, ...rest }) {
  const op = opacity ?? (mode === 'tile' ? 0.3 : 0.2);
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }} {...rest}>
      {mode === 'wash' ? (
        <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none' }} aria-hidden="true">
          <Logo variant="mark" height="100%" color={color} style={{ height: '100%', width: 'auto' }} />
        </div>
      ) : (
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none', display: 'grid', gridTemplateColumns: `repeat(auto-fill, ${size}px)`, gridAutoRows: `${size}px`, justifyContent: 'space-between', alignContent: 'space-between', color }}>
          {Array.from({ length: 96 }).map((_, i) => <Logo key={i} variant="mark" height={size * 0.62} color="currentColor" />)}
        </div>
      )}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
export default PatternField;
