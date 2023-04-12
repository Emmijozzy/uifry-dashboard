import React, { createContext, useState} from 'react'

type AppContextType = {
  nav: boolean;
  handleNav?: () => void
}

const defaultContextState = {
  nav: false
}

export const AppContext = createContext<AppContextType>(defaultContextState)

const ContextProvide = ({ children }: any) => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav((preNav: boolean) => (!preNav))
  }

  const contextValue = {
    nav,
    handleNav
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvide