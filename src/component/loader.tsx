import React, {FC} from 'react';
import {Oval} from 'react-loader-spinner'

const Loader:FC = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
        <Oval
            color='text-black'
            visible
            strokeWidth={2}
            width={1}
        />
    </div>
  );
};

export default Loader;
