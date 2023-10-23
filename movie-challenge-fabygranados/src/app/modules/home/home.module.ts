import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MovieTableComponent } from 'src/app/components';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    HomeComponent, 
    MovieTableComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatPaginatorModule,
  ]
})
export class HomeModule { }
