import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router'; 
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-dashboard-admin',
  imports:[MatIcon,RouterModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  constructor(private router: Router,private authService: AuthService) {}
  onLogout() {
    this.authService.logout(); 
    Swal.fire({
      title: 'Déconnexion réussie !',
      text: 'Vous avez été déconnecté avec succès.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      this.router.navigate(['/']);  
    });
  }
  
  
}

