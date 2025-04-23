import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports:[RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentView: string = 'login';

  navigateToDashboard() {
    this.currentView = 'dashboard';
  }

  navigateToLogin() {
    this.currentView = 'login';
  }
  isAddingStudent = false; // ← Déclare ici la propriété

  toggleView() {
    this.isAddingStudent = !this.isAddingStudent; // ← Bascule entre les vues
  }
}
