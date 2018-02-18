import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { BuffetsPage } from '../pages/buffets/buffets';
import { FornecedoresPage } from '../pages/fornecedores/fornecedores';
import { FornecedorPage } from '../pages/fornecedor/fornecedor';
import { BuffetsmapsPage } from '../pages/buffetsmaps/buffetsmaps';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    SettingsPage,
    BuffetsPage,
    FornecedoresPage,
    FornecedorPage,
    BuffetsmapsPage,
    AboutPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    SettingsPage,
    BuffetsPage,
    FornecedoresPage,
    FornecedorPage,
    BuffetsmapsPage,
    AboutPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
