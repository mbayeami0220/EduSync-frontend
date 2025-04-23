import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../../../services/etudiants.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiants',
  standalone: true,
  templateUrl: './etudiants.component.html',
  imports: [CommonModule],
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants: any[] = [];

  constructor(private etudiantsService: EtudiantsService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  // Récupérer la liste des étudiants
  getEtudiants(): void {
    this.etudiantsService.getEtudiants().subscribe(
      (data) => {
        this.etudiants = data;
      },
      (error) => {
        console.error('Erreur de récupération des étudiants', error);
      }
    );
  }
}



