import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter.name = action.payload || '';
    },
  },
});

export const filterReducer = slice.reducer;
export const selectFilter = (state) => state.filter.filter.name;
export const { changeFilter } = slice.actions;