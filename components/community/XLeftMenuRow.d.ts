import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Left-rail navigation row: 24px glyph at 45% opacity, 7px gap, 12.5px label on a 27px line. */
export interface XLeftMenuRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Glyph name from the icon set. Default `Home24Solid`. */
  icon?: IconName;
  /** Row label. */
  label?: string;
  /** Highlights the row: full-opacity glyph, lime label. */
  active?: boolean;
}
export declare function XLeftMenuRow(props: XLeftMenuRowProps): JSX.Element;
export default XLeftMenuRow;
