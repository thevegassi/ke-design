import React from 'react';

/* Colour specimen panel from brandbook p.04: 54px radius, 60px padding,
   hex at 72px Bold, name at 32px Regular @50%, CMYK/RGB flush right. */
export function ColorSwatch({ hex, name, cmyk, rgb, ink = '#FFFFFF', hexInk = 'var(--ke-oxford-blue)', height = 707, style, ...rest }) {
  return (
    <div style={{ position: 'relative', height, borderRadius: 54, background: hex, padding: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box', flex: 1, ...style }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 72, lineHeight: 1, color: hexInk }}>{hex}</span>
        <span style={{ opacity: 0.5, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 32, lineHeight: 1, color: ink }}>{name}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'flex-start', alignSelf: 'stretch', fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1, color: ink }}>
        <span style={{ fontWeight: 400, whiteSpace: 'pre' }}>{'CMYK:  \nRGB: '}</span>
        <span style={{ fontWeight: 700, flexGrow: 1, textAlign: 'right', whiteSpace: 'pre' }}>{cmyk + '\n' + rgb}</span>
      </div>
    </div>
  );
}
export default ColorSwatch;
