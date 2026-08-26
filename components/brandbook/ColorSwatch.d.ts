import * as React from 'react';

/** Full-height colour specimen panel from the brandbook "Основные цвета" page. */
export interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hex value — also the panel's fill and its headline text. */
  hex: string;
  /** Colour name as written in the brand file, e.g. "lime", "tropical indigo", "oxford blue". */
  name: string;
  /** CMYK build, space-separated, e.g. "17 0 80 0". */
  cmyk: string;
  /** RGB build, space-separated, e.g. "211 255 51". */
  rgb: string;
  /** Colour for the name + build lines. Default `#FFFFFF`. */
  ink?: string;
  /** Colour for the hex headline. Default `var(--ke-oxford-blue)`. */
  hexInk?: string;
  /** Panel height in px. Default 707 (brandbook page size). */
  height?: number;
}
export declare function ColorSwatch(props: ColorSwatchProps): JSX.Element;
export default ColorSwatch;
