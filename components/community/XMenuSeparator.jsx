import React from 'react';

export function XMenuSeparator({ width = 153, ...rest }) {
  return <div aria-hidden="true" style={{ width, height: 1, background: 'rgba(232,229,255,.18)', flexShrink: 0, ...rest.style }} {...rest} />;
}
export default XMenuSeparator;
