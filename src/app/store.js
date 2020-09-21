import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../../src/redux/slices/Category/CategoriesSlice'
export default configureStore({
  reducer: {
    categoriesReducer
  },
});
