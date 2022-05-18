(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "G8uT":
    /*!************************************************!*\
      !*** ./src/app/services/ion-loader.service.ts ***!
      \************************************************/

    /*! exports provided: IonLoaderService */

    /***/
    function G8uT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IonLoaderService", function () {
        return IonLoaderService;
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

      var IonLoaderService = /*#__PURE__*/function () {
        function IonLoaderService(loadingController) {
          _classCallCheck(this, IonLoaderService);

          this.loadingController = loadingController;
        }

        _createClass(IonLoaderService, [{
          key: "simpleLoader",
          value: function simpleLoader() {
            this.loadingController.create({
              message: 'Se incarca...'
            }).then(function (response) {
              response.present();
            });
          }
        }, {
          key: "dismissLoader",
          value: function dismissLoader() {
            this.loadingController.dismiss().then(function (response) {// console.log('Loader closed!', response);
            })["catch"](function (err) {// console.log('Error occured : ', err);
            });
          }
        }, {
          key: "autoLoader",
          value: function autoLoader() {
            this.loadingController.create({
              message: 'Loader hides after 4 seconds',
              duration: 4000
            }).then(function (response) {
              response.present();
              response.onDidDismiss().then(function (response) {
                console.log('Loader dismissed', response);
              });
            });
          }
        }]);

        return IonLoaderService;
      }();

      IonLoaderService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      IonLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], IonLoaderService);
      /***/
    },

    /***/
    "J9Qv":
    /*!***************************************************************!*\
      !*** ./src/app/components/pagination/pagination.component.ts ***!
      \***************************************************************/

    /*! exports provided: PaginationComponent */

    /***/
    function J9Qv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var paginate = __webpack_require__(
      /*! jw-paginate */
      "TNpa");

      var PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent() {
          _classCallCheck(this, PaginationComponent);

          this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
          this.initialPage = 1;
          this.pageSize = 10;
          this.maxPages = 10;
          this.pager = {};
        }

        _createClass(PaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // set page if items array isn't empty
            if (this.items && this.items.length) {
              this.setPage(this.initialPage);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // reset page if items array has changed
            if (changes.items.currentValue !== changes.items.previousValue) {
              this.setPage(this.initialPage);
            }
          }
        }, {
          key: "setPage",
          value: function setPage(page) {
            // get new pager object for specified page
            this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages); // get new page of items from items array

            var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1); // call change page function in parent component

            this.changePage.emit(pageOfItems);
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        changePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        initialPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      PaginationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jw-pagination',
        template: "<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item previous-item\">\n        <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\"><</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item number-item\">\n        <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item next-item\">\n        <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">></a>\n    </li>\n   \n</ul>"
      })], PaginationComponent);
      /***/
    },

    /***/
    "TNpa":
    /*!*****************************************************!*\
      !*** ./node_modules/jw-paginate/lib/jw-paginate.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function TNpa(module, exports, __webpack_require__) {
      "use strict";

      function paginate(totalItems, currentPage, pageSize, maxPages) {
        if (currentPage === void 0) {
          currentPage = 1;
        }

        if (pageSize === void 0) {
          pageSize = 10;
        }

        if (maxPages === void 0) {
          maxPages = 10;
        } // calculate total pages


        var totalPages = Math.ceil(totalItems / pageSize); // ensure current page isn't out of range

        if (currentPage < 1) {
          currentPage = 1;
        } else if (currentPage > totalPages) {
          currentPage = totalPages;
        }

        var startPage, endPage;

        if (totalPages <= maxPages) {
          // total pages less than max so show all pages
          startPage = 1;
          endPage = totalPages;
        } else {
          // total pages more than max so calculate start and end pages
          var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
          var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

          if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
          } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
          } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
          }
        } // calculate start and end item indexes


        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); // create an array of pages to ng-repeat in the pager control

        var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
          return startPage + i;
        }); // return object with all pager properties required by the view

        return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
        };
      }

      module.exports = paginate;
      /***/
    },

    /***/
    "Zcj0":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function Zcj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      "KF81");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "c7Fb":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@ionic-native/preview-any-file/__ivy_ngcc__/ngx/index.js ***!
      \*******************************************************************************/

    /*! exports provided: PreviewAnyFile */

    /***/
    function c7Fb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewAnyFile", function () {
        return PreviewAnyFile;
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "C6fG");

      var PreviewAnyFile =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PreviewAnyFile, _super);

        function PreviewAnyFile() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        PreviewAnyFile.prototype.preview = function (url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "preview", {}, arguments);
        };

        PreviewAnyFile.prototype.previewBase64 = function (base64, options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "previewBase64", {}, arguments);
        };

        PreviewAnyFile.prototype.previewPath = function (url, options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "previewPath", {}, arguments);
        };

        PreviewAnyFile.prototype.previewAsset = function (url, options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "previewAsset", {}, arguments);
        };

        PreviewAnyFile.pluginName = "PreviewAnyFile";
        PreviewAnyFile.plugin = "cordova-plugin-preview-any-file";
        PreviewAnyFile.pluginRef = "PreviewAnyFile";
        PreviewAnyFile.repo = "https://github.com/mostafa-mansour1/previewAnyFile";
        PreviewAnyFile.install = "";
        PreviewAnyFile.installVariables = [];
        PreviewAnyFile.platforms = ["Android", "iOS"];

        PreviewAnyFile.ɵfac = function PreviewAnyFile_Factory(t) {
          return ɵPreviewAnyFile_BaseFactory(t || PreviewAnyFile);
        };

        PreviewAnyFile.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: PreviewAnyFile,
          factory: function factory(t) {
            return PreviewAnyFile.ɵfac(t);
          }
        });

        var ɵPreviewAnyFile_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](PreviewAnyFile);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PreviewAnyFile, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return PreviewAnyFile;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvcHJldmlldy1hbnktZmlsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFHUSxJQXFENEIsa0NBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSxJQUtyRyxnQ0FBTyxhQUFDLEdBQVc7QUFLVixJQUtULHNDQUFhLGFBQUMsTUFBYyxFQUFFLE9BQStCO0FBSzlDLElBS2Ysb0NBQVcsYUFBQyxHQUFXLEVBQUUsT0FBK0I7QUFLM0MsSUFLYixxQ0FBWSxhQUFDLEdBQVcsRUFBRSxPQUErQjtBQUl0QztBQUFrRDtBQUErRDtBQUFpRDtBQUFnRjtBQUFpQztBQUEwQztrREExQ2pWLFVBQVU7Ozs7OzBCQUNMO0FBQUMseUJBMURQO0FBQUUsRUEwRGtDLGlCQUFpQjtBQUNwRCxTQURZLGNBQWM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByZXZpZXdBbnlGaWxlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZmlsZSB0byBwcmV2aWV3LlxuICAgKi9cbiAgbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBtaW1lIHR5cGUgb2YgdGhlIGZpbGUgdG8gcHJldmlldy5cbiAgICovXG4gIG1pbWVUeXBlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgUHJldmlld0FueUZpbGVcbiAqIEBkZXNjcmlwdGlvblxuICogV2hhdGV2ZXIgdGhlIGZpbGUgaXMgUERGIGRvY3VtZW50LCBXb3JkIGRvY3VtZW50LCBFeGNlbCwgb2ZmaWNlIGRvY3VtZW50LHppcCBhcmNoaXZlIGZpbGUsIGltYWdlLCB0ZXh0LCBodG1sIG9yIGFueXRoaW5nIGVsc2UsIHlvdSBjYW4gcGVyZm9ybSBhIHByZXZpZXcgYnkgdGhpcyBjb3Jkb3ZhIFBsdWdpbiB0byBwcmV2aWV3IGFueSBmaWxlIGluIG5hdGl2ZSBtb2RlIGJ5IHByb3ZpZGluZyB0aGUgbG9jYWwgb3IgZXh0ZXJuYWwgVVJMLlxuICpcbiAqICBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXByZXZpZXctYW55LWZpbGVgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbcHJldmlld0FueUZpbGUgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3N0YWZhLW1hbnNvdXIxL3ByZXZpZXdBbnlGaWxlKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFByZXZpZXdBbnlGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9wcmV2aWV3LWFueS1maWxlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJldmlld0FueUZpbGU6IFByZXZpZXdBbnlGaWxlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5wcmV2aWV3QW55RmlsZS5wcmV2aWV3KCdmaWxlOi8vZmlsZXBhdGguZXh0JylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMucHJldmlld0FueUZpbGUucHJldmlld1BhdGgoJ2h0dHA6Ly93d3cuZG9tYWluLmNvbS9zYW1wbGVmaWxlJylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ByZXZpZXdBbnlGaWxlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcHJldmlldy1hbnktZmlsZScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdQcmV2aWV3QW55RmlsZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb3N0YWZhLW1hbnNvdXIxL3ByZXZpZXdBbnlGaWxlJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByZXZpZXdBbnlGaWxlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogdGhpcyBmdW5jdGlvbiByZXR1cm4gU1VDQ0VTUyBpbiBzdWNjZXNzIGNhbGxiYWNrIGlmIHRoZSBmaWxlIHN1Y2Nlc3NmdWxseSBvcGVuZWQsIGlmIHRoZSBjb250ZW50IGlzIGJhc2U2NCB5b3UgaGF2ZSB0byB3cml0ZSBpdCBpbnRvIGZpbGUgYnkgY29yZG92YS1wbHVnaW4tZmlsZVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IGZ1bGwgYWJzb2x1dGUgVVJMIGZvciB0aGUgZmlsZSwgaWYgdGhlIHBhdGggaXMgY29udGVudDovLyB5b3UgbmVlZCB0byByZXNvbHZlIHRoZSBuYXRpdmUgdXJsLCBpZiB0aGUgcGF0aCBpcyBodHRwczovLyBpdCBtYXkgbm90IHdvcmsgaW4gYW5kcm9pZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGZpbGUgb3BlbmVkIHJlamVjdCBpZiBub3Q7XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZXZpZXcodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcmV2aWV3UGF0aCBmdW5jdGlvbiB3aWxsIHJldHVybiBzdWNjZXNzIGNhbGxiYWNrIGlmIHRoZSBmaWxlIHN1Y2Nlc3NmdWxseSBvcGVuZWQsIGlmIHRoZSBjb250ZW50IGlzIGJhc2U2NCB5b3UgaGF2ZSB0byB1c2UgcHJldmlld0Jhc2U2NCBtZXRob2RcbiAgICogQHBhcmFtIGJhc2U2NCB7U3RyaW5nfSBiYXNlNjQgc3RyaW5nIGNvbnRlbnRcbiAgICogQHBhcmFtIG9wdGlvbnMge1ByZXZpZXdBbnlGaWxlT3B0aW9uc30gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBmaWxlIHdpdGggZXh0ZW5zaW9uIG9yIGl0J3MgbWltZVR5cGUsIGlmIHRoZSBjb3JyZWN0IGV4dGVuc2lvbiBub3QgZXhpc3QgaW4gdGhlIHBhdGhcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJldmlld0Jhc2U2NChiYXNlNjQ6IHN0cmluZywgb3B0aW9ucz86IFByZXZpZXdBbnlGaWxlT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHByZXZpZXdQYXRoIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHN1Y2Nlc3MgY2FsbGJhY2sgaWYgdGhlIGZpbGUgc3VjY2Vzc2Z1bGx5IG9wZW5lZCwgaWYgdGhlIGNvbnRlbnQgaXMgYmFzZTY0IHlvdSBoYXZlIHRvIHVzZSBwcmV2aWV3QmFzZTY0IG1ldGhvZFxuICAgKiBAcGFyYW0gdXJsIHtTdHJpbmd9IGZ1bGwgYWJzb2x1dGUgVVJMIC0+IGZpbGU6Ly8sIGNvbnRlbnQ6Ly8sIGh0dHA6Ly8sIGh0dHBzLCAuLi4gZXRjLCBpZiBleHRlbnNpb24gbm90IGV4aXN0LCB5b3UgbXVzdCBkZWZpbmUgaXQgaW4gdGhlIG9wdCBwYXJhbVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UHJldmlld0FueUZpbGVPcHRpb25zfSBkZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGZpbGUgd2l0aCBleHRlbnNpb24gb3IgaXQncyBtaW1lVHlwZSwgaWYgdGhlIGNvcnJlY3QgZXh0ZW5zaW9uIG5vdCBleGlzdCBpbiB0aGUgcGF0aFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmV2aWV3UGF0aCh1cmw6IHN0cmluZywgb3B0aW9ucz86IFByZXZpZXdBbnlGaWxlT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIHByZXZpZXdQYXRoIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHN1Y2Nlc3MgY2FsbGJhY2sgaWYgdGhlIGZpbGUgc3VjY2Vzc2Z1bGx5IG9wZW5lZCwgaWYgdGhlIGNvbnRlbnQgaXMgYmFzZTY0IHlvdSBoYXZlIHRvIHVzZSBwcmV2aWV3QmFzZTY0IG1ldGhvZFxuICAgKiBAcGFyYW0gdXJsIHtTdHJpbmd9IGZ1bGwgYWJzb2x1dGUgVVJMIC0+IGZpbGU6Ly8sIGNvbnRlbnQ6Ly8sIGh0dHA6Ly8sIGh0dHBzLCAuLi4gZXRjLCBpZiBleHRlbnNpb24gbm90IGV4aXN0LCB5b3UgbXVzdCBkZWZpbmUgaXQgaW4gdGhlIG9wdCBwYXJhbVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UHJldmlld0FueUZpbGVPcHRpb25zfSBkZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGZpbGUgd2l0aCBleHRlbnNpb24gb3IgaXQncyBtaW1lVHlwZSwgaWYgdGhlIGNvcnJlY3QgZXh0ZW5zaW9uIG5vdCBleGlzdCBpbiB0aGUgcGF0aFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmV2aWV3QXNzZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBQcmV2aWV3QW55RmlsZU9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "hGdz":
    /*!****************************************************!*\
      !*** ./src/app/components/shared/shared.module.ts ***!
      \****************************************************/

    /*! exports provided: SharedModule */

    /***/
    function hGdz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var src_app_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/pagination/pagination.component */
      "J9Qv");

      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [src_app_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]]
      })], SharedModule);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "spDm":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function spDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      "W6o/");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context2.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context2.abrupt("return", el);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map