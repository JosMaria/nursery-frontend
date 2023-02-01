import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Header = () => (
  <header className='bg-white border-gray-200 dark:bg-gray-900 w-full flex justify-between items-center px-12 py-6'>
    <Logo />
    <Navbar />
    <NavLink to="#">
      <FaUserCircle size='3.5em' color='white' />
    </NavLink>
  </header>
)

const Logo = () => (
  <div className="flex items-center">
    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Vivero</span>
  </div>
)
