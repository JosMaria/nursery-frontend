export type Classification = 'ORNAMENTAL' | 'FOREST' | 'INDUSTRIAL' | 'ALIMENTARY' | 'MEDICINAL' | 
'EXOTIC' | 'CACTUS' | 'FRUITFUL' | 'GRASS' | 'SUCCULENT' 

export type Status = 'AVAILABLE' | 'IN_CONSERVATION' | 'NON_EXISTENT' 

export interface ItemToList {
  id: number
  commonName: string
  scientificName: string
  scientistSurnameInitial: string
  status: string
  family: string
}

export interface ProductResponseDTO extends ItemToList {
    firstUrlPicture: string
}
