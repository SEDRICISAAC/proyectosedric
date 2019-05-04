import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pantalla1RoutingModule } from './pantalla1-routing.module';
import { Pantalla1Component } from './pantalla1.component';

@NgModule({
  declarations: [Pantalla1Component],
  imports: [
    CommonModule,
    Pantalla1RoutingModule
  ]
})
export class Pantalla1Module { }
