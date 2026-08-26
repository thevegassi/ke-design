import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Section title in the sidebar cards: 12.5px, muted, with an optional count. */
export interface XTitleLayout125Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Section title. */
  title?: string;
  /** Optional muted count beside the title. */
  count?: number | string;
}
export declare function XTitleLayout125(props: XTitleLayout125Props): JSX.Element;
export default XTitleLayout125;
