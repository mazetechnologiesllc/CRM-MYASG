import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLeadPage } from './add-lead';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddLeadPage,
  ],
  imports: [    
    BrMaskerModule,
    ReactiveFormsModule,
    IonicPageModule.forChild(AddLeadPage),
  ],
})
export class AddLeadPageModule {}
