import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SingleProduct } from '../components/SingleProduct';
import { Form } from '../pages/content/Form';
import { HomePageContent } from '../pages/content/HomePageContent'
import { ListPage } from '../pages/content/ListPage';
import { News } from '../pages/content/News';
import { NewsPage } from '../pages/content/NewsPage';
import { Page } from '../pages/HomePage';

export const AppRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />}>
        <Route index element={<HomePageContent />} />
        <Route path='products/:productId' element={<SingleProduct />} />
        <Route path='form' element={<Form />} />
        <Route path='list' element={<ListPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='news/:newsId' element={<News />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
