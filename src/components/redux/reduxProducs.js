import { createSlice } from "@reduxjs/toolkit";
import { connect } from "react-redux";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.product = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.product.splice(state.product.findIndex((item)=>item._id === action.payload),1)
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const { getProductStart, getProductSuccess, getProductFailure,deleteProductStart,deleteProductSuccess,deleteProductFailure } =
productSlice.actions
export default productSlice.reducer;
