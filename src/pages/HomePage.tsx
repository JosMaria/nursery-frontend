import { Footer, Header } from '../components';
import { Outlet } from 'react-router-dom';

export const Page = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

