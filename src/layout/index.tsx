import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import TopNavbar from '../components/topNavBar'

type Props = {}

const Layout = (props: Props) => {
  return (
    <section className='w-full h-full '>
      <div className="w-full h-full flex relative">
        <TopNavbar />
        <Sidebar />
        <Outlet />
      </div>
    </section>
  )
}

export default Layout