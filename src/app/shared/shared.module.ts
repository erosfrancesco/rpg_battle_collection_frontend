import { NgModule } from '@angular/core';

import {  
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatCardModule, MatIconModule, 
  MatInputModule, MatFormFieldModule, MatTabsModule, MatSelectModule, MatExpansionModule, MatDividerModule, 
  MatChipsModule, MatListModule, MatSidenavModule, MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule
} from '@angular/material';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonLinkComponent } from './button-link/button-link.component';


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
    MatSelectModule, MatExpansionModule, MatDividerModule, MatChipsModule, MatListModule,
  ],
  providers: [ 
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSnackBarModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTabsModule, MatProgressSpinnerModule,
    MatSelectModule, MatExpansionModule, MatDividerModule, MatChipsModule, MatListModule,
    MatSidenavModule, MatDialogModule, HttpClientModule,
    CommonModule, 
    ButtonLinkComponent
  ]
})
export class SharedModule { }
