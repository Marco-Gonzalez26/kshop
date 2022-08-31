import React, { createContext, useState, useContext, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [openSection, setOpenSection] = useState({
    chicas: true,
    belleza: false
  })
  const [openNavItem, setOpenNavItem] = useState({
    carrito: false,
    sideBar: false
  })
  return (
    <Context.Provider
      value={{
        openSection,
        setOpenSection,
        openNavItem,
        setOpenNavItem
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
