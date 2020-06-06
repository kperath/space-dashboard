import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NasaPodComponent} from "./nasa-pod.component";


const routes: Routes = [
  {
    path: "",
    component: NasaPodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaPodRoutingModule { }
