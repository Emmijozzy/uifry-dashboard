import React, { useEffect, useState }  from 'react'
import image from '../../assets/images'

const { mode } = image

type Props = { }

const DarkMode = (props: Props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : ''
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
  const handleClick = (e: any) => {
    setTheme((preTheme) => (preTheme === 'dark' ? 'light' : 'dark'))
  }
  
  const checkMatch = () => {
    darkQuery.matches ? setTheme('dark'): setTheme('light')
  }
  

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem("theme", 'dark')
        break;
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem("theme", "light")
        break;   
      default:
        checkMatch()   
        break;
    }
  }, [theme])

  darkQuery.addEventListener('change', (e) => {
    if(!("theme" in localStorage)) {
      if(e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove("dark")
      }
    }
  })
  
  
  

  return (
    <div className='h-[50px] my-2 w-[250px] flex'>
        <div
            className='flex w-full space-x-8'
        >
          <div className='flex px-3 space-x-4'>
            <img className='basis-2 h-[24px] w-[24px]' src={mode} alt={'DarkMode'} />
            <span className='basis-auto'>{'Dark Mode'}</span>
          </div>
          <label className="basis-auto theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox"onClick={handleClick} checked={theme == 'dark'} />
            <div className="slider round"></div>
          </label>
        </div>
    </div>
  )
}

export default DarkMode