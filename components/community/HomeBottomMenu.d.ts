import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Tab bar with labels under each glyph — the labelled variant of BottomNav. */
export interface HomeBottomMenuProps extends React.HTMLAttributes<HTMLElement> {
  /** Tabs to render. */
  tabs?: { icon: IconName; label: string }[];
  /** Index of the active tab. */
  active?: number;
  /** Called with the tapped tab index. */
  onSelect?: (index: number) => void;
  /** Bar width in px. Default 390. */
  width?: number;
}
export declare function HomeBottomMenu(props: HomeBottomMenuProps): JSX.Element;
export default HomeBottomMenu;
