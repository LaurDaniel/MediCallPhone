(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-register-register-module"], {
    /***/
    "2i3i":
    /*!****************************************************!*\
      !*** ./src/app/public/register/register.module.ts ***!
      \****************************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function i3i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register-routing.module */
      "8il3");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./register.page */
      "a2d4");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
      }];

      var RegisterPageModule = /*#__PURE__*/_createClass(function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      });

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegisterPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "8il3":
    /*!************************************************************!*\
      !*** ./src/app/public/register/register-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function il3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "a2d4");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = /*#__PURE__*/_createClass(function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      });

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "BEhf":
    /*!****************************************************!*\
      !*** ./src/app/public/register/register.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function BEhf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "a2d4":
    /*!**************************************************!*\
      !*** ./src/app/public/register/register.page.ts ***!
      \**************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function a2d4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "ga7b");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "BEhf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _confirmed_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./confirmed.validator */
      "fYkV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(modalController, authService, navCtrl, formBuilder, router, alertService) {
          _classCallCheck(this, RegisterPage);

          this.modalController = modalController;
          this.authService = authService;
          this.navCtrl = navCtrl;
          this.formBuilder = formBuilder;
          this.router = router;
          this.alertService = alertService;
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.credentialsForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9]{10}$')]],
              mrn: ['', []],
              confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              cnp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('(1[1-9][0-9]|2[1-9][0-9]|50[0-9]|60[9]|7[1-9][0-9]|8[1-9][0-9]){1}(0[1-9]|1[0-2]){1}(0[1-9]|1[0-9]|2[0-9]|3[0-1]){1}[0-9]{6}$')]]
            }, {
              validator: Object(_confirmed_validator__WEBPACK_IMPORTED_MODULE_7__["ConfirmedValidator"])('password', 'confirm_password')
            });
          } // Dismiss Register Modal

        }, {
          key: "dismissRegister",
          value: function dismissRegister() {
            this.modalController.dismiss();
          } // On Login button tap, dismiss Register modal and open login Modal

        }, {
          key: "loginModal",
          value: function loginModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.router.navigateByUrl('/login'));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "f",
          get: function get() {
            return this.credentialsForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            // console.log('bine');
            this.authService.register(this.credentialsForm.value).subscribe(function (data) {
              if (data['message'] != 'Contul a fost creat cu succes!') _this.alertService.presentToast(data['message']);else {
                _this.alertService.presentToast(data['message']);

                return _this.router.navigateByUrl('/login');
              }
            });
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "fYkV":
    /*!********************************************************!*\
      !*** ./src/app/public/register/confirmed.validator.ts ***!
      \********************************************************/

    /*! exports provided: ConfirmedValidator */

    /***/
    function fYkV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function () {
        return ConfirmedValidator;
      });

      function ConfirmedValidator(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
          }

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              confirmedValidator: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "ga7b":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/register/register.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function ga7b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    \r\n    <!-- <ion-button item-end color=\"danger\" (click)=\"dismissRegister()\">x</ion-button> -->\r\n    <ion-title>Inregistrare</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\r\n  <!-- <form [formGroup]=\"credentialsForm2\" (ngSubmit)=\"register(form)\" > -->\r\n    <ion-item>\r\n        <ion-label position=\"floating\">Adresa de e-mail*</ion-label>\r\n        <ion-input  formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nume*</ion-label>\r\n      <ion-input  formControlName=\"last_name\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Prenume*</ion-label>\r\n      <ion-input  formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Numar de telefon*</ion-label>\r\n      <ion-input  formControlName=\"phone\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">MRN *pentru abonati</ion-label>\r\n      <ion-input   formControlName=\"mrn\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Cod numeric personal*</ion-label>\r\n      <ion-input  formControlName=\"cnp\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Parola</ion-label>\r\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Confirmare Parola</ion-label>\r\n      <ion-input type=\"password\" formControlName=\"confirm_password\" id=\"confirm_password\" ></ion-input>\r\n    </ion-item>\r\n\r\n    <div  class=\"error ion-padding\" *ngIf=\"f.confirm_password.errors?.confirmedValidator\">Parolele nu se potrivesc.</div>\r\n  \r\n    <ion-button type=\"submit\" [disabled]=\"!credentialsForm.valid\" expand=\"full\" color=\"danger\">Inregistrare!</ion-button>\r\n  </form>\r\n  <br>\r\n  <p align=\"center\" text-center>Ai deja un cont?</p>\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"loginModal()\">Autentifica-te!</ion-button>\r\n</ion-content>  \r\n\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=public-register-register-module-es5.js.map