import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courrier } from '../model/courrier.model';


@Injectable({
  providedIn: 'root'
})
export class CourrierService {
  private apiUrl = 'http://localhost:5000/api/courriers';

  constructor(private http: HttpClient) {}

  ajouterCourrier(courrier: FormData): Observable<any> {
    return this.http.post(this.apiUrl, courrier);
  }

  getCourriers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  supprimerCourrier(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
