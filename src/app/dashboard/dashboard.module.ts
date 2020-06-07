import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule} from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { TileComponent } from "../tile/tile.component";
// tiles only used by dashboard component

@NgModule({
  declarations: [DashboardComponent, TileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
