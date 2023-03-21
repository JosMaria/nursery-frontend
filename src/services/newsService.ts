import axios from 'axios';
import { NewsResponseDTO} from '../types';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

export const fetchAllNews = async (): Promise<Array<NewsResponseDTO>> => {
    const { data } = await instance.get(`/api/v1/news`);
    return data;
}