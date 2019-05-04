import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaComponent } from './pantalla.component';

const routes: Routes = [
  { path:'',component:PantallaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallaRoutingModule { }
