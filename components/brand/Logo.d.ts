import * as React from 'react';

/**
 * The Key Entertainment logo, as locked in the brand file.
 */
export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /** `full` = horizontal lockup (mark + wordmark). `mark` = compact mark only. Default `full`. */
  variant?: 'full' | 'mark';
  /** Rendered height in px. Defaults to 60 (full) / 80 (mark). */
  height?: number;
  /** Single ink colour. Defaults to `currentColor`. */
  color?: string;
  /** Accessible label. Default "Key Entertainment". */
  title?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
export default Logo;
