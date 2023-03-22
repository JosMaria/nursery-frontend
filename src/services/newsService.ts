import axios from 'axios';
import { Classification, NewsResponseDTO} from '../types';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

export const fetchAllNews = async (): Promise<Array<NewsResponseDTO>> => {
    const { data } = await instance.get(`/api/v1/news`);
    return data;
}

export const fetchNewsById = async (newsId: string): Promise<NewsResponseDTO> => {
    const { data } = await instance.get(`/api/v1/news/${newsId}`);
    return data;
}

export const fetchAllClassificationsByUtility = async () : Promise<Array<Classification>> => {
    const { data } = await instance.get('/api/v1/classifications');
    return data;
}