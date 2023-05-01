import { AxiosRequestConfig } from 'axios';

export interface AxiosInstanceConfig
	extends Omit<AxiosRequestConfig, 'baseURL'> {
	instanceURL: string
}

export * from './dto'
export * from './OptionClassification'