import React from 'react'

type Props = {}

const TableHead = (props: Props) => {
  return (
    <div className='w-full h-7 flex justify-between'>
        <h2 className='font-primary font-medium text-xl'>Transaction</h2>
        <div>
            <div className=''>
    
            </div>
            <select className='bg-transparent border-solid border-[1px] dark:border-[#8C89B4] border-lighttext2 text-sm p-1 rounded-lg'> 
                <option className='bg-transperent'>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
            </select>
        </div>
    </div>
  )
}

export default TableHead