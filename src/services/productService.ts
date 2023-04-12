import axios from "axios"
import { IdentificationResponseDTO, SingleProductResponseDTO } from "../types";

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

export const fetchAllProducts = async (numberPage = 0) => {
  const { data } = await instance.get('/api/v1/plants', {
    params: {
      page: numberPage
    }
  });
  return data;
}

export const fetchProductById = async (id: string): Promise<SingleProductResponseDTO> => {
  const { data } = await instance.get(`/api/v1/plants/${id}`);
  return data;
};

export const fetchAllProductsByClassification = async (classification: string) => {
  const { data } = await instance.get(`/api/v1/plants/types/${classification}`);
  return data;
}

export const fetchAllIdentification = async (): Promise<Array<IdentificationResponseDTO>> => {
  const { data } = await instance.get(`/api/v1/plants/identifications`);
  return data;
}

export const getUrls = async (count = 5): Promise<Array<string>> => {
  const response: Array<string> = [];
  
  for (let i = 0; i < count; i++) {
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');    
      response.push(data.message);
  }
  return response;
}
