import { Classification } from '../types'
import { createInstance } from './http';

/**
 * Axios instance that will allow requests to be made to the API related to the News.
 */
const classificationService = createInstance({ instanceURL: '/classifications' });

/**
 * Function that allows you to fetch all classifications.
 * @returns { Promise<Array<import('../types').Classification>> } all classifications..
 */
export const fetchAllClassifications = async (): Promise<Array<Classification>> => {
  const { data } = await classificationService.get('/');
  return data;
}
