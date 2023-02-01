import { createSlice } from '@reduxjs/toolkit';
import { word } from '../../interfaces/word/wordInterfaces';
import { FetchWord } from './wordActions';

interface wordSlice {
  word: word[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: any;
}

const initialState: wordSlice = {
  word: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: null,
};

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(FetchWord.pending, (state) => {
      state.isSuccess = false;
      state.isLoading = true;
      state.isError = false;
      state.message = null;
    });
    builder.addCase(FetchWord.fulfilled, (state, action) => {
      state.word = action.payload;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = null;
    });
    builder.addCase(FetchWord.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = action.payload || action.error.message!;
    });
  },
});

export default wordSlice.reducer;
