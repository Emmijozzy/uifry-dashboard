import React, { useContext } from 'react'
import Welcome from './Welcome'
import { Menu } from '@mui/icons-material'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import Logo from '../general/Logo'
import SearchInput from './SearchInput'
import { AppContext } from '../../context/ContextProvide'

type Props = { }

const TopNave = (props: Props) => {
  const { nav, handleNav } = useContext(AppContext)
  return (
    <div className='h-fit md-[75px] w-full flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0'>
      <div className='lg:hidden w-full h-[75px] flex justify-between items-center'>
        <Logo />
        <div className='w-8 h-8' onClick={handleNav}>
          {
           nav === true ? <FiMenu className='w-full h-full' /> : <MdClose className='w-full h-full'/>
          }
        </div>
      </div>
      <Welcome />
      <SearchInput />
    </div>
  )
}
        
export default TopNave