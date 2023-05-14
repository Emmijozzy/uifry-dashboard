import React from 'react'
import image from '../../assets/images'

const { masterCardLogo } = image

type Props = {}

const CardCarousel = (props: Props) => {
  return (
    <div className='relative p-5 overflow-hidden text-white rounded-md h-44 bg-sky-700 pcard'>
      <div className='w-[19em] h-[16em] ellipse1 rounded-full bg-[#00000029] absolute top-[-11em] right-[-9em] shadow-2xl'></div>
      <div className='w-[20em] h-[15em] rounded-full bg-[#00000029] absolute bottom-[-10em] left-[-10em]'></div>
      <img className='absolute top-5 right-5' src={masterCardLogo} alt="" />
      <p className='text-sm'>Current Balance</p>
      <h3 className='text-lg font-semibold'>$5,720,200</h3>
      {/* <div className='absolute flex items-center w-full space-x-8 bottom-5'> */}
        <div className='absolute flex space-x-1 a left-5 bottom-5'>
          <p className='text-sm'>0373</p>
          <p className='text-sm'>0373</p>
          <p className='text-sm'>0373</p>
          <p className='text-sm'>0373</p>
        </div>
        <div className='absolute flex right-5 bottom-5'>
          <p className='text-base'>09</p>
          <p className='text-base'>/</p>
          <p className='text-base'>23</p>
        </div>
      {/* </div> */}
    </div>
  )
}
export default CardCarousel