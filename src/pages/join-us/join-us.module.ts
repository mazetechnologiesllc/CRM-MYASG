import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { JoinUsPage } from './join-us';

@NgModule({
  declarations: [
    JoinUsPage,
  ],
  imports: [
    ReactiveFormsModule,
    BrMaskerModule,
    IonicPageModule.forChild(JoinUsPage),
  ],
})
export class JoinUsPageModule {}
