import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** A labelled avatar stack: overlapping avatars plus a count. */
export interface XAvatarsRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar photo URLs. */
  images?: (string | undefined)[];
  /** Count label. */
  label?: string;
}
export declare function XAvatarsRow(props: XAvatarsRowProps): JSX.Element;
export default XAvatarsRow;
