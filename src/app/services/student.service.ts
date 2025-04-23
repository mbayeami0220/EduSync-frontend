import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:5000/api/student';  

  constructor(private http: HttpClient) {}

  getStudentInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/info`);
  }
}
