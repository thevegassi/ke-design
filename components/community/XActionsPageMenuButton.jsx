import React from 'react';

export function XActionsPageMenuButton({ label = 'Подписаться', width = 199, onClick, ...rest }) {
  return (
    <button onClick={onClick} style={{ position: 'relative', width, height: 36, borderRadius: 5, border: 'none', background: 'var(--ke-lime)', color: 'var(--ke-lime-ink)', fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 13, lineHeight: '18px', cursor: 'pointer', transition: 'background var(--dur-base) var(--ease-standard)', ...rest.style }} {...rest}>{label}</button>
  );
}
export default XActionsPageMenuButton;
