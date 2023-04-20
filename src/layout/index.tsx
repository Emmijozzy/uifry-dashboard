import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import TopMobileNav from '../components/general/TopMobileNav';

type Props = {}

const Layout = (props: Props) => {
  return (
    <section className='w-full h-full '>
      <div className="relative flex w-full h-full  /">
        <TopMobileNav />
        <Sidebar />
        <div className='w-full p-[26px] pt-0 h-full flex flex-col relative overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Layout