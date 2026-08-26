import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Compact followers card — title, count, one overlapping avatar row. */
export interface CommunitiesSubscriptionsFriendsSmallAloneProps extends React.HTMLAttributes<HTMLElement> {
  /** Card title. */
  title?: string;
  /** Follower count. */
  count?: number | string;
  /** Avatar photo URLs. */
  images?: (string | undefined)[];
  /** Card width in px. Default 232. */
  width?: number;
}
export declare function CommunitiesSubscriptionsFriendsSmallAlone(props: CommunitiesSubscriptionsFriendsSmallAloneProps): JSX.Element;
export default CommunitiesSubscriptionsFriendsSmallAlone;
