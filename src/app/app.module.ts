import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Camera } from '@ionic-native/camera';

import { AuthenticationProvider } from '../providers/authentication/authentication';
import { LoadingProvider } from '../providers/loading/loading';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';

import { MyApp } from './app.component';
import { AffiliateProvider } from '../providers/affiliate/affiliate';
import { LeadProvider } from '../providers/lead/lead';
import { AppConfig } from './app.config';
import { ManagerProvider } from '../providers/manager/manager';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { WebLeadProvider } from '../providers/web-lead/web-lead';
import { StateProvider } from '../providers/state/state';
import { ServiceProvider } from '../providers/service/service';
import { ClientProvider } from '../providers/client/client';
import { ProspectsProvider } from '../providers/prospects/prospects';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    IonicStorageModule.forRoot()    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenticationProvider,
    LoadingProvider,
    LocalStorageProvider,
    Camera,
    AffiliateProvider,
    LeadProvider,
    AppConfig,
    ManagerProvider,
    WebLeadProvider,
    StateProvider,
    ServiceProvider,
    ClientProvider,
    ProspectsProvider
  ]
})
export class AppModule { }
