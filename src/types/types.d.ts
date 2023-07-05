type StatusType =
  'AVAILABLE' |
  'IN_CONSERVATION' |
  'NON_EXISTENT'

interface ItemResponseDTO {
  id: number
  commonName: string
  scientificName: string
  scientistSurnameInitial: string
  family: string
  status: StatusType
}

export interface PageDTO {
  number: number
  totalElements: number
  totalPages: number
  size: number
  numberOfElements: number
  empty: boolean
  first: boolean
  last: boolean
}
