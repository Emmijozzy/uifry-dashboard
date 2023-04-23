import React from 'react'

type Props = {}

const AnalyticsHeader = (props: Props) => {
  return (
    <div className='w-full h-[80px] md:h-7 flex justify-between'>
        <h2 className='font-primary font-medium text-xl'>Activity</h2>
        <div className='flex flex-col md:flex-row w-[50%] justify-between'>
            <div className='flex-1 flex h-full md:w-[50%] items-center justify-evenly '>
                <div className='flex items-center'>
                    <div className='bg-primary h-[15px] w-[15px] rounded-full mr-2'></div>
                    <p className='text-xs text-lighttext2 dark:text-darktext2 md:inline font-bold'>Income</p>
                </div>
                <div className='flex items-center' >
                    <div className='bg-secondary h-[15px] w-[15px] rounded-full mr-2'></div>
                    <p className='text-xs text-lighttext2 dark:text-darktext2 font-bold'>Outcome</p>
                </div>
            </div>
            <select className='bg-transparent border-solid border-[1px] dark:border-[#8C89B4] border-lighttext2 text-sm p-1 rounded-lg order-first md:order-last'> 
                <option className='bg-transperent'>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
            </select>
        </div>
    </div>
  )
}

export default AnalyticsHeader