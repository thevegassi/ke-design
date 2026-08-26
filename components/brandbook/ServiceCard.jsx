import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* Service card from the brandbook company-description page: 12px radius,
   24px padding, 24px gap, icon+label row (32px icon, 12px gap, 28px Bold label),
   then 28px body copy. */
export function ServiceCard({ icon, label, children, background = 'var(--surface-card)', ink = 'var(--ke-ink)', labelInk, iconColor, style, ...rest }) {
  return (
    <div style={{ borderRadius: 12, background, padding: 24, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start', boxSizing: 'border-box', flex: 1, ...style }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        {icon ? <Icon name={icon} size={32} style={{ color: iconColor ?? labelInk ?? ink, flexShrink: 0 }} /> : null}
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, lineHeight: 1, whiteSpace: 'nowrap', color: labelInk ?? ink }}>{label}</span>
      </div>
      <p style={{ margin: 0, alignSelf: 'stretch', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28, lineHeight: 1.15, color: ink, textWrap: 'pretty' }}>{children}</p>
    </div>
  );
}
export default ServiceCard;
