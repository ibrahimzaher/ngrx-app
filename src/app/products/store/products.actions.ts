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
