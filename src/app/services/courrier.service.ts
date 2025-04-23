import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // ⬅️ Ajout de l'import

@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  private apiUrl = 'http://localhost:5000/api/courriers';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ajouterCourrier(formData: FormData): Observable<any> {
    const token = this.authService.getToken(); // ⬅️ Récupération du token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.post<any>(this.apiUrl, formData, { headers });
  }

  getCourriers(): Observable<any[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
