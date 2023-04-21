import React from 'react'
import ActivitiesHeader from './ActivitiesHeader'
import HalfPieChart from './HalfPieChart'
import ViewAll from './ViewAll'

type Props = {}

const Activities = (props: Props) => {
  return (
    <div className='h-[400px] w-full dark:bg-darkbg2 bg-lightbg2 rounded-xl p-5 basis-1/2' >
        <div className='w-full h-full flex flex-col justify-between'>
            <ActivitiesHeader />
            <HalfPieChart />
            <ViewAll />
        </div>
    </div>
  )
}

export default Activities