import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddClientLeadPage } from './add-client-lead';

@NgModule({
  declarations: [
    AddClientLeadPage,
  ],
  imports: [
    IonicPageModule.forChild(AddClientLeadPage),
  ],
})
export class AddClientLeadPageModule {}
