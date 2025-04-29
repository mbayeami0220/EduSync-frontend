import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model'; // si tu as créé un modèle

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:5000/api/etudiants';

  constructor(private http: HttpClient) {}

  getStudentByIne(ine: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${ine}`);
  }
}
