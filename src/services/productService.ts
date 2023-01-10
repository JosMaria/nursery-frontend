import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

export const fetchAllProducts = async () => {
  const { data } = await instance.get('/api/nursery/products');
  return data;  
}