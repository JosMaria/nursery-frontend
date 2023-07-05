import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListPage, NewsPage, SingleNews, SingleProduct, CreatePlantForm, CatalogPage } from '../pages';
import { Page } from '../pages/HomePage';
import { CreateNewsForm } from '../pages/create-news-form';

export const AppRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />}>
        <Route index element={<CatalogPage />} />
        <Route path='products/:productId' element={<SingleProduct />} />        
        <Route path='list' element={<ListPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='news/:newsId' element={<SingleNews />} />
        <Route path='form-plant-create' element={<CreatePlantForm />} />
        <Route path='form-news-create' element={<CreateNewsForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
