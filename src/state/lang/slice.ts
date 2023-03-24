import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { LangState, Lang } from './interfaces';

const initialState: LangState = {
  lang: 'en',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toggleLang(state, action: PayloadAction<Lang>) {
      state.lang = action.payload;
    },
  },
});

export const { toggleLang } = langSlice.actions;
export const langReducer = langSlice.reducer;
