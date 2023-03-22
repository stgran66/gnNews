import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article } from './interfaces';

const apiKey = '2ae03341cce04535b5d4a80e98cb9520';

export const getNews = createAsyncThunk<
  { status: string; totalResults: number; articles: Article[] },
  string,
  { rejectValue: string | null }
>('news/getNews', async (country: string, thunkAPI) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: { country, apiKey, pageSize: 3, page: 1 },
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      thunkAPI.rejectWithValue(err.message);
      return;
    }
    console.log(err);
    thunkAPI.rejectWithValue('unknown error occured');
  }
});
