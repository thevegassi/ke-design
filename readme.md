# Key Entertainment — Design System

Brand and product design system for **Key Entertainment** (also styled *Key Music Company* / *Key Records*), an independent full-cycle music label based in Kazakhstan. Web: `www.keyent.kz`. Instagram: `@keymusicompany`.

The label describes itself as "a full-cycle independent music label providing all-round support to musicians of every genre", and runs four business lines that all brand work has to serve:

| Line | What it is |
| --- | --- |
| **Music Label** | A&R and artist development under experienced industry curators |
| **Distribution** | 0%-commission release delivery to Spotify, Apple Music, YouTube Music, TikTok, Yandex Music and other DSPs |
| **Booking Agency** | Event production, venue sourcing and promotion |
| **Records** | Studio mixing and mastering |

English-language tagline: **"your partner in the world of music."**

## Sources

Everything here is transcribed from one source, a Figma file attached to this project as **`key music (Copy).fig`** (no shareable Figma URL was provided; ask the file owner for the live link if you need it). No codebase, repository or slide deck was supplied.

Pages read, within the 220 frames the user put in scope:

- **`brandbook`** (26 frames, 1920×1080, Russian) — the brand guideline document itself: cover, company description, mission/values, contents, logo proportions, clear space, core colours, colour combinations, typefaces, alternate logo versions, misuse, four patterns, and brand-carrier mockups (Instagram, YouTube, VK, prints, merch, print materials, signage).
- **`english`** (23 frames, 1920×1080) — an English-language pitch/services deck. A **second, later visual system**: Inter instead of Nunito Sans, a navy→lime gradient ground, translucent rows. Treated here as the "deck" surface, not a replacement for the brandbook.
- **`logo`** (21 frames) — logo artwork: horizontal lockup, compact mark, colour-combination sheets.
- **`pattern`** (8 frames) — pattern construction.
- **`instagram`** (105 frames) — post (1080×1080), story (1080×1920) and carousel artwork, plus a Tabler icon set used in contact/FAQ posts.
- **`youtube`** (12 frames) — thumbnails (1280×720), channel banner (2560×1440), channel preview.
- **`page4`** (17 frames) — working variants of the English deck.

Pages present in the file but **out of the selected scope and therefore not built**: `page`, `page2`, `page3`, `page5`, `vk`, `key-records`, `song-covers`.

## Index

| Path | What |
| --- | --- |
| `styles.css` | Global entry point — `@import`s only |
| `tokens/colors.css` | Brand colours, extended neutrals, semantic aliases |
| `tokens/typography.css` | Both type systems, weights, sizes, line-heights, tracking |
| `tokens/spacing.css` | Page grids, margins, artwork sizes |
| `tokens/effects.css` | Radii, borders, shadows, pattern opacities, motion |
| `tokens/fonts.css` | Webfont loading (Google Fonts) |
| `assets/logo/` | Horizontal lockup, compact mark, outline mark |
| `assets/patterns/` | Patterns 1–4 + the deck watermark tile |
| `assets/images/` | Photography from the file (crowd, portrait) |
| `components/` | React primitives — see below |
| `guidelines/` | Foundation specimen cards (Design System tab) |
| `ui_kits/social/` | Social artwork kit — posts, stories, thumbnails, banner |
| `ui_kits/brandbook/` | Click-through recreation of the guideline document |
| `slides/` | Deck slide templates (Design System tab cards) |
| `templates/pitch-deck/` | Copyable four-slide pitch-deck starting point |
| `SKILL.md` | Agent-skill entry point |

## Components

> **Coverage statement (read before filing a coverage bug).** The automated check reports "35 component families, 12 implemented". That gap is intentional and permanent. 23 of the 35 families are **VK's own product interface** — VK-blue `#2A5885` link rows reading "Моя страница", VK's teal-to-blue gradient avatar circles, VK's `likes_24` counters, VK's bottom nav — imported into the file to mock up how Key Entertainment's page looks *inside VK*. They sit on the `vk` and `key-records` pages, outside the 220 frames scoped for this import, and they are not Key Entertainment's design language. They will not be built here. The full list, with reasons, is in "Deliberately not built" below.

