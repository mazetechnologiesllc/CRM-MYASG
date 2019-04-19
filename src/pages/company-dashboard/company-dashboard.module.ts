import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyDashboardPage } from './company-dashboard';

@NgModule({
  declarations: [
    CompanyDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyDashboardPage),
  ],
})
export class CompanyDashboardPageModule {}
