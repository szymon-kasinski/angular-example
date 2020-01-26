import { Injectable } from '@angular/core';
import { Advice } from "../model/advice";
import { AdvicesBunch } from "../model/advices-bunch";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  adviceUrl: string = "https://api.adviceslip.com/advice";

  constructor(
    private http: HttpClient,
    private logger: NGXLogger
  ) { }

  getAdvice(): Observable<Advice> {
    return this.http.get<Advice>(this.adviceUrl)
      .pipe(
        catchError(this.handleError<Advice>('getAdvice'))
      );
  }

  getAdviceWithTerm(searchTerm: string): Observable<AdvicesBunch> {
    let urlWithTerm = `${this.adviceUrl}/search/${searchTerm}`;
    return this.http.get<AdvicesBunch>(urlWithTerm)
      .pipe(
        catchError(this.handleError<AdvicesBunch>('getAdviceWithTerm'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error("Error message " + error);
      return of(result as T);
    };
  }
}
