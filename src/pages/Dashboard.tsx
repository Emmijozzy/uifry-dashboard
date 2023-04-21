import React from 'react';
import Cards from '../components/Cards';
import DashboardTop from '../components/DashboardTop';
import ActionCard from '../components/ActionCard';
import Activities from '../components/Activitives';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <section className='w-full lg:mt-0 mt-20 flex-1 '>
      <DashboardTop />
        <div className='w-full h-full dashboard_layout'>
          <div className='w-full lg:pr-6'>
            <Cards />
          </div>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-1 gap-5 lg:inline'>
            <ActionCard />
            <Activities />
          </div>
        </div>
    </section>
  )
}

export default Dashboard