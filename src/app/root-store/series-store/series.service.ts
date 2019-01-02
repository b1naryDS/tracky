import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from 'src/app/models/serie.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  apiUrl;
  constructor(private http: HttpClient) { 
    this.apiUrl = 'http://localhost:3000'; 
  }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(`${this.apiUrl}/series`)
      .pipe(
        catchError(
          (error: any) => Observable.throw(error.json()))
          )
  }
}
