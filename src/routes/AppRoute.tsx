import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
        <Route path='/list' element={<h1>List Page</h1>} />
        <Route path='/news' element={<h1>News Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
