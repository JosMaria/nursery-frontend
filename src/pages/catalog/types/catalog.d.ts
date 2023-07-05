export const enum PLANT_STATUS {
  AVAILABLE,
  IN_CONSERVATION,
  NON_EXISTENT
}

type PlantClassificationType =
  'ORNAMENTAL' |
  'FOREST' |
  'INDUSTRIAL' |
  'ALIMENTARY' |
  'MEDICINAL' |
  'EXOTIC' |
  'CACTUS' |
  'FRUITFUL' |
  'GRASS' |
  'SUCCULENT'

export interface ProductResponseDTO {
  id: number,
  commonName: string
  scientificName: string
  scientistSurnameInitial: string
  status: PLANT_STATUS
  family: string
  urlPicture: Array<string>
}

export interface PageDTO {
  content: Array<ProductResponseDTO>
  number: number
  totalElements: number
  totalPages: number
  size: number
  numberOfElements: number
  empty: boolean
  first: boolean
  last: boolean
}
