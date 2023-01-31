import axios from 'axios';

export const fetchWord = async (word: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_KEY}${word}`);

    if (response.status !== 200) {
      console.log(response);
      return response;
    }

    console.log(response);

    return response;
  } catch (error) {
    return (error as Error).message || 'An Error has occured';
  }
};
