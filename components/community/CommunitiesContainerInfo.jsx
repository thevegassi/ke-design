import React from 'react';
import { XTextGroupInfo } from './XTextGroupInfo.jsx';
import { XMainContainerTextPhone } from './XMainContainerTextPhone.jsx';
import { XMainContainerTextLocation } from './XMainContainerTextLocation.jsx';

const rule = { height: 1, background: 'var(--chrome-border)', alignSelf: 'stretch', flexShrink: 0 };

export function CommunitiesContainerInfo({ name = 'Key Entertainment', category = 'Музыкальный лейбл', width = 552, ...rest }) {
  return (
    <div style={{ position: 'relative', width, borderRadius: 5, background: 'var(--chrome-surface)', boxShadow: 'inset 0 0 0 1px var(--chrome-border), inset 0 -1px 0 0 var(--chrome-border-strong)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ...rest.style }} {...rest}>
      <div style={{ height: 75, display: 'flex', flexDirection: 'column', padding: '14px 20px', alignSelf: 'stretch', boxSizing: 'border-box' }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 19, lineHeight: '27px', color: 'var(--ke-black)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, lineHeight: '20px', color: 'var(--chrome-meta)' }}>{category}</span>
      </div>
      <div aria-hidden="true" style={rule} />
      <div style={{ height: 50, position: 'relative', alignSelf: 'stretch' }}>
        <span style={{ position: 'absolute', left: 21, top: 18, fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 13, whiteSpace: 'nowrap', lineHeight: '18px', color: 'var(--ke-black)' }}>Информация</span>
      </div>
      <div aria-hidden="true" style={rule} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '16px 18px', alignItems: 'center', alignSelf: 'stretch', boxSizing: 'border-box' }}>
        <XTextGroupInfo width={width - 36}>Независимый музыкальный лейбл полного цикла</XTextGroupInfo>
        <XTextGroupInfo width={width - 36} icon="Earth24" link>www.keyent.kz</XTextGroupInfo>
        <XMainContainerTextPhone width={width - 36} />
        <XMainContainerTextLocation width={width - 36} />
      </div>
    </div>
  );
}
export default CommunitiesContainerInfo;
