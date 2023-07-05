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
  products: Array<ProductResponseDTO>
}
