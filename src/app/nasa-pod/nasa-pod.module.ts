import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NasaPodRoutingModule } from "./nasa-pod-routing.module";
import { NasaPodComponent} from "./nasa-pod.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [NasaPodComponent],
  imports: [
    CommonModule,
    SharedModule,
    NasaPodRoutingModule
  ]
})
export class NasaPodModule { }
