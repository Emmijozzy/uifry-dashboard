import React from 'react'
import image from '../../assets/images'

const { hand } = image

type Props = {}

const Welcome = (props: Props) => {
  return (
    <div className='w-[330px] mb-5 md:mb-0 flex flex-col font-primary justify-center'>
      <h3 className=' flex font-semibold text-2xl items-center'>Welcome Back Ali <img src={hand} className='h-5 w-5 mx-2 ' alt="waving hand" /></h3>
      <p className='font-normal text-base text-darktext2'>Here is what is happening in your store today</p>
    </div>
  )
}

export default Welcome