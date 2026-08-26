# Social artwork kit

The label's owned social surfaces, recreated from the `instagram` and `youtube` pages of the brand file.

**Files**
- `index.html` — interactive kit: feed grid → post detail, tap-through story set, thumbnail set, channel banner.
- `Screens.jsx` — the five surfaces plus the nine post designs and three story designs the file ships.

**Surfaces**

| Surface | Size | Source |
| --- | --- | --- |
| Square post | 1080 × 1080 | `instagram/Frame-77`, `Frame-102`, `Frame-105` … |
| Icon-badge post | 1080 × 1080 | `instagram/Frame-77` — one Tabler glyph at 640px inside a 960px ring with a 60px black stroke |
| Story | 1080 × 1920 | `instagram/Frame-93` |
| Video thumbnail | 1280 × 720 | `youtube/Thumbnail`–`Thumbnail4` |
| Channel banner | 2560 × 1440 | `youtube/banner` |

**What is deliberately not recreated:** Instagram's and YouTube's own interface chrome. The brand file mocks the artwork inside those platforms' UI, but that UI belongs to those platforms — this kit presents the brand's artwork in a neutral frame with just enough profile context to judge it in a feed. Composed entirely from `PostFrame`, `MediaFrame`, `Tag`, `Logo` and `Icon`.
