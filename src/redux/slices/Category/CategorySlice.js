import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const categorySlice = createSlice({
  name: 'categoryReducer',
  initialState: {
    error: null,
    loading: false,
    category: {},
  },
  reducers: {
    categoryReadStart: state => {
      state.loading = true;
      state.error = null;
    },
    categoryReadSuccess: (state, action) => {
      state.category = action.payload;
      state.loading = false;
      state.error = null;
    },
    categoryReadFailed: (state, action) => {
      state.category = {};
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { categoryReadStart, categoryReadSuccess, categoryReadFailed } = categorySlice.actions;

export const fetchCategoryById = id => async dispatch => {
  dispatch(categoryReadStart());
  try {
    let result = await axios.get("https://5f4ea7b85b92f4001604dde2.mockapi.io/api/v1/categories/" + id);
    dispatch(categoryReadSuccess(result.data));
  } catch (e) {
    dispatch(categoryReadFailed(e.message));
  }
};

export const category = state => state.categoryReducer.category;
export const categoryReadError = state => state.categoryReducer.error;
export const categoryReadLoading = state => state.categoryReducer.loading;

export default categorySlice.reducer;
