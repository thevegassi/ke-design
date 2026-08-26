# Slide templates

Seven slide types recreated from the **`english`** page of the brand file — the label's English-language services deck. All are authored at true 1920×1080 and scaled down for preview; set `scale={1}` for export.

| File | Type | Source frame |
| --- | --- | --- |
| `TitleSlide.html` | Cover — KEY / ENTERTAINMENT at 233px, tagline, pattern band | `english/01` |
| `ChapterSlide.html` | Chapter divider — lime number, white title, inventory line | `english/02`, `english/13` |
| `ListSlide.html` | Default content page — lime title over translucent rows | `english/05` |
| `ServicesSlide.html` | Four business lines, one Huge-icon solid glyph each | `english/03`, `english/09` |
| `StatSlide.html` | Numbers — oversized lime figures on glass | `english/11` |
| `StatementSlide.html` | Single full-bleed lime statement | `english/18` |
| `ContactSlide.html` | Handles and closing URL | `english/23` |

`Slides.jsx` holds the shared `Slide` shell (navy gradient, lime blob, 30% tiled mark watermark, 60px margins) plus each type. They compose `DeckHeader`, `GlassRow`, `Logo`, `Tag` and `Icon` — nothing is re-implemented locally.

**Rules carried over from the source:** Inter throughout, tracked `-0.05em`; slide titles lime `#D3FF33` at 48px SemiBold; body 32px at line-height 1.1; rows `rgba(255,255,255,.05)` at 16px radius with a 10px gap; running header at 60px with an uppercase section label and a zero-padded folio.
