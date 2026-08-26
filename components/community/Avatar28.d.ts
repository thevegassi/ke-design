import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** 28px avatar for compact rows and comment threads. */
export interface Avatar28Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Photo URL. */
  image?: string;
}
export declare function Avatar28(props: Avatar28Props): JSX.Element;
export default Avatar28;
