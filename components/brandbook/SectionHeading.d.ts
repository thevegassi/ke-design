import * as React from 'react';

/**
 * Brandbook page heading — accent bar plus title.
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bar colour. `var(--ke-tropical-indigo)` on white pages, `#FFFFFF` on periwinkle. */
  rule?: string;
  /** Title colour. Default `var(--ke-oxford-blue)`. */
  color?: string;
  /** Title size in px. 48 on interior pages, 72 on chapter openers. */
  size?: number;
  /** Heading tag. Default `h2`. */
  as?: keyof JSX.IntrinsicElements;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
export default SectionHeading;
