import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};
export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductsActions.loadProductSuccess, (state, { products }) => ({
    ...state,
    products: products,
    loading: false,
    error: null,
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    products: [],
    loading: false,
    error: error,
  }))
);
