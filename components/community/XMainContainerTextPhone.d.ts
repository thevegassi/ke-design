import * as React from 'react';
import type { IconName } from '../icons/Icon';

/** Phone info row — a phone glyph plus the number in link ink. */
export interface XMainContainerTextPhoneProps extends React.HTMLAttributes<HTMLElement> {
  /** Phone number. */
  phone?: string;
}
export declare function XMainContainerTextPhone(props: XMainContainerTextPhoneProps): JSX.Element;
export default XMainContainerTextPhone;
