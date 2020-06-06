import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NasaPodRoutingModule } from "./nasa-pod-routing.module";
import { NasaPodComponent} from "./nasa-pod.component";


@NgModule({
  declarations: [NasaPodComponent],
  imports: [
    CommonModule,
    NasaPodRoutingModule
  ]
})
export class NasaPodModule { }
