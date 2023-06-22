export type PlantStatusType = 'AVAILABLE' | 'IN_CONSERVATION' | 'NON_EXISTENT'

const enum PLANT_STATUS {
  AVAILABLE,
  IN_CONSERVATION,
  NON_EXISTENT
} 

export const enum PLANT_CLASSIFICATION {
  ORNAMENTAL,
  FOREST,
  INDUSTRIAL,
  ALIMENTARY,
  MEDICINAL,
  EXOTIC,
  CACTUS,
  FRUITFUL,
  GRASS,
  SUCCULENT
}

export interface ProductResponseDTO {
  id: number,
  commonName: string
  scientificName: string
  scientistSurnameInitial: string
  status: PLANT_STATUS
  family: string
  urlPicture: Array<string>
}

export interface Page {
  content: Array<ProductResponse>
  number: number
  totalElements: number
  totalPages: number
  size: number
  numberOfElements: number
  empty: boolean
  first: boolean
  last: boolean
}
