export type Classification = 'ALL' | 'ORNAMENTAL' | 'FOREST' | 'INDUSTRIAL' | 'ALIMENTARY' | 'MEDICINAL' |
  'EXOTIC' | 'CACTUS' | 'FRUITFUL' | 'GRASS' | 'SUCCULENT'

export type Status = 'AVAILABLE' | 'IN_CONSERVATION' | 'NON_EXISTENT'

export interface ItemToList {
  id: number
  commonName: string
  scientificName: string
  scientistSurnameInitial: string
  status: Status
  family: string
}

export interface ProductResponseDTO extends ItemToList {
  firstUrlPicture: string
}

export interface SingleProductResponseDTO extends ItemToList {
  urlPictures: Array<string>
  classifications: Array<string>
}

interface Page {
  last: boolean
  totalElements: number
  totalPages: number
  size: number
  number: number
  first: number
  numberOfElements: number
  empty: number
}

export interface PageProductResponseDTO extends Page {
  content: Array<ProductResponseDTO>
}

export interface PageItemToList extends Page {
  content: Array<ItemToList>
}
