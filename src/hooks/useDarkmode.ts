import { useState, useEffect } from "react";

const useDarkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : ''
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleModeClick = (e: any) => {
    setTheme((preTheme) => (preTheme === 'dark' ? 'light' : 'dark'))
  }

  const checkMatch = () => {
    darkQuery.matches ? setTheme('dark'): setTheme('light')
  }

  const UpdateMode = () => (
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
  )


  const changeWithSystem = () => (
    darkQuery.addEventListener('change', (e) => {
      if(!("theme" in localStorage)) {
        if(e.matches) {
          element.classList.add('dark');
        } else {
          element.classList.remove("dark")
        }
      }
    })
  )

  return ({ 
    handleModeClick,
    changeWithSystem,
    UpdateMode,
    theme
  })
}

export default useDarkmode