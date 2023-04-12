import React, { useEffect, useState }  from 'react';
import image from '../../assets/images';
import useDarkmode from '../../hooks/useDarkmode';

const { mode } = image;

type Props = { }

const DarkMode = (props: Props) => {
  const { theme, handleModeClick, changeWithSystem, UpdateMode} = useDarkmode();
  
  UpdateMode()
  changeWithSystem()

  return (
    <div className='h-[50px] my-2 w-full flex '>
        <div
            className='flex w-full space-x-8'
        >
          <div className='flex px-3 space-x-4'>
            <img className='basis-2 h-[24px] w-[24px]' src={mode} alt={'DarkMode'} />
            <span className='basis-auto'>{'Dark Mode'}</span>
          </div>
          <label className="basis-auto theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox"onClick={handleModeClick} checked={theme == 'dark'} />
            <div className="slider round"></div>
          </label>
        </div>
    </div>
  )
}

export default DarkMode