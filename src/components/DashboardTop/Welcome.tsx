import React from 'react'
import image from '../../assets/images'

const { hand } = image

type Props = {}

const Welcome = (props: Props) => {
  return (
    <div className='w-full lg:w-[330px] mb-2 md:mb-0 flex flex-col font-primary justify-center items-center lg:items-start mr-3'>
      <h3 className=' flex font-semibold text-2xl items-center text-center'>Welcome Back Ali <img src={hand} className='h-5 w-5 mx-2 ' alt="waving hand" /></h3>
      <p className='font-normal text-base text-lighttext2 dark:text-darktext2 text-center lg:text-left'>Here is what is happening in your store today</p>
    </div>
  )
}

export default Welcome