import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePageContent } from '../pages/content/HomePageContent'
import { Page } from '../pages/HomePage';

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<HomePageContent />} />
          <Route path='list' element={<h1>LISTADO</h1>} />
          <Route path='news' element={<h1>NOVEDADES</h1>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}
