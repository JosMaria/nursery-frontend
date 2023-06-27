import { Footer, Header } from '../components';
import { Outlet } from 'react-router-dom';

export const Page = () => (
  <>
    <Header />
    <main className='w-full bg-[var(--color-level-four)]'>
      <Outlet />
    </main>
    <Footer />
  </>
)
