import React from 'react'
import image from '../../assets/images'

const { avater, dropdown } = image

type Props = {}

const User = (props: Props) => {
  return (
    <div className='flex w-full px-3 '>
      <div className='h-[60px] w-[60px] flex items-end overflow-hidden bg-[#45a3c0] rounded-[50%] basis-20 mr-2'>
        <img className='w-full' src={avater} alt="" />
      </div>
      <div className='flex items-center justify-between w-full basis-auto' >
        <div className='font-tertiary'>
          <h3 className='text-xl '>Ali Riaz</h3>
          <p className='text-xs'>Web Developer</p>
        </div>
        <span>
          <img src={dropdown} alt="" />
        </span>
      </div>
    </div>
  )
}

export default User