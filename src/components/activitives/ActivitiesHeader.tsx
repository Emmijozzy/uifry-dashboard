import React from 'react'

type Props = {}

const ActivitiesHeader = (props: Props) => {
  return (
    <div className='w-full h-7 flex justify-between'>
      <h2 className='font-primary font-medium text-xl'>Activity</h2>
      <select className='bg-transparent border-solid border-[1px] dark:border-[#8C89B4] border-lighttext2 text-sm p-1 rounded-lg'> 
        <option className='bg-transperent'>Monthly</option>
        <option>Weekly</option>
        <option>Daily</option>
      </select>
    </div>
  )
}

export default ActivitiesHeader