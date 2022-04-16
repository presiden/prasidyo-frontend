import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL: string = environment.baseUrl + "/product";

  constructor(private http: HttpClient) { }
  
  public getProduct() {
    return this.http.get(this.URL).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }

  public addProduct(product: Product) {
    return this.http.post(this.URL, product).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }
}
