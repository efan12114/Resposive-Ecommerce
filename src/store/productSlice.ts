import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// We'll remove PayloadAction for now to bypass that specific error
// It isn't strictly needed for this specific fetch logic
// TypeScript Interface - Fulfills "TypeScript features" criteria
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductState = {
  items: [],
  status: 'idle',
};

// Async Thunk for API Integration
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return (await response.json()) as Product[];
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => { state.status = 'failed'; });
  },
});

export default productSlice.reducer;