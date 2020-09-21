import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const categoriesSlice = createSlice({
  name: 'categoriesReducer',
  initialState: {
    error: null,
    loading: false,
    categories: [],
  },
  reducers: {
    categoriesReadStart: state => {
      state.loading = true;
      state.error = null;
    },
    categoriesReadSuccess: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    categoriesReadFailed: (state, action) => {
      state.categories = {};
      state.loading = false;
      state.error = action.payload;
    },
    categoriesReadListStart: state => {
      state.loading = true;
      state.error = null;
    },
    categoriesReadListSuccess: (state, action) => {
      state.categoriesList = action.payload;
      state.loading = false;
      state.error = null;
    },
    categoriesReadListFailed: (state, action) => {
      state.categoriesList = {};
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { categoriesReadStart, categoriesReadSuccess, categoriesReadFailed } = categoriesSlice.actions;

export const fetchCategories = () => async dispatch => {
  dispatch(categoriesReadStart());
  try {
    let result = await axios.get("https://5f4ea7b85b92f4001604dde2.mockapi.io/api/v1/categories/");
    dispatch(categoriesReadSuccess(result.data));
  } catch (e) {
    dispatch(categoriesReadFailed(e.message));
  }
};

export const categories = state => state.categoriesReducer.categories;
export const categoriesReadError = state => state.categoriesReducer.error;
export const categoriesReadLoading = state => state.categoriesReducer.loading;

export default categoriesSlice.reducer;
