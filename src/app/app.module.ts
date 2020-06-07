import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { BackgroundComponent } from "./background/background.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
