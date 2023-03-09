import { LoginData } from './../models/login-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://example.com/api/login';
  private tokenName = 'myAppAuthToken';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginData> {
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginData>(this.apiUrl, body, { headers });
  }

  storeToken(token: string): void {
    document.cookie = `${this.tokenName}=${token}; HttpOnly; Secure; SameSite=Strict;`;
  }

}
