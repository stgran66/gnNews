import { configureStore } from '@reduxjs/toolkit';

import { newsReducer } from 'state/news/slice';
import { viewReducer } from 'state/display/slice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    view: viewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
