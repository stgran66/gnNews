import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './operations';
import { newsState } from './interfaces';
const initialState: newsState = {
  items: {
    status: null,
    totalResults: 0,
    articles: [],
  },
  isLoading: false,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNews.pending, (state) => {
        state.items = {
          status: null,
          totalResults: 0,
          articles: [],
        };
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.items = {
          status: null,
          totalResults: 0,
          articles: [],
        };
        state.isLoading = false;
        state.error =
          action.payload !== undefined ? action.payload : 'unknown error';
      });
  },
});

export const newsReducer = newsSlice.reducer;
