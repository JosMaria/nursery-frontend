import { Footer, Header } from '../components';
import { Outlet } from 'react-router-dom';

export const Page = () => (
  <>
    <Header />
    <main className='bg-[var(--color-level-four)] flex justify-center'>
      <Outlet />
    </main>
    <Footer />
  </>
)

