import axios from 'axios'
import { PageDTO, PlantClassificationType } from '../types'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/products',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb25zdWVsbyIsImlhdCI6MTY4ODQ4ODg4NCwiZXhwIjoxNjg4NTc1Mjg0fQ.0R_gIuh7rsSwWJZiYiENEaRkrFaYXza8bTLok2Ik4_k' 
  }
})

/**
 * Retrieve paginated products based on the specified page number and classification.
 * 
 * @param {ClassificationSelectedType} classification - The classification of the products to retrieve.
 * @param {number} numberPage - The page number to retrieve products from. Defaults to 0 if not provided.
 * @returns {Promise<PageDTO>} A Promise that resolves to the retrieved page of products.
 */
export const getPaginatedProducts = async (classification: PlantClassificationType | null, numberPage: number = 0): Promise<PageDTO> => {
  const path = classification  ? `/classifications/${classification}` : ''
  const { data } = await instance.get(path, {
    params: {
      page: numberPage
    }
  })

  return data
}
