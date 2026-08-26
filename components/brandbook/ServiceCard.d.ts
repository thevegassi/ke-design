import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Icon + label + copy card, as used for the label's four service lines. */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon name from the bundled icon set, e.g. `TablerIconMusic`. */
  icon?: IconName;
  /** Card label, e.g. "Music Label", "Distribution". */
  label: string;
  /** Card ground. Default `var(--surface-card)`. */
  background?: string;
  /** Body ink. Default `var(--ke-ink)`. */
  ink?: string;
  /** Label ink when it differs from the body (e.g. white on a dark card). */
  labelInk?: string;
  /** Icon colour override. */
  iconColor?: string;
}
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
export default ServiceCard;
