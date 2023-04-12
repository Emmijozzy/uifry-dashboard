import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import TopNavbar from '../components/topNavBar'

type Props = {}

const Layout = (props: Props) => {
  return (
    <section className='w-full h-full '>
      <div className="relative flex w-full h-full /">
        <Sidebar />
        <div className='w-full p-[26px]'>
          <TopNavbar />
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Layout