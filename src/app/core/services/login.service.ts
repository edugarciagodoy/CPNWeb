import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { catchError, map, throwError } from 'rxjs';
import { DataResponse } from '../models/data.response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly base = environment.API_URL;
  constructor(protected http: HttpClient, private toastrService: ToastrService) { }

 public GetLogin(tipodeSolicitud: string) {
    return this.http.get<DataResponse>(`${this.base}/MigrationSivsa/examenes?tiposolicitud=` + tipodeSolicitud)
      .pipe(
        map((response) => {
          // console.log(response.result.dataRows);
          return response.result.dataRows;
        }),
        catchError(e => {
          return throwError(() => e)
        })
      )
  }
}
