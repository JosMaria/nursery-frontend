import axios from 'axios'

export const getUrls = async (count = 5): Promise<Array<string>> => {
  const response: Array<string> = [];
  
  for (let i = 0; i < count; i++) {
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');    
      response.push(data.message);
  }
  return response;
}