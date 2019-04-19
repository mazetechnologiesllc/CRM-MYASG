import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperAdminDashboardPage } from './super-admin-dashboard';

@NgModule({
  declarations: [
    SuperAdminDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SuperAdminDashboardPage),
  ],
})
export class SuperAdminDashboardPageModule {}
