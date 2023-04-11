import React from 'react'
import { ReactSVG } from 'react-svg'
import logo from '../../assets/images/logo.svg'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='w-[200px] h-[60px] my-[20px] '>
      <a href="#">
        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'width: 200px')
          }}
          src={logo}
        />
      </a>
    </div>
  )
}

export default Logo