import { Component, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductsActions from './store/products.actions';
import { selectError, selectLoading, selectProducts } from './store/products.selector';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private _store = inject(Store);
  products: Signal<Product[]> = this._store.selectSignal(selectProducts);
  loading: Signal<boolean> = this._store.selectSignal(selectLoading);
  error: Signal<string | null> = this._store.selectSignal(selectError);
  ngOnInit() {
    this._store.dispatch(ProductsActions.loadProducts());
  }
  addProduct() {}
  editProduct() {}
  deleteProduct() {}
}
