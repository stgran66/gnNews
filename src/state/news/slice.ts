import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMoreNews, getNews } from './operations';
import { newsState } from './interfaces';

const initialState: newsState = {
  items: {
    totalResults: 0,
    articles: [],
    page: 1,
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
        state.items.articles = action.payload.articles;
        state.items.totalResults = action.payload.totalResults;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMoreNews.fulfilled, (state, action) => {
        state.items.articles = [
          ...state.items.articles,
          ...action.payload.articles,
        ];
        state.items.page += 1;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.items = {
          totalResults: 0,
          articles: [],
          page: 1,
        };
        state.isLoading = false;
        state.error =
          action.payload !== undefined ? action.payload : 'unknown error';
      })
      .addCase(getNews.pending, (state) => {
        state.items = {
          totalResults: 0,
          articles: [],
          page: 1,
        };
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMoreNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(getNews.rejected, getMoreNews.rejected),
        (state, action) => {
          state.items = {
            page: 1,
            totalResults: 0,
            articles: [],
          };
          state.isLoading = false;
          state.error =
            action.payload !== undefined ? action.payload : 'unknown error';
        }
      );
  },
});

export const newsReducer = newsSlice.reducer;
