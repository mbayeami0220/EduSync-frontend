import { Routes } from '@angular/router';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './login/login.component';
import { CourrierComponent } from './pages/admin/courrier/courrier.component';
import { CirculairesComponent } from './pages/admin/circulaires/circulaires.component';
import { NotesAdminComponent } from './pages/admin/notes-admin/notes-admin.component';
import { NotesServiceComponent } from './pages/admin/notes-service/notes-service.component';
import { AjouterEtudiantComponent } from './pages/admin/etudiants/ajouter-etudiant/ajouter-etudiant.component';
import { ProjetBudgetComponent } from './pages/admin/projet-budget/projet-budget.component';
import { BudgetRealiseComponent} from './pages/admin/budget-realise/budget-realise.component';
import { PersonnelComponent } from './pages/admin/personnel/personnel.component';
import { ListeEtudiantsComponent } from './pages/admin/etudiants/liste-etudiants/liste-etudiants.component';
import { DashboardEtudiantComponent } from './pages/dashboard-etudiant/dashboard-etudiant.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard-etudiant', component: DashboardEtudiantComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent,
    children: [
      { path: 'courrier', component: CourrierComponent },
      { path: 'notes-service', component: NotesServiceComponent },
      { path: 'notes-admin', component: NotesAdminComponent },
      { path: 'circulaires', component: CirculairesComponent },
      { path: 'projet-budget', component: ProjetBudgetComponent },
      { path: 'budget-realise', component: BudgetRealiseComponent },
      { path: 'personnel', component: PersonnelComponent },
      { path: 'ajouter-etudiant', component: AjouterEtudiantComponent },
   
      { path: 'etudiants', component: ListeEtudiantsComponent },   
      { path: '', redirectTo: 'ajouter-etudiant', pathMatch: 'full' } // Redirection vers la liste des étudiants par défaut
    ]
  },
  { path: '**', redirectTo: '' }  // Redirection en cas de chemin non défini
];
