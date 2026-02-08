import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Defining the Product structure for type safety
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

// Handling API data fetching dynamically
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('Failed to fetch');
  return (await response.json()) as Product[];
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [] as Product[],
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  },
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

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

// Exporting types specifically to satisfy 'verbatimModuleSyntax'
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;