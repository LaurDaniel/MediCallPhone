import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { Platform, NavController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { MenuController } from '@ionic/angular';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Panou Principal',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Accesati Consultatia',
      url: '/conferinta',
      icon: 'videocam'
    },
  ];
  constructor(
    private menu: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    private navCtrl: NavController,
    private _location: Location
  ) {
    this.initializeApp();
  }
  // reloadComponent() {
  //   let currentUrl = this.router.url;
  //       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //       this.router.onSameUrlNavigation = 'reload';
  //       this.router.navigate([currentUrl]);
  //   }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
 
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.menu.enable(true);
          // console.log(state)
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      });
 
    });
  }
  logout() {
    this.authService.logout()
    
    this.navCtrl.navigateRoot('/login');
    this.menu.enable(false);
  }
}