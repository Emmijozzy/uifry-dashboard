import React from 'react'
import image from '../../assets/images'

const { arrowUp } = image

type Props = {}

const Income = (props: Props) => {
  return (
    <div className='w-12 h-12 rounded-xl flex justify-center items-center  bg-blue-400'>
      <img className='w-6 h-6 mx-auto' src={arrowUp} alt="" />
    </div>
  )
}

export default Income