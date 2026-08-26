import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** The counter strip under a post: likes, comments, shares, then views flush right. */
export interface XContainerCountersProps extends React.HTMLAttributes<HTMLElement> {
  /** Like count. */
  likes?: number | string;
  /** Comment count. */
  comments?: number | string;
  /** Share count. */
  shares?: number | string;
  /** View count, rendered flush right. */
  views?: number | string;
}
export declare function XContainerCounters(props: XContainerCountersProps): JSX.Element;
export default XContainerCounters;
