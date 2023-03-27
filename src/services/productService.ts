import axios from "axios"
import { IdentificationResponseDTO, SingleProductResponseDTO } from "../types";

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

export const fetchAllProducts = async (numberPage = 0) => {
  const { data } = await instance.get('/api/v1/plants', {
    params: {
      page: numberPage,
      size: 10
    }
  });
  return data;
}

export const fetchProductById = async (id: string): Promise<SingleProductResponseDTO> => {
  const { data } = await instance.get(`/api/v1/plants/${id}`);
  return data;
};

export const fetchAllProductsByClassification = async (numberPage = 0, classification: string) => {
  const { data } = await instance.get(`/api/nursery/products/classifications/${classification}`, {
    params: {
      page: numberPage
    }
  });
  return data;
}

export const fetchAllIdentification = async (): Promise<Array<IdentificationResponseDTO>> => {
  const { data } = await instance.get(`/api/v1/plants/identifications`);
  return data;
}
