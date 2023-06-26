import { createContext, useContext, useState } from 'react';
import { ClassificationSelectedType, Page } from '../types';

type CatalogStateType = {
  classificationSelected: ClassificationSelectedType,
  page: Page
}

export const CatalogContext = createContext<{ counter: number, setCounter: React.Dispatch<React.SetStateAction<number>> }>({
  counter: 0,
  setCounter: () => {}
})

interface CatalogProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const CatalogProvider = ({ children }: CatalogProviderProps): JSX.Element => {
  const [counter, setCounter] = useState(0)

  return (
    <CatalogContext.Provider value={{ counter, setCounter }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalogContext = () => {
  const context = useContext(CatalogContext)
  
  if (context === undefined) {
    throw new Error('CatalogContext must be used within a CatalogProvider')
  }

  return context;
}
