import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function XButtonActionsLabelFixed({ label = 'Написать', icon, onClick, ...rest }) {
  return (
    <button onClick={onClick} style={{ height: 36, borderRadius: 5, border: 'none', boxShadow: 'inset 0 0 0 1px var(--chrome-border-strong)', background: 'var(--chrome-surface)', color: 'var(--chrome-link)', fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 13, lineHeight: '18px', padding: '0 14px', display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'pointer', transition: 'background var(--dur-base) var(--ease-standard)', ...rest.style }} {...rest}>
      {icon ? <Icon name={icon} size={20} /> : null}
      {label}
    </button>
  );
}
export default XButtonActionsLabelFixed;
