import axios from 'axios'
import { PageInventory } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/products/identifications'
})

/**
 * Retrieves paginated items based on the specified page number.
 *
 * @param {number} numberPage - The page number to retrieve products from. Defaults to 0 if not provided.
 * @returns {Promise<PageInventory>} A Promise that resolves to the retrieved page of items.
 */
export const getPaginatedItems = async (numberPage: number = 0): Promise<PageInventory> => {
  const { data } = await instance.get<PageInventory>('', {
    params: {
      page: numberPage
    }
  });

  return data;
};
