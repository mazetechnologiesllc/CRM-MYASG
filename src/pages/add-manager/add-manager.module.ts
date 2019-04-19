import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddManagerPage } from './add-manager';

@NgModule({
  declarations: [
    AddManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddManagerPage),
  ],
})
export class AddManagerPageModule {}
