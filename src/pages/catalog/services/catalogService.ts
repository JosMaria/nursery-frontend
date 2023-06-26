import axios from 'axios'
import { ClassificationSelectedType, Page } from '../types'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/products',
  //headers: { 'X-Custom-Header': 'foobar' }
})

/**
 * Retrieve paginated products based on the specified page number and classification.
 * 
 * @param {number} numberPage - The page number to retrieve products from. Defaults to 0 if not provided.
 * @param {ClassificationSelectedType} classification - The classification of the products to retrieve.
 * @returns {Promise<Page>} A Promise that resolves to the retrieved page of products.
 */
export const getPaginatedProducts = async (numberPage: number = 0, classification: ClassificationSelectedType): Promise<Page> => {
  const path = classification !== 'ALL' ? `/classifications/${classification}` : ''
  const { data } = await instance.get(path, {
    params: {
      page: numberPage
    }
  })

  return data
}
