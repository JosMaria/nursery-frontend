import { useContext } from 'react'
import { InventoryContext } from '../contexts'

export const useInventoryState = () => {
  const { state: { selectedStatus, page } } = useContext(InventoryContext)
  return { selectedStatus, page }
}

export const useChangeStatus = () => {
  const { changeStatus } = useContext(InventoryContext)
  return { changeStatus }
}
