import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Mobile tab bar: five 24px glyphs, evenly distributed, active tab in lime. */
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Tabs to render. Defaults to the five-tab set in the source. */
  tabs?: { icon: IconName; label: string }[];
  /** Index of the active tab. */
  active?: number;
  /** Called with the tapped tab index. */
  onSelect?: (index: number) => void;
  /** Bar width in px. Default 390. */
  width?: number;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
export default BottomNav;
