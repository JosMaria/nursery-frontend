import { CatalogContent } from './components'
import { CatalogProvider } from './contexts'

export const CatalogPage = () => (
  <CatalogProvider>
    <CatalogContent />
  </CatalogProvider>
)
