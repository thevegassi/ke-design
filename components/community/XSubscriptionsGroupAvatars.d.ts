import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Grid of square subscription thumbnails in the community sidebar. */
export interface XSubscriptionsGroupAvatarsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Thumbnail URLs; non-string entries render the brand-mark fallback. */
  items?: (string | number)[];
  /** Tile size in px. Default 74. */
  size?: number;
}
export declare function XSubscriptionsGroupAvatars(props: XSubscriptionsGroupAvatarsProps): JSX.Element;
export default XSubscriptionsGroupAvatars;
