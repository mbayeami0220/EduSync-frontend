import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Student } from '../../model/student.model';
import { EtudiantsService } from '../../services/etudiants.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardTitle, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { NgIf, NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-dashboard-etudiant',
  templateUrl: './dashboard-etudiant.component.html',
  styleUrls: ['./dashboard-etudiant.component.css'],
  standalone: true,
  imports: [
   
    MatListModule,
    MatTabsModule,
    MatCard,
    MatIcon,
    MatCardTitle,
    MatCardContent,
    NgIf,
    NgFor,
    FormsModule,
    MatCardHeader,
  ]
})
export class DashboardEtudiantComponent  {

  student = {
    nom: "Mbaye",
    prenom: "Ami",
    ine: "INE12345",
    formations: "Informatique",
    promo: "P7",
    courses: [
      {
        name: "HTML",
        category: "Développement logiciel",
        image: "html.png",
        status: "En cours"
      },
      {
        name: "Algorithne",
        category: "Ouverture et Professionnalisation",
        image: "algo.jpg",
        status: "Validé"
      },
      {
        name: "Angular",
        category: "Développement logiciel",
        image: "angular.png",
        status: "En cours"
      },
      {
        name: "Bootstrap",
        category: "Développement logiciel",
        image: "bootstrap.png",
        status: "En cours"
      },
      {
        name: "Cryptographie",
        category: "Développement logiciel",
        image: "crypto.png",
        status: "En cours"
      },
      {
        name: "Programmation Java",
        category: "Développement logiciel",
        image: "java.png",
        status: "En cours"
      },
      {
        name: "Php avancee",
        category: "Développement logiciel",
        image: "php.png",
        status: "En cours"
      },
      {
        name: "React JS",
        category: "Développement logiciel",
        image: "react.png",
        status: "En cours"
      },
      {
        name: "Javascript",
        category: "Développement logiciel",
        image: "javascript.png",
        status: "En cours"
      },
      // etc.
    ],
    grades: [
      { subject: "Html", score: 16 },
      { subject: "Algorithme", score: 14 },
      { subject: "Angular", score: 13 },
      { subject: "Bootstrap", score: 12 },
      { subject: "Cryptographie", score: 17 },
      { subject: "Programmation Java", score: 14 },
      { subject: "Php Avancées", score: 15 },
      { subject: "React Js", score: 14 },
      { subject: "Javascript", score: 11 }
    ]
  };
  
  generatePdf(): void {
    const doc = new jsPDF();
  

    doc.setFontSize(18);
    doc.text('Relevé de notes', 14, 20);

    doc.setFontSize(12);
    doc.text(`Nom : ${this.student.nom} ${this.student.prenom}`, 14, 30);
    doc.text(`INE : ${this.student.ine}`, 14, 36);
    doc.text(`Filière : ${this.student.formations}`, 14, 42);
    doc.text(`Promotion : ${this.student.promo}`, 14, 48);

    autoTable(doc, {
      startY: 60,
      head: [['Matière', 'Note /20']],
      body: this.student.grades.map(g => [g.subject, `${g.score}`]),
    });

    doc.save(`releve_notes_${this.student.ine}.pdf`);
  }
}
