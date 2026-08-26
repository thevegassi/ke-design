import * as React from 'react';

/** A single approved logo-on-ground specimen tile. */
export interface LogoTileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tile ground. Any brand colour; ignored when `outlined`. */
  background?: string;
  /** Logo ink. Default `#FFFFFF`. */
  ink?: string;
  /** Optional photo URL — automatically darkened 50% per the brand rule. */
  image?: string;
  /** Outlined specimen: 1px hairline, transparent ground, 30px radius, 50px padding. */
  outlined?: boolean;
  /** `full` lockup or compact `mark`. Default `full`. */
  variant?: 'full' | 'mark';
  /** Logo height in px. Default 120. */
  logoHeight?: number;
  /** Tile height in px. Default 200. */
  height?: number;
}
export declare function LogoTile(props: LogoTileProps): JSX.Element;
export default LogoTile;
