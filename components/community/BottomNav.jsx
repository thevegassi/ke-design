import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function BottomNav({ tabs, active = 0, onSelect, width = 390, ...rest }) {
  const items = tabs ?? [
    { icon: 'Home24Solid', label: 'Главная' },
    { icon: 'Search16', label: 'Поиск' },
    { icon: 'Music24Solid', label: 'Музыка' },
    { icon: 'Messages24Solid', label: 'Сообщения' },
    { icon: 'Groups24Solid', label: 'Профиль' },
  ];
  return (
    <div style={{ width, height: 56, background: 'var(--chrome-nav)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', ...rest.style }} {...rest}>
      {items.map((t, i) => (
        <button key={i} onClick={() => onSelect && onSelect(i)} aria-label={t.label} aria-current={i === active} style={{ background: 'none', border: 'none', padding: 8, cursor: 'pointer', display: 'flex', color: i === active ? 'var(--ke-lime)' : 'var(--chrome-nav-ink-muted)', transition: 'color var(--dur-base) var(--ease-standard)' }}>
          <Icon name={t.icon} size={24} />
        </button>
      ))}
    </div>
  );
}
export default BottomNav;
