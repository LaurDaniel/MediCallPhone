(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customer-conferinta-conferinta-module"], {
    /***/
    "/YwH":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
      \******************************************************************************************/

    /*! no exports provided */

    /***/
    function YwH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=interfaces.js.map

      /***/

    },

    /***/
    "/nDd":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
      \************************************************************************************************/

    /*! exports provided: cordovaInstance */

    /***/
    function nDd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cordovaInstance", function () {
        return cordovaInstance;
      });
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      "AT/+");
      /**
       * @param pluginObj
       * @param methodName
       * @param config
       * @param args
       */


      function cordovaInstance(pluginObj, methodName, config, args) {
        args = Array.from(args);
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrapInstance"])(pluginObj, methodName, config).apply(this, args);
      } //# sourceMappingURL=cordova-instance.js.map

      /***/

    },

    /***/
    "5npb":
    /*!******************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
      \******************************************************************************/

    /*! exports provided: checkReady */

    /***/
    function npb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkReady", function () {
        return checkReady;
      });
      /**
       *
       */


      function checkReady() {
        if (typeof process === 'undefined') {
          var win_1 = typeof window !== 'undefined' ? window : {};
          var DEVICE_READY_TIMEOUT_1 = 5000; // To help developers using cordova, we listen for the device ready event and
          // log an error if it didn't fire in a reasonable amount of time. Generally,
          // when this happens, developers should remove and reinstall plugins, since
          // an inconsistent plugin is often the culprit.

          var before_1 = Date.now();
          var didFireReady_1 = false;
          win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
          });
          setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
              console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
          }, DEVICE_READY_TIMEOUT_1);
        }
      } //# sourceMappingURL=bootstrap.js.map

      /***/

    },

    /***/
    "AT/+":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
      \**************************************************************************************/

    /*! exports provided: ERR_CORDOVA_NOT_AVAILABLE, ERR_PLUGIN_NOT_INSTALLED, getPromise, wrapPromise, checkAvailability, instanceAvailability, setIndex, callCordovaPlugin, callInstance, getPlugin, get, pluginWarn, cordovaWarn, wrap, wrapInstance */

    /***/
    function AT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ERR_CORDOVA_NOT_AVAILABLE", function () {
        return ERR_CORDOVA_NOT_AVAILABLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ERR_PLUGIN_NOT_INSTALLED", function () {
        return ERR_PLUGIN_NOT_INSTALLED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPromise", function () {
        return getPromise;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "wrapPromise", function () {
        return wrapPromise;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkAvailability", function () {
        return checkAvailability;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "instanceAvailability", function () {
        return instanceAvailability;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setIndex", function () {
        return setIndex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "callCordovaPlugin", function () {
        return callCordovaPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "callInstance", function () {
        return callInstance;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPlugin", function () {
        return getPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get", function () {
        return get;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pluginWarn", function () {
        return pluginWarn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cordovaWarn", function () {
        return cordovaWarn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "wrap", function () {
        return wrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "wrapInstance", function () {
        return wrapInstance;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ERR_CORDOVA_NOT_AVAILABLE = {
        error: 'cordova_not_available'
      };
      var ERR_PLUGIN_NOT_INSTALLED = {
        error: 'plugin_not_installed'
      };
      /**
       * @param callback
       */

      function getPromise(callback) {
        var tryNativePromise = function tryNativePromise() {
          if (Promise) {
            return new Promise(function (resolve, reject) {
              callback(resolve, reject);
            });
          } else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
          }
        };

        if (typeof window !== 'undefined' && window.angular) {
          var doc = window.document;
          var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();

          if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
              callback(resolve, reject);
            });
          }

          console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
        }

        return tryNativePromise();
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       */


      function wrapPromise(pluginObj, methodName, args, opts) {
        if (opts === void 0) {
          opts = {};
        }

        var pluginResult, rej;
        var p = getPromise(function (resolve, reject) {
          if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return resolve(args);
            }, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return reject(args);
            });
          } else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
          }

          rej = reject;
        }); // Angular throws an error on unhandled rejection, but in this case we have already printed
        // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
        // to error

        if (pluginResult && pluginResult.error) {
          p["catch"](function () {});
          typeof rej === 'function' && rej(pluginResult.error);
        }

        return p;
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       */


      function wrapOtherPromise(pluginObj, methodName, args, opts) {
        if (opts === void 0) {
          opts = {};
        }

        return getPromise(function (resolve, reject) {
          var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);

          if (pluginResult) {
            if (pluginResult.error) {
              reject(pluginResult.error);
            } else if (pluginResult.then) {
              pluginResult.then(resolve)["catch"](reject);
            }
          } else {
            reject({
              error: 'unexpected_error'
            });
          }
        });
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       */


      function wrapObservable(pluginObj, methodName, args, opts) {
        if (opts === void 0) {
          opts = {};
        }

        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
          var pluginResult;

          if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return observer.next(args);
            }, function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              return observer.error(args);
            });
          } else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }

          if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
          }

          return function () {
            try {
              if (opts.clearFunction) {
                if (opts.clearWithArgs) {
                  return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }

                return callCordovaPlugin(pluginObj, opts.clearFunction, []);
              }
            } catch (e) {
              console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
              console.warn(e);
            }
          };
        });
      }
      /**
       * Wrap the event with an observable
       *
       * @private
       * @param event event name
       * @param element The element to attach the event listener to
       * @returns {Observable}
       */


      function wrapEventObservable(event, element) {
        element = typeof window !== 'undefined' && element ? get(window, element) : element || (typeof window !== 'undefined' ? window : {});
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, event);
      }
      /**
       * @param plugin
       * @param methodName
       * @param pluginName
       */


      function checkAvailability(plugin, methodName, pluginName) {
        var pluginRef, pluginPackage;

        if (typeof plugin === 'string') {
          pluginRef = plugin;
        } else {
          pluginRef = plugin.constructor.getPluginRef();
          pluginName = plugin.constructor.getPluginName();
          pluginPackage = plugin.constructor.getPluginInstallName();
        }

        var pluginInstance = getPlugin(pluginRef);

        if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
          if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
          }

          pluginWarn(pluginName, pluginPackage, methodName);
          return ERR_PLUGIN_NOT_INSTALLED;
        }

        return true;
      }
      /**
       * Checks if _objectInstance exists and has the method/property
       *
       * @param pluginObj
       * @param methodName
       * @private
       */


      function instanceAvailability(pluginObj, methodName) {
        return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
      }
      /**
       * @param args
       * @param opts
       * @param resolve
       * @param reject
       */


      function setIndex(args, opts, resolve, reject) {
        if (opts === void 0) {
          opts = {};
        } // ignore resolve and reject in case sync


        if (opts.sync) {
          return args;
        } // If the plugin method expects myMethod(success, err, options)


        if (opts.callbackOrder === 'reverse') {
          // Get those arguments in the order [resolve, reject, ...restOfArgs]
          args.unshift(reject);
          args.unshift(resolve);
        } else if (opts.callbackStyle === 'node') {
          args.push(function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
          var obj = {};
          obj[opts.successName] = resolve;
          obj[opts.errorName] = reject;
          args.push(obj);
        } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
          var setSuccessIndex = function setSuccessIndex() {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
              args[opts.successIndex] = resolve;
            } else {
              args.splice(opts.successIndex, 0, resolve);
            }
          };

          var setErrorIndex = function setErrorIndex() {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
              args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            } else {
              args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
          };

          if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
          } else {
            setSuccessIndex();
            setErrorIndex();
          }
        } else {
          // Otherwise, let's tack them on to the end of the argument list
          // which is 90% of cases
          args.push(resolve);
          args.push(reject);
        }

        return args;
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       * @param resolve
       * @param reject
       */


      function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
        if (opts === void 0) {
          opts = {};
        } // Try to figure out where the success/error callbacks need to be bound
        // to our promise resolve/reject handlers.


        args = setIndex(args, opts, resolve, reject);
        var availabilityCheck = checkAvailability(pluginObj, methodName);

        if (availabilityCheck === true) {
          var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef()); // eslint-disable-next-line prefer-spread

          return pluginInstance[methodName].apply(pluginInstance, args);
        } else {
          return availabilityCheck;
        }
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       * @param opts
       * @param resolve
       * @param reject
       */


      function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
        if (opts === void 0) {
          opts = {};
        }

        args = setIndex(args, opts, resolve, reject);

        if (instanceAvailability(pluginObj, methodName)) {
          // eslint-disable-next-line prefer-spread
          return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
        }
      }
      /**
       * @param pluginRef
       */


      function getPlugin(pluginRef) {
        if (typeof window !== 'undefined') {
          return get(window, pluginRef);
        }

        return null;
      }
      /**
       * @param element
       * @param path
       */


      function get(element, path) {
        var paths = path.split('.');
        var obj = element;

        for (var i = 0; i < paths.length; i++) {
          if (!obj) {
            return null;
          }

          obj = obj[paths[i]];
        }

        return obj;
      }
      /**
       * @param pluginName
       * @param plugin
       * @param method
       */


      function pluginWarn(pluginName, plugin, method) {
        if (method) {
          console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
        } else {
          console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
        }

        if (plugin) {
          console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
        }
      }
      /**
       * @private
       * @param pluginName
       * @param method
       */


      function cordovaWarn(pluginName, method) {
        if (typeof process === 'undefined') {
          if (method) {
            console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
          } else {
            console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
          }
        }
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param opts
       * @private
       */


      var wrap = function wrap(pluginObj, methodName, opts) {
        if (opts === void 0) {
          opts = {};
        }

        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
          } else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
          } else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
          } else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
          } else {
            return wrapPromise(pluginObj, methodName, args, opts);
          }
        };
      };
      /**
       * @param pluginObj
       * @param methodName
       * @param opts
       * @private
       */


      function wrapInstance(pluginObj, methodName, opts) {
        if (opts === void 0) {
          opts = {};
        }

        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
          } else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
              var pluginResult;

              if (opts.destruct) {
                pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return observer.next(args);
                }, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return observer.error(args);
                });
              } else {
                pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
              }

              if (pluginResult && pluginResult.error) {
                observer.error(pluginResult.error);
              }

              return function () {
                try {
                  if (opts.clearWithArgs) {
                    return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                  }

                  return callInstance(pluginObj, opts.clearFunction, []);
                } catch (e) {
                  console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                  console.warn(e);
                }
              };
            });
          } else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
              var result;

              if (opts.destruct) {
                result = callInstance(pluginObj, methodName, args, opts, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return resolve(args);
                }, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return reject(args);
                });
              } else {
                result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
              }

              if (result && result.then) {
                result.then(resolve, reject);
              } else {
                reject();
              }
            });
          } else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
              if (opts.destruct) {
                pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return resolve(args);
                }, function () {
                  var args = [];

                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }

                  return reject(args);
                });
              } else {
                pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
              }

              rej_1 = reject;
            }); // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error

            if (pluginResult_1 && pluginResult_1.error) {
              p["catch"](function () {});
              typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }

            return p;
          }
        };
      } //# sourceMappingURL=common.js.map

      /***/

    },

    /***/
    "FpJJ":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
      \************************************************************************************************/

    /*! exports provided: cordovaPropertyGet, cordovaPropertySet */

    /***/
    function FpJJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function () {
        return cordovaPropertyGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function () {
        return cordovaPropertySet;
      });
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      "AT/+");
      /**
       * @param pluginObj
       * @param key
       */


      function cordovaPropertyGet(pluginObj, key) {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
          return Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key];
        }

        return null;
      }
      /**
       * @param pluginObj
       * @param key
       * @param value
       */


      function cordovaPropertySet(pluginObj, key, value) {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
          Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key] = value;
        }
      } //# sourceMappingURL=cordova-property.js.map

      /***/

    },

    /***/
    "InXO":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
      \*************************************************************************************************/

    /*! exports provided: instancePropertyGet, instancePropertySet */

    /***/
    function InXO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function () {
        return instancePropertyGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "instancePropertySet", function () {
        return instancePropertySet;
      });
      /**
       * @param pluginObj
       * @param key
       */


      function instancePropertyGet(pluginObj, key) {
        if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
          return pluginObj._objectInstance[key];
        }

        return null;
      }
      /**
       * @param pluginObj
       * @param key
       * @param value
       */


      function instancePropertySet(pluginObj, key, value) {
        if (pluginObj._objectInstance) {
          pluginObj._objectInstance[key] = value;
        }
      } //# sourceMappingURL=instance-property.js.map

      /***/

    },

    /***/
    "M0H4":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
      \***************************************************************************************/

    /*! exports provided: cordova */

    /***/
    function M0H4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cordova", function () {
        return cordova;
      });
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      "AT/+");
      /**
       * @param pluginObj
       * @param methodName
       * @param config
       * @param args
       */


      function cordova(pluginObj, methodName, config, args) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pluginObj, methodName, config).apply(this, args);
      } //# sourceMappingURL=cordova.js.map

      /***/

    },

    /***/
    "Uy5j":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
      \*******************************************************************************************/

    /*! exports provided: AwesomeCordovaNativePlugin */

    /***/
    function Uy5j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AwesomeCordovaNativePlugin", function () {
        return AwesomeCordovaNativePlugin;
      });
      /* harmony import */


      var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./decorators/common */
      "AT/+");
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util */
      "xGWU");

      var AwesomeCordovaNativePlugin =
      /** @class */
      function () {
        function AwesomeCordovaNativePlugin() {}
        /**
         * Returns a boolean that indicates whether the plugin is installed
         *
         * @returns {boolean}
         */


        AwesomeCordovaNativePlugin.installed = function () {
          var isAvailable = Object(_decorators_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(this.pluginRef) === true;
          return isAvailable;
        };
        /**
         * Returns the original plugin object
         */


        AwesomeCordovaNativePlugin.getPlugin = function () {
          if (typeof window !== 'undefined') {
            return Object(_util__WEBPACK_IMPORTED_MODULE_1__["get"])(window, this.pluginRef);
          }

          return null;
        };
        /**
         * Returns the plugin's name
         */


        AwesomeCordovaNativePlugin.getPluginName = function () {
          var pluginName = this.pluginName;
          return pluginName;
        };
        /**
         * Returns the plugin's reference
         */


        AwesomeCordovaNativePlugin.getPluginRef = function () {
          var pluginRef = this.pluginRef;
          return pluginRef;
        };
        /**
         * Returns the plugin's install name
         */


        AwesomeCordovaNativePlugin.getPluginInstallName = function () {
          var plugin = this.plugin;
          return plugin;
        };
        /**
         * Returns the plugin's supported platforms
         */


        AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
          var platform = this.platforms;
          return platform;
        };

        AwesomeCordovaNativePlugin.pluginName = '';
        AwesomeCordovaNativePlugin.pluginRef = '';
        AwesomeCordovaNativePlugin.plugin = '';
        AwesomeCordovaNativePlugin.repo = '';
        AwesomeCordovaNativePlugin.platforms = [];
        AwesomeCordovaNativePlugin.install = '';
        return AwesomeCordovaNativePlugin;
      }(); //# sourceMappingURL=awesome-cordova-plugin.js.map

      /***/

    },

    /***/
    "XSEc":
    /*!*******************************************************************!*\
      !*** ./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js ***!
      \*******************************************************************/

    /*! exports provided: HTTP */

    /***/
    function XSEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HTTP", function () {
        return HTTP;
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

      var HTTP =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTP, _super);

        function HTTP() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        HTTP.prototype.getBasicAuthHeader = function (username, password) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getBasicAuthHeader", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.useBasicAuth = function (username, password) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "useBasicAuth", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getHeaders = function (host) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getHeaders", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setHeader = function (host, header, value) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setHeader", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getDataSerializer = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDataSerializer", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setDataSerializer = function (serializer) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDataSerializer", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setCookie = function (url, cookie) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setCookie", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.clearCookies = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clearCookies", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.removeCookies = function (url, cb) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeCookies", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getCookieString = function (url) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCookieString", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getRequestTimeout = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getRequestTimeout", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setRequestTimeout = function (timeout) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setRequestTimeout", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.getFollowRedirect = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getFollowRedirect", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setFollowRedirect = function (follow) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setFollowRedirect", {
            "sync": true
          }, arguments);
        };

        HTTP.prototype.setServerTrustMode = function (mode) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setServerTrustMode", {}, arguments);
        };

        HTTP.prototype.post = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "post", {}, arguments);
        };

        HTTP.prototype.postSync = function (url, body, headers, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "post", {
            "methodName": "post",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.get = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "get", {}, arguments);
        };

        HTTP.prototype.getSync = function (url, parameters, headers, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "get", {
            "methodName": "get",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.put = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "put", {}, arguments);
        };

        HTTP.prototype.putSync = function (url, body, headers, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "put", {
            "methodName": "put",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.patch = function (url, body, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "patch", {}, arguments);
        };

        HTTP.prototype.patchSync = function (url, body, headers, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "patch", {
            "methodName": "patch",
            "sync": true
          }, arguments);
        };

        HTTP.prototype["delete"] = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "delete", {}, arguments);
        };

        HTTP.prototype.deleteSync = function (url, parameters, headers, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "delete", {
            "methodName": "delete",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.head = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "head", {}, arguments);
        };

        HTTP.prototype.headSync = function (url, parameters, headers, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "head", {
            "methodName": "head",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.options = function (url, parameters, headers) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "options", {}, arguments);
        };

        HTTP.prototype.optionsSync = function (url, parameters, headers, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "options", {
            "methodName": "options",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "uploadFile", {}, arguments);
        };

        HTTP.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "uploadFile", {
            "methodName": "uploadFile",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.downloadFile = function (url, body, headers, filePath) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "downloadFile", {}, arguments);
        };

        HTTP.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "downloadFile", {
            "methodName": "downloadFile",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.sendRequest = function (url, options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendRequest", {}, arguments);
        };

        HTTP.prototype.sendRequestSync = function (url, options, success, failure) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendRequest", {
            "methodName": "sendRequest",
            "sync": true
          }, arguments);
        };

        HTTP.prototype.abort = function (requestId) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "abort", {}, arguments);
        };

        Object.defineProperty(HTTP.prototype, "ErrorCode", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "ErrorCode");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "ErrorCode", value);
          },
          enumerable: false,
          configurable: true
        });
        HTTP.pluginName = "HTTP";
        HTTP.plugin = "cordova-plugin-advanced-http";
        HTTP.pluginRef = "cordova.plugin.http";
        HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
        HTTP.platforms = ["Android", "iOS"];

        HTTP.ɵfac = function HTTP_Factory(t) {
          return ɵHTTP_BaseFactory(t || HTTP);
        };

        HTTP.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: HTTP,
          factory: function factory(t) {
            return HTTP.ɵfac(t);
          }
        });

        var ɵHTTP_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](HTTP);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HTTP, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return HTTP;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaHR0cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFHTyxJQXVFbUIsd0JBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSxJQXNCM0YsaUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtBQUs3QixJQUt4QiwyQkFBWSxhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7QUFJNUMsSUFJSCx5QkFBVSxhQUFDLElBQVk7QUFLWSxJQU1uQyx3QkFBUyxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYTtBQUdGLElBSW5ELGdDQUFpQjtBQUtxQyxJQUt0RCxnQ0FBaUIsYUFBQyxVQUFnRTtBQUlqRCxJQUlqQyx3QkFBUyxhQUFDLEdBQVcsRUFBRSxNQUFjO0FBS2hCLElBQ3JCLDJCQUFZO0FBS04sSUFHTiw0QkFBYSxhQUFDLEdBQVcsRUFBRSxFQUFjO0FBSTVCLElBR2IsOEJBQWUsYUFBQyxHQUFXO0FBS2EsSUFJeEMsZ0NBQWlCO0FBTWIsSUFHSixnQ0FBaUIsYUFBQyxPQUFlO0FBSWhDLElBR0QsZ0NBQWlCO0FBS29DLElBSXJELGdDQUFpQixhQUFDLE1BQWU7QUFHMEIsSUFTM0QsaUNBQWtCLGFBQUMsSUFBaUQ7QUFLOUMsSUFPdEIsbUJBQUksYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZQSx1QkFBUSxhQUNOLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1AsSUFNeEIsa0JBQUcsYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZQyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1QsSUFNdEIsa0JBQUcsYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZQyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1gsSUFNcEIsb0JBQUssYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZRCx3QkFBUyxhQUNQLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1IsSUFNdkIscUJBQU0sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZRix5QkFBVSxhQUNSLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT0osSUFNM0IsbUJBQUksYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZQSx1QkFBUSxhQUNOLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1osSUFNbkIsc0JBQU8sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZSCwwQkFBVyxhQUNULEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT2tCLElBUWpELHlCQUFVLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLEVBQUUsUUFBMkIsRUFBRSxJQUF1QjtBQU0zRixJQWFWLDZCQUFjLGFBQ1osR0FBVyxFQUNYLElBQVMsRUFDVCxPQUFZLEVBQ1osUUFBMkIsRUFDM0IsSUFBdUIsRUFDdkIsT0FBOEIsRUFDOUIsT0FBNkI7QUFRaEMsSUFNQywyQkFBWSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQWdCO0FBTXZELElBWVosK0JBQWdCLGFBQ2QsR0FBVyxFQUNYLElBQVMsRUFDVCxPQUFZLEVBQ1osUUFBZ0IsRUFDaEIsT0FBOEIsRUFDOUIsT0FBNkI7QUFRNUIsSUFjSCwwQkFBVyxhQUNULEdBQVcsRUFDWCxPQVVDO0FBT0osSUFvQkMsOEJBQWUsYUFDYixHQUFXLEVBQ1gsT0FVQyxFQUNELE9BQXVDLEVBQ3ZDLE9BQTZCO0FBTStCLElBRzlELG9CQUFLLGFBQUMsU0FBaUI7QUFJcEIsMEJBdGlCTSwyQkFBUztBQUNwQjtBQUU0QjtBQUkxQjtBQUEyQjtBQUNUO0FBR25CO0FBQ3dCO0FBQWtEO0FBQzVDO0FBRUY7d0NBdEI1QixVQUFVOzs7OzswQkFDTDtBQUFDLGVBNUVQO0FBQUUsRUE0RXdCLGlCQUFpQjtBQUMxQyxTQURZLElBQUk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSFRUUFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBIVFRQIHN0YXR1cyBudW1iZXIgb2YgdGhlIHJlc3BvbnNlIG9yIGEgbmVnYXRpdmUgaW50ZXJuYWwgZXJyb3IgY29kZS5cbiAgICovXG4gIHN0YXR1czogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlYWRlcnMgb2YgdGhlIHJlc3BvbnNlLlxuICAgKi9cbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgdGhlIGZpbmFsIFVSTCBvYnRhaW5lZCBhZnRlciBhbnkgcmVkaXJlY3RzLlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSB0aGF0IGlzIGluIHRoZSByZXNwb25zZS4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlc29sdmVzLlxuICAgKi9cbiAgZGF0YT86IGFueTtcbiAgLyoqXG4gICAqIEVycm9yIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlamVjdHMuXG4gICAqL1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFib3J0ZWRSZXNwb25zZSB7XG4gIGFib3J0ZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgSFRUUFxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIC8gUGhvbmVnYXAgcGx1Z2luIGZvciBjb21tdW5pY2F0aW5nIHdpdGggSFRUUCBzZXJ2ZXJzLiBTdXBwb3J0cyBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogQWR2YW50YWdlcyBvdmVyIEphdmFzY3JpcHQgcmVxdWVzdHM6XG4gKiAtIFNTTCAvIFRMUyBQaW5uaW5nXG4gKiAtIENPUlMgcmVzdHJpY3Rpb25zIGRvIG5vdCBhcHBseVxuICogLSBIYW5kbGluZyBvZiBIVFRQIGNvZGUgNDAxIC0gcmVhZCBtb3JlIGF0IFtJc3N1ZSBDQi0yNDE1XShodHRwczovL2lzc3Vlcy5hcGFjaGUub3JnL2ppcmEvYnJvd3NlL0NCLTI0MTUpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIVFRQKSB7fVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9pb25pYy5pbycsIHt9LCB7fSlcbiAqICAgLnRoZW4oZGF0YSA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAqICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpOyAvLyBkYXRhIHJlY2VpdmVkIGJ5IHNlcnZlclxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuaGVhZGVycyk7XG4gKlxuICogICB9KVxuICogICAuY2F0Y2goZXJyb3IgPT4ge1xuICpcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmVycm9yKTsgLy8gZXJyb3IgbWVzc2FnZSBhcyBzdHJpbmdcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEhUVFBSZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hUVFAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW4uaHR0cCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBlbnVtIHJlcHJlc2VudHMgdGhlIGludGVybmFsIGVycm9yIGNvZGVzIHdoaWNoIGNhbiBiZSByZXR1cm5lZCBpbiBhIEhUVFBSZXNwb25zZSBvYmplY3QuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHJlYWRvbmx5IEVycm9yQ29kZToge1xuICAgIEdFTkVSSUM6IG51bWJlcjtcbiAgICBTU0xfRVhDRVBUSU9OOiBudW1iZXI7XG4gICAgU0VSVkVSX05PVF9GT1VORDogbnVtYmVyO1xuICAgIFRJTUVPVVQ6IG51bWJlcjtcbiAgICBVTlNVUFBPUlRFRF9VUkw6IG51bWJlcjtcbiAgICBOT1RfQ09OTkVDVEVEOiBudW1iZXI7XG4gICAgUE9TVF9QUk9DRVNTSU5HX0ZBSUxFRDogbnVtYmVyO1xuICAgIEFCT1JURUQ6IG51bWJlcjtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyByZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRpbmcgYSBiYXNpYyBIVFRQIEF1dGhvcml6YXRpb24gaGVhZGVyIG9mIHRoZSBmb3JtLlxuICAgKiBAcGFyYW0gdXNlcm5hbWUge3N0cmluZ30gVXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIHtzdHJpbmd9IFBhc3N3b3JkXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFuIG9iamVjdCByZXByZXNlbnRpbmcgYSBiYXNpYyBIVFRQIEF1dGhvcml6YXRpb24gaGVhZGVyIG9mIHRoZSBmb3JtIHsnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBiYXNlNjRFbmNvZGVkVXNlcm5hbWVBbmRQYXNzd29yZCd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QmFzaWNBdXRoSGVhZGVyKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB7IEF1dGhvcml6YXRpb246IHN0cmluZyB9IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBzZXRzIHVwIGFsbCBmdXR1cmUgcmVxdWVzdHMgdG8gdXNlIEJhc2ljIEhUVFAgYXV0aGVudGljYXRpb24gd2l0aCB0aGUgZ2l2ZW4gdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlxuICAgKiBAcGFyYW0gdXNlcm5hbWUge3N0cmluZ30gVXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIHtzdHJpbmd9IFBhc3N3b3JkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXNlQmFzaWNBdXRoKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaGVhZGVycyBkZWZpbmVkIGZvciBhIGdpdmVuIGhvc3RuYW1lLlxuICAgKiBAcGFyYW0gaG9zdCB7c3RyaW5nfSBUaGUgaG9zdG5hbWVcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJuIGFsbCBoZWFkZXJzIGRlZmluZWQgZm9yIHRoZSBob3N0bmFtZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEhlYWRlcnMoaG9zdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgaGVhZGVyIGZvciBhbGwgZnV0dXJlIHJlcXVlc3RzLiBUYWtlcyBhIGhvc3RuYW1lLCBhIGhlYWRlciBhbmQgYSB2YWx1ZS5cbiAgICogQHBhcmFtIGhvc3Qge3N0cmluZ30gVGhlIGhvc3RuYW1lIHRvIGJlIHVzZWQgZm9yIHNjb3BpbmcgdGhpcyBoZWFkZXJcbiAgICogQHBhcmFtIGhlYWRlciB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgaGVhZGVyXG4gICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIGhlYWRlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEhlYWRlcihob3N0OiBzdHJpbmcsIGhlYWRlcjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc2VyaWFsaXplciB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGFsbCBmdXR1cmUgUE9TVCBhbmQgUFVUIHJlcXVlc3RzLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBjb25maWd1cmVkIGRhdGEgc2VyaWFsaXplclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldERhdGFTZXJpYWxpemVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBzZXJpYWxpemVyIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGZ1dHVyZSBQT1NULCBQVVQgYW5kIFBBVENIIHJlcXVlc3RzLiBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIHNlcmlhbGl6ZXIuXG4gICAqIEBwYXJhbSBzZXJpYWxpemVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBzZXJpYWxpemVyLlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwI3NldGRhdGFzZXJpYWxpemVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RGF0YVNlcmlhbGl6ZXIoc2VyaWFsaXplcjogJ3VybGVuY29kZWQnIHwgJ2pzb24nIHwgJ3V0ZjgnIHwgJ211bHRpcGFydCcgfCAncmF3Jyk6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIGNvb2tpZS5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBTY29wZSBvZiB0aGUgY29va2llXG4gICAqIEBwYXJhbSBjb29raWUge3N0cmluZ30gUkZDIGNvbXBsaWFudCBjb29raWUgc3RyaW5nXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q29va2llKHVybDogc3RyaW5nLCBjb29raWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGNvb2tpZXMuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2xlYXJDb29raWVzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVtb3ZlIGNvb2tpZXMgZm9yIGdpdmVuIFVSTC5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gY2JcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVDb29raWVzKHVybDogc3RyaW5nLCBjYjogKCkgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzb2x2ZSBjb29raWUgc3RyaW5nIGZvciBnaXZlbiBVUkwuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDb29raWVTdHJpbmcodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZSBpbiBzZWNvbmRzLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSByZXR1cm5zIHRoZSBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UmVxdWVzdFRpbWVvdXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWUgaW4gc2Vjb25kcy5cbiAgICogQHBhcmFtIHRpbWVvdXQge251bWJlcn0gVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy4gRGVmYXVsdCA2MFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJlcXVlc3RUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzb2x2ZSBpZiBpdCBzaG91bGQgZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyB0cnVlIGlmIGl0IGlzIGNvbmZpZ3VyZWQgdG8gZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Rm9sbG93UmVkaXJlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBpZiBpdCBzaG91bGQgZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcGFyYW0gZm9sbG93IHtib29sZWFufSBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBmb2xsb3dpbmcgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGb2xsb3dSZWRpcmVjdChmb2xsb3c6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldCBzZXJ2ZXIgdHJ1c3QgbW9kZSwgYmVpbmcgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgKiBkZWZhdWx0OiBkZWZhdWx0IFNTTCB0cnVzdHNoaXAgYW5kIGhvc3RuYW1lIHZlcmlmaWNhdGlvbiBoYW5kbGluZyB1c2luZyBzeXN0ZW0ncyBDQSBjZXJ0cztcbiAgICogbGVnYWN5OiB1c2UgbGVnYWN5IGRlZmF1bHQgYmVoYXZpb3IgKDwgMi4wLjMpLCBleGNsdWRpbmcgdXNlciBpbnN0YWxsZWQgQ0EgY2VydHMgKG9ubHkgZm9yIEFuZHJvaWQpO1xuICAgKiBub2NoZWNrOiBkaXNhYmxlIFNTTCBjZXJ0aWZpY2F0ZSBjaGVja2luZyBhbmQgaG9zdG5hbWUgdmVyaWZpY2F0aW9uLCB0cnVzdGluZyBhbGwgY2VydHMgKG1lYW50IHRvIGJlIHVzZWQgb25seSBmb3IgdGVzdGluZyBwdXJwb3Nlcyk7XG4gICAqIHBpbm5lZDogdHJ1c3Qgb25seSBwcm92aWRlZCBjZXJ0aWZpY2F0ZXM7XG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbGtpbWVuL2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAjc2V0c2VydmVydHJ1c3Rtb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHNlcnZlciB0cnVzdCBtb2RlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFNlcnZlclRydXN0TW9kZShtb2RlOiAnZGVmYXVsdCcgfCAnbGVnYWN5JyB8ICdub2NoZWNrJyB8ICdwaW5uZWQnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQT1NUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgUE9TVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAncG9zdCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcG9zdFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIEdFVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgR0VUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdnZXQnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGdldFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBVVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgUFVUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdwdXQnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHB1dFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBBVENIIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzeW5jIFBBVENIIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdwYXRjaCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcGF0Y2hTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBERUxFVEUgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzeW5jIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnZGVsZXRlJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkZWxldGVTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBIRUFEIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhlYWQodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgSEVBRCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnaGVhZCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGVhZFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBPUFRJT05TIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnModXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBzeW5jIE9QVElPTlMgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ29wdGlvbnMnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG9wdGlvbnNTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgbG9jYWwgcGF0aChzKSBvZiB0aGUgZmlsZShzKSB0byB1cGxvYWRcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIG5hbWUocykgb2YgdGhlIHBhcmFtZXRlciB0byBwYXNzIHRoZSBmaWxlKHMpIGFsb25nIGFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBsb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSwgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIGxvY2FsIHBhdGgocykgb2YgdGhlIGZpbGUocykgdG8gdXBsb2FkXG4gICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFRoZSBuYW1lKHMpIG9mIHRoZSBwYXJhbWV0ZXIgdG8gcGFzcyB0aGUgZmlsZShzKSBhbG9uZyBhc1xuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3VwbG9hZEZpbGUnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHVwbG9hZEZpbGVTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgZmlsZVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIG5hbWU6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IGFueSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgRmlsZUVudHJ5IHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ2Rvd25sb2FkRmlsZScsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZG93bmxvYWRGaWxlU3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsXG4gICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgcmVxdWVzdFxuICAgKiBAcGFyYW0gb3B0aW9ucy5tZXRob2Qge3N0cmluZ30gcmVxdWVzdCBtZXRob2RcbiAgICogQHBhcmFtIG9wdGlvbnMuZGF0YSB7T2JqZWN0fSBwYXlsb2FkIHRvIGJlIHNlbmQgdG8gdGhlIHNlcnZlciAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5wYXJhbXMge09iamVjdH0gcXVlcnkgcGFyYW1zIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBVUkwgKG9ubHkgYXBwbGljYWJsZSBvbiBnZXQsIGhlYWQsIGRlbGV0ZSwgdXBsb2FkIG9yIGRvd25sb2FkIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlcmlhbGl6ZXIge3N0cmluZ30gZGF0YSBzZXJpYWxpemVyIHRvIGJlIHVzZWQgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcyksIGRlZmF1bHRzIHRvIGdsb2JhbCBzZXJpYWxpemVyIHZhbHVlLCBzZWUgc2V0RGF0YVNlcmlhbGl6ZXIgZm9yIHN1cHBvcnRlZCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMudGltZW91dCB7bnVtYmVyfSB0aW1lb3V0IHZhbHVlIGZvciB0aGUgcmVxdWVzdCBpbiBzZWNvbmRzLCBkZWZhdWx0cyB0byBnbG9iYWwgdGltZW91dCB2YWx1ZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5oZWFkZXJzIHtPYmplY3R9IGhlYWRlcnMgb2JqZWN0IChrZXkgdmFsdWUgcGFpciksIHdpbGwgYmUgbWVyZ2VkIHdpdGggZ2xvYmFsIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5maWxlUGF0aCB7c3RyaW5nfSBmaWxlIHBhdGgocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIGFuZCBkb3dubG9hZCBzZWUgdXBsb2FkRmlsZSBhbmQgZG93bmxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5uYW1lIHtzdHJpbmd9IG5hbWUocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIHNlZSB1cGxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5yZXNwb25zZVR5cGUge3N0cmluZ30gcmVzcG9uc2UgdHlwZSwgZGVmYXVsdHMgdG8gdGV4dFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlcXVlc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbWV0aG9kOiAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnIHwgJ3BhdGNoJyB8ICdoZWFkJyB8ICdkZWxldGUnIHwgJ29wdGlvbnMnIHwgJ3VwbG9hZCcgfCAnZG93bmxvYWQnO1xuICAgICAgZGF0YT86IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcbiAgICAgIHBhcmFtcz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICAgIHNlcmlhbGl6ZXI/OiAnanNvbicgfCAndXJsZW5jb2RlZCcgfCAndXRmOCcgfCAnbXVsdGlwYXJ0JyB8ICdyYXcnO1xuICAgICAgdGltZW91dD86IG51bWJlcjtcbiAgICAgIGhlYWRlcnM/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICBmaWxlUGF0aD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgbmFtZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ3RleHQnIHwgJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJztcbiAgICB9XG4gICk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgcmVxdWVzdFxuICAgKiBAcGFyYW0gb3B0aW9ucy5tZXRob2Qge3N0cmluZ30gcmVxdWVzdCBtZXRob2RcbiAgICogQHBhcmFtIG9wdGlvbnMuZGF0YSB7T2JqZWN0fSBwYXlsb2FkIHRvIGJlIHNlbmQgdG8gdGhlIHNlcnZlciAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5wYXJhbXMge09iamVjdH0gcXVlcnkgcGFyYW1zIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBVUkwgKG9ubHkgYXBwbGljYWJsZSBvbiBnZXQsIGhlYWQsIGRlbGV0ZSwgdXBsb2FkIG9yIGRvd25sb2FkIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlcmlhbGl6ZXIge3N0cmluZ30gZGF0YSBzZXJpYWxpemVyIHRvIGJlIHVzZWQgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcyksIGRlZmF1bHRzIHRvIGdsb2JhbCBzZXJpYWxpemVyIHZhbHVlLCBzZWUgc2V0RGF0YVNlcmlhbGl6ZXIgZm9yIHN1cHBvcnRlZCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMudGltZW91dCB7bnVtYmVyfSB0aW1lb3V0IHZhbHVlIGZvciB0aGUgcmVxdWVzdCBpbiBzZWNvbmRzLCBkZWZhdWx0cyB0byBnbG9iYWwgdGltZW91dCB2YWx1ZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5oZWFkZXJzIHtPYmplY3R9IGhlYWRlcnMgb2JqZWN0IChrZXkgdmFsdWUgcGFpciksIHdpbGwgYmUgbWVyZ2VkIHdpdGggZ2xvYmFsIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5maWxlUGF0aCB7c3RyaW5nfSBmaWxlIHBhdGgocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIGFuZCBkb3dubG9hZCBzZWUgdXBsb2FkRmlsZSBhbmQgZG93bmxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5uYW1lIHtzdHJpbmd9IG5hbWUocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIHNlZSB1cGxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5yZXNwb25zZVR5cGUge3N0cmluZ30gcmVzcG9uc2UgdHlwZSwgZGVmYXVsdHMgdG8gdGV4dFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3NlbmRSZXF1ZXN0JyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZW5kUmVxdWVzdFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbWV0aG9kOiAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnIHwgJ3BhdGNoJyB8ICdoZWFkJyB8ICdkZWxldGUnIHwgJ29wdGlvbnMnIHwgJ3VwbG9hZCcgfCAnZG93bmxvYWQnO1xuICAgICAgZGF0YT86IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcbiAgICAgIHBhcmFtcz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICAgIHNlcmlhbGl6ZXI/OiAnanNvbicgfCAndXJsZW5jb2RlZCcgfCAndXRmOCcgfCAnbXVsdGlwYXJ0JztcbiAgICAgIHRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICBoZWFkZXJzPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgZmlsZVBhdGg/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIG5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICd0ZXh0JyB8ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbic7XG4gICAgfSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHJlcXVlc3RJZCB7c3RyaW5nfSBUaGUgUmVxdWVzdElkIG9mIHRoZSByZXF1ZXN0IHRvIGFib3J0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFib3J0KHJlcXVlc3RJZDogc3RyaW5nKTogUHJvbWlzZTxBYm9ydGVkUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "Z2+D":
    /*!******************************!*\
      !*** ./src/app/safe.pipe.ts ***!
      \******************************/

    /*! exports provided: SafePipe */

    /***/
    function Z2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var SafePipe = /*#__PURE__*/function () {
        function SafePipe(sanitizer) {
          _classCallCheck(this, SafePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
      })], SafePipe);
      /***/
    },

    /***/
    "aagO":
    /*!**************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
      \**************************************************************************/

    /*! exports provided: AwesomeCordovaNativePlugin, checkAvailability, instanceAvailability, wrap, getPromise, cordova, cordovaFunctionOverride, cordovaInstance, cordovaPropertyGet, cordovaPropertySet, instancePropertyGet, instancePropertySet */

    /***/
    function aagO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bootstrap */
      "5npb");
      /* harmony import */


      var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awesome-cordova-plugin */
      "Uy5j");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AwesomeCordovaNativePlugin", function () {
        return _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__["AwesomeCordovaNativePlugin"];
      });
      /* harmony import */


      var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./decorators/common */
      "AT/+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "checkAvailability", function () {
        return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "instanceAvailability", function () {
        return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "wrap", function () {
        return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["wrap"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getPromise", function () {
        return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["getPromise"];
      });
      /* harmony import */


      var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./decorators/cordova */
      "M0H4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cordova", function () {
        return _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__["cordova"];
      });
      /* harmony import */


      var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./decorators/cordova-function-override */
      "zPAA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function () {
        return _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__["cordovaFunctionOverride"];
      });
      /* harmony import */


      var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./decorators/cordova-instance */
      "/nDd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cordovaInstance", function () {
        return _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__["cordovaInstance"];
      });
      /* harmony import */


      var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./decorators/cordova-property */
      "FpJJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function () {
        return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertyGet"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function () {
        return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertySet"];
      });
      /* harmony import */


      var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./decorators/instance-property */
      "InXO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function () {
        return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertyGet"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "instancePropertySet", function () {
        return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertySet"];
      });
      /* harmony import */


      var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./decorators/interfaces */
      "/YwH");
      /* empty/unused harmony star reexport */
      // Decorators


      Object(_bootstrap__WEBPACK_IMPORTED_MODULE_0__["checkReady"])(); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "b6c8":
    /*!****************************************************************!*\
      !*** ./src/app/pages/customer/conferinta/conferinta.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function b6c8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".webPage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background-color: transparent;\n  padding: 1rem;\n}\n\n.resp-container {\n  position: relative;\n  overflow: hidden;\n  padding-top: 177%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXIvY29uZmVyaW50YS9jb25mZXJpbnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFGSjs7QUFJQztFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdG9tZXIvY29uZmVyaW50YS9jb25mZXJpbnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWJQYWdle1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDIwMCU7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiB9XHJcbiAucmVzcC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxNzclO1xyXG59Il19 */";
      /***/
    },

    /***/
    "cKCH":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer/conferinta/conferinta.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cKCH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"header-background\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n    <ion-title>Consultatii online</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"url_conferinta\" >\r\n              <ion-card-content class=\"resp-container\">\r\n                  <iframe class=\"webPage\" allow=\"microphone *; camera; fullscreen; display-capture\" [src]=\"url_conferinta | safe\" ></iframe>\r\n              </ion-card-content>\r\n            </ion-card>\r\n             <ion-card *ngIf=\"url_conferinta\" >\r\n              <ion-card-content>\r\n                <ngx-dropzone [multiple]=\"false\" (change)=\"onSelect($event)\">\r\n                  <ngx-dropzone-label>Faceti click sau trageti fisierul in interiorul acestei casete pentru a putea incarca documentele!</ngx-dropzone-label>\r\n                  <ngx-dropzone-preview *ngFor=\"let f of files\" [removable]=\"true\" (removed)=\"onRemove(f)\">\r\n                    <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\r\n                  </ngx-dropzone-preview>\r\n                </ngx-dropzone>\r\n                 <!-- <form  [formGroup]=\"dropzone\" (ngSubmit)=\"onSubmitDropzone()\">\r\n                      <div class=\"dz-message\" data-dz-message><span>Faceti click sau trageti fisierul in interiorul acestei casete pentru a putea incarca documentele</span></div>\r\n                  </form> -->\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <ion-card *ngIf=\"url_conferinta\" >\r\n                <ion-card-header>\r\n                  <ion-card-title>Fisiere incarcate de doctor</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                \r\n                  <ul class=\"list-group\" id=\"file_listing\" *ngFor=\"let fisier of fisiere;\">\r\n                      <li class=\"list-group-item\"><a (click)=\"downloadFile(fisier.nume_fisier)\" >{{fisier.nume_fisier}}</a></li> \r\n                  </ul>\r\n                  <!-- <button class=\"btn btn-primary mt-2 mb-3 w-100\" id=\"refresh_files\"><i class=\"fas fa-sync-alt mr-2\"></i>Reimprospateaza fisiere</button>                                                                        -->\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <ion-card *ngIf=\"!url_conferinta\">\r\n                <ion-card-header>\r\n                  <ion-card-title>Momentan nu ai nicio camera de consultatie deschisa</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                          <p class=\"card-text\">Daca astepti sa intri in conferinta, camera se va deschide imediat ce doctorul va porni consultatia, indiferent daca consultatia va avea loc pentru unul din conturile asociate.\r\n                          </p>\r\n                          <!-- <a href=\"{{route('consultatie.online')}}\" class=\"btn btn-primary waves-effect waves-light\">Reincearca conectarea la consultatia online</a> -->\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "eGy0":
    /*!************************************************************************!*\
      !*** ./src/app/pages/customer/conferinta/conferinta-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ConferintaPageRoutingModule */

    /***/
    function eGy0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConferintaPageRoutingModule", function () {
        return ConferintaPageRoutingModule;
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


      var _conferinta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./conferinta.page */
      "ucb+");

      var routes = [{
        path: '',
        component: _conferinta_page__WEBPACK_IMPORTED_MODULE_3__["ConferintaPage"]
      }];

      var ConferintaPageRoutingModule = /*#__PURE__*/_createClass(function ConferintaPageRoutingModule() {
        _classCallCheck(this, ConferintaPageRoutingModule);
      });

      ConferintaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConferintaPageRoutingModule);
      /***/
    },

    /***/
    "jBhA":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/file-transfer/__ivy_ngcc__/ngx/index.js ***!
      \***************************************************************************************/

    /*! exports provided: FileTransfer, FileTransferObject */

    /***/
    function jBhA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileTransfer", function () {
        return FileTransfer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileTransferObject", function () {
        return FileTransferObject;
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


      var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/core */
      "aagO");

      var FileTransfer =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileTransfer, _super);

        function FileTransfer() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Error code rejected from upload with FileTransferError
           * Defined in FileTransferError.
           *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
           *      INVALID_URL_ERR: 2,     Return when url was invalid
           *      CONNECTION_ERR: 3,      Return on connection error
           *      ABORT_ERR: 4,           Return on aborting
           *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
           *
           * @enum {number}
           */


          _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
          };
          return _this;
        }
        /**
         * Creates a new FileTransfer object
         *
         * @returns {FileTransferObject}
         */


        FileTransfer.prototype.create = function () {
          return new FileTransferObject();
        };

        FileTransfer.pluginName = "FileTransfer";
        FileTransfer.plugin = "cordova-plugin-file-transfer";
        FileTransfer.pluginRef = "FileTransfer";
        FileTransfer.repo = "https://github.com/apache/cordova-plugin-file-transfer";
        FileTransfer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];

        FileTransfer.ɵfac = function FileTransfer_Factory(t) {
          return ɵFileTransfer_BaseFactory(t || FileTransfer);
        };

        FileTransfer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: FileTransfer,
          factory: function factory(t) {
            return FileTransfer.ɵfac(t);
          }
        });

        var ɵFileTransfer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FileTransfer);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileTransfer, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return FileTransfer;
      }(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["AwesomeCordovaNativePlugin"]);

      var FileTransferObject =
      /** @class */
      function () {
        function FileTransferObject() {
          if (Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
          }
        }

        FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) {
          return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "upload", {
            "successIndex": 2,
            "errorIndex": 3
          }, arguments);
        };

        FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) {
          return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "download", {
            "successIndex": 2,
            "errorIndex": 3
          }, arguments);
        };

        FileTransferObject.prototype.onProgress = function (listener) {
          var _this = this;

          return function () {
            if (Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
              _this._objectInstance.onprogress = listener;
            }
          }();
        };

        FileTransferObject.prototype.abort = function () {
          return Object(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "abort", {
            "sync": true
          }, arguments);
        };

        FileTransferObject.plugin = "cordova-plugin-file-transfer";
        FileTransferObject.pluginName = "FileTransfer";
        return FileTransferObject;
      }(); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9maWxlLXRyYW5zZmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHFFQUtMLGlCQUFpQixFQUNsQixNQUFNLCtCQUErQixDQUFDOztBQUN2QztBQUdVLElBc0t3QixnQ0FBMEI7QUFBQztBQUV2QztBQUVqQixRQUhIO0FBQ0Y7QUFDTTtBQUNNO0FBQ007QUFDTTtBQUNNO0FBQ007QUFJekI7QUFBVztBQUNGLFdBRmY7QUFDTCxRQUFFLDJCQUFxQixHQUFHO0FBQzFCLFlBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUN6QixZQUFJLGVBQWUsRUFBRSxDQUFDO0FBQ3RCLFlBQUksY0FBYyxFQUFFLENBQUM7QUFDckIsWUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNoQixZQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDdkIsU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBRG5CO0FBQ0Y7QUFDRTtBQUNFO0FBRUosT0FESztBQUNMLElBQUUsNkJBQU0sR0FBTjtBQUFjLFFBQ1osT0FBTyxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDcEMsSUFBRSxDQUFDO0FBQ0Y7QUFNYztBQUVkO0FBRVE7QUFHK0I7Z0RBMUN2QyxVQUFVOzs7OzswQkFDTDtBQUFDLHVCQWpMUDtBQUFFLEVBaUxnQywwQkFBMEI7QUFDM0QsU0FEWSxZQUFZO0FBQUk7QUFFZixJQXNDWjtBQUNjLFFBQVosSUFBSSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtBQUNyRyxZQUFNLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDOUQsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBY0UsbUNBQU0sYUFDSixPQUFlLEVBQ2YsR0FBVyxFQUNYLE9BQTJCLEVBQzNCLGFBQXVCO0FBUTFCLElBVUMscUNBQVEsYUFBQyxNQUFjLEVBQUUsTUFBYyxFQUFFLGFBQXVCLEVBQUUsT0FBOEI7QUFLdkMsSUFLekQsdUNBQVUsYUFBQyxRQUF1QztBQUFJO0FBQ3BDO0FBQ2xCLHNEQUYwRDtBQUM1RCxnQkFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDL0MsYUFBRztBQUNIO0FBRU87QUFBTyxJQU1aLGtDQUFLO0FBRW1FO0FBQWdFO0FBQW9ELDZCQXpSOUw7QUFBRTtBQUFNLFNBc05LLGtCQUFrQjtBQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHksXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50LlxuICAgKiBEZWZhdWx0cyB0byAnZmlsZScuXG4gICAqL1xuICBmaWxlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsZSBuYW1lIHRvIHVzZSB3aGVuIHNhdmluZyB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuICAgKiBEZWZhdWx0cyB0byAnaW1hZ2UuanBnJy5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIC0gZWl0aGVyIFBVVCBvciBQT1NULlxuICAgKiBEZWZhdWx0cyB0byBQT1NULlxuICAgKi9cbiAgaHR0cE1ldGhvZD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YSB0byB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvIGltYWdlL2pwZWcuXG4gICAqL1xuICBtaW1lVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2Ygb3B0aW9uYWwga2V5L3ZhbHVlIHBhaXJzIHRvIHBhc3MgaW4gdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHBhcmFtcz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVwbG9hZCB0aGUgZGF0YSBpbiBjaHVua2VkIHN0cmVhbWluZyBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgY2h1bmtlZE1vZGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIG1hcCBvZiBoZWFkZXIgbmFtZS9oZWFkZXIgdmFsdWVzLiBVc2UgYW4gYXJyYXkgdG8gc3BlY2lmeSBtb3JlXG4gICAqIHRoYW4gb25lIHZhbHVlLiBPbiBpT1MsIEZpcmVPUywgYW5kIEFuZHJvaWQsIGlmIGEgaGVhZGVyIG5hbWVkXG4gICAqIENvbnRlbnQtVHlwZSBpcyBwcmVzZW50LCBtdWx0aXBhcnQgZm9ybSBkYXRhIHdpbGwgTk9UIGJlIHVzZWQuXG4gICAqL1xuICBoZWFkZXJzPzogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZFJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHNlbnQgdG8gdGhlIHNlcnZlciBhcyBwYXJ0IG9mIHRoZSB1cGxvYWQuXG4gICAqL1xuICBieXRlc1NlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2VDb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZXNwb25zZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVHJhbnNmZXJFcnJvciB7XG4gIC8qKlxuICAgKiBPbmUgb2YgdGhlIHByZWRlZmluZWQgZXJyb3IgY29kZXMgbGlzdGVkIGJlbG93LlxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHNvdXJjZS5cbiAgICovXG4gIHNvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHRhcmdldC5cbiAgICovXG4gIHRhcmdldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIVFRQIHN0YXR1cyBjb2RlLiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2VcbiAgICogY29kZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBIVFRQIGNvbm5lY3Rpb24uXG4gICAqL1xuICBodHRwX3N0YXR1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zZSBib2R5LiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFaXRoZXIgZS5nZXRNZXNzYWdlIG9yIGUudG9TdHJpbmcuXG4gICAqL1xuICBleGNlcHRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBGaWxlIFRyYW5zZmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gdXBsb2FkIGFuZCBkb3dubG9hZCBmaWxlcy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVRyYW5zZmVyLCBGaWxlVXBsb2FkT3B0aW9ucywgRmlsZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvbmd4JztcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZSc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2ZlcjogRmlsZVRyYW5zZmVyLCBwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IGZpbGVUcmFuc2ZlcjogRmlsZVRyYW5zZmVyT2JqZWN0ID0gdGhpcy50cmFuc2Zlci5jcmVhdGUoKTtcbiAqXG4gKiAvLyBVcGxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLnVwbG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xuICpcbiAqIC8vIERvd25sb2FkIGEgZmlsZTpcbiAqIGZpbGVUcmFuc2Zlci5kb3dubG9hZCguLikudGhlbiguLikuY2F0Y2goLi4pO1xuICpcbiAqIC8vIEFib3J0IGFjdGl2ZSB0cmFuc2ZlcjpcbiAqIGZpbGVUcmFuc2Zlci5hYm9ydCgpO1xuICpcbiAqIC8vIGZ1bGwgZXhhbXBsZVxuICogdXBsb2FkKCkge1xuICogICBsZXQgb3B0aW9uczogRmlsZVVwbG9hZE9wdGlvbnMgPSB7XG4gKiAgICAgIGZpbGVLZXk6ICdmaWxlJyxcbiAqICAgICAgZmlsZU5hbWU6ICduYW1lLmpwZycsXG4gKiAgICAgIGhlYWRlcnM6IHt9XG4gKiAgICAgIC4uLi4uXG4gKiAgIH1cbiAqXG4gKiAgIGZpbGVUcmFuc2Zlci51cGxvYWQoJzxmaWxlIHBhdGg+JywgJzxhcGkgZW5kcG9pbnQ+Jywgb3B0aW9ucylcbiAqICAgIC50aGVuKChkYXRhKSA9PiB7XG4gKiAgICAgIC8vIHN1Y2Nlc3NcbiAqICAgIH0sIChlcnIpID0+IHtcbiAqICAgICAgLy8gZXJyb3JcbiAqICAgIH0pXG4gKiB9XG4gKlxuICogZG93bmxvYWQoKSB7XG4gKiAgIGNvbnN0IHVybCA9ICdodHRwOi8vd3d3LmV4YW1wbGUuY29tL2ZpbGUucGRmJztcbiAqICAgZmlsZVRyYW5zZmVyLmRvd25sb2FkKHVybCwgdGhpcy5maWxlLmRhdGFEaXJlY3RvcnkgKyAnZmlsZS5wZGYnKS50aGVuKChlbnRyeSkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZCBjb21wbGV0ZTogJyArIGVudHJ5LnRvVVJMKCkpO1xuICogICB9LCAoZXJyb3IpID0+IHtcbiAqICAgICAvLyBoYW5kbGUgZXJyb3JcbiAqICAgfSk7XG4gKiB9XG4gKlxuICogYGBgXG4gKlxuICogVG8gc3RvcmUgZmlsZXMgaW4gYSBkaWZmZXJlbnQvcHVibGljbHkgYWNjZXNzaWJsZSBkaXJlY3RvcnksIHBsZWFzZSByZWZlciB0byB0aGUgZm9sbG93aW5nIGxpbmtcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZSN3aGVyZS10by1zdG9yZS1maWxlc1xuICogQGludGVyZmFjZXNcbiAqIEZpbGVVcGxvYWRPcHRpb25zXG4gKiBGaWxlVXBsb2FkUmVzdWx0XG4gKiBGaWxlVHJhbnNmZXJFcnJvclxuICogQGNsYXNzZXNcbiAqIEZpbGVUcmFuc2Zlck9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2ZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnVWJ1bnR1JywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFcnJvciBjb2RlIHJlamVjdGVkIGZyb20gdXBsb2FkIHdpdGggRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogRGVmaW5lZCBpbiBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcbiAgICogICAgICBJTlZBTElEX1VSTF9FUlI6IDIsICAgICBSZXR1cm4gd2hlbiB1cmwgd2FzIGludmFsaWRcbiAgICogICAgICBDT05ORUNUSU9OX0VSUjogMywgICAgICBSZXR1cm4gb24gY29ubmVjdGlvbiBlcnJvclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xuICAgKiAgICAgIE5PVF9NT0RJRklFRF9FUlI6IDUgICAgIFJldHVybiBvbiAnMzA0IE5vdCBNb2RpZmllZCcgSFRUUCByZXNwb25zZVxuICAgKlxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKi9cbiAgRmlsZVRyYW5zZmVyRXJyb3JDb2RlID0ge1xuICAgIEZJTEVfTk9UX0ZPVU5EX0VSUjogMSxcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXG4gICAgQ09OTkVDVElPTl9FUlI6IDMsXG4gICAgQUJPUlRfRVJSOiA0LFxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVRyYW5zZmVyIG9iamVjdFxuICAgKlxuICAgKiBAcmV0dXJucyB7RmlsZVRyYW5zZmVyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKCk6IEZpbGVUcmFuc2Zlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBGaWxlVHJhbnNmZXJPYmplY3QoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5OYW1lOiAnRmlsZVRyYW5zZmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoRmlsZVRyYW5zZmVyLmdldFBsdWdpblJlZigpLCBudWxsLCBGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBuZXcgKEZpbGVUcmFuc2Zlci5nZXRQbHVnaW4oKSkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBmaWxlIHRvIGEgc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVVybCAgRmlsZXN5c3RlbSBVUkwgcmVwcmVzZW50aW5nIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2Ugb3IgYSBkYXRhIFVSSS4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIGNhbiBhbHNvIGJlIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGRldmljZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgVVJMIG9mIHRoZSBzZXJ2ZXIgdG8gcmVjZWl2ZSB0aGUgZmlsZSwgYXMgZW5jb2RlZCBieSBlbmNvZGVVUkkoKS5cbiAgICogQHBhcmFtIHtGaWxlVXBsb2FkT3B0aW9uc30gW29wdGlvbnNdICBPcHRpb25hbCBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0cnVzdEFsbEhvc3RzXSAgT3B0aW9uYWwgcGFyYW1ldGVyLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgc2V0IHRvIHRydWUsIGl0IGFjY2VwdHMgYWxsIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gVGhpcyBpcyB1c2VmdWwgc2luY2UgQW5kcm9pZCByZWplY3RzIHNlbGYtc2lnbmVkIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHVzZS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZVVwbG9hZFJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlVXBsb2FkUmVzdWx0IGFuZCByZWplY3RzIHdpdGggRmlsZVRyYW5zZmVyRXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgdXBsb2FkKFxuICAgIGZpbGVVcmw6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzogRmlsZVVwbG9hZE9wdGlvbnMsXG4gICAgdHJ1c3RBbGxIb3N0cz86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkcyBhIGZpbGUgZnJvbSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgIFVSTCBvZiB0aGUgc2VydmVyIHRvIGRvd25sb2FkIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0ICBGaWxlc3lzdGVtIHVybCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZS4gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB0aGlzIGNhbiBhbHNvIGJlIHRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGRldmljZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbdHJ1c3RBbGxIb3N0c10gIE9wdGlvbmFsIHBhcmFtZXRlciwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIHNldCB0byB0cnVlLCBpdCBhY2NlcHRzIGFsbCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgQW5kcm9pZCByZWplY3RzIHNlbGYtc2lnbmVkIHNlY3VyaXR5IGNlcnRpZmljYXRlcy4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIHVzZS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtPcHRpb25hbF0gcGFyYW1ldGVycywgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgaGVhZGVycyAoc3VjaCBhcyBBdXRob3JpemF0aW9uIChCYXNpYyBBdXRoZW50aWNhdGlvbiksIGV0YykuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb2JqZWN0LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIGRvd25sb2FkKHNvdXJjZTogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZywgdHJ1c3RBbGxIb3N0cz86IGJvb2xlYW4sIG9wdGlvbnM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbmV2ZXIgYSBuZXcgY2h1bmsgb2YgZGF0YSBpcyB0cmFuc2ZlcnJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTGlzdGVuZXIgdGhhdCB0YWtlcyBhIHByb2dyZXNzIGV2ZW50LlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBzeW5jOiB0cnVlIH0pXG4gIG9uUHJvZ3Jlc3MobGlzdGVuZXI6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25wcm9ncmVzcyA9IGxpc3RlbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3J0cyBhbiBpbi1wcm9ncmVzcyB0cmFuc2Zlci4gVGhlIG9uZXJyb3IgY2FsbGJhY2sgaXMgcGFzc2VkIGEgRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogb2JqZWN0IHdoaWNoIGhhcyBhbiBlcnJvciBjb2RlIG9mIEZpbGVUcmFuc2ZlckVycm9yLkFCT1JUX0VSUi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGFib3J0KCk6IHZvaWQge31cbn1cbiJdfQ==

      /***/

    },

    /***/
    "kvL/":
    /*!*************************************************************************!*\
      !*** ./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js ***!
      \*************************************************************************/

    /*! exports provided: NgxDropzoneModule, NgxDropzoneComponent, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneVideoPreviewComponent, NgxDropzoneRemoveBadgeComponent, ɵb, ɵa */

    /***/
    function kvL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function () {
        return NgxDropzoneModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function () {
        return NgxDropzoneComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function () {
        return NgxDropzonePreviewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function () {
        return NgxDropzoneImagePreviewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function () {
        return NgxDropzoneVideoPreviewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function () {
        return NgxDropzoneRemoveBadgeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return NgxDropzoneLabelDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return NgxDropzoneService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "O1h7");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = [[["ngx-dropzone-label"]]];
      var _c1 = ["ngx-dropzone-label"];
      var _c2 = ["fileInput"];

      function NgxDropzoneComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngIf", "!_hasPreviews"]);
        }
      }

      var _c3 = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]];
      var _c4 = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];

      function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NgxDropzoneVideoPreviewComponent_video_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_video_0_Template_video_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.sanitizedVideoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4._remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NgxDropzoneLabelDirective = /*#__PURE__*/_createClass(function NgxDropzoneLabelDirective() {
        _classCallCheck(this, NgxDropzoneLabelDirective);
      });

      NgxDropzoneLabelDirective.ɵfac = function NgxDropzoneLabelDirective_Factory(t) {
        return new (t || NgxDropzoneLabelDirective)();
      };

      NgxDropzoneLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgxDropzoneLabelDirective,
        selectors: [["ngx-dropzone-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneLabelDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ngx-dropzone-label'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Coerces a data-bound value (typically a string) to a boolean.
       * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
       * @param {?} value
       * @return {?}
       */


      function coerceBooleanProperty(value) {
        return value != null && "".concat(value) !== 'false';
      }
      /**
       * Whether the provided value is considered a number.
       * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
       * @param {?} value
       * @return {?}
       */


      function coerceNumberProperty(value) {
        // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
        // and other non-number values as NaN, where Number just uses 0) but it considers the string
        // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
        return !isNaN(parseFloat(
        /** @type {?} */
        value)) && !isNaN(Number(value)) ? Number(value) : null;
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @enum {number} */


      var KEY_CODE = {
        BACKSPACE: 8,
        DELETE: 46
      };
      KEY_CODE[KEY_CODE.BACKSPACE] = 'BACKSPACE';
      KEY_CODE[KEY_CODE.DELETE] = 'DELETE';

      var NgxDropzonePreviewComponent = /*#__PURE__*/function () {
        /**
         * @param {?} sanitizer
         */
        function NgxDropzonePreviewComponent(sanitizer) {
          _classCallCheck(this, NgxDropzonePreviewComponent);

          this.sanitizer = sanitizer;
          this._removable = false;
          /**
           * Emitted when the element should be removed.
           */

          this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Make the preview item focusable using the tab key.
           */

          this.tabIndex = 0;
        }
        /**
         * Allow the user to remove files.
         * @return {?}
         */


        _createClass(NgxDropzonePreviewComponent, [{
          key: "removable",
          get: function get() {
            return this._removable;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._removable = coerceBooleanProperty(value);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "keyEvent",
          value: function keyEvent(event) {
            switch (event.keyCode) {
              case KEY_CODE.BACKSPACE:
              case KEY_CODE.DELETE:
                this.remove();
                break;

              default:
                break;
            }
          }
          /**
           * We use the HostBinding to pass these common styles to child components.
           * @return {?}
           */

        }, {
          key: "hostStyle",
          get: function get() {
            /** @type {?} */
            var styles = "\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t";
            return this.sanitizer.bypassSecurityTrustStyle(styles);
          }
          /**
           * Remove method to be used from the template.
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_remove",
          value: function _remove(event) {
            event.stopPropagation();
            this.remove();
          }
          /**
           * Remove the preview item (use from component code).
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            if (this._removable) {
              this.removed.next(this.file);
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "readFile",
          value: function readFile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", new Promise(
                      /**
                      * @param {?} resolve
                      * @param {?} reject
                      * @return {?}
                      */
                      function (resolve, reject) {
                        /** @type {?} */
                        var reader = new FileReader();

                        reader.onload =
                        /**
                        * @param {?} e
                        * @return {?}
                        */
                        function (e) {
                          resolve(
                          /** @type {?} */
                          e.target.result);
                        };

                        reader.onerror =
                        /**
                        * @param {?} e
                        * @return {?}
                        */
                        function (e) {
                          console.error("FileReader failed on file ".concat(_this2.file.name, "."));
                          reject(e);
                        };

                        if (!_this2.file) {
                          return reject('No file to read. Please provide a file using the [file] Input property.');
                        }

                        reader.readAsDataURL(_this2.file);
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return NgxDropzonePreviewComponent;
      }();

      NgxDropzonePreviewComponent.ɵfac = function NgxDropzonePreviewComponent_Factory(t) {
        return new (t || NgxDropzonePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      NgxDropzonePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzonePreviewComponent,
        selectors: [["ngx-dropzone-preview"]],
        hostVars: 3,
        hostBindings: function NgxDropzonePreviewComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDropzonePreviewComponent_keyup_HostBindingHandler($event) {
              return ctx.keyEvent($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabindex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyle);
          }
        },
        inputs: {
          removable: "removable",
          file: "file"
        },
        outputs: {
          removed: "removed"
        },
        ngContentSelectors: _c1,
        decls: 2,
        vars: 1,
        consts: [[3, "click", 4, "ngIf"], [3, "click"]],
        template: function NgxDropzonePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template, 1, 0, "ngx-dropzone-remove-badge", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent];
        },
        styles: ["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]
      });
      /** @nocollapse */

      NgxDropzonePreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      NgxDropzonePreviewComponent.propDecorators = {
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        keyEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keyup', ['$event']]
        }],
        hostStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style']
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['tabindex']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzonePreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone-preview',
            template: "\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n\t\t<ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n\t\t</ngx-dropzone-remove-badge>\n\t",
            styles: [":host(){background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host():focus,:host():hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, {
          removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['tabindex']
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
          }],
          hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style']
          }],
          file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * This service contains the filtering logic to be applied to
       * any dropped or selected file. If a file matches all criteria
       * like maximum size or accept type, it will be emitted in the
       * addedFiles array, otherwise in the rejectedFiles array.
       */


      var NgxDropzoneService = /*#__PURE__*/function () {
        function NgxDropzoneService() {
          _classCallCheck(this, NgxDropzoneService);
        }

        _createClass(NgxDropzoneService, [{
          key: "parseFileList",
          value:
          /**
           * @param {?} files
           * @param {?} accept
           * @param {?} maxFileSize
           * @param {?} multiple
           * @return {?}
           */
          function parseFileList(files, accept, maxFileSize, multiple) {
            /** @type {?} */
            var addedFiles = [];
            /** @type {?} */

            var rejectedFiles = [];

            for (var i = 0; i < files.length; i++) {
              /** @type {?} */
              var file = files.item(i);

              if (!this.isAccepted(file, accept)) {
                this.rejectFile(rejectedFiles, file, 'type');
                continue;
              }

              if (maxFileSize && file.size > maxFileSize) {
                this.rejectFile(rejectedFiles, file, 'size');
                continue;
              }

              if (!multiple && addedFiles.length >= 1) {
                this.rejectFile(rejectedFiles, file, 'no_multiple');
                continue;
              }

              addedFiles.push(file);
            }
            /** @type {?} */


            var result = {
              addedFiles: addedFiles,
              rejectedFiles: rejectedFiles
            };
            return result;
          }
          /**
           * @private
           * @param {?} file
           * @param {?} accept
           * @return {?}
           */

        }, {
          key: "isAccepted",
          value: function isAccepted(file, accept) {
            if (accept === '*') {
              return true;
            }
            /** @type {?} */


            var acceptFiletypes = accept.split(',').map(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return it.toLowerCase().trim();
            });
            /** @type {?} */

            var filetype = file.type.toLowerCase();
            /** @type {?} */

            var filename = file.name.toLowerCase();
            /** @type {?} */

            var matchedFileType = acceptFiletypes.find(
            /**
            * @param {?} acceptFiletype
            * @return {?}
            */
            function (acceptFiletype) {
              // check for wildcard mimetype (e.g. image/*)
              if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
              } // check for file extension (e.g. .csv)


              if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
              } // check for exact mimetype match (e.g. image/jpeg)


              return acceptFiletype == filetype;
            });
            return !!matchedFileType;
          }
          /**
           * @private
           * @param {?} rejectedFiles
           * @param {?} file
           * @param {?} reason
           * @return {?}
           */

        }, {
          key: "rejectFile",
          value: function rejectFile(rejectedFiles, file, reason) {
            /** @type {?} */
            var rejectedFile =
            /** @type {?} */
            file;
            rejectedFile.reason = reason;
            rejectedFiles.push(rejectedFile);
          }
        }]);

        return NgxDropzoneService;
      }();

      NgxDropzoneService.ɵfac = function NgxDropzoneService_Factory(t) {
        return new (t || NgxDropzoneService)();
      };

      NgxDropzoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgxDropzoneService,
        factory: NgxDropzoneService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxDropzoneComponent = /*#__PURE__*/function () {
        /**
         * @param {?} service
         */
        function NgxDropzoneComponent(service) {
          _classCallCheck(this, NgxDropzoneComponent);

          this.service = service;
          /**
           * Emitted when any files were added or rejected.
           */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Set the accepted file types. Defaults to '*'.
           */

          this.accept = '*';
          this._disabled = false;
          this._multiple = true;
          this._maxFileSize = undefined;
          this._expandable = false;
          this._disableClick = false;
          this._isHovered = false;
        }
        /**
         * @return {?}
         */


        _createClass(NgxDropzoneComponent, [{
          key: "_hasPreviews",
          get: function get() {
            return !!this._previewChildren.length;
          }
          /**
           * Disable any user interaction with the component.
           * @return {?}
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disabled = coerceBooleanProperty(value);

            if (this._isHovered) {
              this._isHovered = false;
            }
          }
          /**
           * Allow the selection of multiple files.
           * @return {?}
           */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._multiple = coerceBooleanProperty(value);
          }
          /**
           * Set the maximum size a single file may have.
           * @return {?}
           */

        }, {
          key: "maxFileSize",
          get: function get() {
            return this._maxFileSize;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._maxFileSize = coerceNumberProperty(value);
          }
          /**
           * Allow the dropzone container to expand vertically.
           * @return {?}
           */

        }, {
          key: "expandable",
          get: function get() {
            return this._expandable;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._expandable = coerceBooleanProperty(value);
          }
          /**
           * Open the file selector on click.
           * @return {?}
           */

        }, {
          key: "disableClick",
          get: function get() {
            return this._disableClick;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._disableClick = coerceBooleanProperty(value);
          }
          /**
           * Show the native OS file explorer to select files.
           * @return {?}
           */

        }, {
          key: "_onClick",
          value: function _onClick() {
            if (!this.disableClick) {
              this.showFileSelector();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_onDragOver",
          value: function _onDragOver(event) {
            if (this.disabled) {
              return;
            }

            this.preventDefault(event);
            this._isHovered = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "_onDragLeave",
          value: function _onDragLeave() {
            this._isHovered = false;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_onDrop",
          value: function _onDrop(event) {
            if (this.disabled) {
              return;
            }

            this.preventDefault(event);
            this._isHovered = false;
            this.handleFileDrop(event.dataTransfer.files);
          }
          /**
           * @return {?}
           */

        }, {
          key: "showFileSelector",
          value: function showFileSelector() {
            if (!this.disabled) {
              /** @type {?} */
              this._fileInput.nativeElement.click();
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_onFilesSelected",
          value: function _onFilesSelected(event) {
            /** @type {?} */
            var files = event.target.files;
            this.handleFileDrop(files); // Reset the native file input element to allow selecting the same file again

            this._fileInput.nativeElement.value = ''; // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.

            this.preventDefault(event);
          }
          /**
           * @private
           * @param {?} files
           * @return {?}
           */

        }, {
          key: "handleFileDrop",
          value: function handleFileDrop(files) {
            /** @type {?} */
            var result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
            this.change.next({
              addedFiles: result.addedFiles,
              rejectedFiles: result.rejectedFiles,
              source: this
            });
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "preventDefault",
          value: function preventDefault(event) {
            event.preventDefault();
            event.stopPropagation();
          }
        }]);

        return NgxDropzoneComponent;
      }();

      NgxDropzoneComponent.ɵfac = function NgxDropzoneComponent_Factory(t) {
        return new (t || NgxDropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxDropzoneService, 2));
      };

      NgxDropzoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzoneComponent,
        selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]],
        contentQueries: function NgxDropzoneComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxDropzonePreviewComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewChildren = _t);
          }
        },
        viewQuery: function NgxDropzoneComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._fileInput = _t.first);
          }
        },
        hostVars: 8,
        hostBindings: function NgxDropzoneComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDropzoneComponent_click_HostBindingHandler() {
              return ctx._onClick();
            })("dragover", function NgxDropzoneComponent_dragover_HostBindingHandler($event) {
              return ctx._onDragOver($event);
            })("dragleave", function NgxDropzoneComponent_dragleave_HostBindingHandler() {
              return ctx._onDragLeave();
            })("drop", function NgxDropzoneComponent_drop_HostBindingHandler($event) {
              return ctx._onDrop($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-dz-hovered", ctx._isHovered)("ngx-dz-disabled", ctx.disabled)("expandable", ctx.expandable)("unclickable", ctx.disableClick);
          }
        },
        inputs: {
          accept: "accept",
          disabled: "disabled",
          multiple: "multiple",
          maxFileSize: "maxFileSize",
          expandable: "expandable",
          disableClick: "disableClick",
          id: "id",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          ariaDescribedBy: ["aria-describedby", "ariaDescribedBy"]
        },
        outputs: {
          change: "change"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NgxDropzoneService])],
        ngContentSelectors: _c4,
        decls: 5,
        vars: 8,
        consts: [["type", "file", 3, "id", "multiple", "accept", "disabled", "change"], ["fileInput", ""], [4, "ngIf"]],
        template: function NgxDropzoneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxDropzoneComponent_Template_input_change_0_listener($event) {
              return ctx._onFilesSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneComponent_ng_content_2_Template, 1, 0, "ng-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("multiple", ctx.multiple)("accept", ctx.accept)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._hasPreviews);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}"]
      });
      /** @nocollapse */

      NgxDropzoneComponent.ctorParameters = function () {
        return [{
          type: NgxDropzoneService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };

      NgxDropzoneComponent.propDecorators = {
        _previewChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NgxDropzonePreviewComponent, {
            descendants: true
          }]
        }],
        _fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileInput']
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        accept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ngx-dz-disabled']
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxFileSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        expandable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.expandable']
        }],
        disableClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.unclickable']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['aria-describedby']
        }],
        _isHovered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.ngx-dz-hovered']
        }],
        _onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        _onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        _onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave']
        }],
        _onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone, [ngx-dropzone]',
            template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
            styles: [":host(){display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host().ngx-dz-hovered{border-style:solid}:host().ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host().expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host().unclickable{cursor:default}:host() ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host() input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host() input:focus+::ng-deep ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}"],
            providers: [NgxDropzoneService]
          }]
        }], function () {
          return [{
            type: NgxDropzoneService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _isHovered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-hovered']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-disabled']
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxFileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          expandable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.expandable']
          }],
          disableClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.unclickable']
          }],

          /**
           * Show the native OS file explorer to select files.
           * @return {?}
           */
          _onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          _onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
          }],

          /**
           * @return {?}
           */
          _onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          _onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
          }],
          _previewChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NgxDropzonePreviewComponent, {
              descendants: true
            }]
          }],
          _fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
          }],
          ariaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
          }]
        });
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxDropzoneImagePreviewComponent = /*#__PURE__*/function (_NgxDropzonePreviewCo) {
        _inherits(NgxDropzoneImagePreviewComponent, _NgxDropzonePreviewCo);

        var _super2 = _createSuper(NgxDropzoneImagePreviewComponent);

        /**
         * @param {?} sanitizer
         */
        function NgxDropzoneImagePreviewComponent(sanitizer) {
          var _this3;

          _classCallCheck(this, NgxDropzoneImagePreviewComponent);

          _this3 = _super2.call(this, sanitizer);
          /**
           * The image data source.
           */

          _this3.defualtImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
          _this3.imageSrc = _this3.sanitizer.bypassSecurityTrustUrl(_this3.defualtImgLoading);
          return _this3;
        }
        /**
         * @return {?}
         */


        _createClass(NgxDropzoneImagePreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.readFile().then(
            /**
            * @param {?} img
            * @return {?}
            */
            function (img) {
              return setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this4.imageSrc = img;
              });
            })["catch"](
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              return console.error(err);
            });
          }
        }]);

        return NgxDropzoneImagePreviewComponent;
      }(NgxDropzonePreviewComponent);

      NgxDropzoneImagePreviewComponent.ɵfac = function NgxDropzoneImagePreviewComponent_Factory(t) {
        return new (t || NgxDropzoneImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      NgxDropzoneImagePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzoneImagePreviewComponent,
        selectors: [["ngx-dropzone-image-preview"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: NgxDropzonePreviewComponent,
          useExisting: NgxDropzoneImagePreviewComponent
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 3,
        vars: 2,
        consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]],
        template: function NgxDropzoneImagePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent];
        },
        styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   img[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]
      });
      /** @nocollapse */

      NgxDropzoneImagePreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneImagePreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone-image-preview',
            template: "\n    <img [src]=\"imageSrc\" />\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
            styles: [":host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus img,:host():hover img{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() img{max-height:100%;border-radius:5px;opacity:.8}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"],
            providers: [{
              provide: NgxDropzonePreviewComponent,
              useExisting: NgxDropzoneImagePreviewComponent
            }]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxDropzoneRemoveBadgeComponent = /*#__PURE__*/_createClass(function NgxDropzoneRemoveBadgeComponent() {
        _classCallCheck(this, NgxDropzoneRemoveBadgeComponent);
      });

      NgxDropzoneRemoveBadgeComponent.ɵfac = function NgxDropzoneRemoveBadgeComponent_Factory(t) {
        return new (t || NgxDropzoneRemoveBadgeComponent)();
      };

      NgxDropzoneRemoveBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzoneRemoveBadgeComponent,
        selectors: [["ngx-dropzone-remove-badge"]],
        decls: 3,
        vars: 0,
        consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]],
        template: function NgxDropzoneRemoveBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneRemoveBadgeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone-remove-badge',
            template: "\n    <svg>\n      <line x1=\"0\" y1=\"0\" x2=\"10\" y2=\"10\" />\n      <line x1=\"0\" y1=\"10\" x2=\"10\" y2=\"0\" />\n    </svg>\n  ",
            styles: [":host(){display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}:host():hover{background:#aeaeae}:host()>svg{height:10px;width:10px}:host()>svg>line{stroke-width:2px;stroke:#fff}"]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxDropzoneVideoPreviewComponent = /*#__PURE__*/function (_NgxDropzonePreviewCo2) {
        _inherits(NgxDropzoneVideoPreviewComponent, _NgxDropzonePreviewCo2);

        var _super3 = _createSuper(NgxDropzoneVideoPreviewComponent);

        /**
         * @param {?} sanitizer
         */
        function NgxDropzoneVideoPreviewComponent(sanitizer) {
          _classCallCheck(this, NgxDropzoneVideoPreviewComponent);

          return _super3.call(this, sanitizer);
        }
        /**
         * @return {?}
         */


        _createClass(NgxDropzoneVideoPreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.file) {
              console.error('No file to read. Please provide a file using the [file] Input property.');
              return;
            }
            /**
             * We sanitize the URL here to enable the preview.
             * Please note that this could cause security issues!
             **/


            this.videoSrc = URL.createObjectURL(this.file);
            this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            URL.revokeObjectURL(this.videoSrc);
          }
        }]);

        return NgxDropzoneVideoPreviewComponent;
      }(NgxDropzonePreviewComponent);

      NgxDropzoneVideoPreviewComponent.ɵfac = function NgxDropzoneVideoPreviewComponent_Factory(t) {
        return new (t || NgxDropzoneVideoPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      NgxDropzoneVideoPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxDropzoneVideoPreviewComponent,
        selectors: [["ngx-dropzone-video-preview"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: NgxDropzonePreviewComponent,
          useExisting: NgxDropzoneVideoPreviewComponent
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 3,
        vars: 2,
        consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]],
        template: function NgxDropzoneVideoPreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxDropzoneVideoPreviewComponent_video_0_Template, 2, 1, "video", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sanitizedVideoSrc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.removable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent],
        styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   video[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{max-height:100%;border-radius:5px}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]
      });
      /** @nocollapse */

      NgxDropzoneVideoPreviewComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneVideoPreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-dropzone-video-preview',
            template: "\n    <video *ngIf=\"sanitizedVideoSrc\" controls (click)=\"$event.stopPropagation()\">\n      <source [src]=\"sanitizedVideoSrc\" />\n    </video>\n    <ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
            styles: [":host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus video,:host():hover video{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() video{max-height:100%;border-radius:5px}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"],
            providers: [{
              provide: NgxDropzonePreviewComponent,
              useExisting: NgxDropzoneVideoPreviewComponent
            }]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var NgxDropzoneModule = /*#__PURE__*/_createClass(function NgxDropzoneModule() {
        _classCallCheck(this, NgxDropzoneModule);
      });

      NgxDropzoneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxDropzoneModule
      });
      NgxDropzoneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxDropzoneModule_Factory(t) {
          return new (t || NgxDropzoneModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxDropzoneModule, {
          declarations: function declarations() {
            return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
          },
          exports: function exports() {
            return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDropzoneModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent],
            exports: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtbGFiZWwuZGlyZWN0aXZlLnRzIiwibmc6L25neC1kcm9wem9uZS9saWIvaGVscGVycy50cyIsIm5nOi9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudC50cyIsIm5nOi9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS5zZXJ2aWNlLnRzIiwibmc6L25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lL25neC1kcm9wem9uZS5jb21wb25lbnQudHMiLCJuZzovbmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy5jb21wb25lbnQudHMiLCJuZzovbmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlL25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UuY29tcG9uZW50LnRzIiwibmc6L25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6L25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BS2EseUJBQXlCO0FBQUc7cURBSHhDLFNBQVMsU0FBQyxrQkFDVixRQUFRLEVBQUUsb0JBQW9CO0VBQzlCOzs7Ozs7MEJBQ0s7QUFBQztBQUFDO0FBQUk7QUFDVDtBQUFxSDtBQUFJO0FBQUk7QUFBaUU7QUFB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QSxBQUFBLEFBQUEsQUFBQSxBQW5EQSxBQU1BLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFZQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQWxHQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUlBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFmQSxBQUFBLEFBdUJBLEFBQUEsQUFHQSxBQUFBLEFBVUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFhQSxBQUFBLEFBQUEsQUFBQSxBQW9CQSxBQUFBLEFBQUEsQUFBQSxBQ3pFQSxBQTBCQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUF4RUEsQUFBQSxBQ3pCQSxBQXVCQSxBQUFBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFVQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBVUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFXQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBU0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQW5GQSxBQU1BLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFZQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUlBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFjQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBcktBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBTUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXJCQSxBQUFBLEFBeUJBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFjQSxBQUFBLEFBVUEsQUFBQSxBQVVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQVVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQVVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVVBLEFBQUEsQUFBQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ3ZJQSxBQW9CQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSkEsQUFNQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFoQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFLQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQWpCQSxBQUFBLEFDRkEsQUFZQSxBQUFBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFLQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFDWEEsQUFzQkEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU9BLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBL0NBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBT0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFuQkEsQUFBQSxBQ0ZBLEFBOEJBLEFBQUEsQUFyQkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1sYWJlbCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSB7IH1cbiIsIlxuLyoqXG4gKiBDb2VyY2VzIGEgZGF0YS1ib3VuZCB2YWx1ZSAodHlwaWNhbGx5IGEgc3RyaW5nKSB0byBhIGJvb2xlYW4uXG4gKiBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvYmxvYi9tYXN0ZXIvc3JjL2Nkay9jb2VyY2lvbi9ib29sZWFuLXByb3BlcnR5LnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWU6IGFueSk6IGJvb2xlYW5cbntcblx0cmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBjb25zaWRlcmVkIGEgbnVtYmVyLlxuICogVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3NyYy9jZGsvY29lcmNpb24vbnVtYmVyLXByb3BlcnR5LnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZTogYW55KTogbnVtYmVyXG57XG5cdC8vIHBhcnNlRmxvYXQodmFsdWUpIGhhbmRsZXMgbW9zdCBvZiB0aGUgY2FzZXMgd2UncmUgaW50ZXJlc3RlZCBpbiAoaXQgdHJlYXRzIG51bGwsIGVtcHR5IHN0cmluZyxcblx0Ly8gYW5kIG90aGVyIG5vbi1udW1iZXIgdmFsdWVzIGFzIE5hTiwgd2hlcmUgTnVtYmVyIGp1c3QgdXNlcyAwKSBidXQgaXQgY29uc2lkZXJzIHRoZSBzdHJpbmdcblx0Ly8gJzEyM2hlbGxvJyB0byBiZSBhIHZhbGlkIG51bWJlci4gVGhlcmVmb3JlIHdlIGFsc28gY2hlY2sgaWYgTnVtYmVyKHZhbHVlKSBpcyBOYU4uXG5cdHJldHVybiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgYW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpKSA/IE51bWJlcih2YWx1ZSkgOiBudWxsO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZW51bSBLRVlfQ09ERSB7XG5cdEJBQ0tTUEFDRSA9IDgsXG5cdERFTEVURSA9IDQ2XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1wcmV2aWV3Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZHJvcHpvbmUtbGFiZWxcIj48L25nLWNvbnRlbnQ+XG5cdFx0PG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UgKm5nSWY9XCJyZW1vdmFibGVcIiAoY2xpY2spPVwiX3JlbW92ZSgkZXZlbnQpXCI+XG5cdFx0PC9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlPlxuXHRgLFxuXHRzdHlsZXM6IFtgOmhvc3QoKXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AsI2VkZWRlZCwjZWZlZmVmLCNmMWYxZjEsI2Y0ZjRmNCwjZjZmNmY2KX06aG9zdCgpOmZvY3VzLDpob3N0KCk6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNlM2UzZTMsI2ViZWFlYSwjZThlN2U3LCNlYmVhZWEsI2Y0ZjRmNCk7b3V0bGluZTowfTpob3N0KCk6Zm9jdXMgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSw6aG9zdCgpOmhvdmVyIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2V7b3BhY2l0eToxfTpob3N0KCkgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjB9Omhvc3QoKSA6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVse292ZXJmbG93LXdyYXA6YnJlYWstd29yZH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuXHQpIHsgfVxuXG5cdC8qKiBUaGUgZmlsZSB0byBwcmV2aWV3LiAqL1xuXHRASW5wdXQoKSBmaWxlOiBGaWxlO1xuXG5cdC8qKiBBbGxvdyB0aGUgdXNlciB0byByZW1vdmUgZmlsZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW1vdmFibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlbW92YWJsZTtcblx0fVxuXHRzZXQgcmVtb3ZhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fcmVtb3ZhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblx0fVxuXHRwcm90ZWN0ZWQgX3JlbW92YWJsZSA9IGZhbHNlO1xuXG5cdC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlbW92ZWQuICovXG5cdEBPdXRwdXQoKSByZWFkb25seSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlPigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcblx0a2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdGNhc2UgS0VZX0NPREUuQkFDS1NQQUNFOlxuXHRcdFx0Y2FzZSBLRVlfQ09ERS5ERUxFVEU6XG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0LyoqIFdlIHVzZSB0aGUgSG9zdEJpbmRpbmcgdG8gcGFzcyB0aGVzZSBjb21tb24gc3R5bGVzIHRvIGNoaWxkIGNvbXBvbmVudHMuICovXG5cdEBIb3N0QmluZGluZygnc3R5bGUnKVxuXHRnZXQgaG9zdFN0eWxlKCk6IFNhZmVTdHlsZSB7XG5cdFx0Y29uc3Qgc3R5bGVzID0gYFxuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGhlaWdodDogMTQwcHg7XG5cdFx0XHRtaW4taGVpZ2h0OiAxNDBweDtcblx0XHRcdG1pbi13aWR0aDogMTgwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IDE4MHB4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGA7XG5cblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlcyk7XG5cdH1cblxuXHQvKiogTWFrZSB0aGUgcHJldmlldyBpdGVtIGZvY3VzYWJsZSB1c2luZyB0aGUgdGFiIGtleS4gKi9cblx0QEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYkluZGV4ID0gMDtcblxuXHQvKiogUmVtb3ZlIG1ldGhvZCB0byBiZSB1c2VkIGZyb20gdGhlIHRlbXBsYXRlLiAqL1xuXHRfcmVtb3ZlKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fVxuXG5cdC8qKiBSZW1vdmUgdGhlIHByZXZpZXcgaXRlbSAodXNlIGZyb20gY29tcG9uZW50IGNvZGUpLiAqL1xuXHRyZW1vdmUoKSB7XG5cdFx0aWYgKHRoaXMuX3JlbW92YWJsZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVkLm5leHQodGhpcy5maWxlKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXN5bmMgcmVhZEZpbGUoKTogUHJvbWlzZTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuXHRcdFx0cmVhZGVyLm9ubG9hZCA9IGUgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKChlLnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQpO1xuXHRcdFx0fTtcblxuXHRcdFx0cmVhZGVyLm9uZXJyb3IgPSBlID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgRmlsZVJlYWRlciBmYWlsZWQgb24gZmlsZSAke3RoaXMuZmlsZS5uYW1lfS5gKTtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCF0aGlzLmZpbGUpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdCgnTm8gZmlsZSB0byByZWFkLiBQbGVhc2UgcHJvdmlkZSBhIGZpbGUgdXNpbmcgdGhlIFtmaWxlXSBJbnB1dCBwcm9wZXJ0eS4nKTtcblx0XHRcdH1cblxuXHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlKTtcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTZWxlY3RSZXN1bHQge1xuXG5cdC8qKiBUaGUgYWRkZWQgZmlsZXMsIGVtaXR0ZWQgaW4gdGhlIGZpbGVzQWRkZWQgZXZlbnQuICovXG5cdGFkZGVkRmlsZXM6IEZpbGVbXTtcblxuXHQvKiogVGhlIHJlamVjdGVkIGZpbGVzLCBlbWl0dGVkIGluIHRoZSBmaWxlc1JlamVjdGVkIGV2ZW50LiAqL1xuXHRyZWplY3RlZEZpbGVzOiBSZWplY3RlZEZpbGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWplY3RlZEZpbGUgZXh0ZW5kcyBGaWxlIHtcblxuXHQvKiogVGhlIHJlYXNvbiB0aGUgZmlsZSB3YXMgcmVqZWN0ZWQuICovXG5cdHJlYXNvbj86IFJlamVjdFJlYXNvbjtcbn1cblxuZXhwb3J0IHR5cGUgUmVqZWN0UmVhc29uID0gJ3R5cGUnIHwgJ3NpemUnIHwgJ25vX211bHRpcGxlJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgY29udGFpbnMgdGhlIGZpbHRlcmluZyBsb2dpYyB0byBiZSBhcHBsaWVkIHRvXG4gKiBhbnkgZHJvcHBlZCBvciBzZWxlY3RlZCBmaWxlLiBJZiBhIGZpbGUgbWF0Y2hlcyBhbGwgY3JpdGVyaWFcbiAqIGxpa2UgbWF4aW11bSBzaXplIG9yIGFjY2VwdCB0eXBlLCBpdCB3aWxsIGJlIGVtaXR0ZWQgaW4gdGhlXG4gKiBhZGRlZEZpbGVzIGFycmF5LCBvdGhlcndpc2UgaW4gdGhlIHJlamVjdGVkRmlsZXMgYXJyYXkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVNlcnZpY2Uge1xuXG5cdHBhcnNlRmlsZUxpc3QoZmlsZXM6IEZpbGVMaXN0LCBhY2NlcHQ6IHN0cmluZywgbWF4RmlsZVNpemU6IG51bWJlciwgbXVsdGlwbGU6IGJvb2xlYW4pOiBGaWxlU2VsZWN0UmVzdWx0IHtcblxuXHRcdGNvbnN0IGFkZGVkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXHRcdGNvbnN0IHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBmaWxlID0gZmlsZXMuaXRlbShpKTtcblxuXHRcdFx0aWYgKCF0aGlzLmlzQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ3R5cGUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXhGaWxlU2l6ZSAmJiBmaWxlLnNpemUgPiBtYXhGaWxlU2l6ZSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ3NpemUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbXVsdGlwbGUgJiYgYWRkZWRGaWxlcy5sZW5ndGggPj0gMSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ25vX211bHRpcGxlJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGRlZEZpbGVzLnB1c2goZmlsZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0OiBGaWxlU2VsZWN0UmVzdWx0ID0ge1xuXHRcdFx0YWRkZWRGaWxlcyxcblx0XHRcdHJlamVjdGVkRmlsZXNcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHByaXZhdGUgaXNBY2NlcHRlZChmaWxlOiBGaWxlLCBhY2NlcHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKGFjY2VwdCA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBhY2NlcHRGaWxldHlwZXMgPSBhY2NlcHQuc3BsaXQoJywnKS5tYXAoaXQgPT4gaXQudG9Mb3dlckNhc2UoKS50cmltKCkpO1xuXHRcdGNvbnN0IGZpbGV0eXBlID0gZmlsZS50eXBlLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgZmlsZW5hbWUgPSBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IG1hdGNoZWRGaWxlVHlwZSA9IGFjY2VwdEZpbGV0eXBlcy5maW5kKGFjY2VwdEZpbGV0eXBlID0+IHtcblxuXHRcdFx0Ly8gY2hlY2sgZm9yIHdpbGRjYXJkIG1pbWV0eXBlIChlLmcuIGltYWdlLyopXG5cdFx0XHRpZiAoYWNjZXB0RmlsZXR5cGUuZW5kc1dpdGgoJy8qJykpIHtcblx0XHRcdFx0cmV0dXJuIGZpbGV0eXBlLnNwbGl0KCcvJylbMF0gPT09IGFjY2VwdEZpbGV0eXBlLnNwbGl0KCcvJylbMF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGZvciBmaWxlIGV4dGVuc2lvbiAoZS5nLiAuY3N2KVxuXHRcdFx0aWYgKGFjY2VwdEZpbGV0eXBlLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG5cdFx0XHRcdHJldHVybiBmaWxlbmFtZS5lbmRzV2l0aChhY2NlcHRGaWxldHlwZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGZvciBleGFjdCBtaW1ldHlwZSBtYXRjaCAoZS5nLiBpbWFnZS9qcGVnKVxuXHRcdFx0cmV0dXJuIGFjY2VwdEZpbGV0eXBlID09IGZpbGV0eXBlO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICEhbWF0Y2hlZEZpbGVUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSByZWplY3RGaWxlKHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdLCBmaWxlOiBGaWxlLCByZWFzb246IFJlamVjdFJlYXNvbikge1xuXG5cdFx0Y29uc3QgcmVqZWN0ZWRGaWxlID0gZmlsZSBhcyBSZWplY3RlZEZpbGU7XG5cdFx0cmVqZWN0ZWRGaWxlLnJlYXNvbiA9IHJlYXNvbjtcblxuXHRcdHJlamVjdGVkRmlsZXMucHVzaChyZWplY3RlZEZpbGUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBWaWV3Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBTZWxmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVNlcnZpY2UsIEZpbGVTZWxlY3RSZXN1bHQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neERyb3B6b25lQ2hhbmdlRXZlbnQge1xuICBzb3VyY2U6IE5neERyb3B6b25lQ29tcG9uZW50O1xuICBhZGRlZEZpbGVzOiBGaWxlW107XG4gIHJlamVjdGVkRmlsZXM6IEZpbGVbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLCBbbmd4LWRyb3B6b25lXScsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICNmaWxlSW5wdXQgdHlwZT1cImZpbGVcIiBbaWRdPVwiaWRcIiBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIiBbYWNjZXB0XT1cImFjY2VwdFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIChjaGFuZ2UpPVwiX29uRmlsZXNTZWxlY3RlZCgkZXZlbnQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxuICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImFyaWFEZXNjcmliZWRCeVwiPlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCIgKm5nSWY9XCIhX2hhc1ByZXZpZXdzXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLXByZXZpZXdcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoxODBweDtiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6IzcxNzM4Njtib3JkZXI6MnB4IGRhc2hlZCAjNzE3Mzg2O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxNnB4O292ZXJmbG93LXg6YXV0b306aG9zdCgpLm5neC1kei1ob3ZlcmVke2JvcmRlci1zdHlsZTpzb2xpZH06aG9zdCgpLm5neC1kei1kaXNhYmxlZHtvcGFjaXR5Oi41O2N1cnNvcjpuby1kcm9wO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoKS5leHBhbmRhYmxle292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6dW5zZXQ7bWluLWhlaWdodDoxODBweDtmbGV4LXdyYXA6d3JhcH06aG9zdCgpLnVuY2xpY2thYmxle2N1cnNvcjpkZWZhdWx0fTpob3N0KCkgOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbHt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjEwO21hcmdpbjoxMHB4IGF1dG99Omhvc3QoKSBpbnB1dHt3aWR0aDouMXB4O2hlaWdodDouMXB4O29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMX06aG9zdCgpIGlucHV0OmZvY3VzKzo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7b3V0bGluZTojMDAwIGRvdHRlZCAxcHg7b3V0bGluZTotd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHh9YF0sXG4gIHByb3ZpZGVyczogW05neERyb3B6b25lU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSBzZXJ2aWNlOiBOZ3hEcm9wem9uZVNlcnZpY2VcbiAgKSB7IH1cblxuICAvKiogQSBsaXN0IG9mIHRoZSBjb250ZW50LXByb2plY3RlZCBwcmV2aWV3IGNoaWxkcmVuLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfcHJldmlld0NoaWxkcmVuOiBRdWVyeUxpc3Q8Tmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50PjtcblxuICBnZXQgX2hhc1ByZXZpZXdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3ByZXZpZXdDaGlsZHJlbi5sZW5ndGg7XG4gIH1cblxuICAvKiogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQuICovXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIF9maWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiBhbnkgZmlsZXMgd2VyZSBhZGRlZCBvciByZWplY3RlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd4RHJvcHpvbmVDaGFuZ2VFdmVudD4oKTtcblxuICAvKiogU2V0IHRoZSBhY2NlcHRlZCBmaWxlIHR5cGVzLiBEZWZhdWx0cyB0byAnKicuICovXG4gIEBJbnB1dCgpIGFjY2VwdCA9ICcqJztcblxuICAvKiogRGlzYWJsZSBhbnkgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKiogQWxsb3cgdGhlIHNlbGVjdGlvbiBvZiBtdWx0aXBsZSBmaWxlcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlwbGUgPSB0cnVlO1xuXG4gIC8qKiBTZXQgdGhlIG1heGltdW0gc2l6ZSBhIHNpbmdsZSBmaWxlIG1heSBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4RmlsZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RmlsZVNpemU7XG4gIH1cbiAgc2V0IG1heEZpbGVTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhGaWxlU2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tYXhGaWxlU2l6ZTogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBBbGxvdyB0aGUgZHJvcHpvbmUgY29udGFpbmVyIHRvIGV4cGFuZCB2ZXJ0aWNhbGx5LiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGFibGUnKVxuICBnZXQgZXhwYW5kYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kYWJsZTtcbiAgfVxuICBzZXQgZXhwYW5kYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2V4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogT3BlbiB0aGUgZmlsZSBzZWxlY3RvciBvbiBjbGljay4gKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51bmNsaWNrYWJsZScpXG4gIGdldCBkaXNhYmxlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVDbGljaztcbiAgfVxuICBzZXQgZGlzYWJsZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZUNsaWNrID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlQ2xpY2sgPSBmYWxzZTtcblxuICAvKiogRXhwb3NlIHRoZSBpZCwgYXJpYS1sYWJlbCwgYXJpYS1sYWJlbGxlZGJ5IGFuZCBhcmlhLWRlc2NyaWJlZGJ5IG9mIHRoZSBuYXRpdmUgZmlsZSBpbnB1dCBmb3IgcHJvcGVyIGFjY2Vzc2liaWxpdHkuICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRCeTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWhvdmVyZWQnKVxuICBfaXNIb3ZlcmVkID0gZmFsc2U7XG5cbiAgLyoqIFNob3cgdGhlIG5hdGl2ZSBPUyBmaWxlIGV4cGxvcmVyIHRvIHNlbGVjdCBmaWxlcy4gKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfb25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZUNsaWNrKSB7XG4gICAgICB0aGlzLnNob3dGaWxlU2VsZWN0b3IoKTtcbiAgICB9IFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBfb25EcmFnT3ZlcihldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScpXG4gIF9vbkRyYWdMZWF2ZSgpIHtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBfb25Ecm9wKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZUZpbGVEcm9wKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gIH1cbiAgXG4gIHNob3dGaWxlU2VsZWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAodGhpcy5fZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBfb25GaWxlc1NlbGVjdGVkKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZXM6IEZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgIHRoaXMuaGFuZGxlRmlsZURyb3AoZmlsZXMpO1xuXG4gICAgLy8gUmVzZXQgdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQgdG8gYWxsb3cgc2VsZWN0aW5nIHRoZSBzYW1lIGZpbGUgYWdhaW5cbiAgICB0aGlzLl9maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuXG4gICAgLy8gZml4KCMzMik6IFByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnQgYmVoYXZpb3VyIHdoaWNoIGNhdXNlZCB0aGUgY2hhbmdlIGV2ZW50IHRvIGVtaXQgdHdpY2UuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZpbGVEcm9wKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5wYXJzZUZpbGVMaXN0KGZpbGVzLCB0aGlzLmFjY2VwdCwgdGhpcy5tYXhGaWxlU2l6ZSwgdGhpcy5tdWx0aXBsZSk7XG5cbiAgICB0aGlzLmNoYW5nZS5uZXh0KHtcbiAgICAgIGFkZGVkRmlsZXM6IHJlc3VsdC5hZGRlZEZpbGVzLFxuICAgICAgcmVqZWN0ZWRGaWxlczogcmVzdWx0LnJlamVjdGVkRmlsZXMsXG4gICAgICBzb3VyY2U6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmVudERlZmF1bHQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VTcmNcIiAvPlxuXHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kcm9wem9uZS1sYWJlbFwiPjwvbmctY29udGVudD5cbiAgICA8bmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSAqbmdJZj1cInJlbW92YWJsZVwiIChjbGljayk9XCJfcmVtb3ZlKCRldmVudClcIj5cbiAgICA8L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2U+XG5cdGAsXG4gIHN0eWxlczogW2A6aG9zdCgpe21pbi13aWR0aDp1bnNldCFpbXBvcnRhbnQ7bWF4LXdpZHRoOnVuc2V0IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50fTpob3N0KCk6Zm9jdXMgaW1nLDpob3N0KCk6aG92ZXIgaW1ne29wYWNpdHk6Ljd9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIGltZ3ttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1cHg7b3BhY2l0eTouOH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge1xuICAgIHN1cGVyKHNhbml0aXplcik7XG4gIH1cblxuICAvKiogVGhlIGltYWdlIGRhdGEgc291cmNlLiAqL1xuICAgZGVmdWFsdEltZ0xvYWRpbmcgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCemRIbHNaVDBpYldGeVoybHVPaUJoZFhSdk95QmlZV05yWjNKdmRXNWtPaUJ5WjJJb01qUXhMQ0F5TkRJc0lESTBNeWtnYm05dVpTQnlaWEJsWVhRZ2MyTnliMnhzSURBbElEQWxPeUJrYVhOd2JHRjVPaUJpYkc5amF6c2djMmhoY0dVdGNtVnVaR1Z5YVc1bk9pQmhkWFJ2T3lJZ2QybGtkR2c5SWpJeU5IQjRJaUJvWldsbmFIUTlJakl5TkhCNElpQjJhV1YzUW05NFBTSXdJREFnTVRBd0lERXdNQ0lnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBaRmxOYVdRaVBnbzhZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSXhOQ0lnYzNSeWIydGxMWGRwWkhSb1BTSXpJaUJ6ZEhKdmEyVTlJaU00TldFeVlqWWlJSE4wY205clpTMWtZWE5vWVhKeVlYazlJakl4TGprNU1URTBPRFUzTlRFeU9EVTFNaUF5TVM0NU9URXhORGcxTnpVeE1qZzFOVElpSUdacGJHdzlJbTV2Ym1VaUlITjBjbTlyWlMxc2FXNWxZMkZ3UFNKeWIzVnVaQ0krQ2lBZ1BHRnVhVzFoZEdWVWNtRnVjMlp2Y20wZ1lYUjBjbWxpZFhSbFRtRnRaVDBpZEhKaGJuTm1iM0p0SWlCMGVYQmxQU0p5YjNSaGRHVWlJR1IxY2owaU1TNHhOakkzT1RBMk9UYzJOelEwTVRnMGN5SWdjbVZ3WldGMFEyOTFiblE5SW1sdVpHVm1hVzVwZEdVaUlHdGxlVlJwYldWelBTSXdPekVpSUhaaGJIVmxjejBpTUNBMU1DQTFNRHN6TmpBZ05UQWdOVEFpUGp3dllXNXBiV0YwWlZSeVlXNXpabTl5YlQ0S1BDOWphWEpqYkdVK0NqeGphWEpqYkdVZ1kzZzlJalV3SWlCamVUMGlOVEFpSUhJOUlqRXdJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlJSE4wY205clpUMGlJMkppWTJWa1pDSWdjM1J5YjJ0bExXUmhjMmhoY25KaGVUMGlNVFV1TnpBM09UWXpNalkzT1RRNE9UWTJJREUxTGpjd056azJNekkyTnprME9EazJOaUlnYzNSeWIydGxMV1JoYzJodlptWnpaWFE5SWpFMUxqY3dOemsyTXpJMk56azBPRGsyTmlJZ1ptbHNiRDBpYm05dVpTSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWo0S0lDQThZVzVwYldGMFpWUnlZVzV6Wm05eWJTQmhkSFJ5YVdKMWRHVk9ZVzFsUFNKMGNtRnVjMlp2Y20waUlIUjVjR1U5SW5KdmRHRjBaU0lnWkhWeVBTSXhMakUyTWpjNU1EWTVOelkzTkRReE9EUnpJaUJ5WlhCbFlYUkRiM1Z1ZEQwaWFXNWtaV1pwYm1sMFpTSWdhMlY1VkdsdFpYTTlJakE3TVNJZ2RtRnNkV1Z6UFNJd0lEVXdJRFV3T3kwek5qQWdOVEFnTlRBaVBqd3ZZVzVwYldGMFpWUnlZVzV6Wm05eWJUNEtQQzlqYVhKamJHVStDandoTFMwZ1cyeGthVzlkSUdkbGJtVnlZWFJsWkNCaWVTQm9kSFJ3Y3pvdkwyeHZZV1JwYm1jdWFXOHZJQzB0UGp3dmMzWm5QZz09JztcbiAgaW1hZ2VTcmM6IGFueSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodGhpcy5kZWZ1YWx0SW1nTG9hZGluZyk7IFxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVhZEZpbGUoKVxuICAgICAgLnRoZW4oaW1nID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbWFnZVNyYyA9IGltZykpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnPlxuICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIwXCIgeDI9XCIxMFwiIHkyPVwiMTBcIiAvPlxuICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIxMFwiIHgyPVwiMTBcIiB5Mj1cIjBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjIycHg7d2lkdGg6MjJweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NXB4O3JpZ2h0OjVweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNiYmI7Y29sb3I6IzMzMztjdXJzb3I6cG9pbnRlcn06aG9zdCgpOmhvdmVye2JhY2tncm91bmQ6I2FlYWVhZX06aG9zdCgpPnN2Z3toZWlnaHQ6MTBweDt3aWR0aDoxMHB4fTpob3N0KCk+c3ZnPmxpbmV7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2U6I2ZmZn1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUtdmlkZW8tcHJldmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHZpZGVvICpuZ0lmPVwic2FuaXRpemVkVmlkZW9TcmNcIiBjb250cm9scyAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICA8c291cmNlIFtzcmNdPVwic2FuaXRpemVkVmlkZW9TcmNcIiAvPlxuICAgIDwvdmlkZW8+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlICpuZ0lmPVwicmVtb3ZhYmxlXCIgKGNsaWNrKT1cIl9yZW1vdmUoJGV2ZW50KVwiPlxuICAgIDwvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZT5cblx0YCxcbiAgc3R5bGVzOiBbYDpob3N0KCl7bWluLXdpZHRoOnVuc2V0IWltcG9ydGFudDttYXgtd2lkdGg6dW5zZXQhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnR9Omhvc3QoKTpmb2N1cyB2aWRlbyw6aG9zdCgpOmhvdmVyIHZpZGVve29wYWNpdHk6Ljd9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIHZpZGVve21heC1oZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjVweH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7XG4gICAgc3VwZXIoc2FuaXRpemVyKTtcbiAgfVxuXG4gIC8qKiBUaGUgdmlkZW8gZGF0YSBzb3VyY2UuICovXG4gIHNhbml0aXplZFZpZGVvU3JjOiBTYWZlVXJsO1xuXG4gIHByaXZhdGUgdmlkZW9TcmM6IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZmlsZSB0byByZWFkLiBQbGVhc2UgcHJvdmlkZSBhIGZpbGUgdXNpbmcgdGhlIFtmaWxlXSBJbnB1dCBwcm9wZXJ0eS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSBzYW5pdGl6ZSB0aGUgVVJMIGhlcmUgdG8gZW5hYmxlIHRoZSBwcmV2aWV3LlxuICAgICAqIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBjb3VsZCBjYXVzZSBzZWN1cml0eSBpc3N1ZXMhXG4gICAgICoqL1xuICAgIHRoaXMudmlkZW9TcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZSk7XG4gICAgdGhpcy5zYW5pdGl6ZWRWaWRlb1NyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodGhpcy52aWRlb1NyYyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMudmlkZW9TcmMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neERyb3B6b25lTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL25neC1kcm9wem9uZS1sYWJlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS9uZ3gtZHJvcHpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neERyb3B6b25lSW1hZ2VQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVSZW1vdmVCYWRnZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZS9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHROZ3hEcm9wem9uZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUxhYmVsRGlyZWN0aXZlLFxuXHRcdE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUltYWdlUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50LFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Tmd4RHJvcHpvbmVDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSxcblx0XHROZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVSZW1vdmVCYWRnZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudCxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZU1vZHVsZSB7IH1cbiJdfQ==

      /***/

    },

    /***/
    "stGv":
    /*!****************************************************************!*\
      !*** ./src/app/pages/customer/conferinta/conferinta.module.ts ***!
      \****************************************************************/

    /*! exports provided: ConferintaPageModule */

    /***/
    function stGv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConferintaPageModule", function () {
        return ConferintaPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _conferinta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./conferinta-routing.module */
      "eGy0");
      /* harmony import */


      var _conferinta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./conferinta.page */
      "ucb+");
      /* harmony import */


      var src_app_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/safe.pipe */
      "Z2+D");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-dropzone */
      "kvL/");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");

      var ConferintaPageModule = /*#__PURE__*/_createClass(function ConferintaPageModule() {
        _classCallCheck(this, ConferintaPageModule);
      });

      ConferintaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _conferinta_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConferintaPageRoutingModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"]],
        declarations: [_conferinta_page__WEBPACK_IMPORTED_MODULE_6__["ConferintaPage"], src_app_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]],
        providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"]]
      })], ConferintaPageModule);
      /***/
    },

    /***/
    "ucb+":
    /*!**************************************************************!*\
      !*** ./src/app/pages/customer/conferinta/conferinta.page.ts ***!
      \**************************************************************/

    /*! exports provided: ConferintaPage */

    /***/
    function ucb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConferintaPage", function () {
        return ConferintaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_conferinta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./conferinta.page.html */
      "cKCH");
      /* harmony import */


      var _conferinta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./conferinta.page.scss */
      "b6c8");
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      "jBhA");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); // declare var File2:any;
      // import { File } from '@ionic-native/file/ngx';


      var ConferintaPage = /*#__PURE__*/function () {
        function ConferintaPage(transfer, file, menu, router, authService, http) {
          _classCallCheck(this, ConferintaPage);

          this.transfer = transfer;
          this.file = file;
          this.menu = menu;
          this.router = router;
          this.authService = authService;
          this.http = http;
          this.url = "https://probe.infragroup.ro";
          this.title = 'dropzone';
          this.files = [];
        }

        _createClass(ConferintaPage, [{
          key: "fetchUrl",
          value: function fetchUrl() {
            var _this5 = this;

            this.http.get("".concat(this.url, "/api/conferinta/roomOpened/").concat(localStorage.getItem("user_id"))).subscribe(function (data) {
              _this5.url_conferinta = data['url_consult'];
              _this5.id_consult = data['id_consult'];
              _this5.fisiere = data['fisiere'];
              console.log(_this5.fisiere);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.url_conferinta = null;
            this.menu.enable(true);
            this.fetchUrl(); // console.log(this.url_conferinta)

            if (!this.url_conferinta) Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(30000).subscribe(function (x) {
              _this6.fetchUrl();
            }); // console.log(navigator.mediaDevices.getUserMedia());
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this$files;

            console.log(event.addedFiles);

            (_this$files = this.files).push.apply(_this$files, _toConsumableArray(event.addedFiles));

            var formData = new FormData();

            for (var i = 0; i < this.files.length; i++) {
              formData.append("file", this.files[i]);
            }

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Accept': '*/*',
              'enctype': "multipart/form-data"
            });
            var options = {
              headers: headers
            };
            this.http.post("".concat(this.url, "/api/conferinta/fileupload/").concat(this.id_consult), formData, options).subscribe(function (res) {
              console.log(res);
              alert('Fisier incarcat cu succes.');
            });
          }
        }, {
          key: "onRemove",
          value: function onRemove(event) {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(nume_fisier) {
            var _this7 = this;

            this.http.get("127.0.0.1:8000/api/conferinta/filedownload/".concat(nume_fisier)).subscribe(function (response) {
              var fileTransfer = _this7.transfer.create();

              var url = response;
              fileTransfer.download(url, _this7.file.dataDirectory + 'file.pdf').then(function (entry) {
                console.log('download complete: ' + entry.toURL());
              }, function (error) {
                console.log(error);
              }); ///////////////////////////////////
              // let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
              // const url = window.URL.createObjectURL(blob);
              // fileSaver.saveAs(blob, nume_fisier);
              ////////////////////////////////////////
              // let dataType = response.type;
              // let binaryData = [];
              // binaryData.push(response);
              // let downloadLink = document.createElement('a');
              // downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
              // downloadLink.setAttribute('download', nume_fisier);
              // document.body.appendChild(downloadLink);
              // downloadLink.click();
              //  alert('Fisier incarcat cu succes.');
            });
          }
        }]);

        return ConferintaPage;
      }();

      ConferintaPage.ctorParameters = function () {
        return [{
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"]
        }, {
          type: undefined
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      };

      ConferintaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conferinta',
        template: _raw_loader_conferinta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conferinta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConferintaPage);
      /***/
    },

    /***/
    "xGWU":
    /*!*************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
      \*************************************************************************/

    /*! exports provided: get, getPromise */

    /***/
    function xGWU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "get", function () {
        return get;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPromise", function () {
        return getPromise;
      });
      /**
       * @param element
       * @param path
       * @private
       */


      function get(element, path) {
        var paths = path.split('.');
        var obj = element;

        for (var i = 0; i < paths.length; i++) {
          if (!obj) {
            return null;
          }

          obj = obj[paths[i]];
        }

        return obj;
      }
      /**
       * @param callback
       * @private
       */


      function getPromise(callback) {
        if (callback === void 0) {
          callback = function callback() {};
        }

        var tryNativePromise = function tryNativePromise() {
          if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
            return new Promise(function (resolve, reject) {
              callback(resolve, reject);
            });
          } else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
          }
        };

        return tryNativePromise();
      } //# sourceMappingURL=util.js.map

      /***/

    },

    /***/
    "zPAA":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
      \*********************************************************************************************************/

    /*! exports provided: cordovaFunctionOverride */

    /***/
    function zPAA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function () {
        return cordovaFunctionOverride;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./common */
      "AT/+");
      /**
       * @param pluginObj
       * @param methodName
       */


      function overrideFunction(pluginObj, methodName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
          var availabilityCheck = Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(pluginObj, methodName);

          if (availabilityCheck === true) {
            var pluginInstance_1 = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getPlugin"])(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () {
              return pluginInstance_1[methodName] = function () {};
            };
          } else {
            observer.error(availabilityCheck);
            observer.complete();
          }
        });
      }
      /**
       * @param pluginObj
       * @param methodName
       * @param args
       */


      function cordovaFunctionOverride(pluginObj, methodName, args) {
        if (args === void 0) {
          args = [];
        }

        return overrideFunction(pluginObj, methodName);
      } //# sourceMappingURL=cordova-function-override.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-customer-conferinta-conferinta-module-es5.js.map