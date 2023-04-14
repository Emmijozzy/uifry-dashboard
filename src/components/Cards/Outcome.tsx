import React from 'react'
import image from '../../assets/images'

const { arrowDown } = image

type Props = {}

const Outcome = (props: Props) => {
  return (
    <div className='w-12 h-12 rounded-xl flex justify-center items-center  bg-primary'>
      <img src={arrowDown} alt="" />
    </div>
  )
}

export default Outcome