import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  URL: string = environment.baseUrl + "/report";
  
  constructor(private http: HttpClient) { }

  public getReport() {
    return this.http.get(this.URL).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }
}
