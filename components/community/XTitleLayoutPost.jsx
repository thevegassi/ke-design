import React from 'react';

export function XTitleLayoutPost({ author = 'Key Entertainment', time = '2 ч', ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1, ...rest.style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 13, lineHeight: '17px', color: 'var(--chrome-link)' }}>{author}</span>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 12.5, lineHeight: '16px', color: 'var(--chrome-icon)' }}>{time}</span>
    </div>
  );
}
export default XTitleLayoutPost;
