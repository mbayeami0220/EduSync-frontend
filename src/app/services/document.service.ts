import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from '../models/document.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'http://localhost:5000/api/documents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Document[]> {
    return this.http.get<Document[]>(this.apiUrl);
  }

  getById(id: number): Observable<Document> {
    return this.http.get<Document>(`${this.apiUrl}/${id}`);
  }

  create(document: Document): Observable<Document> {
    return this.http.post<Document>(this.apiUrl, document);
  }

  update(id: number, document: Document): Observable<Document> {
    return this.http.put<Document>(`${this.apiUrl}/${id}`, document);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
