The deck's workhorse container: a translucent white row on the navy gradient. Use it for service lists, stats and feature pairs — the deck has no bordered or shadowed cards.

```jsx
<GlassRow>Uploading releases to Spotify, Apple Music, YouTube Music, TikTok and other platforms</GlassRow>
<div style={{ display: 'flex', gap: 10 }}>
  <GlassRow style={{ flex: 1 }}>Posting and updating artist profiles</GlassRow>
  <GlassRow style={{ flex: 1 }}>Obtaining access to official artist cards</GlassRow>
</div>
```

Rows stack with a 10px gap. Ground is always `rgba(255,255,255,.05)` — never a solid fill, never a border.
