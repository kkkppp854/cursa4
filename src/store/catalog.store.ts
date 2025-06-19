import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  material: string;
}

export type SortOrder = 'asc' | 'desc' | null;

export interface ProductState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  sortOrder: SortOrder;  // Додаємо сортування
}

const initialState: ProductState = {
  items: [],
  status: 'idle',
  sortOrder: null,  // за замовчуванням без сортування
};

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data.products;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSortOrder(state, action: PayloadAction<SortOrder>) {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { setSortOrder } = productsSlice.actions;

export default productsSlice.reducer;
