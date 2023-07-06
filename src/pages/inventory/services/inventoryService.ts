import axios from 'axios'
import { PageInventory } from '../types';
import { StatusType } from '../../../types';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/products/identifications'
})

/**
 * Retrieves paginated items based on the specified page number and status.
 *
 * @param {StatusType} status - The sttaus of the items to retrieve.
 * @param {number} numberPage - The page number to retrieve products from. Defaults to 0 if not provided.
 * @returns {Promise<PageInventory>} A Promise that resolves to the retrieved page of items.
 */
export const getPaginatedItems = async (status: StatusType | null, numberPage: number = 0): Promise<PageInventory> => {
  const path = status ? `/status/${status}` : '' 
  const { data } = await instance.get<PageInventory>(path, {
    params: {
      page: numberPage
    }
  });

  return data;
};
