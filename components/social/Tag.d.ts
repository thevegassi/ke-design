import * as React from 'react';

/** Pill label. Two forms exist in the brand file: the lime content tag and the outlined URL pill. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `accent` = lime fill, dark-olive ink (social posts and stories). `outline` = 2px hairline, transparent (deck header URL). Default `accent`. */
  variant?: 'accent' | 'outline';
  /** Type size for the accent form. Scales with the artwork; default 28.77px at 1080px square. */
  size?: number;
}
export declare function Tag(props: TagProps): JSX.Element;
export default Tag;
