import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeadingsComponent } from './headings/headings.component';
import { FooterComponent } from './footer/footer.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';

// routes declaration

const routes: Routes = [
  { path: '', redirectTo: '/business', pathMatch: 'full' },
  { path: 'science', component: ScienceComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'business', component: HeadingsComponent },
  { path: '**', redirectTo: '/business', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeadingsComponent,
    FooterComponent,
    ScienceComponent,
    TechnologyComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
