import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/slice';
import { viewReducer } from './display/slice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    view: viewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
