import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Primary action at the top of the action menu: 199×36 lime button. */
export interface XActionsPageMenuButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Button label. */
  label?: string;
  /** Button width in px. Default 199. */
  width?: number;
}
export declare function XActionsPageMenuButton(props: XActionsPageMenuButtonProps): JSX.Element;
export default XActionsPageMenuButton;
