import { createInstance } from './http';
import { CreateNewsDTO, NewsResponseDTO } from '../types';

/**
 * Axios instance that will allow requests to be made to the API related to the News.
 */
const newsService = createInstance({ instanceURL: '/news' })

/**
 * Function that allows you to create a news.
 * @param { import('../types').CreateNewsDTO } createNewsDTO news to be created.
 * @returns { Promise<import('../types').NewsResponseDTO> } news created by API.
 */
export const createNews = async (createNewsDTO: CreateNewsDTO): Promise<NewsResponseDTO> => {
    const { data } = await newsService.post('/', createNewsDTO);
    return data;
}

/**
 * Function that allows you to fetch all news.
 * @returns { Promise<Array<import('../types').NewsResponseDTO>> } all news.
 */
export const fetchAllNews = async (): Promise<Array<NewsResponseDTO>> => {
    const { data } = await newsService.get('');
    return data;
}

/**
 * Function that allows you to fetch a news.
 * @param newsId contains the news's id.
 * @returns { Promise<import('../types').NewsResponseDTO> } news by ID.
 */
export const fetchByIdNews = async (newsId: number): Promise<NewsResponseDTO> => {
    const { data } = await newsService.get(`/${newsId}`);
    return data;
}

/**
 * Function that allows you to delete a news
 * @param newsId contains the news's id.
 * @returns { Promise<number> } code status.
 */
export const deleteByIdNews = async (newsId: number): Promise<number> => {
    const { status } = await newsService.delete(`/${newsId}`);
    return status;
}
