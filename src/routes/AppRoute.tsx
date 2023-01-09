import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from '../components'

import { HomePage } from '../pages/HomePage'
import { ProductResponseDTO } from '../types'

const products: ProductResponseDTO[] = [
  {
    id: 1,
    commonName: 'cactu estrella example',
    scientificName: 'cactu estrellatus',
    firstLetterLastname: 'l',
    family: 'family-cactu',
    status: 'AVAILABLE'
  },
  {
    id: 2,
    commonName: 'cactu de verano',
    scientificName: 'cactu veranus',
    firstLetterLastname: 'a',
    family: 'family-cactu',
    status: 'NON_EXISTENT'
  },
  {
    id: 3,
    commonName: 'cactu inviernus',
    scientificName: 'cactu de inviernus',
    firstLetterLastname: 'g',
    family: 'family-cactu',
    status: 'CONSERVATION'
  },
  {
    id: 4,
    commonName: 'cactu primavera',
    family: 'family-cactu',
    status: 'NON_EXISTENT'
  },
  {
    id: 1,
    commonName: 'cactu estrella example',
    scientificName: 'cactu estrellatus',
    firstLetterLastname: 'l',
    family: 'family-cactu',
    status: 'AVAILABLE'
  },
  {
    id: 2,
    commonName: 'cactu de verano',
    scientificName: 'cactu veranus',
    firstLetterLastname: 'a',
    family: 'family-cactu',
    status: 'NON_EXISTENT'
  },
  {
    id: 3,
    commonName: 'cactu inviernus',
    scientificName: 'cactu de inviernus',
    firstLetterLastname: 'g',
    family: 'family-cactu',
    status: 'CONSERVATION'
  },
  {
    id: 4,
    commonName: 'cactu primavera',
    family: 'family-cactu',
    status: 'NON_EXISTENT'
  }
]

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
