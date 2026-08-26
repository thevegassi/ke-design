import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** View counter — the 16px views glyph variant of the counter. */
export interface XIconCounterViewsProps extends React.HTMLAttributes<HTMLElement> {
  /** View count. */
  count?: number | string;
}
export declare function XIconCounterViews(props: XIconCounterViewsProps): JSX.Element;
export default XIconCounterViews;
