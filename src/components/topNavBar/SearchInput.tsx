import React from 'react'

type Props = {}

const SearchInput = (props: Props) => {
  return (
    <div className='md:w-[430px] w-full font-primary'>
      <input className='w-full h-[44px] p-5 outline-none dark:bg-darkbg2 bg-lightbg2 rounded-lg text-[12px] dark:text-darktext2 text-lighttext2 border-none placeholder-lighttext2 dark:placeholder-darktext2' type="text" placeholder='Search for anything...' />
    </div>
  )
}

export default SearchInput