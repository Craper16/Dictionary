import { combineReducers, configureStore } from '@reduxjs/toolkit';
import wordSlice from './word/wordSlice';

const rootReducer = combineReducers({
  word: wordSlice,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
