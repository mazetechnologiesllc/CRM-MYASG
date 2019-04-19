import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AffiliateHomePage } from './affiliate-home';

@NgModule({
  declarations: [
    AffiliateHomePage,
  ],
  imports: [
    IonicPageModule.forChild(AffiliateHomePage),
  ],
})
export class AffiliateHomePageModule {}
