import * as React from 'react';

/** Translucent content row — the deck's list, stat and feature container. */
export interface GlassRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Type size in px. Default 32. */
  size?: number;
  /** Ink colour. Default `var(--ke-white)`. */
  ink?: string;
}
export declare function GlassRow(props: GlassRowProps): JSX.Element;
export default GlassRow;
