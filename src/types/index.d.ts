import { AxiosRequestConfig } from 'axios';

export interface AxiosInstanceConfig
	extends Omit<AxiosRequestConfig, 'baseURL'> {
	instanceURL: string
}

export * from './product';
export * from './news';