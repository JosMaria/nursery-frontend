import axios from 'axios';
import { API_URL } from '../../config/environment';
import { AxiosInstanceConfig } from '../../types';

/**
 * Function to create an instance of axios to make the API request.
 * @param { import('../../types').AxiosInstanceConfig } config contains the
 * url of the instance to create, as well as additional settings for that instance.
 * @returns instance of axios.
 */
export function createInstance({ instanceURL, ...rest }: AxiosInstanceConfig) {
	const baseURL = `${API_URL}${instanceURL}`;
	const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb25zdWVsbyIsImlhdCI6MTY4NTEzMzY3OCwiZXhwIjoxNjg1MjIwMDc4fQ.g3zmaS46LBEw6bMkIHMwLa7hv9hIlzdZtsois7drNMk';

	return axios.create({
		baseURL,
		...rest,
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
}
