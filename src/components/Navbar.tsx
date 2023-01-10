import { Link } from 'react-router-dom';

import './stylesheets/Navbar.css';

export const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <Link className='navbar-element' to='/'>Inicio</Link>
      <Link className='navbar-element' to='/list'>Listado</Link>
      <Link className='navbar-element' to='/news'>Novedades</Link>
    </nav>
  )
}
