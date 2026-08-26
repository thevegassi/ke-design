import React from 'react';
import { XIconCounter } from './XIconCounter.jsx';
import { XIconCounterViews } from './XIconCounterViews.jsx';

export function XContainerCounters({ likes = 21, comments = 4, shares = 2, views = '12.4K', ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', ...rest.style }} {...rest}>
      <XIconCounter icon="Likes24" count={likes} />
      <XIconCounter icon="MessageCircle24" count={comments} />
      <XIconCounter icon="Share24" count={shares} />
      <div style={{ marginLeft: 'auto' }}><XIconCounterViews count={views} /></div>
    </div>
  );
}
export default XContainerCounters;
