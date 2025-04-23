import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatCardTitle,MatCard } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCardContent } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';


@Component({
  selector: 'app-dashboard-etudiant',
  templateUrl: './dashboard-etudiant.component.html',
  styleUrls: ['./dashboard-etudiant.component.css'],
  standalone: true,
  imports: [
    MatCardTitle,
    MatToolbar,
    MatCard,
    MatCardContent,
    NgFor,
    NgIf
    
  ]
})
export class DashboardEtudiantComponent implements OnInit {
  student: any;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    
    const studentId = 1;
    this.studentService.getStudentInfo().subscribe({
      next: (data) => this.student = data,
      error: (err) => console.error(err)
    });
  }
}
