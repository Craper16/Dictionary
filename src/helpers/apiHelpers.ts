import axios from 'axios';
import { word } from '../interfaces/word/wordInterfaces';

export const fetchWord = async (word: string) => {
  return await axios
    .get(`${import.meta.env.VITE_API_KEY}/${word}`)
    .then((response) => response)
    .catch((error) => error);
};
