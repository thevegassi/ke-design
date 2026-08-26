import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Square post carrying one oversized glyph inside a ringed circle. */
export interface IconBadgePostProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Glyph to blow up. Default `TablerIconBrandSpotify`. */
  icon?: IconName;
  /** Flat ground behind the circle. */
  background?: string;
  /** Circle fill. */
  ring?: string;
  /** Glyph ink. */
  ink?: string;
  /** Render the 1080 artwork at a fraction of full size. Default 1. */
  scale?: number;
}
export declare function IconBadgePost(props: IconBadgePostProps): JSX.Element;
export default IconBadgePost;
