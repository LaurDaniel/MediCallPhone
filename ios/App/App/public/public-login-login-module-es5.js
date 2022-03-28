(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"], {
    /***/
    "6H4R":
    /*!**********************************************!*\
      !*** ./src/app/public/login/login.module.ts ***!
      \**********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function H4R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "JEiY");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
      }];

      var LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], // LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "JEiY":
    /*!********************************************!*\
      !*** ./src/app/public/login/login.page.ts ***!
      \********************************************/

    /*! exports provided: LoginPage */

    /***/
    function JEiY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "h3rV");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "cJRB");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(menu, router, navCtrl, formBuilder, authService, modalController) {
          _classCallCheck(this, LoginPage);

          this.menu = menu;
          this.router = router;
          this.navCtrl = navCtrl;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.modalController = modalController;
          this.menu.enable(false);
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.credentialsForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            // this.showAlert('Autentificarea nu a reusit! Fi sigur ca email-ul si parola sunt corecte!');
            this.authService.login(this.credentialsForm.value).subscribe();
          }
        }, {
          key: "dismissLogin",
          value: function dismissLogin() {
            this.modalController.dismiss();
          }
        }, {
          key: "registerModal",
          value: function registerModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dismissLogin();
                      return _context.abrupt("return", this.router.navigateByUrl('/register'));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "cJRB":
    /*!**********************************************!*\
      !*** ./src/app/public/login/login.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function cJRB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-login {\n  background-image: url(\"/assets/images/login-img.jpg\");\n  padding: 60px 0px;\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  border-radius: 0px 0px 50% 50%;\n}\n\n.bg-login-overlay {\n  position: absolute;\n  background: linear-gradient(90deg, #273c92, #293e92);\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 0px 0px 50% 50%;\n  opacity: 0.8;\n}\n\n.logo-admin {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0px auto;\n  width: 84px;\n  height: 84px;\n  line-height: 84px;\n  background: #fff;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFEQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxvREFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iZy1sb2dpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbG9naW4taW1nLmpwZycpO1xyXG4gICAgcGFkZGluZzogNjBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNTAlIDUwJTtcclxufVxyXG5cclxuLmJnLWxvZ2luLW92ZXJsYXl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzI3M2M5MiwjMjkzZTkyKTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1MCUgNTAlO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4ubG9nby1hZG1pbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDg0cHg7XHJcbiAgICBoZWlnaHQ6IDg0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogODRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2IoOTkgOTkgOTkgLyAyMCUpO1xyXG4gIH1cclxuIl19 */";
      /***/
    },

    /***/
    "h3rV":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function h3rV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ion-content style=\"text-align: center;margin-top:50px;\">\r\n \r\n  <div style=\"padding: 40px; margin-top: 40px;\"> \r\n    <div class=\"card overflow-hidden\">\r\n        <div class=\"bg-login text-center\">\r\n            <div class=\"bg-login-overlay\"></div>\r\n            <div class=\"position-relative\">\r\n                <h5 class=\"text-white font-size-20\">Bine ai venit !</h5>\r\n                <p class=\"text-white-50 mb-0\">Autentifica-te pentru a continua.</p>\r\n                <p class=\"logo logo-admin mt-4\">\r\n                    <img src=\"assets/images/logo_raport_medical.png\" alt=\"\" style=\"max-width: 60%;\" height=\"43\">\r\n</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body pt-5\">\r\n          <div class=\"p-2\">\r\n  <!-- <img src=\"assets/images/logo_progaz.png\" style=\"max-width: 60%;\"> -->\r\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\r\n \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Adresa de e-mail</ion-label>\r\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Parola</ion-label>\r\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n    </ion-item>\r\n \r\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!credentialsForm.valid\">Autentificare</ion-button>\r\n    <!-- <ion-button expand=\"full\" type=\"button\" (click)=\"register()\" [disabled]=\"!credentialsForm.valid\">Register</ion-button> -->\r\n \r\n  </form>\r\n  <ion-button expand=\"full\" (click)=\"registerModal()\">Cont Nou</ion-button>\r\n</div>\r\n</div> \r\n</div> \r\n</div> \r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=public-login-login-module-es5.js.map