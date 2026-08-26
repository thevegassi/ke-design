import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Overlapping 24px avatar stack used for follower and friend counts. */
export interface AvatarsSmallProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One entry per avatar; `undefined` renders the brand-mark fallback. */
  images?: (string | undefined)[];
  /** Avatar diameter in px. Default 24. */
  size?: number;
  /** Overlap in px. Default 8. */
  overlap?: number;
}
export declare function AvatarsSmall(props: AvatarsSmallProps): JSX.Element;
export default AvatarsSmall;
