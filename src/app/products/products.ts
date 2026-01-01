import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
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
  addProduct() {
    const newProduct: Product = {
      id: this.products().length + 1,
      title: 'iPhone 15 Pro',
      price: 1299,
      description: 'Apple iPhone 15 Pro with A17 chip and titanium body.',
      category: 'Smartphones',
      brand: 'Apple',
      stock: 45,
      image: 'https://example.com/images/iphone15pro.png',
      specs: {
        color: 'Titanium Black',
        storage: '256GB',
        screen: '6.1-inch OLED',
        ram: '8GB',
        battery: '3274mAh',
        waterproof: true,
      },
      rating: {
        rate: 4.8,
        count: 1245,
      },
    };
    this._store.dispatch(ProductsActions.addProduct({ product: newProduct }));
  }

  editLastProduct() {
    this._store.dispatch(
      ProductsActions.updateProductName({ id: this.products().length, productTitle: 'Samsung' })
    );
  }
  deleteLastProduct() {
    this._store.dispatch(ProductsActions.deleteProduct({ id: this.products().length }));
  }
}
