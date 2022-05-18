(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\XAMPP\htdocs\MedicallPhone\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3LUQ":
    /*!*******************************************!*\
      !*** ./src/app/services/alert.service.ts ***!
      \*******************************************/

    /*! exports provided: AlertService */

    /***/
    function LUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(toastController) {
          _classCallCheck(this, AlertService);

          this.toastController = toastController;
        }

        _createClass(AlertService, [{
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 5000,
                        position: 'top',
                        color: 'dark'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlertService);
      /***/
    },

    /***/
    "5zL6":
    /*!*****************************************!*\
      !*** ./src/app/services/env.service.ts ***!
      \*****************************************/

    /*! exports provided: EnvService */

    /***/
    function zL6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvService", function () {
        return EnvService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EnvService = /*#__PURE__*/_createClass(function EnvService() {
        _classCallCheck(this, EnvService);

        this.API_URL = '';
      });

      EnvService.ctorParameters = function () {
        return [];
      };

      EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EnvService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/event.service */
      "fTLw");
      /* harmony import */


      var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @awesome-cordova-plugins/android-permissions/ngx */
      "YCdq");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(menu, platform, splashScreen, statusBar, authService, router, alertService, navCtrl, _location, androidPermissions, events) {
          _classCallCheck(this, AppComponent);

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
          this.appPages = [{
            title: 'Panou Principal',
            url: '/home',
            icon: 'home'
          }, {
            title: 'Programare Consultatie',
            url: '/programari',
            icon: 'clipboard'
          }, {
            title: 'Asociere Cont',
            url: '/profile',
            icon: 'people'
          }, {
            title: 'Accesare Consultatie',
            url: '/conferinta',
            icon: 'videocam'
          }, {
            title: 'Istoric Consultatii',
            url: '/arhiva',
            icon: 'documents'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide(); // if(this.platform.is('android')){
              // // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
              // //   result => console.log('Has permission?',result.hasPermission),
              // //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
              // // );
              // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.RECORD_AUDIO, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
              // } 


              _this.authService.authenticationState.subscribe(function (state) {
                if (state) {
                  _this.menu.enable(true); // console.log(state)


                  _this.avatar = localStorage.getItem('avatar');
                  _this.user_name = localStorage.getItem('user_name');
                  console.log(_this.avatar);

                  _this.router.navigate(['home']);
                } else {
                  _this.router.navigate(['login']);
                }
              });

              _this.events.getObservable().subscribe(function (data) {
                _this.user = JSON.parse(data['user']);
                console.log(_this.user);

                if (!_this.user_name) {
                  localStorage.setItem('user_name', _this.user.last_name + " " + _this.user.name);
                  localStorage.setItem('avatar', _this.user.avatar);
                  _this.avatar = localStorage.getItem('avatar');
                  _this.user_name = localStorage.getItem('user_name');
                } //  console.log(this.user.avatar)

              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.navCtrl.navigateRoot('/login');
            this.menu.enable(false);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"]
        }, {
          type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_10__["EventService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(auth) {
          _classCallCheck(this, AuthGuard);

          this.auth = auth;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return this.auth.isAuthenticated();
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- <ion-split-pane> -->\r\n    <ion-menu>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Meniu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content style=\"text-align: center;\">\r\n        \r\n        <ion-avatar style=\"margin:0 auto; margin-top:25px !important;margin-bottom:25px !important;transform:scale(1.5);\"><ion-img src=\"https://infraspaces.ams3.digitaloceanspaces.com/medicover/avatars/user/{{avatar}}\"></ion-img></ion-avatar>\r\n        <ion-label ><strong>{{user_name}}</strong></ion-label>\r\n        <!-- <ion-label ><strong>{{user}}</strong></ion-label> -->\r\n       <!-- {{user.name}} -->\r\n        <!-- style=\"padding-bottom:10px;border-bottom: 1px solid rgb(223, 219, 219);\" -->\r\n        <ion-list style=\"margin-top:15px;\">\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{p.title}}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-item (click)=\"logout()\">\r\n            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\r\n            <ion-label>\r\n             Deconecteaza-te\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n  \r\n    <ion-router-outlet main></ion-router-outlet>\r\n  <!-- </ion-split-pane> -->\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: jwtOptionsFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function () {
        return jwtOptionsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @mobiscroll/angular */
      "2l+E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "WdVq");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @awesome-cordova-plugins/android-permissions/ngx */
      "YCdq");
      /* harmony import */


      var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-calendars */
      "ed8r"); // import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


      function jwtOptionsFactory(storage) {
        return {
          tokenGetter: function tokenGetter() {
            return storage.get('access_token');
          },
          whitelistedDomains: ['localhost:5000']
        };
      }

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_16__["DatePickerModule"], _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["MbscModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JwtModule"].forRoot({
          jwtOptionsProvider: {
            provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_14__["JWT_OPTIONS"],
            useFactory: jwtOptionsFactory,
            deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"]]
          }
        }), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({
          mode: 'md'
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__["AndroidPermissions"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }, _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__["BarcodeScanner"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./env.service */
      "5zL6");
      /* harmony import */


      var _event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./event.service */
      "fTLw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var TOKEN_KEY = 'access_token';

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(env, http, helper, storage, events, router, plt, alertController, navCtrl) {
          var _this2 = this;

          _classCallCheck(this, AuthenticationService);

          this.env = env;
          this.http = http;
          this.helper = helper;
          this.storage = storage;
          this.events = events;
          this.router = router;
          this.plt = plt;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.isLoggedIn = false; // url = "https://medicall.medicover.ro";
          // url = "https://probe.infragroup.ro";

          this.url = "http://127.0.0.1:8000";
          this.user = null; // user_id = null;

          this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
          this.plt.ready().then(function () {
            _this2.checkToken();
          });
        }

        _createClass(AuthenticationService, [{
          key: "checkToken",
          value: function checkToken() {
            var _this3 = this;

            this.storage.get(TOKEN_KEY).then(function (token) {
              if (token) {
                var decoded = _this3.helper.decodeToken(token);

                var isExpired = _this3.helper.isTokenExpired(token);

                if (!isExpired) {
                  _this3.user = decoded;

                  _this3.authenticationState.next(true);
                } else {
                  _this3.storage.remove(TOKEN_KEY);
                }
              }
            });
          }
        }, {
          key: "register",
          value: function register(credentials) {
            return this.http.post("".concat(this.url, "/api/register"), credentials);
          }
        }, {
          key: "login",
          value: function login(credentials) {
            var _this4 = this;

            return this.http.post("".concat(this.url, "/api/login"), credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (res) {
              if (res['message'] == 'Verificare') return _this4.router.navigateByUrl('/verify');else {
                _this4.storage.set(TOKEN_KEY, res['access_token']);

                _this4.user = _this4.helper.decodeToken(res['access_token']);

                _this4.authenticationState.next(true);

                localStorage.setItem("user_id", res['user'].id); // alert(res['user'])

                _this4.events.changeUser({
                  user: JSON.stringify(res['user'])
                });
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
              _this4.showAlert('Autentificarea nu a reusit! Fi sigur ca email-ul si parola sunt corecte!');

              throw new Error(e);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            this.storage.remove(TOKEN_KEY).then(function () {
              _this5.authenticationState.next(false);
            }); // const headers = new HttpHeaders({
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
        }, {
          key: "getSpecialData",
          value: function getSpecialData() {
            var _this6 = this;

            return this.http.get("".concat(this.url, "/api/special")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (e) {
              var status = e.status;

              if (status === 401) {
                _this6.showAlert('You are not authorized for this!');

                _this6.logout();
              }

              throw new Error(e);
            }));
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authenticationState.value;
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            var alert = this.alertController.create({
              message: msg,
              header: '',
              buttons: ['OK']
            });
            alert.then(function (alert) {
              return alert.present();
            });
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _env_service__WEBPACK_IMPORTED_MODULE_8__["EnvService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationService);
      /***/
    },

    /***/
    "fTLw":
    /*!*******************************************!*\
      !*** ./src/app/services/event.service.ts ***!
      \*******************************************/

    /*! exports provided: EventService */

    /***/
    function fTLw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var EventService = /*#__PURE__*/function () {
        function EventService() {
          _classCallCheck(this, EventService);

          this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(EventService, [{
          key: "changeUser",
          value: function changeUser(data) {
            this.fooSubject.next(data);
          }
        }, {
          key: "getObservable",
          value: function getObservable() {
            return this.fooSubject;
          }
        }]);

        return EventService;
      }();

      EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventService);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: './public/login/login.module#LoginPageModule'
      }, {
        path: 'register',
        loadChildren: './public/register/register.module#RegisterPageModule'
      }, {
        path: 'home',
        loadChildren: './pages/customer/home/home.module#HomePageModule',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
      }, {
        path: 'conferinta',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-customer-conferinta-conferinta-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-customer-conferinta-conferinta-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/customer/conferinta/conferinta.module */
          "stGv")).then(function (m) {
            return m.ConferintaPageModule;
          });
        }
      }, {
        path: 'programari',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-customer-programari-programari-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-customer-programari-programari-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/customer/programari/programari.module */
          "zqwK")).then(function (m) {
            return m.ProgramariPageModule;
          });
        }
      }, {
        path: 'arhiva',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-customer-arhiva-arhiva-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-customer-arhiva-arhiva-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/customer/arhiva/arhiva.module */
          "QiiV")).then(function (m) {
            return m.ArhivaPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-customer-profile-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-customer-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/customer/profile/profile.module */
          "4cRM")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'verify',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | public-verify-verify-module */
          "public-verify-verify-module").then(__webpack_require__.bind(null,
          /*! ./public/verify/verify.module */
          "dfRO")).then(function (m) {
            return m.VerifyPageModule;
          });
        }
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./pages/customer/home/home.module": ["yI1/", "common", "pages-customer-home-home-module"],
        "./public/login/login.module": ["6H4R", "public-login-login-module"],
        "./public/register/register.module": ["2i3i", "public-register-register-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map