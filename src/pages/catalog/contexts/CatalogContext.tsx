import { createContext, useContext, useState } from "react"

type CounterType = {
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const CatalogContext = createContext<CounterType>({
  counter: 0,
  setCounter: () => { }
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
