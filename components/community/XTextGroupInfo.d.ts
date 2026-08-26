import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Info row: 24px muted glyph, 8px gap, 13px copy on an 18px line. */
export interface XTextGroupInfoProps extends React.HTMLAttributes<HTMLElement> {
  /** Leading glyph. Default `Text24`. */
  icon?: IconName;
  /** Row width in px. Default 516. */
  width?: number;
  /** Renders the copy in link blue. */
  link?: boolean;
}
export declare function XTextGroupInfo(props: XTextGroupInfoProps): JSX.Element;
export default XTextGroupInfo;
