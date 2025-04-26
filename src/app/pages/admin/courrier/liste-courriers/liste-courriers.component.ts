import { Component, OnInit } from '@angular/core';
import { CourrierService } from '../../../../services/courrier.service';
import { NgIf } from '@angular/common';
import { Courrier } from '../../../../model/courrier.model';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-liste-courriers',
  imports:[NgIf,NgFor,CommonModule],
  templateUrl: './liste-courriers.component.html',
  styleUrls: ['./liste-courriers.component.css']
})
export class ListeCourriersComponent implements OnInit {

  courriers: Courrier[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private courrierService: CourrierService) {}

  ngOnInit(): void {
    this.fetchCourriers();
  }

  fetchCourriers(): void {
    this.isLoading = true;
    this.courrierService.getCourriers().subscribe({
      next: (data) => {
        this.courriers = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = 'Erreur lors du chargement des courriers.';
        this.isLoading = false;
      }
    });
  }
}

