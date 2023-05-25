import { ProductResponseDTO, Classification, ItemToList, Status, SingleProductResponseDTO, PageProductResponseDTO, PageItemToList } from '../types'
import { createInstance } from './http';

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
  const { data } = await productService.get('', {
    params: {
      page: numberPage
    }
  });
  return data;
}

/**
 * Function that allows you to fetch product by id.
 * @param productId contains the product's id.
 * @returns { Promise<import('../types').SingleProductResponseDTO> } product.
 */
export const fetchByIdProduct = async (productId: number): Promise<SingleProductResponseDTO> => {
  const { data } = await productService.get(`/${productId}`);
  return data;
}

/**
 * Function that allows you to fetch all products given its classification.
 * @param { import('../types').Classification} classification contains the type of classification.
 * @param numberPage contains the number of the page.
 * @returns { Promise<Array<import('../types').ProductResponseDTO>> } all products by classification.
 */
export const fetchByClassificationProducts = async (classification: Classification = 'ALL', numberPage = 0): Promise<PageProductResponseDTO> => {
  const path = (classification === 'ALL') ? '' : `/classifications/${classification}`;
  const { data } = await productService.get(path, {
    params: {
      page: numberPage
    }
  });

  return data;
}

/**
 * Function that allows you to fetch all item to list.
 * @param numberPage contains the number of the page.
 * @returns { Promise<Array<import('../types').PageItemToList>> } all item to list.
 */
export const fetchAllItemsToList = async (numberPage = 0): Promise<PageItemToList> => {
  const { data } = await productService.get(`/identifications`, {
    params: {
      page: numberPage
    }
  })
  return data;
}

/**
 * Function that allows you to fetch all item to list by status.
 * @param { import('../types').Status} status contains the type of status.
 * @param numberPage contains the number of the page.
 * @returns { Promise<Array<import('../types').ItemToList>> } all item to lis by statust.
 */
export const fetchAllItemsToListByStatus = async (status: Status, numberPage = 0): Promise<Array<ItemToList>> => {
  const { data } = await productService.get(`/identifications/status/${status}`, {
    params: {
      page: numberPage
    }
  })
  return data;
} 
