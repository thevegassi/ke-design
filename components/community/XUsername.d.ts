import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Community or user display name, 15px on a 20px line. */
export interface XUsernameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether to show the lime verification dot. */
  verified?: boolean;
}
export declare function XUsername(props: XUsernameProps): JSX.Element;
export default XUsername;
