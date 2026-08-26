import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Suggestion card in the sidebar — a promoted community with a follow action. */
export interface CommunitiesOfferNersProps extends React.HTMLAttributes<HTMLElement> {
  /** Card title. */
  title?: string;
  /** Suggested community name. */
  name?: string;
  /** Suggested community category. */
  category?: string;
  /** Card width in px. Default 232. */
  width?: number;
}
export declare function CommunitiesOfferNers(props: CommunitiesOfferNersProps): JSX.Element;
export default CommunitiesOfferNers;
