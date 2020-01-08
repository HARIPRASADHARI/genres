import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule
    
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
