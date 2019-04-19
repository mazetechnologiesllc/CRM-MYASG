import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListManagerPage } from './list-manager';

@NgModule({
  declarations: [
    ListManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(ListManagerPage),
  ],
})
export class ListManagerPageModule {}
