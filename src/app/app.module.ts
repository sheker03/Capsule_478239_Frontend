import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { EditComponent } from './ui/edit/edit.component';
import { ViewComponent } from './ui/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
