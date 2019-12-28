import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalComponent } from './rental.component';
import { RentalItemComponent } from './rental-item/rental-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalService } from './shared/rental.service';


@NgModule({
  declarations: [
    RentalComponent,
    RentalItemComponent,
    RentalListComponent
  ],
  imports: [ CommonModule ],
  providers: [ RentalService ]
})
export class RentalModule { }
