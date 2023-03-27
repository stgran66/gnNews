export type { RootState } from './store';
export type { AppDispatch } from './store';
export type { Article } from './news/interfaces';
export type { View } from './view/interfaces';
export type { Lang } from './lang/interfaces';

export { selectView } from './view/selectors';
export { toggleView } from './view/slice';
export { toggleLang } from './lang/slice';

export { getNews } from './news/operations';
export { getMoreNews } from './news/operations';

export { selectNews } from './news/selectors';
export { selectPage } from './news/selectors';
export { selectIsLoading } from './news/selectors';
export { selectTotal } from './news/selectors';
export { selectLang } from './lang/selectors';
export { selectError } from './news/selectors';
