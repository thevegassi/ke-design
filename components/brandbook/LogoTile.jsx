import React from 'react';
import { Logo } from '../brand/Logo.jsx';

/* The logo colour-combination tile from brandbook p.05 and the alternate-version
   page: 40px radius (30px for the outlined variant), 40px padding, logo centred. */
export function LogoTile({ background = '#000000', ink = '#FFFFFF', image, outlined = false, variant = 'full', logoHeight = 120, height = 200, style, ...rest }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height, borderRadius: outlined ? 30 : 40, background: outlined ? 'transparent' : background, boxShadow: outlined ? 'inset 0 0 0 1px var(--ke-black)' : 'none', padding: outlined ? 50 : 40, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', flex: 1, ...style }} {...rest}>
      {image ? <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `var(--photo-scrim), url(${image}) center / cover no-repeat` }} /> : null}
      <Logo variant={variant} height={logoHeight} color={ink} style={{ position: 'relative' }} />
    </div>
  );
}
export default LogoTile;
