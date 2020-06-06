import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NasaPodComponent} from "./nasa-pod/nasa-pod.component";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule).catch(e => console.log(e))
  },
  { path: "dashboard/tile", component: NasaPodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
