import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageZoomModule} from 'angular2-image-zoom';


import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgbdCarouselBasicComponent} from './carousel-slider/carousel-basic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NgbdCarouselBasicComponent
  ],
  imports: [
    BrowserModule,ImageZoomModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 