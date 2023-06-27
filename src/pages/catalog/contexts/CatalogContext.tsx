import { createContext, useContext, useState } from 'react'
import { ClassificationSelectedType, Page } from '../types'
import { getPaginatedProducts } from '../services'

interface CatalogState {
  classification: ClassificationSelectedType
  page: Page
}

const initialCatalog: CatalogState = {
  classification: 'ALL',
  page: {
    content: [],
    number: 0,
    totalElements: 0,
    totalPages: 0,
    size: 0,
    numberOfElements: 0,
    empty: true,
    first: true,
    last: true
  }
}

type CatalogContextType = {
  catalog: CatalogState
  setCatalog: React.Dispatch<React.SetStateAction<CatalogState>>
}

const initialCatalogContext: CatalogContextType = {
  catalog: initialCatalog,
  setCatalog: () => { }
}

const CatalogContext = createContext<CatalogContextType>(initialCatalogContext)

interface CatalogProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const CatalogProvider = ({ children }: CatalogProviderProps): JSX.Element => {
  const [catalog, setCatalog] = useState(initialCatalog)

  return (
    <CatalogContext.Provider value={{ catalog, setCatalog }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalogContext = () => {
  const context = useContext(CatalogContext)

  if (context === undefined) {
    throw new Error('CatalogContext must be used within a CatalogProvider')
  }

  const changeClassification = (classification: ClassificationSelectedType) => {
    getPaginatedProducts(classification)
      .then(page => context.setCatalog({ classification, page }))
      .catch(e => console.log(e))
  }

  const firstPage = () => {
    const { catalog: { classification }, setCatalog } = context
    getPaginatedProducts(classification, 0)
      .then(page => setCatalog(prev => ({ ...prev, page })))
  }

  const prevPage = () => {
    const { catalog: { classification, page }, setCatalog } = context
    getPaginatedProducts(classification, page.number + 1)
      .then(page => setCatalog(prev => ({ ...prev, page })))
  }

  const nextPage = () => {
    const { catalog: { classification, page }, setCatalog } = context
    getPaginatedProducts(classification, page.number + 1)
      .then(page => setCatalog(prev => ({ ...prev, page })))
  }

  return {
    catalog: context.catalog,
    changeClassification,
    firstPage,
    prevPage,
    nextPage
  };
}
