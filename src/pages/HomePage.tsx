import { Footer, Header  } from '../components';
import { Outlet } from 'react-router-dom';

export const Page = () => (
  <div className='flex flex-col justify-center'>
    <Header />
    <Outlet />
    <Footer />
  </div>
)
  
