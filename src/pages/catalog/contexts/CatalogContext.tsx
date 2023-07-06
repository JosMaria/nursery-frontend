import { ReactElement, createContext, useCallback, useEffect, useReducer, useState } from 'react'
import { getPaginatedProducts } from '../services'
import { CatalogStateType, PlantClassificationType } from '../types'

const initialCatalogState: CatalogStateType = {
  selectedClassification: null,
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

const enum REDUCER_ACTION_TYPE {
  CHANGE_CLASSIFICATION,
  FIRST_PAGE,
  PREV_PAGE,
  NEXT_PAGE
}

type ReducerActionType = {
  type: REDUCER_ACTION_TYPE,
  payload?: CatalogStateType
}

const reducer = (state: CatalogStateType, { type, payload }: ReducerActionType): CatalogStateType => {
  switch (type) {
    case REDUCER_ACTION_TYPE.CHANGE_CLASSIFICATION: {
      if (!payload)
        throw new Error('payload missing in \'CHANGE_CLASSIFICATION\' action')

      return { ...state, ...payload }
    }

    case REDUCER_ACTION_TYPE.FIRST_PAGE: {
      if (!payload)
        throw new Error('payload missing in \'FIRST_PAGE\' action')

      const { selectedClassification } = state
      const { page } = payload

      return {
        ...state,
        selectedClassification,
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
      throw new Error(`Catalog Context, unidentified reducer action type: '${type}'`)
  }
}

const useCatalogContext = (initCatalogState: CatalogStateType) => {
  const [state, dispatch] = useReducer(reducer, initCatalogState)

  const changeClassification = useCallback((selectedClassification: PlantClassificationType | null) => {
    getPaginatedProducts(selectedClassification)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.CHANGE_CLASSIFICATION,
        payload: {
          selectedClassification,
          page: pageDTO
        }
      }))

  }, [])

  const firstPage = useCallback(() => {
    const { selectedClassification } = state

    getPaginatedProducts(selectedClassification, 0)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.FIRST_PAGE,
        payload: {
          selectedClassification,
          page: pageDTO
        }
      }))

  }, [state.selectedClassification])

  const prevPage = useCallback((prevNumberPage: number) => {
    const { selectedClassification } = state

    getPaginatedProducts(selectedClassification, prevNumberPage - 1)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.PREV_PAGE,
        payload: {
          selectedClassification,
          page: pageDTO
        }
      }))

  }, [state.selectedClassification])

  const nextPage = useCallback((nextNumberPage: number) => {
    const { selectedClassification } = state

    getPaginatedProducts(selectedClassification, nextNumberPage + 1)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.NEXT_PAGE,
        payload: {
          selectedClassification,
          page: pageDTO
        }
      }))

  }, [state.selectedClassification])

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
        selectedClassification: null,
        page: pageDTO
      }))
  }, [])

  return (
    <CatalogContext.Provider value={useCatalogContext(catalog)}>
      {children}
    </CatalogContext.Provider>
  )
}
