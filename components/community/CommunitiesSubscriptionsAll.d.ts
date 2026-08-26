import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Subscriptions card: title with a count, then the thumbnail grid. */
export interface CommunitiesSubscriptionsAllProps extends React.HTMLAttributes<HTMLElement> {
  /** Card title. */
  title?: string;
  /** Subscription count beside the title. */
  count?: number;
  /** Thumbnail URLs. */
  items?: (string | number)[];
  /** Card width in px. Default 552. */
  width?: number;
}
export declare function CommunitiesSubscriptionsAll(props: CommunitiesSubscriptionsAllProps): JSX.Element;
export default CommunitiesSubscriptionsAll;
