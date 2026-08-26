const { Logo, DeckHeader, GlassRow, PatternField, Tag, Icon } = window.KeyEntertainmentDesignSystem_27049e;

/* Slide shell: 1920×1080 authored at true size, scaled to fit the frame it sits in.
   `theme="deck"` = navy gradient + tiled mark watermark (the English deck).
   `theme="light"` = white page, oxford-blue ink. */
function Slide({ theme = 'deck', children, scale = 1, pattern = true }) {
  const dark = theme === 'deck';
  const inner = (
    <div style={{ position: 'relative', width: 1920, height: 1080, padding: 60, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>{children}</div>
  );
  return (
    <div style={{ width: 1920 * scale, height: 1080 * scale, overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ width: 1920, height: 1080, transform: `scale(${scale})`, transformOrigin: 'top left', background: dark ? 'var(--surface-deck)' : 'var(--ke-white)', position: 'relative', overflow: 'hidden' }}>
        {dark ? <div aria-hidden="true" style={{ position: 'absolute', left: 680, top: 466, width: 754.613, height: 754.613, borderRadius: '50%', background: 'var(--ke-lime)', filter: 'blur(0px)', opacity: 0.9 }} /> : null}
        {dark ? <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(-56.071deg, rgba(255,255,255,.35) 38.86%, rgba(255,255,255,0) 89.23%)', mixBlendMode: 'overlay' }} /> : null}
        {pattern ? <img aria-hidden="true" src="../assets/patterns/pattern-deck-tile-lime.svg" alt="" style={{ position: 'absolute', left: 0, top: 0, width: 2808, opacity: dark ? 0.3 : 0.12, mixBlendMode: dark ? 'overlay' : 'normal' }} /> : null}
        {inner}
      </div>
    </div>
  );
}

const deckTitle = { fontFamily: 'var(--font-deck)', fontWeight: 600, fontSize: 48, lineHeight: 1, letterSpacing: '-0.05em', color: 'var(--ke-lime)', margin: 0 };
const deckBody = { fontFamily: 'var(--font-deck)', fontWeight: 400, fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.05em', color: 'var(--ke-white)', margin: 0 };

/* 01 — Cover. Oversized KEY / ENTERTAINMENT set in Inter Bold at 233px. */
function TitleSlide({ scale = 1 }) {
  return (
    <Slide theme="light" scale={scale} pattern={false}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo height={60} color="var(--ke-oxford-blue)" />
        <span style={{ color: 'var(--ke-oxford-blue)' }}><Tag variant="outline">www.keyent.kz</Tag></span>
      </div>
      <div style={{ position: 'absolute', left: 60, top: 170, width: 1800, height: 339, opacity: 0.2, overflow: 'hidden' }}>
        <img src="../assets/patterns/pattern-3-navy.svg" alt="" style={{ width: 1800 }} />
      </div>
      <div style={{ position: 'absolute', left: 46, top: 567, display: 'flex', flexDirection: 'column', gap: 31 }}>
        {['KEY', 'ENTERTAINMENT'].map(w => (
          <span key={w} style={{ fontFamily: 'var(--font-deck)', fontWeight: 700, fontSize: 233, lineHeight: 0.9, letterSpacing: '-0.07em', color: 'var(--ke-oxford-blue)' }}>{w}</span>
        ))}
      </div>
      <span style={{ position: 'absolute', left: 60, top: 976, fontFamily: 'var(--font-deck)', fontWeight: 400, fontSize: 60, lineHeight: 0.9, letterSpacing: '-0.05em', color: 'var(--ke-oxford-blue)' }}>your partner in the world of music</span>
    </Slide>
  );
}

/* 02 — Chapter divider. Number, title, and the inventory of what follows. */
function ChapterSlide({ scale = 1, number = '01', title = 'Key Distribution', blurb = 'Release delivery, playlist support, verification, analytics, royalty reporting' }) {
  return (
    <Slide scale={scale}>
      <DeckHeader url="www.keyent.kz" section={null} folio={null} />
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <span style={{ fontFamily: 'var(--font-deck)', fontWeight: 700, fontSize: 233, lineHeight: 0.9, letterSpacing: '-0.07em', color: 'var(--ke-lime)' }}>{number}</span>
        <h2 style={{ ...deckTitle, fontSize: 96, color: 'var(--ke-white)' }}>{title}</h2>
        <p style={{ ...deckBody, maxWidth: 1200, opacity: 0.75 }}>{blurb}</p>
      </div>
    </Slide>
  );
}

/* 03 — List slide. The deck's default content page: lime title + glass rows. */
function ListSlide({ scale = 1, section = 'Key Distribution Services', folio = '04', title = 'Our services include:', full = [], pairs = [] }) {
  return (
    <Slide scale={scale}>
      <DeckHeader section={section} folio={folio} />
      <div style={{ marginTop: 80, display: 'flex', flexDirection: 'column', gap: 40 }}>
        <h2 style={deckTitle}>{title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {full.map((r, i) => <GlassRow key={i}>{r}</GlassRow>)}
          {pairs.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 10 }}>
              <GlassRow style={{ flex: 1 }}>{p[0]}</GlassRow>
              <GlassRow style={{ flex: 1 }}>{p[1]}</GlassRow>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* 04 — Services grid. Huge-icon solid glyph per business line. */
function ServicesSlide({ scale = 1, items = [] }) {
  return (
    <Slide scale={scale}>
      <DeckHeader section="What we do" folio="02" />
      <div style={{ marginTop: 80, display: 'flex', flexDirection: 'column', gap: 40 }}>
        <h2 style={deckTitle}>What we do</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
          {items.map((it, i) => (
            <div key={i} style={{ borderRadius: 16, background: 'var(--surface-row-glass)', padding: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <Icon name={it.icon} size={64} style={{ color: 'var(--ke-lime)' }} />
              <span style={{ fontFamily: 'var(--font-deck)', fontWeight: 600, fontSize: 40, letterSpacing: '-0.05em', color: 'var(--ke-white)' }}>{it.label}</span>
              <p style={{ ...deckBody, opacity: 0.7 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* 05 — Numbers. Big lime figures on glass. */
function StatSlide({ scale = 1, stats = [] }) {
  return (
    <Slide scale={scale}>
      <DeckHeader section="Key in numbers" folio="03" />
      <div style={{ marginTop: 80, display: 'flex', flexDirection: 'column', gap: 40 }}>
        <h2 style={deckTitle}>Key in numbers</h2>
        <div style={{ display: 'flex', gap: 10 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 16, background: 'var(--surface-row-glass)', padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span style={{ fontFamily: 'var(--font-deck)', fontWeight: 700, fontSize: 130, lineHeight: 0.9, letterSpacing: '-0.07em', color: 'var(--ke-lime)' }}>{s.value}</span>
              <span style={{ ...deckBody, opacity: 0.75 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* 06 — Statement. One line, full bleed, lime on navy. */
function StatementSlide({ scale = 1, children = 'Distribution at 0%. Every stream, every territory, every payout accounted for.' }) {
  return (
    <Slide scale={scale}>
      <DeckHeader section="Why Key" folio="06" />
      <div style={{ margin: 'auto 0', maxWidth: 1600 }}>
        <span style={{ fontFamily: 'var(--font-deck)', fontWeight: 600, fontSize: 96, lineHeight: 0.95, letterSpacing: '-0.05em', color: 'var(--ke-lime)', textWrap: 'balance' }}>{children}</span>
      </div>
    </Slide>
  );
}

/* 07 — Contact. Tabler brand glyphs + outlined pills. */
function ContactSlide({ scale = 1 }) {
  const links = [
    { icon: 'TablerIconBrandInstagram', label: '@keymusicompany' },
    { icon: 'TablerIconBrandYoutube', label: 'Key Entertainment' },
    { icon: 'TablerIconBrandTelegram', label: '@keyent' },
    { icon: 'TablerIconMail', label: 'info@keyent.kz' },
    { icon: 'TablerIconPhoneCall', label: '+7 700 000 00 00' },
    { icon: 'TablerIconBrandSpotify', label: 'Key Records' },
  ];
  return (
    <Slide scale={scale}>
      <DeckHeader section="Contacts" folio="23" />
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 60 }}>
        <h2 style={{ ...deckTitle, fontSize: 96, color: 'var(--ke-white)' }}>Let’s work together</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {links.map((l, i) => (
            <div key={i} style={{ borderRadius: 16, background: 'var(--surface-row-glass)', padding: 30, display: 'flex', gap: 24, alignItems: 'center' }}>
              <Icon name={l.icon} size={48} style={{ color: 'var(--ke-lime)', flexShrink: 0 }} />
              <span style={deckBody}>{l.label}</span>
            </div>
          ))}
        </div>
        <span style={{ fontFamily: 'var(--font-deck)', fontWeight: 300, fontSize: 60, letterSpacing: '-0.05em', color: 'var(--ke-lime)' }}>www.keyent.kz</span>
      </div>
    </Slide>
  );
}

Object.assign(window, { Slide, TitleSlide, ChapterSlide, ListSlide, ServicesSlide, StatSlide, StatementSlide, ContactSlide });
