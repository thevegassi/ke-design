import * as React from 'react';

/**
 * Video thumbnail / cover-art frame — photo, logo, tag, title bar.
 */
export interface MediaFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background photo URL. Automatically darkened 37%. */
  image?: string;
  /** Headline, Manrope Bold. */
  title?: string;
  /** Lime pill copy, e.g. "backstage". */
  tag?: string;
  /** Frame width in px. Default 1280. */
  width?: number;
  /** Frame height in px. Default 720. */
  height?: number;
  /** Fallback ground behind the photo. Default `var(--ke-thumb-yellow)`. */
  background?: string;
  /** Title size in px. Default 96. */
  titleSize?: number;
}
export declare function MediaFrame(props: MediaFrameProps): JSX.Element;
export default MediaFrame;
