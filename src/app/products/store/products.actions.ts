import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Products Page] load Products');
export const loadProductSuccess = createAction(
  '[Products Api] Load Products Success',
  props<{ products: any[] }>()
);
export const loadProductsFailure = createAction(
  '[Products Api] Load Products Failure',
  props<{ error: string }>()
);
export const addProduct = createAction(
  '[Products Page] Add Product',
  props<{ product: Product }>()
);
export const updateProductName = createAction(
  '[Products Page] Update Product Name',
  props<{ id: number; productTitle: string }>()
);
export const deleteProduct = createAction(
  '[Products Page] Delete Product',
  props<{ id: number }>()
);
