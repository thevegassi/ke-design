import React from 'react';

export function XCommunityTitleLayout({ name = 'Key Entertainment', category = 'Музыкальный лейбл', status = 'your partner in the world of music', ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, ...rest.style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 19, lineHeight: '27px', color: 'var(--ke-black)' }}>{name}</span>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, lineHeight: '20px', color: 'var(--chrome-meta)' }}>{category}</span>
      {status ? <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, lineHeight: '18px', color: 'var(--ke-black)' }}>{status}</span> : null}
    </div>
  );
}
export default XCommunityTitleLayout;
