import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoissonComponent} from "./poisson/poisson.component";
import {InsecteComponent} from "./insecte/insecte.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {ProfilComponent} from "./profil/profil.component";


const routes: Routes = [{path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'poissons', canActivate: [AuthGuardService], component: PoissonComponent},
  {path: 'insectes', canActivate: [AuthGuardService], component: InsecteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profil', canActivate: [AuthGuardService], component: ProfilComponent},
  {path: 'register', component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
