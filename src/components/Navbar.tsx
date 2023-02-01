import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className='flex items-center justify-center md:px-6 w-min'>  
    <ul className='flex flex-row text-sm font-normal'>
      <NavbarItem to='/' text='Inicio' />
      <NavbarItem to='/list' text='Listado' />
      <NavbarItem to='/news' text='Novedades' />
    </ul>
  </nav>
)

interface NavbarItemProps {
  to: string,
  text: string
}

const NavbarItem = ({ to, text }: NavbarItemProps) => {
  const style = 'text-lg hover:bg-gray-700 py-3 px-5';
  
  return <li>
    <NavLink to={to} className={({ isActive }) => isActive ? `${style} dark:text-blue-500` : `${style} dark:text-white`}>
      {text}
    </NavLink>
  </li>
}