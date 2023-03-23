import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { ViewState, View } from './interfaces';

const initialState: ViewState = {
  view: 'list',
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    toggleView(state, action: PayloadAction<View>) {
      state.view = action.payload;
    },
  },
});

export const { toggleView } = viewSlice.actions;
export const viewReducer = viewSlice.reducer;
