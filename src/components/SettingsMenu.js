import React from 'react';
import {Download, Edit, Email} from '../icons';

const Component = () => {

  const ButtonWrapper = ({children}) => (
    <button className='bg-white rounded-full p-2 focus:outline-none'>
      {children}
    </button>
  );

  return (
    <div className='bg-gray-100 py-2 px-2 flex flex-row justify-around rounded-full mr-4 mt-4 sm:mt-0 sm:flex-col' style={{maxWidth: '320px'}}>
      <ButtonWrapper>
        <Email className="w-6 h-6 text-blue-400 hover:text-blue-500" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Edit className="w-6 h-6 text-blue-400 hover:text-blue-500" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Download className="w-6 h-6 text-blue-400 hover:text-blue-500" />
      </ButtonWrapper>
    </div>
  );
};

Component.displayName = 'Settings Menu';
export default Component;
