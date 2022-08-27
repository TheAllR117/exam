import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';



@NgModule({
  declarations: [
    BasicosComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
