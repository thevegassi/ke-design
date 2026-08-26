import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Community header block: name, category line and status. */
export interface XCommunityTitleLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Community name. */
  name?: string;
  /** Category line. */
  category?: string;
  /** Status line; pass "" to omit. */
  status?: string;
}
export declare function XCommunityTitleLayout(props: XCommunityTitleLayoutProps): JSX.Element;
export default XCommunityTitleLayout;
