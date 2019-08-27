import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';


@NgModule({
  declarations: [
    HeaderComponent, PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [ 
  ],
  exports: [
    CommonModule,
    SharedModule,
    RouterModule,

    HeaderComponent, PrimaryButtonComponent
  ]
})
export class ShellModule { }
