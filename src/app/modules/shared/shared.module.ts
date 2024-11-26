import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseCardComponent } from '../../components/house-card/house-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    HouseCardComponent
  ],
  providers: [
    // { provide: HousingService, useExisting: FakeHousingService }
  ],
  exports: [
    CommonModule,
    FormsModule,
    HouseCardComponent
  ]
})
export class SharedModule { }
