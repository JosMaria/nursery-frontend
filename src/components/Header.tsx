import iconImage from '../assets/icon-header.png';
import { FaUserCircle } from 'react-icons/fa';

import './stylesheets/Header.css';

export const Header = () => {
  return (
    <header className='header-container'>
      <div className='title-container'>
        <img
          className='icon-header-image'
          src={iconImage}
          alt='icon-header' />
        <h1>VIVERO</h1>
      </div>
      <div className='icon-user-container'>
        <FaUserCircle size='3em' color='#D8E9A8' />
      </div>
      
    </header>
  )
}
