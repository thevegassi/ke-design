import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** 1px hairline that divides groups in the left rail. */
export interface XMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rule width in px. Default 153 (left-rail width). */
  width?: number;
}
export declare function XMenuSeparator(props: XMenuSeparatorProps): JSX.Element;
export default XMenuSeparator;
