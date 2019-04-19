import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListLeadPage } from './list-lead';

@NgModule({
  declarations: [
    ListLeadPage,
  ],
  imports: [
    IonicPageModule.forChild(ListLeadPage),
  ],
})
export class ListLeadPageModule {}
