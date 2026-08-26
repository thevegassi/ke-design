import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Post header: author name, then a muted timestamp on the same baseline. */
export interface XTitleLayoutPostProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Post author. */
  author?: string;
  /** Relative timestamp. */
  time?: string;
}
export declare function XTitleLayoutPost(props: XTitleLayoutPostProps): JSX.Element;
export default XTitleLayoutPost;
