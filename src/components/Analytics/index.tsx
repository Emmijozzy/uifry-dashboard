import React from 'react'
import AnalyticsHeader from './AnalyticsHeader'
import AnalyticsBody from './AnalyticsBody'

type Props = {}

const Analytics = (props: Props) => {
  return (
    <div className='h-[380px] w-full p-5 dark:bg-darkbg2 bg-lightbg2 mb-6 rounded-lg'>
        <div>
            <AnalyticsHeader />
            <AnalyticsBody />
        </div>
    </div>
  )
}

export default Analytics