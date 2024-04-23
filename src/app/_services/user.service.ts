import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8076/api/test/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'Allusers');
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(API_URL + 'usersID/' + id);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(API_URL + 'Cusers', user, httpOptions);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(API_URL+ 'UPusers/' + id, user, httpOptions);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(API_URL + 'Dusers/' + id);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(API_URL + 'DAllusers');
  }
}