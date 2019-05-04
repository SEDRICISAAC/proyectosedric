import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'pantalla',loadChildren:'./pantalla/pantalla.module#PantallaModule'},
  { path:'catalogo',loadChildren:'./catalogo/catalogo.module#CatalogoModule'},
  {path:'not.found',redirectTo:'/pantalla', pathMatch:'full'},
  {path:'**',redirectTo:'/pantalla',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
