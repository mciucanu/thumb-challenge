import React from 'react';
import classNames from 'classnames';
import {CrossedEye, Eye, X} from '../icons';

const IconList = {
  SHARE: Eye,
  HIDE: CrossedEye,
  X: X,
};

const Component = ({iconType, dimensions, padding, selected, handleClick}) => {
  const TagName = IconList[iconType];

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'bg-white rounded-full overflow-hidden focus:outline-none',
        {'p-2 bg-opacity-75': padding},
      )}
    >
      <TagName
        className={`w-${dimensions} h-${dimensions} text-blue-400 hover:text-blue-500`}
        outline={!selected}
      />
    </button>
  );
};

Component.displayName = 'Discard Button';
export default Component;
