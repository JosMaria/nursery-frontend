import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const style = 'text-lg hover:bg-[var(--color-level-five)] text-[var(--color-level-one)] p-3 font-medium';
const styleSelected = 'border-b-4 border-[var(--color-level-one)]';

export const Header = () => (
  <header className='bg-[var(--color-level-seven)] flex justify-between items-center px-10 py-6'>
    <Logo />
    <Navbar />
    <NavLink to='#'>
      <FaUserCircle size='2.5em' color='white' />
    </NavLink>
  </header>
)

const Logo = () => (
  <div className='flex items-center gap-2'>
    <img 
      src='https://images.vexels.com/media/users/3/148692/isolated/preview/4ff28c6516ef2c46843f69010116d898-maceta-con-im--genes-predise--adas-de-la-planta-by-vexels.png' 
      className='w-12' 
      alt='Logo' />
    <span className='self-center text-xl font-semibold whitespace-nowrap text-[var(--color-level-one)]'>Vivero FDRyT</span>
  </div>
)

const Navbar = () => (
  <nav>
      <NavLink className={({ isActive }) => isActive ? `${style} ${styleSelected}` : `${style}`}
        to={'/'}>
        Inicio
      </NavLink>

      <NavLink className={({ isActive }) => isActive ? `${style} ${styleSelected}` : `${style}`}
        to={'/list'}>
        Listado
      </NavLink>

      <NavLink className={({ isActive }) => isActive ? `${style} ${styleSelected}` : `${style}`}
        to={'/news'}>
        Novedades
      </NavLink>
  </nav>
)
