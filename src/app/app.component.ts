import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { Platform, NavController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { MenuController } from '@ionic/angular';
import { UserAgent } from '@ionic-native/user-agent/ngx';
import { EventService } from 'src/app/services/event.service';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
 
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
      title: 'Programare Consultatie',
      url: '/programari',
      icon: 'clipboard'
    },
    {
      title: 'Asociere Cont',
      url: '/profile',
      icon: 'people'
    },
    {
      title: 'Accesare Consultatie',
      url: '/conferinta',
      icon: 'videocam'
    },
    {
      title: 'Istoric Consultatii',
      url: '/arhiva',
      icon: 'documents'
    },
  ];
  public user_name : any;
  public user : any;
  public avatar : any;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    private navCtrl: NavController,
    private _location: Location,
    private androidPermissions: AndroidPermissions,
    private events: EventService,
    private userAgent: UserAgent
  ) {
    this.initializeApp();
  }
  // setUserAgent(window, userAgent) {
  //   if (window.navigator.userAgent != userAgent) {
  //       var userAgentProp = { get: function () { return userAgent; } };
  //       try {
  //           Object.defineProperty(window.navigator, 'user-agent', userAgentProp);
  //       } catch (e) {
  //           window.navigator = Object.create(navigator, {
  //               userAgent: userAgentProp
  //           });
  //       }
  //   }
  // }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(this.platform.is('ios')){
        this.userAgent.set('Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1');
      //   this.setUserAgent(window, 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1');
      //   this.setUserAgent(
      //     document.querySelector('iframe').contentWindow, 
      //     'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1'
      // );
      // // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
      // //   result => console.log('Has permission?',result.hasPermission),
      // //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
      // // );
      
      // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.RECORD_AUDIO, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
      } 
     
     
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.menu.enable(true);
          // console.log(state)
          this.avatar=localStorage.getItem('avatar');
          this.user_name = localStorage.getItem('user_name');
          console.log(this.avatar);
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      });
      this.events.getObservable().subscribe((data) => {
        
        this.user=JSON.parse(data['user']);
        console.log(this.user);
        if(!this.user_name){
        localStorage.setItem('user_name',this.user.last_name+" "+this.user.name);
        localStorage.setItem('avatar',this.user.avatar);
        this.avatar=localStorage.getItem('avatar');
        this.user_name = localStorage.getItem('user_name');
        }
      
      
      //  console.log(this.user.avatar)
    });

    });
 
  }
  logout() {
    this.authService.logout()
    
    this.navCtrl.navigateRoot('/login');
    this.menu.enable(false);
  }
}