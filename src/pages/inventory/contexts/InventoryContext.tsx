import { ReactElement, createContext, useCallback, useEffect, useReducer, useState } from 'react'
import { InventoryStateType } from '../types'
import { StatusType } from '../../../types'
import { getPaginatedItems } from '../services'

const initialInventoryState: InventoryStateType = {
  selectedStatus: null,
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
  CHANGE_STATUS
}

type ReducerActionType = {
  type: REDUCER_ACTION_TYPE
  payload?: InventoryStateType
}

const reducer = (state: InventoryStateType, { type, payload }: ReducerActionType): InventoryStateType => {
  switch (type) {
    case REDUCER_ACTION_TYPE.CHANGE_STATUS: {
      if (!payload)
        throw new Error('payload missing in \'CHANGE_STATUS\' action')

      return { ...state, ...payload }
    }

    default:
      throw new Error(`Inventory Context, unidentified reducer action type: '${type}'`)
  }
}

const useInventoryContext = (initInventoryState: InventoryStateType) => {
  const [state, dispatch] = useReducer(reducer, initInventoryState)

  const changeStatus = useCallback((status: StatusType | null) => {
    getPaginatedItems(status)
      .then(pageDTO => dispatch({
        type: REDUCER_ACTION_TYPE.CHANGE_STATUS,
        payload: {
          selectedStatus: status,
          page: pageDTO
        }
      }))
  }, [])

  return { state, changeStatus }
}

type UseInventoryContextType = ReturnType<typeof useInventoryContext>

const initInventoryContextState: UseInventoryContextType = {
  changeStatus: () => { },
  state: initialInventoryState
}
export const InventoryContext = createContext<UseInventoryContextType>(initInventoryContextState)

type ChildrenType = {
  children?: ReactElement | Array<ReactElement>
}

export const InventoryProvider = ({ children }: ChildrenType): ReactElement => {
  const [inventory, setInventory] = useState<InventoryStateType>(initialInventoryState)

  useEffect(() => {
    getPaginatedItems('AVAILABLE', 0)
      .then(pageDTO => setInventory({
        selectedStatus: null,
        page: pageDTO
      }))
  }, [])

  return (
    <InventoryContext.Provider value={useInventoryContext(inventory)}>
      {children}
    </InventoryContext.Provider>
  )
}
