import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _httpClient = inject(HttpClient);
  getProducts(): Observable<Product[]> {
    return this._httpClient.get<ProductsResponse>('https://fakeapi.net/products').pipe(
      map((response: ProductsResponse) => response.data),
      catchError((error) => throwError(() => new Error('Failed to load products')))
    );
  }
}
