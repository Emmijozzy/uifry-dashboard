import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'

type Props = {}

const Transaction = (props: Props) => {
  return (
    <div className='h-[360px] w-full p-5 dark:bg-darkbg2 bg-lightbg2 mb-6 rounded-lg'>
        <div className='w-full h-full overflow-x-auto overflow-y-hidden flex flex-col justify-stretch'>
            <TableHead />
            <TableBody />
        </div>
    </div>
  )
}

export default Transaction