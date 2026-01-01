import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../services/products-service';
@Injectable()
export class ProductsEffects {
  private _actions = inject(Actions);
  private _productsService = inject(ProductsService);
  productsloading$ = createEffect(() =>
    this._actions.pipe(
      ofType(ProductsActions.loadProducts),
      switchMap(() =>
        this._productsService.getProducts().pipe(
          map((products) => ProductsActions.loadProductSuccess({ products })),
          catchError((error) =>
            of(
              ProductsActions.loadProductsFailure({
                error: error?.message || 'Unknown error occurred',
              })
            )
          )
        )
      )
    )
  );
}
