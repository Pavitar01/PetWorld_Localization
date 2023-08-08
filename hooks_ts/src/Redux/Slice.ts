import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "@/Services/products.service";

const initialState = {
  products: [],
  status: "idle",
  error: null as string | null, // Set initial type for error to string | null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    AddProducts(state, actions) {
      state.products = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.error = null; // Reset error when the request succeeds
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error
          ? action.error.message || "Unknown error"
          : null;
      });
  },
});

export default productsSlice.reducer;
export const { AddProducts } = productsSlice.actions;
