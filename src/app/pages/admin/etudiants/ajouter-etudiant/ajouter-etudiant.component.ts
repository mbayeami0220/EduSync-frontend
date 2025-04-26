import { Component } from '@angular/core';
import { EtudiantsService } from '../../../../services/etudiants.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Etudiant } from '../../../../model/etudiant';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-ajouter-etudiant',
  standalone: true,
  imports: [FormsModule,MatSnackBarModule],
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
    password:''
  };

  constructor(private etudiantsService: EtudiantsService, private router: Router, private snackBar: MatSnackBar) {}

  ajouterEtudiant(): void {
    this.etudiantsService.ajouterEtudiant(this.etudiant).subscribe(
      (data) => {
        this.snackBar.open('Étudiant ajouté avec succès !', 'Fermer', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        
        this.router.navigate(['/dashboard-admin/etudiants']);
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open('Erreur lors de l’ajout de l’étudiant ❌', 'Fermer', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        console.error('Erreur lors de l\'ajout:', error);
      }
    );
  }
  
}
