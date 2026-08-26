import React from 'react';
import { Logo } from '../brand/Logo.jsx';

/* Deck running header: logo left at 60px height, section label + folio right.
   Sits at 60px margins on a 1920×1080 page. */
export function DeckHeader({ section, folio, url = 'www.keyent.kz', ink = 'var(--ke-white)', style, ...rest }) {
  const t = { fontFamily: 'var(--font-deck)', letterSpacing: '-0.05em', lineHeight: 1, color: ink };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', ...style }} {...rest}>
      <Logo height={60} color={ink} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-end' }}>
        {url ? <span style={{ ...t, opacity: 0.3, fontWeight: 300, fontSize: 24 }}>{url}</span> : null}
        {(section || folio) ? (
          <div style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center' }}>
            <span style={{ ...t, fontWeight: 300, fontSize: 32, textTransform: 'uppercase', textAlign: 'right' }}>{section}</span>
            <span style={{ ...t, fontWeight: 600, fontSize: 32 }}>{folio}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default DeckHeader;
