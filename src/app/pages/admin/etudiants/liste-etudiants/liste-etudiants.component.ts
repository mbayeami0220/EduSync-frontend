
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EtudiantsService } from '../../../../services/etudiants.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-liste-etudiants',
  imports: [MatIcon,RouterModule,CommonModule,MatCardModule,MatTableModule,MatToolbarModule,MatInputModule,MatFormFieldModule,FormsModule],
  standalone:true,
  templateUrl: './liste-etudiants.component.html',
})
export class ListeEtudiantsComponent implements OnInit {
  displayedColumns: string[] = ['ine', 'nom', 'prenom', 'formation', 'promo', 'annee_debut', 'annee_sortie', 'diplomes', 'autres_formations', 'actions'];
  etudiants: any[] = [];
  dataSource!: MatTableDataSource<any>;
  filterValue: string = '';

  constructor(private etudiantsService: EtudiantsService, private router: Router) {}

  ngOnInit(): void {
    this.getEtudiants();  // Charge les étudiants au démarrage
  }

  getEtudiants(): void {
    this.etudiantsService.getEtudiants().subscribe(data => {
      this.etudiants = data;
      this.dataSource = new MatTableDataSource(this.etudiants);
    });
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
    // Forcer le rafraîchissement de la table pour les changements de filtre
    this.dataSource._updateChangeSubscription();
  }

  modifierEtudiant(ine: string): void {
    this.router.navigate(['/modifier-etudiant', ine]);
  }

  supprimerEtudiant(ine: string): void {
    if (confirm(`Confirmer la suppression de l'étudiant INE ${ine} ?`)) {
      this.etudiantsService.deleteEtudiant(ine).subscribe({
        next: () => {
          this.getEtudiants();  // Recharge la liste des étudiants après suppression
          alert('Étudiant supprimé avec succès.');
        },
        error: (err) => {
          console.error('Erreur suppression', err);
          alert('Échec de la suppression.');
        }
      });
    }
  }
}

