import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SingleProduct } from '../components/SingleProduct';
import { Form } from '../pages/content/Form';
import { ListPage, NewsPage, CatalogPage } from '../pages';
import { News } from '../pages/content/News';
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
        <Route path='news/:newsId' element={<News />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
