import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form } from '../pages/content/Form';
import { ListPage, NewsPage, CatalogPage, SingleNews, SingleProduct } from '../pages';
import { Page } from '../pages/HomePage';

export const AppRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />}>
        <Route index element={<CatalogPage />} />
        <Route path='products/:productId' element={<SingleProduct />} />
        <Route path='form' element={<Form />} />
        <Route path='list' element={<ListPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='news/:newsId' element={<SingleNews />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
