import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Address block: location glyph, address lines, and a map placeholder. */
export interface XMainContainerTextLocationProps extends React.HTMLAttributes<HTMLElement> {
  /** Primary address line, shown in link ink. */
  address?: string;
  /** Secondary lines under the address. */
  lines?: string[];
  /** Block width in px. Default 516. */
  width?: number;
}
export declare function XMainContainerTextLocation(props: XMainContainerTextLocationProps): JSX.Element;
export default XMainContainerTextLocation;
