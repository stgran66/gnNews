export type { RootState } from './store';
export type { AppDispatch } from './store';
export type { Article } from './news/interfaces';

export { selectView } from './display/selectors';
export { toggleView } from './display/slice';

export { getNews } from './news/operations';
export { getMoreNews } from './news/operations';

export { selectNews } from './news/selectors';
export { selectPage } from './news/selectors';
export { selectIsLoading } from './news/selectors';
export { selectTotal } from './news/selectors';
