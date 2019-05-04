import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantallaRoutingModule } from './pantalla-routing.module';
import { PantallaComponent } from './pantalla.component';

@NgModule({
  declarations: [PantallaComponent],
  imports: [
    CommonModule,
    PantallaRoutingModule
  ]
})
export class PantallaModule { }
