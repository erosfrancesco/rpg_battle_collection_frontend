import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { SidenavRouteService } from './sidenav/sidenav-route.service';


@NgModule({
  declarations: [
    HeaderComponent, BurgerMenuComponent, ThemeToggleComponent, SidenavComponent, SettingsButtonComponent, SidenavItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [ 
    SidenavRouteService
  ],
  exports: [
    CommonModule,
    SharedModule,
    RouterModule,

    HeaderComponent, BurgerMenuComponent, ThemeToggleComponent, SidenavComponent
  ]
})
export class ShellModule { }
