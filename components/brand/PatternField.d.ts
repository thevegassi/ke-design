import * as React from 'react';

/** Brand pattern ground built from the compact mark — the only decorative graphic the brand owns. */
export interface PatternFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `wash` = one oversized mark bleeding off the left edge (brandbook chapter pages). `tile` = repeated mark grid (deck pages). Default `wash`. */
  mode?: 'wash' | 'tile';
  /** Mark colour. Default `var(--ke-tropical-indigo)`. */
  color?: string;
  /** Override the mark opacity. Defaults to 0.2 (wash) / 0.3 (tile). */
  opacity?: number;
  /** Tile cell size in px, `mode="tile"` only. Default 180. */
  size?: number;
}
export declare function PatternField(props: PatternFieldProps): JSX.Element;
export default PatternField;
