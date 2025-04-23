import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-dashboard-admin',
  imports:[MatIcon,RouterModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  constructor(private router: Router) {}

  logout(): void {
    // Pour l'instant, on suppose qu'il n'y a pas de gestion de session avancée,
    // donc on déconnecte simplement et on redirige vers la page de login.
    this.router.navigate(['/login-admin']);
  }
}

