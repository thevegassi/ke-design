Wraps any block in the brand's mark-based pattern ground — use for chapter dividers, deck backgrounds and full-bleed covers.

```jsx
<PatternField mode="wash" color="var(--ke-tropical-indigo)" style={{ background: 'var(--ke-periwinkle)', height: 540 }}>
  <h2>Логотип</h2>
</PatternField>
```

- `wash` reproduces the brandbook chapter page: one mark, left-aligned, full bleed, 20% opacity.
- `tile` reproduces the presentation deck watermark: mark grid at 30% over the navy gradient.
- Never place the pattern over body copy at more than these opacities, and never recolour it outside the brand palette. Raster alternatives ship in `assets/patterns/`.
