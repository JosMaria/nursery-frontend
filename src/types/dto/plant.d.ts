import { Status } from './product'

interface Plant {
  commonName: string
  scientificName: string
  scientistSurnameInitial: string
  family: string
  classifications: Array<string>
}

export interface CreatePlantDTO  extends Plant {
  status: Status
}

export interface PlantResponseDTO extends Plant {}
