import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaPodComponent} from './nasa-pod/nasa-pod.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/tile', component: NasaPodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
