import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  URL: string = environment.baseUrl + "/company";
  
  constructor(private http: HttpClient) { }

  public getCompany() {
    return this.http.get(this.URL).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }

  public addCompany(company: Company) {
    return this.http.post(this.URL, company).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      })
    )
  }
}
