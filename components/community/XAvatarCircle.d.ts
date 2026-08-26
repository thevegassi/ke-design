import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** 50px circular avatar; falls back to the brand mark ground when no image is set. */
export interface XAvatarCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Diameter in px. Default 50. */
  size?: number;
  /** Photo URL. Omitted → brand mark on oxford blue. */
  image?: string;
}
export declare function XAvatarCircle(props: XAvatarCircleProps): JSX.Element;
export default XAvatarCircle;
