import { createInstance } from './http';

/**
 * Axios instance that will allow requests to be made to the API related to the News.
 */
const familyService = createInstance({ instanceURL: '/families' });

/**
 * Function that allows you to fetch all families.
 * @returns { Promise<Array<string>> } all families.
 */
export const fetchAllFamilies = async (): Promise<Array<string>> => {
  const token = '?';
  const { data } = await familyService.get('', { 
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return data; 
}
