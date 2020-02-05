import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homedir } from 'os';
import { HeroComponent } from './public/master-page/hero/hero.component';


const routes: Routes = [
  {
    path: 'home',
    component: HeroComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
