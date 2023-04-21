import React from 'react'
import CardHead from './CardHead'
import CardCarousel from './CardCarousel'

type Props = {}

const MyCard = (props: Props) => {
  return (
    <div className='dark:bg-darkbg2 bg-lightbg2 w-full h-[400px] rounded-xl'>
        <div className='w-full h-full p-5 flex flex-col space-y-2'>
            <CardHead />
            <CardCarousel />
            <div className=' flex-1 grid grid-cols-2 gap-6 justify-center items-center'>
                <button className='bg-primary h-10 rounded-lg text-sm '>Manage cards</button>
                <button className='border-solid border-2 border-lighttext dark:border-darktext h-10 rounded-lg text-sm '>Transfer</button>
            </div>
        </div>
    </div>
  )
}

export default MyCard