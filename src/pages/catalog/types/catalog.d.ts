import { PageDTO, ItemResponseDTO } from '../../../types'

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


export interface ProductResponseDTO extends ItemResponseDTO {  
  urlPicture: Array<string>
}

export interface PageCatalog extends PageDTO {
  content: Array<ProductResponseDTO>
}

export type CatalogStateType = {
  selectedClassification: PlantClassificationType | null
  page: PageCatalog
}
