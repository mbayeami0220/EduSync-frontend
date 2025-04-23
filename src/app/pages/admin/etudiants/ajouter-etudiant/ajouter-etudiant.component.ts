import { Component } from '@angular/core';
import { EtudiantsService } from '../../../../services/etudiants.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Etudiant } from '../etudiant';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-etudiant',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatIconModule],
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent {
  etudiant: Etudiant = {
    ine: '',
    nom: '',
    prenom: '',
    date_naissance: '',
    formation: '',
    promo: '',
    annee_debut: '',
    annee_sortie: '',
    diplomes: '',
    autres_formations: '',
  };

  constructor(private etudiantsService: EtudiantsService, private router: Router) {}

  ajouterEtudiant(): void {
    this.etudiantsService.ajouterEtudiant(this.etudiant).subscribe(
      (data) => {
        console.log('Etudiant ajouté:', data);
        this.router.navigate(['/etudiants']);
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de l\'ajout:', error);
        alert(`Erreur: ${error.message}`);
      }
    );
  }
  
}
