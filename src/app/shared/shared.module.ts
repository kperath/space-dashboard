import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {ErrorPageComponent} from "../error-page/error-page.component";


// module that contains child components that will be used by other components
@NgModule({
  declarations: [ ErrorPageComponent ],
  imports: [
    CommonModule
  ],
  exports: [ CommonModule, ErrorPageComponent]
})
export class SharedModule { }
