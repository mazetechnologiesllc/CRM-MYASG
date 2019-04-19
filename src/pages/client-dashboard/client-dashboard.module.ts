import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientDashboardPage } from './client-dashboard';

@NgModule({
  declarations: [
    ClientDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientDashboardPage),
  ],
})
export class ClientDashboardPageModule {}
