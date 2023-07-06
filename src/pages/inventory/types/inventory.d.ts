import { PageDTO, ItemResponseDTO } from '../../../types';

export interface PageInventory extends PageDTO {
  content: Array<ItemResponseDTO>
}

export type InventoryStateType = {
  selectedStatus: StatusType | null
  page: PageInventory
}
