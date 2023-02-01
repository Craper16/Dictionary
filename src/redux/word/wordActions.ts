import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWord } from '../../helpers/apiHelpers';
import { ErrorResponse, word } from '../../interfaces/word/wordInterfaces';

export const FetchWord = createAsyncThunk(
  'fetch/word',
  async (arg: string, thunkAPI) => {
    try {
      const response = await fetchWord(arg);
      console.log(response);

      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(
          (response as ErrorResponse)?.response?.data?.message ||
            'An Error has occured'
        );
      }
      const data: word[] = response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as Error).message || 'An Error has occured'
      );
    }
  }
);
