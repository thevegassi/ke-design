import React from 'react';

/* Lime pill tag from the social templates, and the outlined URL pill from the
   deck header. Fully rounded; type is Nunito Sans SemiBold on lime, Inter Light
   in the outlined deck variant. */
export function Tag({ children, variant = 'accent', size = 28.766735076904297, style, ...rest }) {
  const accent = variant === 'accent';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 999, boxSizing: 'border-box',
      padding: accent ? '13.816px 26.37px' : '10px 24px',
      gap: accent ? 13.18475341796875 : 10,
      background: accent ? 'var(--ke-lime)' : 'transparent',
      boxShadow: accent ? 'none' : 'inset 0 0 0 2px currentColor',
      color: accent ? 'var(--ke-lime-ink)' : 'var(--ke-oxford-blue)',
      fontFamily: accent ? 'var(--font-display)' : 'var(--font-deck)',
      fontWeight: accent ? 600 : 300,
      fontSize: accent ? size : 32,
      letterSpacing: accent ? 0 : '-0.05em',
      lineHeight: accent ? 1.020227313041687 : 1,
      whiteSpace: 'nowrap',
      ...style,
    }} {...rest}>{children}</span>
  );
}
export default Tag;
