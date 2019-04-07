import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateebayComponent } from './templateebay/templateebay.component';
import { RootRoutingModule } from './app.routing';
import { template1Service } from './template1/template1';

@NgModule({
  declarations: [
    AppComponent,
    TemplateebayComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    FormsModule,
  ],
  providers: [template1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
