import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
interface JwtPayload {
  exp: number;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(identifiant: string, password: string) {
    return this.http.post<{ token: string, role: string }>(`${this.apiUrl}/login`, {
      identifiant, password
    });
  }

  saveSession(token: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  


isTokenExpired(): boolean {
  const token = this.getToken();
  if (!token) return true;

  const decoded: any = jwtDecode(token);
  const now = Math.floor(Date.now() / 1000);
  return decoded.exp < now;
}

isLoggedIn(): boolean {
  const token = this.getToken();
  if (!token) return false;

  const decoded: JwtPayload = jwtDecode(token);
  const now = Math.floor(Date.now() / 1000);
  return decoded.exp > now;
}
onlogout() {
  // Supprimer le token du localStorage
  localStorage.removeItem('token');
  // Rediriger vers la page de login
  this.router.navigate(['/']);
}



}
