(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\XAMPP\htdocs\MedicallPhone\src\main.ts */"zUnb");


/***/ }),

/***/ "3LUQ":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let AlertService = class AlertService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 5000,
                position: 'top',
                color: 'dark'
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "5zL6":
/*!*****************************************!*\
  !*** ./src/app/services/env.service.ts ***!
  \*****************************************/
/*! exports provided: EnvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvService", function() { return EnvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let EnvService = class EnvService {
    constructor() {
        this.API_URL = '';
    }
};
EnvService.ctorParameters = () => [];
EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnvService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ "ej43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert.service */ "3LUQ");
/* harmony import */ var _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/user-agent/ngx */ "poBw");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/event.service */ "fTLw");
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ "YCdq");














let AppComponent = class AppComponent {
    constructor(menu, platform, splashScreen, statusBar, authService, router, alertService, navCtrl, _location, androidPermissions, events, userAgent) {
        this.menu = menu;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this._location = _location;
        this.androidPermissions = androidPermissions;
        this.events = events;
        this.userAgent = userAgent;
        this.appPages = [
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
        this.initializeApp();
    }
    setUserAgent(window, userAgent) {
        if (window.navigator.userAgent != userAgent) {
            var userAgentProp = { get: function () { return userAgent; } };
            try {
                Object.defineProperty(window.navigator, 'user-agent', userAgentProp);
            }
            catch (e) {
                window.navigator = Object.create(navigator, {
                    userAgent: userAgentProp
                });
            }
        }
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.platform.is('ios')) {
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
                    this.avatar = localStorage.getItem('avatar');
                    this.user_name = localStorage.getItem('user_name');
                    console.log(this.avatar);
                    this.router.navigate(['home']);
                }
                else {
                    this.router.navigate(['login']);
                }
            });
            this.events.getObservable().subscribe((data) => {
                this.user = JSON.parse(data['user']);
                console.log(this.user);
                if (!this.user_name) {
                    localStorage.setItem('user_name', this.user.last_name + " " + this.user.name);
                    localStorage.setItem('avatar', this.user.avatar);
                    this.avatar = localStorage.getItem('avatar');
                    this.user_name = localStorage.getItem('user_name');
                }
                //  console.log(this.user.avatar)
            });
        });
    }
    logout() {
        this.authService.logout();
        this.navCtrl.navigateRoot('/login');
        this.menu.enable(false);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"] },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_11__["EventService"] },
    { type: _ionic_native_user_agent_ngx__WEBPACK_IMPORTED_MODULE_10__["UserAgent"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");



let AuthGuard = class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return this.auth.isAuthenticated();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <!-- <ion-split-pane> -->\r\n    <ion-menu>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Meniu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content style=\"text-align: center;\">\r\n        \r\n        <ion-avatar style=\"margin:0 auto; margin-top:25px !important;margin-bottom:25px !important;transform:scale(1.5);\"><ion-img src=\"https://infraspaces.ams3.digitaloceanspaces.com/medicover/avatars/user/{{avatar}}\"></ion-img></ion-avatar>\r\n        <ion-label ><strong>{{user_name}}</strong></ion-label>\r\n        <!-- <ion-label ><strong>{{user}}</strong></ion-label> -->\r\n       <!-- {{user.name}} -->\r\n        <!-- style=\"padding-bottom:10px;border-bottom: 1px solid rgb(223, 219, 219);\" -->\r\n        <ion-list style=\"margin-top:15px;\">\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{p.title}}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-item (click)=\"logout()\">\r\n            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\r\n            <ion-label>\r\n             Deconecteaza-te\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n  \r\n    <ion-router-outlet main></ion-router-outlet>\r\n  <!-- </ion-split-pane> -->\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtOptionsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/angular */ "2l+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ "YCdq");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "ed8r");

















// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
function jwtOptionsFactory(storage) {
    return {
        tokenGetter: () => {
            return storage.get('access_token');
        },
        whitelistedDomains: ['localhost:5000']
    };
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [
            _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_16__["DatePickerModule"],
            _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["MbscModule"],
            // InterceptorModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JwtModule"].forRoot({
                jwtOptionsProvider: {
                    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JWT_OPTIONS"],
                    useFactory: jwtOptionsFactory,
                    deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"]],
                }
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({ mode: 'md' }),
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__["AndroidPermissions"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__["BarcodeScanner"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env.service */ "5zL6");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event.service */ "fTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











const TOKEN_KEY = 'access_token';
let AuthenticationService = class AuthenticationService {
    constructor(env, http, helper, storage, events, router, plt, alertController, navCtrl) {
        this.env = env;
        this.http = http;
        this.helper = helper;
        this.storage = storage;
        this.events = events;
        this.router = router;
        this.plt = plt;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.isLoggedIn = false;
        this.url = "https://medicall.medicover.ro";
        // url = "https://probe.infragroup.ro";
        // url = "http://127.0.0.1:8000";
        this.user = null;
        // user_id = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }
    checkToken() {
        this.storage.get(TOKEN_KEY).then(token => {
            if (token) {
                let decoded = this.helper.decodeToken(token);
                let isExpired = this.helper.isTokenExpired(token);
                if (!isExpired) {
                    this.user = decoded;
                    this.authenticationState.next(true);
                }
                else {
                    this.storage.remove(TOKEN_KEY);
                }
            }
        });
    }
    register(credentials) {
        return this.http.post(`${this.url}/api/register`, credentials);
    }
    login(credentials) {
        return this.http.post(`${this.url}/api/login`, credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(res => {
            if (res['message'] == 'Verificare')
                this.showAlert('Pentru a intra in contul deja existent, este necesar sa accesati link-ul pe care l-ati primit pe adresa de e-mail si sa va conectati.Multumim!');
            else {
                this.storage.set(TOKEN_KEY, res['access_token']);
                this.user = this.helper.decodeToken(res['access_token']);
                this.authenticationState.next(true);
                localStorage.setItem("user_id", res['user'].id);
                // alert(res['user'])
                this.events.changeUser({
                    user: JSON.stringify(res['user'])
                });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(e => {
            this.showAlert('Autentificarea nu a reusit! Fi sigur ca email-ul si parola sunt corecte!');
            throw new Error(e);
        }));
    }
    logout() {
        this.storage.remove(TOKEN_KEY).then(() => {
            this.authenticationState.next(false);
        });
        // const headers = new HttpHeaders({
        //   'Authorization': this.token["token_type"]+" "+this.token["access_token"]
        // });
        // return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
        // .pipe(
        //   tap(data => {
        //     this.storage.remove("token");
        //     this.isLoggedIn = false;
        //     delete this.token;
        //     return data;
        //   })
        // )
    }
    getSpecialData() {
        return this.http.get(`${this.url}/api/special`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(e => {
            let status = e.status;
            if (status === 401) {
                this.showAlert('You are not authorized for this!');
                this.logout();
            }
            throw new Error(e);
        }));
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    showAlert(msg) {
        let alert = this.alertController.create({
            message: msg,
            header: '',
            buttons: ['OK']
        });
        alert.then(alert => alert.present());
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "fTLw":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let EventService = class EventService {
    constructor() {
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    changeUser(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
};
EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
    {
        path: 'home', loadChildren: './pages/customer/home/home.module#HomePageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'conferinta',
        loadChildren: () => Promise.all(/*! import() | pages-customer-conferinta-conferinta-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-customer-conferinta-conferinta-module")]).then(__webpack_require__.bind(null, /*! ./pages/customer/conferinta/conferinta.module */ "stGv")).then(m => m.ConferintaPageModule)
    },
    {
        path: 'programari',
        loadChildren: () => Promise.all(/*! import() | pages-customer-programari-programari-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-customer-programari-programari-module")]).then(__webpack_require__.bind(null, /*! ./pages/customer/programari/programari.module */ "zqwK")).then(m => m.ProgramariPageModule)
    },
    {
        path: 'arhiva',
        loadChildren: () => Promise.all(/*! import() | pages-customer-arhiva-arhiva-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-customer-arhiva-arhiva-module")]).then(__webpack_require__.bind(null, /*! ./pages/customer/arhiva/arhiva.module */ "QiiV")).then(m => m.ArhivaPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | pages-customer-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-customer-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./pages/customer/profile/profile.module */ "4cRM")).then(m => m.ProfilePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/customer/home/home.module": [
		"yI1/",
		"common",
		"pages-customer-home-home-module"
	],
	"./public/login/login.module": [
		"6H4R",
		"public-login-login-module"
	],
	"./public/register/register.module": [
		"2i3i",
		"public-register-register-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map