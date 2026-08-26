import React from 'react';
import { XTextGroupInfo } from './XTextGroupInfo.jsx';

export function XMainContainerTextPhone({ phone = '+7 700 000 00 00', ...rest }) {
  return <XTextGroupInfo icon="Phone24" link {...rest}>{phone}</XTextGroupInfo>;
}
export default XMainContainerTextPhone;
