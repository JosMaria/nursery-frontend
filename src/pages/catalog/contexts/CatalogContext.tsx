import { ReactElement, createContext, useCallback, useEffect, useReducer, useState } from 'react'
import { getPaginatedProducts } from '../services'
import { PageCatalog, PlantClassificationType } from '../types'

type CatalogStateType = {
  classification: PlantClassificationType | null
  page: PageCatalog
}

const initialCatalogState: CatalogStateType = {
  classification: null,
  page: {
    products: [],
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

const enum REDUCER_ACTION_TYPE {
  CHANGE_CLASSIFICATION,
  FIRST_PAGE,
  PREV_PAGE,
  NEXT_PAGE
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: CatalogStateType
}

const reducer = (state: CatalogStateType, { type, payload }: ReducerAction): CatalogStateType => {
  switch (type) {
    case REDUCER_ACTION_TYPE.CHANGE_CLASSIFICATION: {
      if (!payload)
        throw new Error('payload missing in \'CHANGE_CLASSIFICATION\' action')

      return { ...state, ...payload }
    }

    case REDUCER_ACTION_TYPE.FIRST_PAGE: {
      if (!payload)
        throw new Error('payload missing in \'FIRST_PAGE\' action')

      const { classification } = state
      const { page } = payload

      return {
        ...state,
        classification,
        page
      }
    }

    case REDUCER_ACTION_TYPE.PREV_PAGE: {
      if (!payload)
        throw new Error('payload missing in \'PREV_PAGE\' action')

      return { ...state, ...payload }
    }

    case REDUCER_ACTION_TYPE.NEXT_PAGE: {
      if (!payload)
        throw new Error('payload missing in \'NEXT_PAGE\' action');

      return { ...state, ...payload }
    }

    default:
      throw new Error(`unidentified reducer action type: '${type}'`)
  }
}

const useCatalogContext = (initCatalogState: CatalogStateType) => {
  const [state, dispatch] = useReducer(reducer, initCatalogState)

  const changeClassification = useCallback((classification: PlantClassificationType | null) => {
    getPaginatedProducts(classification)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.CHANGE_CLASSIFICATION,
        payload: {
          classification,
          page: pageDTO
        }
      }))

  }, [])

  const firstPage = useCallback(() => {
    const { classification } = state

    getPaginatedProducts(classification, 0)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.FIRST_PAGE,
        payload: {
          classification,
          page: pageDTO
        }
      }))

  }, [state.classification])

  const prevPage = useCallback((prevNumberPage: number) => {
    const { classification } = state

    getPaginatedProducts(classification, prevNumberPage - 1)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.PREV_PAGE,
        payload: {
          classification,
          page: pageDTO
        }
      }))

  }, [state.classification])

  const nextPage = useCallback((nextNumberPage: number) => {
    const { classification } = state

    getPaginatedProducts(classification, nextNumberPage + 1)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.NEXT_PAGE,
        payload: {
          classification,
          page: pageDTO
        }
      }))

  }, [state.classification])

  return {
    state,
    changeClassification,
    firstPage,
    prevPage,
    nextPage
  }
}

type UseCatalogContextType = ReturnType<typeof useCatalogContext>

const initCatalogContextState: UseCatalogContextType = {
  changeClassification: () => { },
  firstPage: () => { },
  prevPage: () => { },
  nextPage: () => { },
  state: initialCatalogState
}

export const CatalogContext = createContext<UseCatalogContextType>(initCatalogContextState)

type ChildrenType = {
  children?: ReactElement | Array<ReactElement>
}

export const CatalogProvider = ({ children }: ChildrenType): ReactElement => {
  const [catalog, setCatalog] = useState<CatalogStateType>(initialCatalogState)

  useEffect(() => {
    getPaginatedProducts(null, 0)
      .then(pageDTO => setCatalog({
        classification: null,
        page: pageDTO
      }))
  }, [])

  return (
    <CatalogContext.Provider value={useCatalogContext(catalog)}>
      {children}
    </CatalogContext.Provider>
  )
}
