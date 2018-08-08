import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeadingsComponent } from './headings/headings.component';
import { FooterComponent } from './footer/footer.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HeadingsComponent, FooterComponent, ScienceComponent, TechnologyComponent, SportsComponent],
  imports: [BrowserModule, HttpClientModule, MDBBootstrapModule.forRoot()],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
