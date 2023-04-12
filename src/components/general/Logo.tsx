import React from 'react'
import logo from '../../assets/images/logo.svg'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='w-[200px] h-[60px] my-[20px] flex item-center  '>
      <a href="#" className='flex item-center'>
        <img className='w-36 lg: w-40' src={logo} alt='Uifry' />
      </a>
    </div>
  )
}

export default Logo