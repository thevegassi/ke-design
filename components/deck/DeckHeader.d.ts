import * as React from 'react';

/**
 * Running header for presentation slides: logo left, URL + section label + folio right.
 */
export interface DeckHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Running section label, set uppercase, e.g. "Key Distribution Services". */
  section?: string;
  /** Zero-padded slide number, e.g. "04". */
  folio?: string;
  /** URL line above the section label. Default "www.keyent.kz"; pass `null` to omit. */
  url?: string | null;
  /** Ink colour. White on the navy deck, `var(--ke-oxford-blue)` on white slides. */
  ink?: string;
}
export declare function DeckHeader(props: DeckHeaderProps): JSX.Element;
export default DeckHeader;
