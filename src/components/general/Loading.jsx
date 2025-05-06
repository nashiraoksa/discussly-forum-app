import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className='w-full sticky top-0 z-20'>
      <LoadingBar
        progressIncrease={1}
        showFastActions
        updateTime={100}
        style={{ backgroundColor: '#58A4B0' }}
      />
    </div>
  );
}

export default Loading;
