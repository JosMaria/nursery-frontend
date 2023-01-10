import { ProductResponseDTO } from '../types';
import { Footer, Product, Header  } from '../components';

import { Outlet } from 'react-router-dom';

export const Page = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)
  
