import { useCatalogContext } from '../contexts'
import { ClassificationNavbar } from './ClassificationNavbar'
import { PaginationSection } from './PaginationSection'
import { ProductList } from './ProductList'

export const CatalogContent = () => {
  const catalog = useCatalogContext()
  
  return (
    <section className=''>
      <ClassificationNavbar />
      <ProductList />
      <PaginationSection />
    </section>
  )
}
