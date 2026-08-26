import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Row inside the community action menu: 200×36, 24px glyph, 13px label. */
export interface XActionsPageMenuItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Leading glyph. */
  icon?: IconName;
  /** Row label. */
  label?: string;
  /** Row width in px. Default 200. */
  width?: number;
}
export declare function XActionsPageMenuItem(props: XActionsPageMenuItemProps): JSX.Element;
export default XActionsPageMenuItem;
