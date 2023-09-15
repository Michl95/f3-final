import React, { useContext } from 'react'
import { GlobalContext } from './utils/global.context'
import logo from '../assets/images/logo.png'

const Footer = () => {

  const { state } = useContext(GlobalContext);
  return (
    <footer className={`${state.theme}`}>
      <p>Powered by</p>
      <img src={logo} alt='logo'/>   
    </footer>
  )
}

export default Footer
