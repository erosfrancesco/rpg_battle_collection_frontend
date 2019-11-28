import { NgModule } from '@angular/core';

import {  
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatCardModule, MatIconModule, 
  MatInputModule, MatFormFieldModule, MatTabsModule, MatSelectModule, MatExpansionModule, MatDividerModule, 
  MatChipsModule, MatListModule, MatSidenavModule, MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule, 
  MatSlideToggleModule
} from '@angular/material';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ButtonLinkComponent } from './button-link/button-link.component';
import { ThemeService } from './theme.service';
import { JwtInterceptor } from '../user/interceptors/jwt.interceptor';


@NgModule({
  declarations: [
    ButtonLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    HttpClientModule,

    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSnackBarModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTabsModule, MatProgressSpinnerModule,
    MatSelectModule, MatExpansionModule, MatDividerModule, MatChipsModule, MatListModule, MatSidenavModule,
    MatSlideToggleModule
  ],
  providers: [ 
    ThemeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSnackBarModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTabsModule, MatProgressSpinnerModule,
    MatSelectModule, MatExpansionModule, MatDividerModule, MatChipsModule, MatListModule, MatSlideToggleModule,
    MatSidenavModule, MatDialogModule, HttpClientModule,
    CommonModule, 
    ButtonLinkComponent
  ]
})
export class SharedModule { }
