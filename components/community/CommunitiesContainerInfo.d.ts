import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Sidebar info card: 552×422, radius 5, hairline border, header / title / info rows. */
export interface CommunitiesContainerInfoProps extends React.HTMLAttributes<HTMLElement> {
  /** Community name. */
  name?: string;
  /** Category line. */
  category?: string;
  /** Card width in px. Default 552. */
  width?: number;
}
export declare function CommunitiesContainerInfo(props: CommunitiesContainerInfoProps): JSX.Element;
export default CommunitiesContainerInfo;
