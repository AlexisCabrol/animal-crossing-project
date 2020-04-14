import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PoissonComponent} from "./poisson/poisson.component";
import {InsecteComponent} from "./insecte/insecte.component";
import {AccueilComponent} from "./accueil/accueil.component";


const routes: Routes = [{ path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'poissons', component: PoissonComponent},
  {path: 'insectes', component: InsecteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
