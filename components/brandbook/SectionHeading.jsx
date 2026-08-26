import React from 'react';

/* Brandbook page heading: a 14×60 solid bar, 30px gap, then the title.
   The bar is tropical indigo on light pages and white on periwinkle pages. */
export function SectionHeading({ children, rule = 'var(--ke-tropical-indigo)', color = 'var(--ke-oxford-blue)', size = 48, as: Tag = 'h2', style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 30, alignItems: 'center', ...style }} {...rest}>
      <div aria-hidden="true" style={{ width: 14, height: 60, background: rule, flexShrink: 0 }} />
      <Tag style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size, lineHeight: 1, color, whiteSpace: 'nowrap' }}>{children}</Tag>
    </div>
  );
}
export default SectionHeading;
