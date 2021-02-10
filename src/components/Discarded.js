import React from 'react';

const Component = () => {
  return (
    <div className='absolute bg-white opacity-75 w-full h-full px-8 rounded-md flex flex-col items-center justify-center text-center z-40'>
      <h3 className='font-medium text-gray-700'>Discarded</h3>
      <p className='mt-1 text-sm italic text-gray-600'>
        Click the X button again to add the video back.
      </p>
    </div>
  );
};

Component.displayName = 'Discarded Overlay';
export default Component;
