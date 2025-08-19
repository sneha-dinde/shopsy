
import axios from 'axios';

const API_BASE_URL = 'https://api.yourdomain.com';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

// You can add common headers or auth tokens here
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fetchData = async () => {
  try {
    const response = await instance.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    // Handle errors here or throw them to be handled where the function is called
    throw error;
  }
};