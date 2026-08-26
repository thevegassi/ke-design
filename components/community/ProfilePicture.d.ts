import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Square community profile picture, radius 5, brand-mark fallback. */
export interface ProfilePictureProps extends React.HTMLAttributes<HTMLElement> {
  /** Photo URL. Omitted → brand mark on oxford blue. */
  image?: string;
  /** Square size in px. Default 200. */
  size?: number;
}
export declare function ProfilePicture(props: ProfilePictureProps): JSX.Element;
export default ProfilePicture;
