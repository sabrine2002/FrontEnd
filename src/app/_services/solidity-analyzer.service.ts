import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolidityAnalyzerService {

  private analysisUrl = 'http://localhost:8076/api/test/analyze';

  constructor(private http: HttpClient) { }

  analyzeSolidityCode(code: string): Observable<string> {
    return this.http.post(this.analysisUrl, code, { responseType: 'text' })
      .pipe(
        map(response => response),
        catchError(error => {
          console.error('Error during solidity code analysis:', error);
          throw error;
        })
      );
  }
}
