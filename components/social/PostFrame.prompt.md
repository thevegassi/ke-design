Post and story artwork for the label's social feed — full-bleed photo, logo, lime tag, big Nunito Sans Bold display line.

```jsx
<PostFrame scale={0.3} image="../../assets/images/concert-crowd.jpg" tag="snippet" title={"AyaFunk\nENBEK"} format="story" />
<PostFrame scale={0.3} background="var(--ke-lime)" ink="var(--ke-black)" title="new release" />
```

Always author at true pixel size (1080 wide) and use `scale` to preview. Margins are 65px. The logo sits top-left on squares and at 485px from the top on stories, keeping the display line in the lower half where the platform UI doesn't cover it.
