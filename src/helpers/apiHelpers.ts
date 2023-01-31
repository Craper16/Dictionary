import axios from 'axios';

export const fetchWord = async (word: string) => {
  try {
    const response = axios.get(`${import.meta.env.VITE_API_KEY}${word}`);

    console.log(response);

    return response;
  } catch (error) {
    return (error as Error).message || 'An Error has occured';
  }
};
