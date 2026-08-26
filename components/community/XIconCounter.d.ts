import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Engagement counter: 52×24, 24px glyph at 70% opacity, 6px gap, 14px count. */
export interface XIconCounterProps extends React.HTMLAttributes<HTMLElement> {
  /** Counter glyph. Default `Likes24`. */
  icon?: IconName;
  /** Count value. */
  count?: number | string;
  /** Engaged state — lime glyph and count. */
  active?: boolean;
}
export declare function XIconCounter(props: XIconCounterProps): JSX.Element;
export default XIconCounter;
