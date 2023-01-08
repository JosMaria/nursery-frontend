import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Inicio</Link>
      <Link to='/list'>Listado</Link>
      <Link to='/news'>Noveedades</Link>
    </nav>
  )
}
