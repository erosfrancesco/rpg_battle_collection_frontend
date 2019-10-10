import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IconButtonComponent } from './users/icon-button/icon-button.component';


@NgModule({
  declarations: [
    HeaderComponent, BurgerMenuComponent, ThemeToggleComponent, SidenavComponent, IconButtonComponent
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

    HeaderComponent, BurgerMenuComponent, ThemeToggleComponent, SidenavComponent
  ]
})
export class ShellModule { }
