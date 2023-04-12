import React from 'react';
import Cards from '../components/Cards';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <section className='w-full mt-[26px] h-[calc(100%-75px)]'>
        <div className='w-full h-full dashboard_layout '>
          <div>
            <Cards />
          </div>
          <div>

          </div>
        </div>
    </section>
  )
}

export default Dashboard