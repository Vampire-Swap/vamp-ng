import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VampireNavbarComponent } from './components/vampire-navbar/vampire-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroBannerComponent } from './components/intro-banner/intro-banner.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

@NgModule({
  declarations: [
    AppComponent,
    VampireNavbarComponent,
    IntroBannerComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
