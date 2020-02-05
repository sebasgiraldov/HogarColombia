import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { FooterComponent } from './public/footer/footer.component';
import { HomeComponent } from './public/master-page/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { MisionComponent } from './public/mision/mision.component';
import { VisionComponent } from './public/vision/vision.component';
import { ContactoComponent } from './public/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MisionComponent,
    VisionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
