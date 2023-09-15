import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";
import  iconoLuna from '../assets/images/icono-luna.png';
import iconoSol from '../assets/images/icono-sol.png';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { state, toggleTheme } = useContext(GlobalContext);

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="nav-logo-container">
        <img src={ logo } alt="logo" />
        <h5>Odonto<span className= "logo-name" >Mich</span></h5>
      </div>

      <div className="nav-links-container">
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/contacto">Contacto</Link>
        <Link className="nav-link" to="/favs">Favoritos</Link>
        <button 
          className="nav-link nav-btn" 
          onClick={toggleTheme}
        >
          <img className="theme-icono" src={state.theme === 'light' ? iconoLuna : iconoSol } alt="Icono de tema" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;