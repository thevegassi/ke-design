import React from 'react';

export function XUsername({ children = 'Key Entertainment', verified = false, ...rest }) {
  return (
    <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center', fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, lineHeight: '20px', color: 'var(--chrome-link)', ...rest.style }} {...rest}>
      {children}
      {verified ? <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--ke-lime)', flexShrink: 0 }} /> : null}
    </span>
  );
}
export default XUsername;
