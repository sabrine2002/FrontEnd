import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolidityCompilerService {
  constructor(private http: HttpClient) { }

  verifyContract(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', file);

      this.http.post('http://localhost:8076/api/test/verify-file', formData, { responseType: 'text' })
        .subscribe(
          (response: string) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
