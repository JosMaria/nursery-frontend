import { ClassificationNavbar } from './ClassificationNavbar'
import { PaginationSection } from './PaginationSection'
import { ProductList } from './ProductList'

export const CatalogContent = () => {
  return (
    <main>
      <ClassificationNavbar />
      <ProductList />
      <PaginationSection />
    </main>
  )
}
