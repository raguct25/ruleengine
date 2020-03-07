// From packages
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// From local files
import { environment } from '../../environments/environment';
import { RuleListResponse, AddRuleParams } from './rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  fetchRules(): Observable<RuleListResponse[]> {
    return this.http
      .get<RuleListResponse[]>(`${this.url}/v1/rules`)
      .pipe(catchError(this.fetchErrorHandler));
  }

  fetchErrorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  addRules(params: AddRuleParams): Observable<RuleListResponse> {
    return this.http.post<RuleListResponse>(`${this.url}/v1/rules`, params);
  }
}
