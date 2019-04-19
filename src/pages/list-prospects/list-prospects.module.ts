import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProspectsPage } from './list-prospects';

@NgModule({
  declarations: [
    ListProspectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListProspectsPage),
  ],
})
export class ListProspectsPageModule {}
