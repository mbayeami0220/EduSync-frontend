import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-login',
  imports:[FormsModule,NgStyle,NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  identifiant = '';
  password = '';
  role = 'etudiant'; // <-- important !
  errorMessage = '';
  showPassword = false;

  
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.identifiant, this.password).subscribe({
      next: res => {
        this.authService.saveSession(res.token, res.role);
        if (res.role === 'ADMIN') {
          this.router.navigate(['dashboard-admin']);
        } else if (res.role === 'ETUDIANT') {
          this.router.navigate(['dashboard-etudiant']);
        } else {
          this.errorMessage = 'Rôle non reconnu.';
        }
      },
      error: () => {
        this.errorMessage = 'Identifiant ou mot de passe incorrect.';
      }
    });
  }
}

