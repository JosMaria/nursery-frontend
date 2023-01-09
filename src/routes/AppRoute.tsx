import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from '../components'

import { HomePage } from '../pages/HomePage'
import { products } from '../utils';

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/list' element={<Footer />} />
        <Route path='/news' element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}
