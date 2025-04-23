import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourrierService } from '../../../services/courrier.service';
import { HttpClient } from '@angular/common/http';
import { NgIf,NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-courrier',
  imports:[NgIf,NgFor,ReactiveFormsModule],
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {
  isLoading: boolean = false;

  courriers: any[] = [];

  courrier = {
    type: '',  // 'arrive' ou 'depart'
    objet: '',
    expediteur: '',
    destinataire: '',
    fichier: null  // Pour le fichier attaché
  };
  courrierForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  selectedFile: File | null = null;
  constructor(private fb: FormBuilder, private courrierService: CourrierService, private http: HttpClient) {
    this.courrierForm = this.fb.group({
      type: ['', Validators.required],
      objet: ['', Validators.required],
      date_reception: ['', Validators.required],
      expediteur: ['', Validators.required],
      destinataire: ['', Validators.required],
      fichier: null as File | null 
    });
  }

  ngOnInit(): void {
    this.getCourriers();
  }

  ajouterCourrier() {
    this.http.post('http://localhost:5000/api/courriers', this.courrier).subscribe({
      next: () => {
        this.getCourriers();
        this.courrier = { type: '', objet: '', expediteur: '', destinataire: '', fichier:null };
      },
      error: () => alert("Erreur lors de l'ajout du courrier")
    });
  }

  getCourriers() {
    this.http.get<any[]>('http://localhost:5000/api/courriers').subscribe(data => {
      this.courriers = data;
    });
  }

  supprimerCourrier(id: number) {
    this.http.delete(`http://localhost:5000/api/courriers/${id}`).subscribe(() => {
      this.getCourriers();
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      this.selectedFile = input.files[0];
    }
  }
  onSubmit() {
    if (this.courrierForm.invalid) return;
  
    this.isLoading = true;
  
    // Simule une requête réseau (remplace par ton vrai service HTTP)
    this.courrierService.ajouterCourrier(this.courrierForm.value).subscribe({
      next: (res) => {
        this.successMessage = "Courrier ajouté avec succès !";
        this.errorMessage = '';
        this.courrierForm.reset();
        this.isLoading = false;
        this.getCourriers(); // recharge la liste
      },
      error: (err) => {
        this.errorMessage = "Une erreur s’est produite.";
        this.successMessage = '';
        this.isLoading = false;
      }
    });
  }
  

}
