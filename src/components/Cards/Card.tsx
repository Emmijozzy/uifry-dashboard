import React from 'react'
import Income from './Income'
import Outcome from './Outcome'
import PercentDecrease from './PercentDecrease'
import PercentIncrese from './PercentIncrese'

type Props = {
  title: string
  post: string
  state: string
  amount: string
  percenIncrese: string
}

const Card = (props: Props) => {
  const { title, post, state, amount, percenIncrese } = props
  return (
    <div className='w-full lg:w-[320px] h-[125px] relative dark:bg-darkbg2 bg-lightbg2 font-primary p-[26px] my-[6px] mt-0 rounded-2xl'>
      <div className='w-full h-full flex flex-nowrap items-center'>
        <div className='mr-4'>
          {
            post == 'income' ? 
            <Income /> :
            <Outcome />         
          }
        </div>
        <div className='w-[70%] flex flex-col justify-between '>
          <p className='text-lighttext2 dark:text-darktext2 text-lg font-normal '>{title}</p>
          <h3 className='text-3xl font-semibold'>{`$${amount}`}</h3>
        </div>
        <div className='basis-10 h-full w-full flex items-end py-2'>
          {
            state == 'increase' ?
            <PercentIncrese /> :
            <PercentDecrease />
          }
        </div>
      </div>
    </div>
  )
}

export default Card