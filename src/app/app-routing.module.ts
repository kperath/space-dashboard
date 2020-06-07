import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ErrorPageComponent} from "./error-page/error-page.component";


const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module")
      .then(m => m.DashboardModule)
      .catch(e => console.log(e))
  },
  { path: "dashboard/tile",
    loadChildren: () => import("./nasa-pod/nasa-pod.module")
      .then(m => m.NasaPodModule)
      .catch(e => console.log(e))
  },
  { path: "dashboard/error",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