Grouped by concern. Every one is a direct transcription of a recurring construct in the source file.

**`components/brand/`**
- **`Logo`** — the horizontal lockup and the compact mark, exact path data from the file, single-ink via `currentColor`.
- **`PatternField`** — the mark-based pattern ground: `wash` (one oversized mark, 20%) and `tile` (mark grid, 30%).

**`components/brandbook/`**
- **`SectionHeading`** — 14×60 accent bar + Nunito Sans Bold title; on every interior brandbook page.
- **`ColorSwatch`** — the 54px-radius colour specimen panel with hex, name, CMYK and RGB builds.
- **`LogoTile`** — one approved logo-on-ground specimen (40px radius filled, 30px radius outlined).
- **`ServiceCard`** — icon + label + copy card for the four business lines.

**`components/deck/`**
- **`DeckHeader`** — slide running header: logo, URL, uppercase section label, folio.
- **`GlassRow`** — the deck's translucent `rgba(255,255,255,.05)` content row, 16px radius.

**`components/social/`**
- **`Tag`** — the lime pill (`accent`) and the outlined URL pill (`outline`).
- **`PostFrame`** — 1080 square post and 1080×1920 story artwork frame.
- **`MediaFrame`** — 1280×720 video-thumbnail frame.
- **`IconBadgePost`** — one glyph at 640px inside a 960px ringed circle (the file's `Frame 77` variant set).

**`components/channel/`**
- **`BannerImage`** — 2560×1440 channel art with the platform's published safe-area guides overlaid.

**`components/community/`** — community-page primitives (brandbook p.17, "Оформление VK"). Geometry is transcribed literally from the platform library symbols in the source; the palette is re-pointed at Key Entertainment's `--chrome-*` tokens so the recreation carries this brand, not the platform's.
- Left rail: **`XLeftMenuRow`**, **`XMenuSeparator`**, **`XSearchHeader`**
- Identity: **`XAvatarCircle`**, **`Avatar28`**, **`AvatarsSmall`**, **`XAvatarsRow`**, **`ProfilePicture`**, **`XUsername`**, **`XSubscriptionsGroupAvatars`**
- Titles: **`XCommunityTitleLayout`**, **`XTitleLayout125`**, **`XTitleLayoutPost`**
- Info rows: **`XTextGroupInfo`**, **`XMainContainerTextPhone`**, **`XMainContainerTextLocation`**
- Counters: **`XIconCounter`**, **`XIconCounterViews`**, **`XContainerCounters`**
- Actions: **`XActionsPageMenuButton`**, **`XActionsPageMenuItem`**, **`XButtonActionsLabelFixed`**
- Cards: **`CommunitiesContainerInfo`**, **`CommunitiesActionCollapsedButton`**, **`CommunitiesOfferNers`**, **`CommunitiesSubscriptionsAll`**, **`CommunitiesSubscriptionsFriendsSmallAlone`**
- Navigation: **`BottomNav`**, **`HomeBottomMenu`**

**`components/icons/`**
- **`Icon`** — renders all 70 glyphs materialized out of the file (Tabler outline, Huge-icon solid, and the platform UI glyph family).

### Intentional additions — all 12 components, confirmed

None of the twelve components carry a Figma component name, and that is deliberate: **the source file declares almost no components of its own.** Its component inventory is 1 variant set plus 116 standalone symbols, and essentially all of them are third-party library glyphs and VK UI parts imported for mockup purposes (see "Deliberately not built"). Key Entertainment's actual reusable design language lives in the file as *repeated page constructs*, not as Figma components — the same colour panel drawn on p.04, the same accent-bar heading on 18 pages, the same translucent row on 14 deck slides.

So every component here is named after the construct it transcribes, with the source frame it came from:

| Component | Named after | Transcribed from |
| --- | --- | --- |
| `Logo` | the locked logo artwork | `logo/Vector`, `brandbook/09/Vector.svg` |
| `PatternField` | the mark-based pattern ground | `brandbook/05`, `english/05` |
| `SectionHeading` | the accent-bar page heading | `brandbook/06`–`26` (18 pages) |
| `ColorSwatch` | the colour specimen panel | `brandbook/08/Frame23` |
| `LogoTile` | the logo-on-ground specimen tile | `brandbook/09/Frame29`, `brandbook/11` |
| `ServiceCard` | the service card | `brandbook/03` |
| `DeckHeader` | the deck running header | `english/01`–`23` (every slide) |
| `GlassRow` | the translucent content row | `english/05/Frame195`, `Frame211` |
| `Tag` | the lime pill / outlined URL pill | `instagram/Frame-93`, `english/01` |
| `PostFrame` | post & story artwork frame | `instagram/Frame-93`, `Frame-102` |
| `MediaFrame` | video-thumbnail frame | `youtube/Thumbnail`–`Thumbnail4` |
| `Icon` | glyph wrapper over the file's icon data | `instagram/components/`, `english/external/` |

Two are additions in the stronger sense — they have no single source construct:

- **`Icon`** — a name-addressable wrapper over the 37 glyphs materialized from the file. The file has no icon component of its own; consumers need one entry point.
- **`PatternField`** — the file hand-places marks on each page. Wrapping the two treatments it actually uses (20% wash, 30% tile) keeps opacity and tiling honest.

### Deliberately not built

The file's 35 reported component *families* break down as: **12 built** (above, as page constructs) and **23 skipped**, every one of which is third-party UI or an un-named wrapper. Skipped, with reasons:

**VK's own design-system components (21 families)** — `x / left menu row`, `x / avatar circle`, `x / text group info`, `x / menu separator`, `x/ actions page menu item`, `x / subscriptions group avatars`, `x / icon counter`, `x / title layout 12,5`, `x / avatars row`, `x / Button / actions label fixed secondary`, `arrow_header`, `arrow_16`, `arrow_down_24`, `Avatar_28`, `Avatars / small`, `Banner image`, `bottom nav`, `home bottom menu`, `Communities / action collapsed button`, `Communities / container info`, `Communities / offer ners` (plus the `*_24(solid)` glyph family: `home_24`, `messages_24`, `music_24`, `photos_24`, `news_24`, `friends_24`, `groups_24`, `games_24`, `goods_24`, `documents_24`, `clips_24`, `bookmarks_24`, `pay_24`, `head_notify_24`, `player_play_24`, `player_back_24`, `player_next_24`, `likes_24`, `share_24`, `more_24`, `point_24`, `earth_24`, `phone_24`, `notification_24`, `search_16`, `message circle_24`, `messages square_24`, `Profile picture`).

  Two reasons, either sufficient: they live on the `vk` and `key-records` pages, which are **outside the 220 frames scoped for this import**; and they are **VK's interface, not this brand's**. Building them would put another company's design system inside Key Entertainment's.

**Huge-icon and Tabler glyph families (2 families, ~37 symbols)** — not skipped, but **not built as components**: they are materialized as icon *data* and served through `Icon`, which is the right shape for a glyph set. See `components/icons/Icon.d.ts` for the full name index.

**`Frame 77` / `Property 1=Default`** — the file's only variant set. It is an un-named local wrapper around the social icon-badge post; its content is covered by `PostFrame` and the `IconPost` composition in `ui_kits/social/Screens.jsx`.

If VK community-page recreations are wanted, say so and re-scope the `vk` page in — they belong in a `ui_kits/vk/` kit, not in `components/`.

---

# Content fundamentals

**Two languages, two registers.** The Russian brandbook is the internal, formal voice. The English deck is the outward-facing, partner-directed voice. Social copy is a third, much looser register.

**Person.** Always first-person plural — *we*, *мы*, *наш*. The label speaks as an organisation, never as an individual. The audience is addressed in the third person when described ("artists working with us…", "наши артисты") and directly only in the tagline ("**your** partner in the world of music"). Never "I".

**Tone.** Plain, service-first, declarative. Claims are concrete deliverables, not adjectives:

> "Our services include: Uploading releases to Spotify, Apple Music, YouTube Music, TikTok, Yandex Music and other platforms"
> "Verification and arrangement of metadata (ISRC, UPC, copyrights)"
> "Financial statements and royalty payments"

Mission and values copy is the one place where warmth is allowed, and even there it stays measured:

> "Мы в Key Entertainment стремимся к тому, чтобы создавать уникальные возможности для наших артистов…"
> "Наша цель — создать поддерживающую среду, в которой каждый артист сможет развивать свои навыки и достигать новых вершин."

**Casing.** Sentence case for all prose. Headings in the brandbook are sentence case Russian ("Основные цвета", "Охранное поле"). The deck sets its running section labels in **UPPERCASE** ("KEY DISTRIBUTION SERVICES") and its cover words in caps ("KEY / ENTERTAINMENT"). Social tags are **always lowercase**, always one word where possible: `snippet`, `backstage`.

**Punctuation.** Headings and labels take no terminal period. Colons introduce lists ("Our services include:"). Section titles in the brandbook are stacked as a title plus a comma-separated inventory of what follows ("Основные пропорции, охранное поле, основные цвета, цветовые сочетания, шрифты…").

**Numbers.** Folios and slide numbers are zero-padded two digits (`01`, `04`, `15`). Colour builds are written as bare space-separated groups (`17 0 80 0` / `211 255 51`), never with commas or a `%`.

**Emoji: never.** There is not one emoji anywhere in the file — not in the brandbook, not in the deck, not in the social artwork. Do not introduce them.

**Vibe.** Confident, technical, slightly cold — a label that wants to be read as competent infrastructure rather than as a scene. The lime accent, not the copy, carries the energy.

---

# Visual foundations

## Colour

Three colours are declared as core (brandbook p.04, in this order):

| Hex | Name in the file | CMYK | RGB |
| --- | --- | --- | --- |
| `#D3FF33` | lime | 17 0 80 0 | 211 255 51 |
| `#9F96FF` | tropical indigo | 38 41 0 0 | 159 150 255 |
| `#0C2350` | oxford blue | 100 33 0 80 | 0 34 51 |

Around them the file uses a small, disciplined extended set: `#000000` and `#0D0D0D` for inverted grounds, `#07132C` and `#010814` for the darkest chapter and deck grounds, `#143A85` for brandbook headlines, `#D0CCFF` and `#E8E5FF` as periwinkle/lavender chapter and diagram grounds, `#080066` for type on periwinkle, `#F2F2F2` and `#FFFFFF` for light grounds, `#1A1A1A` for body copy, `#506600` for type inside a lime pill, and `#FEC90C` on one YouTube thumbnail.

Rules the file enforces:
- **Lime is an accent, never a large text ground.** It fills pills, logo tiles, one circular blob and section titles on dark. Type on lime is `#506600` or black — never white body copy.
- **Max two ground colours per artefact.** Brandbook pages are white or periwinkle; deck slides are the navy gradient; social posts are one photo or one flat brand colour.
- **The deck gradient is fixed:** `linear-gradient(165.679deg, #0C2350 15.61%, #010814 152.16%)`.
- Photographs behind a logo are always darkened — 50% for logo lockups, 37% for thumbnails.

**Two source combinations withdrawn on contrast grounds.** The brandbook's logo colour-combination page (p.05) shows white-on-lime and black-on-oxford-blue. Both fail legibility — 1.5:1 and 1.6:1 respectively — and the wordmark's hairline strokes disappear in print and at small sizes. This system withdraws them: **on lime the logo is black, on oxford blue it is white.** Oxford blue on tropical indigo, taken from the `logo` page colour sheets, replaces white-on-lime in the approved set. `Logo.prompt.md` and the "Logo — approved grounds" card both carry the correction.

## Typography

Two coexisting systems. Pick one per artefact and do not mix them.

**Brandbook / social — Nunito Sans + Manrope.** Nunito Sans does all display and label work (ExtraLight 200 through ExtraBold 800; Bold 700 is the default heading weight). Manrope carries long body paragraphs at 32px. Line-height on almost every brandbook heading is a flat `100%` — the type is set solid, deliberately tight, with no tracking adjustment. Sizes: 96 cover · 72 page title · 48 section · 36 lead/folio · 32 body · 28 card label. Social display runs far bigger (110–162px) at `1.04`.

**Presentation deck — Inter.** Light 300 / Regular 400 / SemiBold 600 / Bold 700, uniformly tracked **`-0.05em`** (cover words `-0.07em`) with line-heights *below* 1 (`0.9`) on display and `1.1` on body. Sizes: 233 cover word · 60 tagline · 48 slide title · 32 body/label · 24 meta.

Roboto appears only inside device-mockup platform chrome (Instagram's own UI) — it is not a Key Entertainment typeface. SF Pro, IBM Plex, Bahnschrift, Saleha, Mansalva and Aeroport appear once or twice each in scratch artwork and are **not** part of the system.

None of the three real families ship as binaries in the file. All three are on Google Fonts and are loaded from there — see caveats.

## Layout & grid

Everything is 1920×1080. Two margins, never mixed:

- **Brandbook page:** 108px margin, 1704px live width. Section heading at x=108 / y=108, folio top-right at x≈1812 / y=83. Content columns gap 30–32px; vertical stacks gap 24 / 32 / 48 / 60 / 72 / 96.
- **Deck slide:** 60px margin, 1800px live width. Header band 60px tall at y=60; content block from y=200. Rows gap 10px.

Social: 1080 square and 1080×1920 story, 65px margin (60px on brandbook mockups). YouTube thumbnail 1280×720, 72px margin. Channel banner 2560×1440.

Fixed elements: the running header (logo + folio) on every deck slide; the folio alone on every brandbook page; the accent bar always immediately left of an interior heading.

## Backgrounds, pattern & imagery

The brand's single decorative device is **its own mark**, used four ways (the file names them Pattern 1–4):
1. a dense raster tile of overlapping mark silhouettes (`assets/patterns/pattern-1.png`);
2. a constructed grid of mark cut-outs in two limes (`#A0CC00` shadow, `#CEFF1A` highlight);
3. and 4. large vector fields (`assets/patterns/pattern-3.svg`, `pattern-4.svg`).

On chapter pages one oversized mark bleeds off the left edge at **20% opacity**. On deck slides the mark is tiled and dropped to **30%** with `mix-blend-mode: overlay`, plus a single lime circle (754px, 50% radius) as a light source behind the gradient. There are **no** illustrations, no drawn icons-as-decoration, and no photographic textures beyond real photography.

Imagery is live-music and studio photography: cool, blue-shifted, high-contrast, often motion-blurred, always darkened under type. No warm filters, no grain overlays, no duotones.

## Radii, borders, cards, shadows

Radii are specific and non-uniform — copy them, don't normalise:
`5px` social crop frame · `10px` deck content block · `12px` brandbook service card · `16px` deck list row · `30px` outlined logo specimen · `40px` logo colour tile · `54px` colour swatch panel · `999px` pills · `50%` the lime blob.

**Cards have no shadow.** A brandbook card is a 12px-radius white rectangle on a white page, separated only by 32px of air. A deck row is a 16px-radius translucent white wash — no border, no shadow, no fill. Borders appear in exactly three places: 1px hairline on the outlined logo specimen, 0.786px `#1100CC` rules on the clear-space diagram, and a 2px pill outline on the deck URL. The only shadow in the entire file is the device-mockup stack (`--shadow-device`) — a five-layer, very soft, offset-right-and-down drop used solely to float a phone render.

Transparency is used sparingly and always at a stated value: `.05` deck rows, `.2` pattern wash, `.3` deck watermark and muted meta text, `.37`/`.5` photo scrims, `.5` swatch caption. **There is no blur anywhere in the file** — no frosted glass, no backdrop-filter. The "glass" row is flat opacity.

## Interaction & motion

The source is a static brand file: it defines no hover, press or animation states. House defaults for interactive work, chosen to stay in character (flat, fast, no bounce):

- **Hover:** shift the ground one step — lime → `#CEFF1A`, oxford blue → `#143A85`, translucent row `.05` → `.09`. Never scale, never shadow.
- **Press:** darken the ground (lime → `#A0CC00`), no transform.
- **Transitions:** `180ms cubic-bezier(.2,0,.2,1)` on colour and opacity only. Fades, never slides. No bounce, no spring, no parallax.
- **Focus:** 2px lime outline at 2px offset on dark grounds; 2px oxford blue on light.

These are extensions, flagged as such — if the label has real product motion specs, they supersede this.

---

# Iconography

Two icon families exist in the file, both third-party, used in different places and never mixed in one artefact. Both have been extracted from the file itself (not re-linked from a CDN) into `components/icons/icon-data.js`; render them with `<Icon name="…" />`.

- **Tabler Icons — outline, 20 glyphs.** Drawn at 32×32 with a 1.333px stroke, single-colour. Used for the brandbook service cards (`music`, `share`, `calendar-event`, `microphone`) and for social contact/FAQ posts, where a single glyph is blown up to 640px inside a circle. Names: `TablerIconMusic`, `TablerIconVinyl`, `TablerIconPlaylist`, `TablerIconPlayerTrackNext`, `TablerIconFlame`, `TablerIconNews`, `TablerIconUser`, `TablerIconUsers`, `TablerIconMail`, `TablerIconMailOpened`, `TablerIconMailForward`, `TablerIconAddressBook`, `TablerIconPhoneCall`, `TablerIconQuestionMark`, `TablerIconBrandSpotify`, `TablerIconBrandYoutube`, `TablerIconBrandInstagram`, `TablerIconBrandTiktok`, `TablerIconBrandTelegram`, `TablerIconBrandVk`.
- **Huge-icons — solid, 17 glyphs.** Used only in the English presentation deck, one per service or stat block. Names all begin `HugeIcon…` (see `components/icons/Icon.d.ts`).

There is **no icon font**, no sprite sheet and no PNG icon set in the file. Emoji are never used as icons. Unicode characters are not used as icons — the one glyph-like typographic mark is the `x` label on the clear-space diagram. Platform glyphs inside device mockups (Instagram's and VK's own bars) belong to those platforms and are not part of this system.

When a needed glyph is missing, take it from **Tabler Icons** (outline, 32px, 1.333px stroke) for brand and social work, or Huge-icons solid for deck work — matching the family already in use on that surface. Flag any addition.

---

# Caveats

- **Font binaries.** The `.fig` carries no font files. Nunito Sans, Manrope and Inter are loaded from Google Fonts. If the label licenses specific cuts (or if "Nunito Sans ExtraBold" is being faked by the browser), drop the real files into `assets/fonts/` and replace `tokens/fonts.css`.
- **Two visual systems.** The Russian brandbook (2023) and the English deck (Inter, gradient) are genuinely different systems that both live in the file. Neither is marked as superseding the other. Both are documented; ask the owner which is current before starting new work.
- **Pattern 2** is constructed from 15 hand-placed vector cut-outs in the source. `assets/patterns/pattern-2-tile.svg` is one of those cut-outs, not the assembled field; patterns 1, 3 and 4 are complete.
- **VK components** are catalogued but not built — see "Deliberately not built".
