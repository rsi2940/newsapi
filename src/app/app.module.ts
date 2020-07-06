import { BrowserModule } from "@angular/platform-browser";

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MDBBootstrapModule } from "angular-bootstrap-md";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HeadingsComponent } from "./headings/headings.component";
import { FooterComponent } from "./footer/footer.component";
import { ScienceComponent } from "./science/science.component";
import { TechnologyComponent } from "./technology/technology.component";
import { SportsComponent } from "./sports/sports.component";
import { NewsApiService } from "./news-api.service";
import { BusinessComponent } from "./business/business.component";

// routes declaration

const routes: Routes = [
  { path: "", component: HeadingsComponent },
  { path: "science", component: ScienceComponent },
  { path: "technology", component: TechnologyComponent },
  { path: "sports", component: SportsComponent },
  { path: "business", component: BusinessComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeadingsComponent,
    FooterComponent,
    ScienceComponent,
    TechnologyComponent,
    SportsComponent,
    BusinessComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NewsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
