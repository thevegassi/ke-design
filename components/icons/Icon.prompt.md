Renders any glyph from the icon set extracted out of the brand file.

```jsx
<Icon name="TablerIconMusic" size={32} style={{ color: 'var(--ke-oxford-blue)' }} />
<Icon name="HugeIconInterfaceSolidCheck" size={48} style={{ color: 'var(--ke-lime)' }} />
```

Two families live in the file and are used in different places — keep them apart:
- **Tabler outline** (`TablerIcon*`, 20 glyphs) — brandbook service cards and social contact posts. Drawn at 32px, 1.333px stroke.
- **Huge-icon solid** (`HugeIcon*`, 17 glyphs) — the English presentation deck only.

Icons paint with `currentColor`. `Icon.d.ts` is the full name index.
