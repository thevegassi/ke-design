const { useState } = React;
const { Logo, PostFrame, MediaFrame, Tag, Icon } = window.KeyEntertainmentDesignSystem_27049e;

const IMG = '../../assets/images/concert-crowd.jpg';
const PORTRAIT = '../../assets/images/mission-portrait.png';

// The nine post designs the brand file ships, in feed order.
const POSTS = [
  { kind: 'photo', image: IMG, tag: 'new release', title: 'AyaFunk\nENBEK' },
  { kind: 'flat', background: 'var(--ke-lime)', ink: 'var(--ke-black)', title: 'snippet\nout now', tag: 'snippet' },
  { kind: 'icon', icon: 'TablerIconBrandSpotify', background: 'var(--ke-oxford-blue)', ring: 'var(--ke-lime)' },
  { kind: 'photo', image: PORTRAIT, tag: 'backstage', title: 'studio\nday 04' },
  { kind: 'icon', icon: 'TablerIconBrandVk', background: 'var(--ke-lime-deep)', ring: 'var(--ke-lime-bright)' },
  { kind: 'flat', background: 'var(--ke-oxford-blue)', ink: 'var(--ke-lime)', title: 'booking\nopen', tag: 'booking' },
  { kind: 'icon', icon: 'TablerIconMusic', background: 'var(--ke-tropical-indigo)', ring: 'var(--ke-white)' },
  { kind: 'photo', image: IMG, tag: 'live', title: 'ALMATY\n21.09' },
  { kind: 'flat', background: 'var(--ke-near-black)', ink: 'var(--ke-white)', title: '0%\ndistribution', tag: 'distribution' },
];

const STORIES = [
  { image: IMG, tag: 'snippet', title: 'AyaFunk\nENBEK' },
  { image: PORTRAIT, tag: 'backstage', title: 'mixing\nsession' },
  { background: 'var(--ke-lime)', ink: 'var(--ke-black)', tag: 'link in bio', title: 'submit\nyour demo' },
];

/* The icon-badge post: one glyph blown up inside a ring, exactly as the file draws it. */
function IconPost({ icon, background, ring, scale = 1 }) {
  return (
    <div style={{ width: 1080 * scale, height: 1080 * scale, flexShrink: 0 }}>
      <div style={{ width: 1080, height: 1080, background, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 60, top: 60, width: 960, height: 960, borderRadius: 960, background: ring, boxShadow: '0 0 0 60px rgb(0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} size={640} style={{ color: 'var(--ke-black)' }} />
        </div>
      </div>
    </div>
  );
}

function Post({ p, scale }) {
  if (p.kind === 'icon') return <IconPost {...p} scale={scale} />;
  return <PostFrame scale={scale} image={p.image} background={p.background} ink={p.ink} tag={p.tag} title={p.title} titleSize={110} />;
}

function ProfileHeader({ onOpenStories }) {
  return (
    <div style={{ display: 'flex', gap: 28, alignItems: 'center', padding: '0 0 24px' }}>
      <button onClick={onOpenStories} title="Open stories" style={{ width: 116, height: 116, borderRadius: '50%', border: 'none', padding: 4, background: 'linear-gradient(135deg,var(--ke-lime),var(--ke-tropical-indigo))', cursor: 'pointer', flexShrink: 0 }}>
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--ke-oxford-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Logo variant="mark" height={54} color="var(--ke-lime)" />
        </div>
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--ke-oxford-blue)' }}>keymusicompany</span>
          <Tag size={11}>label</Tag>
        </div>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ke-ink)', maxWidth: 380, lineHeight: 1.4 }}>
          Key Entertainment — full-cycle independent music label. Distribution at 0%. Booking. Records.
        </span>
        <a href="https://www.keyent.kz" style={{ fontFamily: 'var(--font-body)', fontSize: 14 }}>www.keyent.kz</a>
        <div style={{ display: 'flex', gap: 24, marginTop: 4, fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--text-muted)' }}>
          <span><b style={{ color: 'var(--ke-oxford-blue)' }}>132</b> posts</span>
          <span><b style={{ color: 'var(--ke-oxford-blue)' }}>18.4k</b> followers</span>
          <span><b style={{ color: 'var(--ke-oxford-blue)' }}>41</b> artists</span>
        </div>
      </div>
    </div>
  );
}

function FeedGrid({ onSelect, onOpenStories }) {
  return (
    <div>
      <ProfileHeader onOpenStories={onOpenStories} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {POSTS.map((p, i) => (
          <button key={i} onClick={() => onSelect(i)} style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', lineHeight: 0, transition: 'opacity var(--dur-base) var(--ease-standard)' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.82} onMouseLeave={e => e.currentTarget.style.opacity = 1}>
            <Post p={p} scale={0.2} />
          </button>
        ))}
      </div>
    </div>
  );
}

function PostDetail({ index, onBack }) {
  const p = POSTS[index];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <button onClick={onBack} style={btn}>← back to feed</button>
      <Post p={p} scale={0.62} />
      <div style={{ maxWidth: 670, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.45, color: 'var(--ke-ink)' }}>
        <b style={{ fontFamily: 'var(--font-display)' }}>keymusicompany</b> {p.tag ? `#${p.tag} ` : ''}Out now on all platforms. Distribution by Key Entertainment.
      </div>
    </div>
  );
}

