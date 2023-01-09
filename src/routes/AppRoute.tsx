import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from '../components'

import { HomePage } from '../pages/HomePage'

const product = {
  id: 1,
  commonName: 'cactu estrella example',
  scientificName: 'cactu estrellatus',
  firstLetterLastname: 'l',
  family: 'family-cactu',
  status: 'CONSERVATION'
}

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage product={product}/>} />
        <Route path='/list' element={<Footer />} />
        <Route path='/news' element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}
