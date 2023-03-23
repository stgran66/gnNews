export interface Article {
  source: null | {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: null | string;
  url: null | string;
  urlToImage: null | string;
  publishedAt: null | string;
  content: null | string;
}

export interface newsState {
  items: {
    totalResults: number;
    page: number;
    articles: Article[];
  };
  isLoading: boolean;
  error: null | string;
}

export interface MoreNewsArg {
  country: string;
  page: number;
}