function StoryPlayer({ onBack }) {
  const [i, setI] = useState(0);
  const s = STORIES[i];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <button onClick={onBack} style={btn}>← back to feed</button>
      <div style={{ position: 'relative' }}>
        <PostFrame format="story" scale={0.32} image={s.image} background={s.background} ink={s.ink} tag={s.tag} title={s.title} />
        <div style={{ position: 'absolute', top: 10, left: 10, right: 10, display: 'flex', gap: 4 }}>
          {STORIES.map((_, k) => <div key={k} style={{ flex: 1, height: 3, borderRadius: 999, background: k <= i ? 'var(--ke-white)' : 'rgba(255,255,255,.35)' }} />)}
        </div>
        <button onClick={() => setI(Math.max(0, i - 1))} style={{ ...tapZone, left: 0 }} aria-label="Previous" />
        <button onClick={() => setI(Math.min(STORIES.length - 1, i + 1))} style={{ ...tapZone, right: 0 }} aria-label="Next" />
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, color: 'var(--text-muted)' }}>Tap the left / right half to move through the set · {i + 1} of {STORIES.length}</span>
    </div>
  );
}

function ThumbnailSet() {
  const thumbs = [
    { image: IMG, tag: 'backstage', title: 'Как записывался трек Puerto-Rico?' },
    { image: PORTRAIT, tag: 'interview', title: 'AyaFunk о новом альбоме' },
    { image: IMG, tag: 'live', title: 'Key Live · Almaty 2024' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {thumbs.map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ width: 384, height: 216, overflow: 'hidden', flexShrink: 0 }}>
            <div style={{ transform: 'scale(0.3)', transformOrigin: 'top left' }}><MediaFrame {...t} /></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 4 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ke-oxford-blue)' }}>{t.title}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--text-muted)' }}>Key Entertainment · 1280 × 720</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Banner() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ width: 700, height: 394, overflow: 'hidden' }}>
        <div style={{ width: 2560, height: 1440, transform: 'scale(0.2734)', transformOrigin: 'top left', background: 'var(--surface-deck)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="../../assets/patterns/pattern-deck-tile-lime.svg" alt="" style={{ position: 'absolute', left: 0, top: 0, width: '100%', opacity: 0.18 }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 60 }}>
            <Logo height={230} color="var(--ke-white)" />
            <span style={{ fontFamily: 'var(--font-deck)', fontWeight: 300, fontSize: 96, letterSpacing: '-0.05em', color: 'var(--ke-lime)' }}>your partner in the world of music</span>
          </div>
        </div>
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, color: 'var(--text-muted)' }}>Channel banner · 2560 × 1440 · safe area centred</span>
    </div>
  );
}

const btn = { fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--ke-oxford-blue)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', alignSelf: 'flex-start' };
const tapZone = { position: 'absolute', top: 0, bottom: 0, width: '50%', background: 'transparent', border: 'none', cursor: 'pointer' };

Object.assign(window, { POSTS, STORIES, Post, IconPost, FeedGrid, PostDetail, StoryPlayer, ThumbnailSet, Banner });
