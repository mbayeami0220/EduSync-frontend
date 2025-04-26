import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatCardTitle,MatCard } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCardContent } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Etudiant } from '../../model/etudiant';
import { FormsModule } from '@angular/forms';
import { EtudiantsService } from '../../services/etudiants.service';
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
    NgIf,
    FormsModule
    
  ]
})
export class DashboardEtudiantComponent implements OnInit {
  student: any;
  etudiant!: Etudiant;
  constructor(private etudiantService: EtudiantsService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const ine = decodedToken.sub; // ou decodedToken.username selon ce que tu mets dans ton JWT
      this.fetchEtudiant(ine);
    }
  }
  fetchEtudiant(ine: string): void {
    this.etudiantService.getEtudiantByIne(ine).subscribe({
      next: (data) => this.etudiant = data,
      error: (err) => console.error('Erreur lors du chargement de l’étudiant', err)
    });
  }
}
