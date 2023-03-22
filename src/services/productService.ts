import axios from "axios"
import { IdentificationResponseDTO } from "../types";

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

export const fetchAllProducts = async (numberPage = 0) => {
  const { data } = await instance.get('/api/v1/nursery/products', { 
    params: { 
      page: numberPage 
    }
  });
  return data;  
}

export const fetchAllProductsByClassification = async (numberPage = 0, classification: string) => {
  const { data } = await instance.get(`/api/nursery/products/classifications/${classification}`, {
    params: {
      page: numberPage
    }
  });
  return data;
}

export const fetchAllIdentification = async () => {
  const { data } = await instance.get(`/api/nursery/identifications`);
  return data;
}