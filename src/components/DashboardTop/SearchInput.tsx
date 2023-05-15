import React from 'react'
import image from '../../assets/images'

const { searchIcon } = image

type Props = {}

const SearchInput = (props: Props) => {
  return (
    <div className='md:w-[430px] w-full h-[44px] font-primary flex dark:bg-darkbg2 bg-lightbg2 rounded-lg'>
      <input className='w-full h-full p-5 outline-none dark:bg-darkbg2 bg-lightbg2 rounded-lg text-[12px] dark:text-darktext2 text-lighttext2 border-none placeholder-lighttext2 dark:placeholder-darktext2' type="text" placeholder='Search for anything...' />
      <div className='flex items-center justify-center w-10 h-full rounded-e-lg hover:bg-primary'>
        <img className='flex items-center justify-center w-4 h-4' src={searchIcon} />
      </div>
    </div>
  )
}

export default SearchInput