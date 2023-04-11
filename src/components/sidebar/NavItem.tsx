import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../../assets/images'

type Props = {
    icon: string;
    title: string;
    link: string;
}

const NavItem = (props: Props) => {
    const { icon, title, link } = props
  return (
    <div className='h-[50px] my-2 w-full flex'>
        <NavLink
            className={'flex items-center px-3 gap-4 w-full hover:bg-primary rounded-lg'} 
            to={link}
            style={({ isActive }) => ({ 
            backgroundColor: isActive ? "#6359c9" : ' '         
            })}
        >
            <img className='basi-2 h-[24px] w-[24px]' src={icon} alt={icon} />
            <span className='basis-auto'>{title}</span>
        </NavLink>
    </div>
  )
}

export default NavItem