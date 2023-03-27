import { RootState } from '../store';

export const selectNews = (state: RootState) => state.news.items?.articles;
export const selectPage = (state: RootState) => state.news.items.page;
export const selectIsLoading = (state: RootState) => state.news.isLoading;
export const selectTotal = (state: RootState) => state.news.items.totalResults;
export const selectError = (state: RootState) => state.news.error;
