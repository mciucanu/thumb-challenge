import React from 'react';
import {Collection} from '../icons';

const Component = ({order}) => {
  return (
    <div className='px-2 py-1 bg-white bg-opacity-75 rounded-full flex items-center justify-center'>
      <Collection className='w-4 h-4 text-blue-400' />
      <p className="text-sm ml-1">{order}</p>
    </div>
  );
};

Component.displayName = 'Collection Info';
export default Component;
