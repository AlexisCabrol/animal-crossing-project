import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoissonComponent} from "./poisson/poisson.component";
import {InsecteComponent} from "./insecte/insecte.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {ProfilComponent} from "./profil/profil.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ProfilEditComponent} from "./profil/profil-edit/profil-edit.component";


const routes: Routes = [{path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'poissons', canActivate: [AuthGuardService], component: PoissonComponent},
  {path: 'insectes', canActivate: [AuthGuardService], component: InsecteComponent},
  {path: 'profil', canActivate: [AuthGuardService], component: ProfilComponent},
  {path: 'profil/update', canActivate: [AuthGuardService], component: ProfilEditComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
