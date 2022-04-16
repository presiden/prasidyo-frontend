import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  URL: string = environment.baseUrl + "/transaction";
  
  constructor(private http: HttpClient) { }

  public getTransaction() {
    return this.http.get(this.URL).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }

  public addTransaction(transaction: any) {
    return this.http.post(this.URL, transaction).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }
}
