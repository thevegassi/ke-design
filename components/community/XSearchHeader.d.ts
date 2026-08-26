import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Pill search field in the top bar: 230×28, radius 14, 16px glyph at x=7. */
export interface XSearchHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field placeholder. Default "Поиск". */
  placeholder?: string;
  /** Field width in px. Default 230. */
  width?: number;
}
export declare function XSearchHeader(props: XSearchHeaderProps): JSX.Element;
export default XSearchHeader;
