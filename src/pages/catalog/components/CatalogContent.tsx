import { EmptyContent } from '../../../components'
import { useCatalogContext } from '../contexts'
import { ClassificationNavbar } from './ClassificationNavbar'
import { PaginationSection } from './PaginationSection'
import { ProductList } from './ProductList'

export const CatalogContent = () => {
  const { catalog: { page } } = useCatalogContext()

  return (
    <section>
      <ClassificationNavbar />
      {
        page.empty ? (
          <EmptyContent
            pathImage='src/assets/no-content-plants.png'
            alt='empty_content_plants'
            message='A&uacute;n no tenemos plantas que mostrar'
          />
        ) : (
          <>
            <ProductList />
            <PaginationSection />
          </>
        )
      }
    </section>
  )
}
