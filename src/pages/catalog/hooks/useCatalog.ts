import { useContext } from 'react'
import { CatalogContext } from '../contexts'

export const useChangePage = () => {
  const { firstPage, prevPage, nextPage } = useContext(CatalogContext)
  return { firstPage, prevPage, nextPage }
}

export const useChangeClassification = () => {
  const { changeClassification } = useContext(CatalogContext)
  return { changeClassification }
}

export const useCatalogState = () => {
  const { state: { selectedClassification, page } } = useContext(CatalogContext)
  return { selectedClassification, page }
}
