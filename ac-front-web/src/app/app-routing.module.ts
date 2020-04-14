import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoissonComponent} from "./poisson/poisson.component";
import {InsecteComponent} from "./insecte/insecte.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [{path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'poissons', component: PoissonComponent},
  {path: 'insectes', component: InsecteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
