import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { HomeComponent } from './public/master-page/home/home.component';
import { MisionComponent } from './public/mision/mision.component';
import { VisionComponent } from './public/vision/vision.component';
import { ContactoComponent } from './public/contacto/contacto.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    
  },
  {
    path: 'vision',
    component: VisionComponent
  },
  {
    path: 'mision',
    component: MisionComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/home'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
