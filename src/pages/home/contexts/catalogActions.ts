import { getPaginatedProducts } from '../services'
import { ClassificationSelectedType, Page } from '../types'

type CatalogStateType = {
  classificationSelected: ClassificationSelectedType,
  page: Page
}

export const catalogInitialState: CatalogStateType = {
  classificationSelected: 'ALL',
  page: {
    content: [],
    number: 0,
    totalElements: 0,
    totalPages: 0,
    size: 0,
    numberOfElements: 0,
    empty: true,
    first: false,
    last: false
  }
}

const enum CATALOG_ACTION {
  FIRST_PAGE,
  PREV_PAGE,
  NEXT_PAGE
}

type ReducerAction = {
  type: CATALOG_ACTION
}

export const catalogReducer = async (state: CatalogStateType, { type }: ReducerAction): Promise<CatalogStateType> => {
  switch (type) {
    case CATALOG_ACTION.FIRST_PAGE:
      return { ...state, page: await getPaginatedProducts(0, state.classificationSelected) }

    case CATALOG_ACTION.PREV_PAGE:
      return { ...state, page: await getPaginatedProducts(state.page.number, state.classificationSelected) }

    case CATALOG_ACTION.NEXT_PAGE:
      return { ...state, page: await getPaginatedProducts(state.page.number + 1, state.classificationSelected) }

    default:
      throw new Error(`Action Type: ${type} does not exist.`)
  }
}
