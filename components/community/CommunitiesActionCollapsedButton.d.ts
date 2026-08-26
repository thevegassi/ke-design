import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Collapsed action menu: 232×183 card, primary button, rule, three menu rows. */
export interface CommunitiesActionCollapsedButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Primary button label. */
  primary?: string;
  /** Menu rows. Defaults to notifications / share / more. */
  items?: { icon: IconName; label: string }[];
}
export declare function CommunitiesActionCollapsedButton(props: CommunitiesActionCollapsedButtonProps): JSX.Element;
export default CommunitiesActionCollapsedButton;
