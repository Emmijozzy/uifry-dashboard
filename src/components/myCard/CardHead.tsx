import React from 'react'

type Props = {}

const CardHead = (props: Props) => {
  return (
    <div className='w-full font-primary'>
      <h2 className='font-semibold text-xl mb-3'>My Card</h2>
      <span>
        <p className='text-lighttext2 dark:text-darktext2 text-xs font-normal'>Card Balance</p>
        <h3 className='font-semibold text-lg mb-3'>{`$${'15,595.015'}`}</h3>
      </span>
    </div>
  )
}

export default CardHead