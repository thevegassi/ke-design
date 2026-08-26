import * as React from 'react';

/**
 * Instagram post or story artwork frame.
 */
export interface PostFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Full-bleed photo URL. */
  image?: string;
  /** Lime pill copy, e.g. "snippet", "new release". */
  tag?: string;
  /** Display line, Nunito Sans Bold. `\n` breaks are honoured. */
  title?: string;
  /** Optional secondary line under the title. */
  subtitle?: string;
  /** `square` (1080×1080) or `story` (1080×1920). Default `square`. */
  format?: 'square' | 'story';
  /** Ground behind the photo. Default `var(--ke-lime)`. */
  background?: string;
  /** Ink for logo and type. Default `var(--ke-white)`. */
  ink?: string;
  /** Title size in px. Defaults to 110 (square) / 162.44 (story). */
  titleSize?: number;
  /** Render the 1080-wide artwork at a fraction of full size. Default 1. */
  scale?: number;
}
export declare function PostFrame(props: PostFrameProps): JSX.Element;
export default PostFrame;
