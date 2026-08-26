import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Secondary action button: hairline border, 13px label, radius 5. */
export interface XButtonActionsLabelFixedProps extends React.HTMLAttributes<HTMLElement> {
  /** Button label. */
  label?: string;
  /** Optional leading glyph. */
  icon?: IconName;
}
export declare function XButtonActionsLabelFixed(props: XButtonActionsLabelFixedProps): JSX.Element;
export default XButtonActionsLabelFixed;
