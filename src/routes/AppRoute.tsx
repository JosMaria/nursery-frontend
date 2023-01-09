import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from '../components'

import { HomePage } from '../pages/HomePage'
import { IdentificationResponseDTO, Status } from '../types'

const identification: IdentificationResponseDTO = {
  id: 1,
  commonName: 'cactu estrella example',
  scientificName: 'cactu estrellatus',
  firstLetterLastname: 'l',
  family: 'family-cactu'
}

const status: Status = 'AVAILABLE';

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage identification={identification} status={status} />} />
        <Route path='/list' element={<Footer />} />
        <Route path='/news' element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}
