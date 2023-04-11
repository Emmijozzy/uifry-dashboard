import React from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import DarkMode from './DarkMode'
import User from './User'
import { navItems } from '../../constant/navItem'
import { globalNavItem } from '../../constant/globalNavItem'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className='w-[280px] h-full dark:bg-darkbg2 bg-lightbg2 overflow-y-auto overflow-x-anto z-10 px-[16px]'>
      <nav className='flex flex-col w-full h-full font-tertiary'>
        <div className='w-full basis-20'>
          <Logo />
        </div>
        <ul className='flex-auto w-full mt-4'>
          {navItems.map((navItem, i ) => (
            <li>
              <NavItem 
                key={i} 
                icon={navItem.icon} 
                title={navItem.title} 
                link={navItem.link} 
              />
            </li>
          ))} 
          <hr className='border-solid border-1 border-primary'/>
          {globalNavItem.map((navItem, i ) => (
            <li>
              <NavItem 
                key={i} 
                icon={navItem.icon} 
                title={navItem.title} 
                link={navItem.link} 
              />
            </li>
          ))}
          <li><DarkMode /></li>
        </ul>
        <div className='basis-24'>
          <User />
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar