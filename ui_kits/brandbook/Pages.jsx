const { Logo, SectionHeading, ColorSwatch, LogoTile, ServiceCard, PatternField, Icon } = window.KeyEntertainmentDesignSystem_27049e;

const S = 0.3646; // 1920 → 700

/* Brandbook page shell: 1920×1080, 108px margin, folio top-right. */
function Page({ children, background = 'var(--ke-white)', folio, scale = S }) {
  return (
    <div style={{ width: 1920 * scale, height: 1080 * scale, overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ width: 1920, height: 1080, transform: `scale(${scale})`, transformOrigin: 'top left', background, position: 'relative', overflow: 'hidden' }}>
        {folio ? <span style={{ position: 'absolute', left: 1811.641, top: 83, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 36, lineHeight: 1, color: 'var(--ke-midnight)' }}>{folio}</span> : null}
        {children}
      </div>
    </div>
  );
}

const Body = ({ children, color = 'var(--ke-oxford-blue)', width = 1704, size = 32 }) => (
  <p style={{ margin: 0, width, fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: size, lineHeight: 1.25, color, textWrap: 'pretty' }}>{children}</p>
);

const Content = ({ children, top = 265 }) => (
  <div style={{ position: 'absolute', left: 108, top, width: 1704, display: 'flex', flexDirection: 'column', gap: 48 }}>{children}</div>
);

const Head = ({ children, rule, color }) => (
  <div style={{ position: 'absolute', left: 108, top: 108 }}><SectionHeading rule={rule} color={color}>{children}</SectionHeading></div>
);

/* ── 00 Cover ── */
function Cover() {
  return (
    <Page background="var(--ke-white)">
      <img src="../../assets/brand/hero-shape.svg" alt="" style={{ position: 'absolute', left: 1083.523, top: -294.722, width: 822.181, height: 1302.978, color: 'var(--ke-black)' }} />
      <div style={{ position: 'absolute', left: 108, top: 108 }}><Logo height={145.847 * 0.62} color="var(--ke-oxford-blue)" /></div>
      <div style={{ position: 'absolute', left: 108, top: 652, width: 1502, display: 'flex', flexDirection: 'column', gap: 96 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, lineHeight: 1, color: 'var(--ke-oxford-blue)', whiteSpace: 'pre-line' }}>{'Руководство фирменного стиля\nдля бренда Key Entertainment'}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 36, lineHeight: 1, color: 'var(--ke-oxford-blue)' }}>2023</span>
      </div>
    </Page>
  );
}

/* ── 01 Company description ── */
function Company() {
  const cards = [
    { icon: 'TablerIconMusic', label: 'Music Label', body: 'Работая с нами, артисты получают возможность создавать и развивать свой творческий потенциал под кураторством опытных профессионалов индустрии.' },
    { icon: 'TablerIconBrandSpotify', label: 'Distribution', body: 'Наш сервис дистрибуции предлагает загрузку песен под 0%. Это позволяет артистам получить максимальное вознаграждение от своих произведений.' },
    { icon: 'TablerIconPlaylist', label: 'Booking Agency', body: 'Как современный партнер в организации мероприятий любой сложности, мы помогаем нашим артистам добиться успеха на концертной площадке.' },
    { icon: 'TablerIconVinyl', label: 'Records', body: 'Наша студия предлагает профессиональное сведение и мастеринг треков — высококачественная звукозапись для любого уровня.' },
  ];
  return (
    <Page background="var(--ke-off-white)">
      <span style={{ position: 'absolute', left: 108, top: 109, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 72, lineHeight: 1, color: 'var(--ke-navy-deep)' }}>Описание компании</span>
      <Content top={220}>
        <Body>Key Entertainment — это независимый музыкальный лейбл полного цикла, обеспечивающий всестороннюю поддержку для музыкантов всех жанров. Мы предлагаем следующие услуги:</Body>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 32 }}>
          {cards.map(c => <ServiceCard key={c.label} icon={c.icon} label={c.label}>{c.body}</ServiceCard>)}
        </div>
      </Content>
    </Page>
  );
}

/* ── 02 Chapter divider ── */
function Chapter() {
  return (
    <Page background="var(--ke-periwinkle)" folio="01">
      <PatternField mode="wash" color="var(--ke-tropical-indigo)" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', left: 108, top: 806, width: 1704, display: 'flex', flexDirection: 'column', gap: 48 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 72, lineHeight: 1, color: 'var(--ke-oxford-blue)' }}>Логотип</span>
        <Body>Основные пропорции, охранное поле, основные цвета, цветовые сочетания, шрифты, альтернативные версии логотипа, ошибки при использовании</Body>
      </div>
    </Page>
  );
}

