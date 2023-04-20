import React, { useContext } from 'react'
import Welcome from './Welcome'
import Logo from '../general/Logo'
import SearchInput from './SearchInput'

type Props = { }

const DashboardTop = (props: Props) => {
  return (
    <div className='h-fit md-[75px] w-full flex-none flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0 py-4 lg:py-8'>
      <Welcome />
      <SearchInput />
    </div>
  )
}
        
export default DashboardTop