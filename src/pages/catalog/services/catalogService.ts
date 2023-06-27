import axios from 'axios'
import { ClassificationSelectedType, Page } from '../types'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/products',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb25zdWVsbyIsImlhdCI6MTY4Nzg2OTQ4MywiZXhwIjoxNjg3OTU1ODgzfQ.u8830A2psWlyg_KFj0OXRR81rL9h_TJ_ejBdpnY5_gg' 
  }
})

/**
 * Retrieve paginated products based on the specified page number and classification.
 * 
 * @param {ClassificationSelectedType} classification - The classification of the products to retrieve.
 * @param {number} numberPage - The page number to retrieve products from. Defaults to 0 if not provided.
 * @returns {Promise<Page>} A Promise that resolves to the retrieved page of products.
 */
export const getPaginatedProducts = async (classification: ClassificationSelectedType, numberPage: number = 0): Promise<Page> => {
  const path = classification !== 'ALL' ? `/classifications/${classification}` : ''
  const { data } = await instance.get(path, {
    params: {
      page: numberPage
    }
  })

  return data
}
