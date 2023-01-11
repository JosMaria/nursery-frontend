import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

export const fetchAllProducts = async (numberPage = 0) => {
  const { data } = await instance.get('/api/nursery/products', { 
    params: { 
      page: numberPage 
    }
  });
  return data;  
}