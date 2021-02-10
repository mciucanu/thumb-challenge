import React, {useState} from 'react';
import {Button, Discarded, CollectionInfo, SettingsMenu} from '../components';

const Component = () => {
  const [discarded, setDiscarded] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleDiscard = () => {
    setDiscarded((prev) => !prev);
  };

  const handleHide = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div className='flex flex-col-reverse sm:flex-row'>
      <SettingsMenu />
      <div
        className='relative rounded-md'
        style={{width: '320px', height: '180px'}}
      >
        <div className='absolute mt-2 ml-2 z-50 flex items-start justify-start'>
          <div>
            <div className='mb-1'>
              <CollectionInfo order={1} />
            </div>
            <Button
              iconType={hidden ? 'HIDE' : 'SHARE'}
              dimensions='4'
              padding={true}
              selected={hidden}
              handleClick={handleHide}
            />
          </div>
          <div className='bg-white bg-opacity-75 rounded-full overflow-hidden py-1 px-2 ml-1'>
            <p className="text-sm">3</p>
          </div>
        </div>
        <div className='z-50 absolute right-0 -mt-4 -mr-4'>
          <Button
            iconType='X'
            dimensions='8'
            selected={discarded}
            handleClick={handleDiscard}
          />
        </div>
        {discarded && <Discarded />}
        <div className='rounded-md overflow-hidden'>
          <video
            className='z-10'
            width='320'
            height='180'
            controls
            poster='https://peach.blender.org/wp-content/uploads/bbb-splash.png'
          >
            <source
              src='https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'Video Thumb';
export default Component;