/* ── 03 Clear space ── */
function ClearSpace() {
  return (
    <Page folio="03">
      <Head>Охранное поле</Head>
      <div style={{ position: 'absolute', left: 108, top: 396.5, width: 435 }}>
        <Body width={435}>Охранное поле логотипа равно 1/3 его высоты. На этой области запрещается размещать любые иные графические элементы и текст.</Body>
      </div>
      <div style={{ position: 'absolute', left: 761, top: 343.6, width: 1050.632, height: 392.795, background: 'var(--ke-lavender)', boxShadow: 'inset 0 0 0 0.786px var(--ke-blue-rule)', padding: 78.559, boxSizing: 'border-box' }}>
        <div style={{ height: '100%', background: 'var(--ke-white)', boxShadow: 'inset 0 0 0 0.786px var(--ke-blue-rule)', display: 'flex', alignItems: 'center' }}>
          <Logo height={235.677 * 0.5} color="var(--ke-black)" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </Page>
  );
}

/* ── 04 Core colours ── */
function Colors() {
  return (
    <Page folio="04">
      <Head>Основные цвета</Head>
      <div style={{ position: 'absolute', left: 108, top: 265, width: 1705, display: 'flex', gap: 30 }}>
        <ColorSwatch hex="#D3FF33" name="lime" cmyk="17 0 80 0" rgb="211 255 51" />
        <ColorSwatch hex="#9F96FF" name="tropical indigo" cmyk="38 41 0 0" rgb="159 150 255" />
        <ColorSwatch hex="#0C2350" name="oxford blue" cmyk="100 33 0 80" rgb="0 34 51" />
      </div>
    </Page>
  );
}

/* ── 05 Colour combinations ── */
function Combinations() {
  return (
    <Page folio="05">
      <Head>Цветовые сочетания</Head>
      <div style={{ position: 'absolute', left: 108, top: 228, width: 1704 }}>
        <Body size={32}>Ниже предоставлены варианты цветовых сочетаний при использовании логотипа. На лайме логотип всегда чёрный, на оксфордском синем — всегда белый.</Body>
      </div>
      <div style={{ position: 'absolute', left: 108, top: 311, width: 1704, display: 'flex', gap: 30 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 30 }}>
          <LogoTile background="var(--ke-white)" ink="var(--ke-black)" />
          <LogoTile background="var(--ke-lime)" ink="var(--ke-black)" />
          <LogoTile background="var(--ke-tropical-indigo)" ink="var(--ke-oxford-blue)" />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 30 }}>
          <LogoTile background="var(--ke-black)" ink="var(--ke-white)" />
          <LogoTile background="var(--ke-oxford-blue)" ink="var(--ke-white)" />
          <LogoTile image="../../assets/images/concert-crowd.jpg" ink="var(--ke-white)" />
        </div>
      </div>
    </Page>
  );
}

/* ── 06 Typefaces ── */
function Typefaces() {
  const rows = [
    ['Nunito Sans Bold', 700], ['Nunito Sans Semibold', 600], ['Nunito Sans Regular', 400], ['Nunito Sans Extralight', 200],
  ];
  return (
    <Page folio="06">
      <Head>Шрифты</Head>
      <div style={{ position: 'absolute', left: 108, top: 240, width: 1704, display: 'flex', flexDirection: 'column', gap: 60 }}>
        {rows.map(([name, w]) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: w, fontSize: 120, lineHeight: 1, color: 'var(--ke-oxford-blue)' }}>Аа Bb Кк Ff</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 36, lineHeight: 1, color: 'var(--text-muted)' }}>{name}</span>
          </div>
        ))}
      </div>
    </Page>
  );
}

/* ── 07 Patterns ── */
function Patterns() {
  return (
    <Page folio="10">
      <Head>Паттерны</Head>
      <div style={{ position: 'absolute', left: 108, top: 241, width: 1704, height: 731, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gridTemplateRows: 'repeat(2,1fr)', gap: 32 }}>
        <div style={{ background: `url(../../assets/patterns/pattern-1.png) center / cover`, borderRadius: 12 }} />
        <div style={{ background: 'var(--ke-lime-deep)', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
          <img src="../../assets/logo/logo-mark-white.svg" alt="" style={{ position: 'absolute', left: -40, top: -20, height: 400, opacity: 0.85 }} />
          <img src="../../assets/logo/logo-mark-lime.svg" alt="" style={{ position: 'absolute', right: -60, bottom: -40, height: 420 }} />
        </div>
        <div style={{ background: 'var(--ke-periwinkle)', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
          <img src="../../assets/patterns/pattern-3-navy.svg" alt="" style={{ position: 'absolute', left: 0, top: 40, width: '100%', opacity: 0.25 }} />
        </div>
        <div style={{ background: 'var(--ke-oxford-blue)', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
          <img src="../../assets/patterns/pattern-4-lime.svg" alt="" style={{ position: 'absolute', left: 0, top: 0, width: '100%', opacity: 0.4 }} />
        </div>
      </div>
    </Page>
  );
}

const PAGES = [
  ['Обложка', Cover], ['Описание компании', Company], ['Раздел', Chapter], ['Охранное поле', ClearSpace],
  ['Основные цвета', Colors], ['Цветовые сочетания', Combinations], ['Шрифты', Typefaces], ['Паттерны', Patterns],
];

Object.assign(window, { Page, PAGES, Cover, Company, Chapter, ClearSpace, Colors, Combinations, Typefaces, Patterns });
