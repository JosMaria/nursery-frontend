import { PLANT_CLASSIFICATION, Page } from '../types';
import { createInstance } from '../../../services/http';

const productService = createInstance({ instanceURL: '/products' });

/**
 * Retrieve paginated products based on the specified page number and classification.
 * 
 * @param {number} numberPage - The page number to retrieve products from. Defaults to 0 if not provided.
 * @param {PLANT_CLASSIFICATION} [classification] - The classification of the products to retrieve. Optional.
 * @returns {Promise<Page>} A Promise that resolves to the retrieved page of products.
 */
export const getPaginatedProducts = async (numberPage = 0, classification?: PLANT_CLASSIFICATION): Promise<Page> => {
  const path = classification ? `/classifications/${classification}` : ''
  const { data } = await productService.get(path, {
    params: {
      page: numberPage
    }
  })

  return data
}
