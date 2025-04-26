import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';  // Importer AuthService

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  private apiUrl = 'http://localhost:5000/api/etudiants'; 

  constructor(private http: HttpClient, private authService: AuthService) {}

  getEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders(),responseType: 'json'  });
  }

  getEtudiantByIne(ine: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${ine}`, { headers: this.getHeaders() });
  }

  ajouterEtudiant(etudiant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, etudiant, { headers: this.getHeaders() });
  }

  modifierEtudiant(ine: string, etudiant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${ine}`, etudiant, { headers: this.getHeaders() });
  }

  deleteEtudiant(ine: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${ine}`, { headers: this.getHeaders() });
  }
  

  // Méthode pour récupérer les en-têtes, y compris le token d'authentification
  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();  
    return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token) : new HttpHeaders();
  }
}
