import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function HomeBottomMenu({ tabs, active = 0, onSelect, width = 390, ...rest }) {
  const items = tabs ?? [
    { icon: 'Home24Solid', label: 'Главная' },
    { icon: 'Music24Solid', label: 'Музыка' },
    { icon: 'Clips24Solid', label: 'Клипы' },
    { icon: 'Messages24Solid', label: 'Сообщения' },
    { icon: 'Groups24Solid', label: 'Профиль' },
  ];
  return (
    <div style={{ width, background: 'var(--chrome-nav)', display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-around', padding: '8px 0 10px', boxSizing: 'border-box', ...rest.style }} {...rest}>
      {items.map((t, i) => (
        <button key={i} onClick={() => onSelect && onSelect(i)} aria-current={i === active} style={{ background: 'none', border: 'none', padding: '4px 6px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', color: i === active ? 'var(--ke-lime)' : 'var(--chrome-nav-ink-muted)', transition: 'color var(--dur-base) var(--ease-standard)' }}>
          <Icon name={t.icon} size={24} />
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 10, lineHeight: '12px' }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}
export default HomeBottomMenu;
