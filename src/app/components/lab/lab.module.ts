import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabRoutingModule } from './lab-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatAutocompleteModule } from '@angular/material/autocomplete';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    LabRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class LabModule { }
