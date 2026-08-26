import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function XTextGroupInfo({ icon = 'Text24', children = 'Независимый музыкальный лейбл полного цикла', width = 516, link = false, ...rest }) {
  return (
    <div style={{ position: 'relative', width, display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'flex-start', ...rest.style }} {...rest}>
      <div style={{ width: 24, height: 24, flexShrink: 0, color: 'var(--chrome-icon)' }}><Icon name={icon} size={24} /></div>
      <span style={{ flexGrow: 1, fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, lineHeight: '18px', color: link ? 'var(--chrome-link)' : 'var(--ke-black)' }}>{children}</span>
    </div>
  );
}
export default XTextGroupInfo;
