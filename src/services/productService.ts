import { ProductResponseDTO } from '../types/dto'
import { createInstance } from "./http";

/**
 * Axios instance that will allow requests to be made to the API related to the News.
 */
const productService = createInstance({ instanceURL: '/products' });

/**
 * Function that allows you to fetch all products.
 * @param numberPage contains the number of the page.
 * @returns { Promise<Array<import('../types').ProductResponseDTO>> } all products.
 */
export const fetchAllProducts = async (numberPage = 0): Promise<Array<ProductResponseDTO>> => {
  const { data } = await productService.get('/', {
    params: {
      page: numberPage
    }
  });
  return data;
}

/**
 * Function that allows you to fetch product by id.
 * @param productId contains the product's id.
 * @returns { Promise<import('../types').ProductResponseDTO> } product.
 */
export const fetchByIdProduct = async (productId: number): Promise<ProductResponseDTO> => {
  const { data } = await productService.get(`/${productId}`);
  return data;
}

// export const fetchAllProductsByClassification = async (classification: string) => {
//   const { data } = await instance.get(`/api/v1/plants/types/${classification}`);
//   return data;
// }

// export const fetchAllIdentification = async (): Promise<Array<IdentificationResponseDTO>> => {
//   const { data } = await instance.get(`/api/v1/plants/identifications`);
//   return data;
// }

// export const getUrls = async (count = 5): Promise<Array<string>> => {
//   const response: Array<string> = [];
  
//   for (let i = 0; i < count; i++) {
//       const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');    
//       response.push(data.message);
//   }
//   return response;
// }

// export const createPlant = async (createPlantDTO: CreatePlantDTO) => {
//   const { data } = await instance.post(`/api/v1/plants`, createPlantDTO)
//   return data;
// }