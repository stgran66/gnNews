import { RootState } from '../store';

export const selectNews = (state: RootState) => state.news.items?.articles;
export const selectPage = (state: RootState) => state.news.items.page;
