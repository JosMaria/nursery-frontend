import { CreatePlantDTO, PlantResponseDTO } from "../types/dto";
import { createInstance } from "./http";

/**
 * Axios instance that will allow requests to be made to the API related to the News.
 */
const plantService = createInstance({ instanceURL: '/plants' });

/**
 * Function that allows you to create a plant.
 * @param { import('../types/dto').CreatePlantDTO } createPlantDTO news to be created.
 * @returns { Promise<import('../types/dto').PlantResponseDTO> } news created by API.
 */
export const createPlant = async (createPlantDTO: CreatePlantDTO): Promise<PlantResponseDTO> => {
  const { data } = await plantService.post('/', createPlantDTO);
  return data;
}

/**
 * Function that allows you to delete a plant
 * @param plantId contains the plant's id.
 * @returns { Promise<number> } code status.
 */
export const deletePlant = async (plantId: number): Promise<number> => {
  const { status } = await plantService.delete(`/${plantId}`);
  return status;
}
