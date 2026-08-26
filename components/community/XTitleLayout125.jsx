import React from 'react';

export function XTitleLayout125({ title = 'Информация', count, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'baseline', fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 12.5, lineHeight: '18px', ...rest.style }} {...rest}>
      <span style={{ color: 'var(--ke-black)' }}>{title}</span>
      {count != null ? <span style={{ color: 'var(--chrome-icon)' }}>{count}</span> : null}
    </div>
  );
}
export default XTitleLayout125;
