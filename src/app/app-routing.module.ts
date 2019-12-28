import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  { path: '', component:RentalComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
