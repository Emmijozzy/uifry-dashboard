import React from 'react'
import Card from './Card'
import { cardDatas } from '../../constant/cardData'


type Props = {}

const index = (props: Props) => {
  return (
    <div className=' w-full flex flex-wrap flex-col justify-between md:flex-row'>
      {
        cardDatas.map((cardData, i) => (
          <Card 
            key={i}
            title={cardData.title}
            post={cardData.post} 
            state={cardData.state} 
            amount={cardData.amount} 
            percenIncrese={cardData.percenIncrese}
          />
        ))
      }
    </div>
  )
}

export default index