import { NavLink } from 'react-router-dom';

import './stylesheets/Navbar.css';

export const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <NavLink 
        className={({ isActive }) => isActive ? 'navbar-element active' : 'navbar-element'} to='/'>
          Inicio
      </NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? 'navbar-element active' : 'navbar-element'} to='/list'>
          Listado
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? 'navbar-element active' : 'navbar-element'} to='/news'>
        Novedades
      </NavLink>
    </nav>
  )
}
