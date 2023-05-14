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
    <div className='w-full lg:w-[300px] h-[125px] relative dark:bg-darkbg2 bg-lightbg2 font-primary p-[25px] my-[6px] mt-0 rounded-2xl'>
      <div className='flex items-center justify-between w-full h-full flex-nowrap'>
        <div className='mr-3'>
          {
            post == 'income' ? 
            <Income /> :
            <Outcome />         
          }
        </div>
        <div className='w-[70%] flex flex-col justify-between mr-1'>
          <p className='text-lg font-normal text-lighttext2 dark:text-darktext2 whitespace-nowrap'>{title}</p>
          <h3 className='text-2xl font-semibold'>{`$${amount}`}</h3>
        </div>
        <div className='flex items-end w-full h-full py-2 basis-10'>
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