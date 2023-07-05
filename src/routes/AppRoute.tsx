import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewsPage, SingleNews, SingleProduct, CreatePlantForm, CatalogPage } from '../pages';
import { Page } from '../pages/HomePage';
import { CreateNewsForm } from '../pages/create-news-form';
import { InventoryPage } from '../pages/inventory';

export const AppRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />}>
        <Route index element={<CatalogPage />} />
        <Route path='list' element={<InventoryPage />} />
        <Route path='products/:productId' element={<SingleProduct />} />        
        {/*<Route path='list' element={<ListPage />} />*/}
        <Route path='news' element={<NewsPage />} />
        <Route path='news/:newsId' element={<SingleNews />} />
        <Route path='form-plant-create' element={<CreatePlantForm />} />
        <Route path='form-news-create' element={<CreateNewsForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
