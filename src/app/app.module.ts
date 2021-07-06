import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MaltIconComponent } from './malt-icon/malt-icon.component';
import { LinkedinIconComponent } from './linkedin-icon/linkedin-icon.component';

@NgModule({
  declarations: [AppComponent, MaltIconComponent, LinkedinIconComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
