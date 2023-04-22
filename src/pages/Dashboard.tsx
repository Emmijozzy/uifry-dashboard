import React from 'react';
import Cards from '../components/Cards';
import DashboardTop from '../components/DashboardTop';
import ActionCard from '../components/ActionCard';
import Activity from '../components/Activity';
import Analytics from '../components/Analytics';
import Transaction from '../components/Transaction';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <section className='w-full lg:mt-0 mt-20 flex-1 overflow-y-scroll p-[26px] pt-0 mb-5'>
      <DashboardTop />
        <div className='w-full h-full dashboard_layout'>
          <div className='w-full lg:pr-6'>
            <Cards />
            <Analytics />
            <Transaction />
          </div>
          <div className='md:grid md:grid-cols-2 lg:grid-cols-1 gap-5 lg:inline'>
            <ActionCard />
            <Activity />
          </div>
        </div>
    </section>
  )
}

export default Dashboard