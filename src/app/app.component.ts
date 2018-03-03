import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: "HomePage", icon: 'home' },
      { title: 'Minha conta', component: "ProfilePage", icon: 'contact' },
      { title: 'Eventos', component: "EventPage", icon: 'calendar' },
      { title: 'Configurações', component: "SettingsPage", icon: 'cog' },
      { title: 'Fornecedores', component: "ListPage", icon: 'wine' },
      { title: 'Buffets', component: "BuffetsPage", icon: 'navigate' },
      { title: 'Sobre', component: "AboutPage", icon: 'information-circle' },
      { title: 'Classifique o app', component: "HomePage", icon: 'star' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    let alert = this.alertCtrl.create({
      title: 'Exit',
      message: 'Do you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.nav.setRoot("LoginPage");
          }
        }
      ]
    });
    alert.present();
  }
}
