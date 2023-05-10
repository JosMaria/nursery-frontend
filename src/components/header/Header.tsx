import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const style = 'text-lg hover:bg-[var(--color-level-five)] text-[var(--color-level-one)] p-3 font-medium';

export const Header = () => (
  <header className='bg-[var(--color-level-seven)] flex justify-between items-center px-10 py-6'>
    <Logo />
    <Navbar />
    <NavLink to="#">
      <FaUserCircle size='3.5em' color='white' />
    </NavLink>
  </header>
)

const Logo = () => (
  <div className="flex items-center gap-5">
    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 sm:h-9 w-fit" alt="Flowbite Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Vivero</span>
  </div>
)

const Navbar = () => (
  <nav>
      <NavLink className={({ isActive }) => isActive ? `${style} dark:text-blue-500` : `${style} dark:text-white`}
        to={'/'}>
        Inicio
      </NavLink>

      <NavLink className={({ isActive }) => isActive ? `${style} dark:text-blue-500` : `${style} dark:text-white`}
        to={'/list'}>
        Listado
      </NavLink>

      <NavLink className={({ isActive }) => isActive ? `${style} dark:text-blue-500` : `${style} dark:text-white`}
        to={'/news'}>
        Novedades
      </NavLink>
  </nav>
)
