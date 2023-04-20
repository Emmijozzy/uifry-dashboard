import React, { useContext } from 'react'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import Logo from './Logo'
import { AppContext } from '../../context/ContextProvide'


type Props = {}

const TopMobileNav = (props: Props) => {
  const { nav, handleNav } = useContext(AppContext)

  return (
    <>
    <div className='lg:hidden w-full h-[75px] flex justify-between items-center px-[26px] py-2 absolute z-10 dark:bg-darkbg2 bg-lightbg2'>
        <Logo />
        <div className='w-8 h-8' onClick={handleNav}>
          {
           nav === true ? <MdClose className='w-full h-full'/> : <FiMenu className='w-full h-full' /> 
          }
        </div>
      </div>
    </>
  )
}

export default TopMobileNav