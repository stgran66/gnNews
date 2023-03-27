import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article, MoreNewsArg } from './interfaces';
import { PER_PAGE } from 'data';

const apiKey = '2ae03341cce04535b5d4a80e98cb9520';

export const getNews = createAsyncThunk<
  { status: string; totalResults: number; articles: Article[] },
  string,
  { rejectValue: string | null }
>('news/getNews', async (country, thunkAPI) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: { country, apiKey, pageSize: PER_PAGE, page: 1 },
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue(err.response?.data.message);
    }
    console.log(err);
    return thunkAPI.rejectWithValue('unknown error occured');
  }
});

export const getMoreNews = createAsyncThunk<
  { status: string; totalResults: number; articles: Article[] },
  MoreNewsArg,
  { rejectValue: string | null }
>('news/getMoreNews', async ({ country, page }, thunkAPI) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: { country, apiKey, pageSize: PER_PAGE, page },
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue(err.message);
    }
    console.log(err);
    return thunkAPI.rejectWithValue('unknown error occured');
  }
});
