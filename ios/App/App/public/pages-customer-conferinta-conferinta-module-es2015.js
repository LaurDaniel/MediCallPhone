(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customer-conferinta-conferinta-module"],{

/***/ "9YJ4":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************/
/*! exports provided: MediaObject, MEDIA_STATUS, MEDIA_ERROR, Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObject", function() { return MediaObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_STATUS", function() { return MEDIA_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ERROR", function() { return MEDIA_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





var MediaObject = /** @class */ (function () {
    function MediaObject(_objectInstance) {
        var _this = this;
        this._objectInstance = _objectInstance;
        this.onSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.successCallback = observer.next.bind(observer);
            return function () { return (_this.successCallback = function () { }); };
        });
        this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.errorCallback = observer.next.bind(observer);
            return function () { return (_this.errorCallback = function () { }); };
        });
        this.onStatusUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.statusCallback = observer.next.bind(observer);
            return function () { return (_this.statusCallback = function () { }); };
        });
    }
    MediaObject.prototype.getCurrentAmplitude = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "getCurrentAmplitude", {}, arguments); };
    MediaObject.prototype.getCurrentPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "getCurrentPosition", {}, arguments); };
    MediaObject.prototype.getDuration = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "getDuration", { "sync": true }, arguments); };
    MediaObject.prototype.play = function (iosOptions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "play", { "sync": true }, arguments); };
    MediaObject.prototype.pause = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "pause", { "sync": true }, arguments); };
    MediaObject.prototype.release = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "release", { "sync": true }, arguments); };
    MediaObject.prototype.seekTo = function (milliseconds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "seekTo", { "sync": true }, arguments); };
    MediaObject.prototype.setVolume = function (volume) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "setVolume", { "sync": true }, arguments); };
    MediaObject.prototype.setRate = function (speedRate) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "setRate", { "sync": true }, arguments); };
    MediaObject.prototype.startRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "startRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stopRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "stopRecord", { "sync": true }, arguments); };
    MediaObject.prototype.pauseRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "pauseRecord", { "sync": true }, arguments); };
    MediaObject.prototype.resumeRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "resumeRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stop = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "stop", { "sync": true }, arguments); };
    Object.defineProperty(MediaObject.prototype, "successCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertyGet"])(this, "successCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertySet"])(this, "successCallback", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "errorCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertyGet"])(this, "errorCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertySet"])(this, "errorCallback", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "statusCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertyGet"])(this, "statusCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertySet"])(this, "statusCallback", value); },
        enumerable: false,
        configurable: true
    });
    return MediaObject;
}());

var MEDIA_STATUS;
(function (MEDIA_STATUS) {
    MEDIA_STATUS[MEDIA_STATUS["NONE"] = 0] = "NONE";
    MEDIA_STATUS[MEDIA_STATUS["STARTING"] = 1] = "STARTING";
    MEDIA_STATUS[MEDIA_STATUS["RUNNING"] = 2] = "RUNNING";
    MEDIA_STATUS[MEDIA_STATUS["PAUSED"] = 3] = "PAUSED";
    MEDIA_STATUS[MEDIA_STATUS["STOPPED"] = 4] = "STOPPED";
})(MEDIA_STATUS || (MEDIA_STATUS = {}));
var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["ABORTED"] = 1] = "ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["NETWORK"] = 2] = "NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["DECODE"] = 3] = "DECODE";
    MEDIA_ERROR[MEDIA_ERROR["SUPPORTED"] = 4] = "SUPPORTED";
})(MEDIA_ERROR || (MEDIA_ERROR = {}));
var Media = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;
        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;
        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;
        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;
        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;
        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @return {MediaObject}
     */
    Media.prototype.create = function (src) {
        var instance;
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(Media.getPluginRef(), null, Media.getPluginName()) === true) {
            // Creates a new media object
            instance = new (Media.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    Media.pluginName = "Media";
    Media.repo = "https://github.com/apache/cordova-plugin-media";
    Media.plugin = "cordova-plugin-media";
    Media.pluginRef = "Media";
    Media.platforms = ["Android", "Browser", "iOS", "Windows"];
Media.??fac = function Media_Factory(t) { return ??Media_BaseFactory(t || Media); };
Media.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: Media, factory: function (t) { return Media.??fac(t); } });
var ??Media_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getInheritedFactory"](Media);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](Media, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Media;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvbWVkaWEvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sZ0ZBQWdFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckgsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7QUFDNUM7QUFLQSxJQThCRSxxQkFBb0IsZUFBb0I7QUFDMUMsUUFERSxpQkFlQztBQUNILFFBaEJzQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztBQUFDLFFBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQU0sVUFBQyxRQUF1QjtBQUFJLFlBQy9ELEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUQsWUFBTSxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztBQUNyRCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFjLFVBQUMsUUFBK0I7QUFBSSxZQUM3RSxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELFlBQU0sT0FBTyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsYUFBYSxHQUFHLGNBQU8sQ0FBQyxDQUFDLEVBQS9CLENBQStCLENBQUM7QUFDbkQsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFVBQVUsQ0FBZSxVQUFDLFFBQWdDO0FBQUksWUFDdEYsS0FBSSxDQUFDLGNB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QUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLFNBQUs7QUFDTCxRQUNJLE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBQ0Y7QUFDOEI7QUFBbUU7QUFBMkM7QUFBK0I7eUNBMUQzSyxVQUFVOzs7OzswQkFDTDtBQUFDLGdCQTdSUDtBQUFFLEVBNlJ5QixpQkFBaUI7QUFDM0MsU0FEWSxLQUFLO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGNoZWNrQXZhaWxhYmlsaXR5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFPYmplY3Qge1xuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSBvbiBhY3Rpb25zIHN1Y2Nlc3NcbiAgICovXG4gIG9uU3VjY2VzczogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gYW4gZXJyb3Igb2NjdXJzXG4gICAqL1xuICBvbkVycm9yOiBPYnNlcnZhYmxlPE1FRElBX0VSUk9SPjtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBmaWxlIHN0YXR1cyBjaGFuZ2VzXG4gICAqL1xuICBvblN0YXR1c1VwZGF0ZTogT2JzZXJ2YWJsZTxNRURJQV9TVEFUVVM+O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHN1Y2Nlc3NDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZXJyb3JDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc3RhdHVzQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICB0aGlzLm9uU3VjY2VzcyA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuc3VjY2Vzc0NhbGxiYWNrID0gKCkgPT4ge30pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbkVycm9yID0gbmV3IE9ic2VydmFibGU8TUVESUFfRVJST1I+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfRVJST1I+KSA9PiB7XG4gICAgICB0aGlzLmVycm9yQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLmVycm9yQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdHVzVXBkYXRlID0gbmV3IE9ic2VydmFibGU8TUVESUFfU1RBVFVTPigob2JzZXJ2ZXI6IE9ic2VydmVyPE1FRElBX1NUQVRVUz4pID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLnN0YXR1c0NhbGxiYWNrID0gKCkgPT4ge30pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZ2V0Q3VycmVudEFtcGxpdHVkZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGFuIGF1ZGlvIGZpbGUuIEFsc28gdXBkYXRlcyB0aGUgTWVkaWEgb2JqZWN0J3MgcG9zaXRpb24gcGFyYW1ldGVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRDdXJyZW50UG9zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiBhbiBhdWRpbyBmaWxlIGluIHNlY29uZHMuIElmIHRoZSBkdXJhdGlvbiBpcyB1bmtub3duLCBpdCByZXR1cm5zIGEgdmFsdWUgb2YgLTEuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGR1cmF0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIG9yIHJlc3VtZXMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcGxheShpb3NPcHRpb25zPzogeyBudW1iZXJPZkxvb3BzPzogbnVtYmVyOyBwbGF5QXVkaW9XaGVuU2NyZWVuSXNMb2NrZWQ/OiBib29sZWFuIH0pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFBhdXNlcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwYXVzZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIHRoZSB1bmRlcmx5aW5nIG9wZXJhdGluZyBzeXN0ZW0ncyBhdWRpbyByZXNvdXJjZXMuIFRoaXMgaXMgcGFydGljdWxhcmx5IGltcG9ydGFudCBmb3IgQW5kcm9pZCwgc2luY2UgdGhlcmUgYXJlIGEgZmluaXRlIGFtb3VudCBvZiBPcGVuQ29yZSBpbnN0YW5jZXMgZm9yIG1lZGlhIHBsYXliYWNrLiBBcHBsaWNhdGlvbnMgc2hvdWxkIGNhbGwgdGhlIHJlbGVhc2UgZnVuY3Rpb24gZm9yIGFueSBNZWRpYSByZXNvdXJjZSB0aGF0IGlzIG5vIGxvbmdlciBuZWVkZWQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZWxlYXNlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gYW4gYXVkaW8gZmlsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyBUaGUgdGltZSBwb3NpdGlvbiB5b3Ugd2FudCB0byBzZXQgZm9yIHRoZSBjdXJyZW50IGF1ZGlvIGZpbGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNlZWtUbyhtaWxsaXNlY29uZHM6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0IHRoZSB2b2x1bWUgZm9yIGFuIGF1ZGlvIGZpbGUuXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gVGhlIHZvbHVtZSB0byBzZXQgZm9yIHBsYXliYWNrLiBUaGUgdmFsdWUgbXVzdCBiZSB3aXRoaW4gdGhlIHJhbmdlIG9mIDAuMCB0byAxLjAuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWb2x1bWUodm9sdW1lOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UmF0ZShzcGVlZFJhdGU6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU3RhcnRzIHJlY29yZGluZyBhbiBhdWRpbyBmaWxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc3RhcnRSZWNvcmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdG9wcyByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3BSZWNvcmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwYXVzZVJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc3VtZXMgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZXN1bWVSZWNvcmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzdG9wKCk6IHZvaWQge31cbn1cblxuZXhwb3J0IHR5cGUgTWVkaWFTdGF0dXNVcGRhdGVDYWxsYmFjayA9IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFFcnJvciB7XG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlXG4gICAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVycm9yIGNvZGVcbiAgICovXG4gIGNvZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gTUVESUFfU1RBVFVTIHtcbiAgTk9ORSA9IDAsXG4gIFNUQVJUSU5HLFxuICBSVU5OSU5HLFxuICBQQVVTRUQsXG4gIFNUT1BQRUQsXG59XG5cbmV4cG9ydCBlbnVtIE1FRElBX0VSUk9SIHtcbiAgQUJPUlRFRCA9IDEsXG4gIE5FVFdPUkssXG4gIERFQ09ERSxcbiAgU1VQUE9SVEVELFxufVxuXG5leHBvcnQgdHlwZSBNZWRpYUVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IE1lZGlhRXJyb3IpID0+IHZvaWQ7XG5cbi8qKlxuICogQG5hbWUgTWVkaWFcbiAqIEBwcmVtaWVyIG1lZGlhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIHJlY29yZCBhbmQgcGxheSBiYWNrIGF1ZGlvIGZpbGVzIG9uIGEgZGV2aWNlLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWVkaWEsIE1lZGlhT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tZWRpYS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhOiBNZWRpYSkgeyB9XG4gKlxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAvLyBDcmVhdGUgYSBNZWRpYSBpbnN0YW5jZS4gIEV4cGVjdHMgcGF0aCB0byBmaWxlIG9yIHVybCBhcyBhcmd1bWVudFxuICogLy8gV2UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhIHNlY29uZCBhcmd1bWVudCB0byB0cmFjayB0aGUgc3RhdHVzIG9mIHRoZSBtZWRpYVxuICpcbiAqIGNvbnN0IGZpbGU6IE1lZGlhT2JqZWN0ID0gdGhpcy5tZWRpYS5jcmVhdGUoJ2ZpbGUubXAzJyk7XG4gKlxuICogLy8gdG8gbGlzdGVuIHRvIHBsdWdpbiBldmVudHM6XG4gKlxuICogZmlsZS5vblN0YXR1c1VwZGF0ZS5zdWJzY3JpYmUoc3RhdHVzID0+IGNvbnNvbGUubG9nKHN0YXR1cykpOyAvLyBmaXJlcyB3aGVuIGZpbGUgc3RhdHVzIGNoYW5nZXNcbiAqXG4gKiBmaWxlLm9uU3VjY2Vzcy5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ0FjdGlvbiBpcyBzdWNjZXNzZnVsJykpO1xuICpcbiAqIGZpbGUub25FcnJvci5zdWJzY3JpYmUoZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIScsIGVycm9yKSk7XG4gKlxuICogLy8gcGxheSB0aGUgZmlsZVxuICogZmlsZS5wbGF5KCk7XG4gKlxuICogLy8gcGF1c2UgdGhlIGZpbGVcbiAqIGZpbGUucGF1c2UoKTtcbiAqXG4gKiAvLyBnZXQgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvblxuICogZmlsZS5nZXRDdXJyZW50UG9zaXRpb24oKS50aGVuKChwb3NpdGlvbikgPT4ge1xuICogICBjb25zb2xlLmxvZyhwb3NpdGlvbik7XG4gKiB9KTtcbiAqXG4gKiAvLyBnZXQgZmlsZSBkdXJhdGlvblxuICogbGV0IGR1cmF0aW9uID0gZmlsZS5nZXREdXJhdGlvbigpO1xuICogY29uc29sZS5sb2coZHVyYXRpb24pO1xuICpcbiAqIC8vIHNraXAgdG8gMTAgc2Vjb25kcyAoZXhwZWN0cyBpbnQgdmFsdWUgaW4gbXMpXG4gKiBmaWxlLnNlZWtUbygxMDAwMCk7XG4gKlxuICogLy8gc3RvcCBwbGF5aW5nIHRoZSBmaWxlXG4gKiBmaWxlLnN0b3AoKTtcbiAqXG4gKiAvLyByZWxlYXNlIHRoZSBuYXRpdmUgYXVkaW8gcmVzb3VyY2VcbiAqIC8vIFBsYXRmb3JtIFF1aXJrczpcbiAqIC8vIGlPUyBzaW1wbHkgY3JlYXRlIGEgbmV3IGluc3RhbmNlIGFuZCB0aGUgb2xkIG9uZSB3aWxsIGJlIG92ZXJ3cml0dGVuXG4gKiAvLyBBbmRyb2lkIHlvdSBtdXN0IGNhbGwgcmVsZWFzZSgpIHRvIGRlc3Ryb3kgaW5zdGFuY2VzIG9mIG1lZGlhIHdoZW4geW91IGFyZSBkb25lXG4gKiBmaWxlLnJlbGVhc2UoKTtcbiAqXG4gKlxuICpcbiAqIC8vIFJlY29yZGluZyB0byBhIGZpbGVcbiAqIGNvbnN0IGZpbGU6IE1lZGlhT2JqZWN0ID0gdGhpcy5tZWRpYS5jcmVhdGUoJ3BhdGgvdG8vZmlsZS5tcDMnKTtcbiAqXG4gKiBmaWxlLnN0YXJ0UmVjb3JkKCk7XG4gKlxuICogZmlsZS5zdG9wUmVjb3JkKCk7XG4gKlxuICpcbiAqIGBgYFxuICpcbiAqIFNvbWUgaGludHMgaWYgeW91IGFyZSB1c2luZyBpT1MgYW5kIHJlY29yZGluZyBkb2Vzbid0IHdvcms6XG4gKiAxLikgVHJ5IHRvIHVzZSBhIGFic29sdXRlIGZpbGUgcGF0aCBidXQgcmVtb3ZlIGJlZ2lubmluZyBcImZpbGU6Ly9cIi5cbiAqIFRoZW4gaXQgbG9va3MgbGlrZTogYC92YXIvbW9iaWxlL0NvbnRhaW5lcnMvRGF0YS9BcHBsaWNhdGlvbi9BRjQzOEI4Qi03NzI0LTRGQkItOEU2OS0wODM0NjMyMjRGQzQvdG1wL215X2ZpbGUubTRhYFxuICogRXhhbXBsZTogYHRoaXMubWVkaWEuY3JlYXRlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LnJlcGxhY2UoL15maWxlOlxcL1xcLy8sICcnKSArICdteV9maWxlLm00YScpYFxuICogMi4pIElmIHRoYXQncyBub3Qgd29ya2luZywgdG9vLCBjcmVhdGUgdGhlIGZpbGUgYmVmb3JlIHVzaW5nLlxuICogRXhhbXBsZTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1lZGlhLCBNZWRpYU9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEvbmd4JztcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUvbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhOiBNZWRpYSwgcHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGUuY3JlYXRlRmlsZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeSwgJ215X2ZpbGUubTRhJywgdHJ1ZSkudGhlbigoKSA9PiB7XG4gKiAgIGxldCBmaWxlID0gdGhpcy5tZWRpYS5jcmVhdGUodGhpcy5maWxlLnRlbXBEaXJlY3RvcnkucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgJycpICsgJ215X2ZpbGUubTRhJyk7XG4gKiAgIGZpbGUuc3RhcnRSZWNvcmQoKTtcbiAqICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gZmlsZS5zdG9wUmVjb3JkKCksIDEwMDAwKTtcbiAqIH0pO1xuICogYGBgXG4gKlxuICogWW91IGNhbiBmaW5kIHRoZSByZWFzb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLW5hdGl2ZS9pc3N1ZXMvMTQ1MiNpc3N1ZWNvbW1lbnQtMjk5NjA1OTA2XG4gKiBAY2xhc3Nlc1xuICogTWVkaWFPYmplY3RcbiAqIEBpbnRlcmZhY2VzXG4gKiBNZWRpYUVycm9yXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWVkaWEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1lZGlhJyxcbiAgcGx1Z2luUmVmOiAnTWVkaWEnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvLyBDb25zdGFudHNcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX05PTkUgPSAwO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfU1RBUlRJTkcgPSAxO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfUlVOTklORyA9IDI7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9QQVVTRUQgPSAzO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfU1RPUFBFRCA9IDQ7XG5cbiAgLy8gZXJyb3IgY29kZXNcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9BQk9SVEVEID0gMTtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9ORVRXT1JLID0gMjtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9ERUNPREUgPSAzO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX05PTkVfU1VQUE9SVEVEID0gNDtcblxuICAvKipcbiAgICogT3BlbiBhIG1lZGlhIGZpbGVcbiAgICogQHBhcmFtIHNyYyB7c3RyaW5nfSBBIFVSSSBjb250YWluaW5nIHRoZSBhdWRpbyBjb250ZW50LlxuICAgKiBAcmV0dXJuIHtNZWRpYU9iamVjdH1cbiAgICovXG4gIGNyZWF0ZShzcmM6IHN0cmluZyk6IE1lZGlhT2JqZWN0IHtcbiAgICBsZXQgaW5zdGFuY2U6IGFueTtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShNZWRpYS5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgTWVkaWEuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBtZWRpYSBvYmplY3RcbiAgICAgIGluc3RhbmNlID0gbmV3IChNZWRpYS5nZXRQbHVnaW4oKSkoc3JjKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE1lZGlhT2JqZWN0KGluc3RhbmNlKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "FAH8":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var File = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    File.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "applicationDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "applicationDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "applicationStorageDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "applicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "dataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "dataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "cacheDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "cacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalApplicationStorageDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalApplicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalDataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalCacheDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalCacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "externalRootDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "externalRootDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "tempDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "tempDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "syncedDataDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "syncedDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "documentsDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "documentsDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "sharedDirectory"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "sharedDirectory", value); },
        enumerable: false,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
File.??fac = function File_Factory(t) { return ??File_BaseFactory(t || File); };
File.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: File, factory: function (t) { return File.??fac(t); } });
var ??File_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getInheritedFactory"](File);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](File, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return File;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxnRkFBNEQsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBQzFHO0FBR0MsSUFncUJ5Qix3QkFBaUI7QUFBQztBQUU5QjtBQUVVLFFBMER0QixzQkFBZ0IsR0FBUTtBQUMxQixZQUFJLENBQUMsRUFBRSxlQUFlO0FBQ3RCLFlBQUksQ0FBQyxFQUFFLGNBQWM7QUFDckIsWUFBSSxDQUFDLEVBQUUsV0FBVztBQUNsQixZQUFJLENBQUMsRUFBRSxrQkFBa0I7QUFDekIsWUFBSSxDQUFDLEVBQUUsY0FBYztBQUNyQixZQUFJLENBQUMsRUFBRSw2QkFBNkI7QUFDcEMsWUFBSSxDQUFDLEVBQUUsbUJBQW1CO0FBQzFCLFlBQUksQ0FBQyxFQUFFLFlBQVk7QUFDbkIsWUFBSSxDQUFDLEVBQUUsMEJBQTBCO0FBQ2pDLFlBQUksRUFBRSxFQUFFLG9CQUFvQjtBQUM1QixZQUFJLEVBQUUsRUFBRSxtQkFBbUI7QUFDM0IsWUFBSSxFQUFFLEVBQUUsaUJBQWlCO0FBQ3pCLFlBQUksRUFBRSxFQUFFLGtCQUFrQjtBQUMxQixZQUFJLEVBQUUsRUFBRSxjQUFjO0FBQ3RCLFNBQUcsQ0FBQztBQUNKO0FBRWU7QUFBTSxJQUluQiwrQkFBZ0I7QUFBaUI7QUFDZDtBQUNwQixtREFGcUM7QUFDdEMsZ0JBQUksT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLG9CQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQTZCLEVBQUUsTUFBNEIsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEgsZ0JBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxhQUFHO0FB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N0VmLFVBQVU7Ozs7OzBCQUNMO0FBQUMsZUFycUJQO0FBQUUsRUFxcUJ3QixpQkFBaUI7QUFDMUMsU0FEWSxJQUFJO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhQ2hlY2ssIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGUgZXh0ZW5kcyBCbG9iIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGZpbGUsIHdpdGhvdXQgcGF0aCBpbmZvcm1hdGlvblxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTGFzdCBtb2RpZmllZCBkYXRlXG4gICAqL1xuICBsYXN0TW9kaWZpZWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIExhc3QgbW9kaWZpZWQgZGF0ZVxuICAgKi9cbiAgbGFzdE1vZGlmaWVkRGF0ZTogbnVtYmVyO1xuICAvKipcbiAgICogU2l6ZSBpbiBieXRlc1xuICAgKi9cbiAgc2l6ZTogbnVtYmVyO1xuICAvKipcbiAgICogRmlsZSBtaW1lIHR5cGVcbiAgICovXG4gIHR5cGU6IHN0cmluZztcbiAgbG9jYWxVUkw6IHN0cmluZztcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBcInNsaWNlXCIgb2YgdGhlIGZpbGUuIFNpbmNlIENvcmRvdmEgRmlsZXMgZG9uJ3QgY29udGFpbiB0aGUgYWN0dWFsXG4gICAqIGNvbnRlbnQsIHRoaXMgcmVhbGx5IHJldHVybnMgYSBGaWxlIHdpdGggYWRqdXN0ZWQgc3RhcnQgYW5kIGVuZC5cbiAgICogU2xpY2VzIG9mIHNsaWNlcyBhcmUgc3VwcG9ydGVkLlxuICAgKiBAcGFyYW0gc3RhcnQge051bWJlcn0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIHN0YXJ0IHRoZSBzbGljZSAoaW5jbHVzaXZlKS5cbiAgICogQHBhcmFtIGVuZCB7TnVtYmVyfSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gZW5kIHRoZSBzbGljZSAoZXhjbHVzaXZlKS5cbiAgICovXG4gIHNsaWNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQmxvYjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbEZpbGVTeXN0ZW0ge1xuICAvKipcbiAgICogVXNlZCBmb3Igc3RvcmFnZSB3aXRoIG5vIGd1YXJhbnRlZSBvZiBwZXJzaXN0ZW5jZS5cbiAgICovXG4gIFRFTVBPUkFSWTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVc2VkIGZvciBzdG9yYWdlIHRoYXQgc2hvdWxkIG5vdCBiZSByZW1vdmVkIGJ5IHRoZSB1c2VyIGFnZW50IHdpdGhvdXQgYXBwbGljYXRpb24gb3IgdXNlciBwZXJtaXNzaW9uLlxuICAgKi9cbiAgUEVSU0lTVEVOVDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBhIGZpbGVzeXN0ZW0gaW4gd2hpY2ggdG8gc3RvcmUgYXBwbGljYXRpb24gZGF0YS5cbiAgICogQHBhcmFtIHR5cGUgV2hldGhlciB0aGUgZmlsZXN5c3RlbSByZXF1ZXN0ZWQgc2hvdWxkIGJlIHBlcnNpc3RlbnQsIGFzIGRlZmluZWQgYWJvdmUuIFVzZSBvbmUgb2YgVEVNUE9SQVJZIG9yXG4gICAqICAgUEVSU0lTVEVOVC5cbiAgICogQHBhcmFtIHNpemUgVGhpcyBpcyBhbiBpbmRpY2F0b3Igb2YgaG93IG11Y2ggc3RvcmFnZSBzcGFjZSwgaW4gYnl0ZXMsIHRoZSBhcHBsaWNhdGlvbiBleHBlY3RzIHRvIG5lZWQuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgYWdlbnQgcHJvdmlkZXMgYSBmaWxlc3lzdGVtLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbiwgb3Igd2hlbiB0aGUgcmVxdWVzdCB0byBvYnRhaW4gdGhlIGZpbGVzeXN0ZW0gaXNcbiAgICogICBkZW5pZWQuXG4gICAqL1xuICByZXF1ZXN0RmlsZVN5c3RlbShcbiAgICB0eXBlOiBudW1iZXIsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVN5c3RlbUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdXNlciB0byBsb29rIHVwIHRoZSBFbnRyeSBmb3IgYSBmaWxlIG9yIGRpcmVjdG9yeSByZWZlcnJlZCB0byBieSBhIGxvY2FsIFVSTC5cbiAgICogQHBhcmFtIHVybCBBIFVSTCByZWZlcnJpbmcgdG8gYSBsb2NhbCBmaWxlIGluIGEgZmlsZXN5c3RlbSBhY2Nlc3NhYmxlIHZpYSB0aGlzIEFQSS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJlcG9ydCB0aGUgRmlsZUVudHJ5IHRvIHdoaWNoIHRoZSBzdXBwbGllZCBVUkwgcmVmZXJzLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbiwgb3Igd2hlbiB0aGUgcmVxdWVzdCB0byBvYnRhaW4gdGhlIEVudHJ5IGlzXG4gICAqICAgZGVuaWVkLlxuICAgKi9cbiAgcmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCh1cmw6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlRW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBzZWUgcmVxdWVzdEZpbGVTeXN0ZW0uXG4gICAqL1xuICB3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbShcbiAgICB0eXBlOiBudW1iZXIsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVN5c3RlbUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGEge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgdGltZSBhdCB3aGljaCB0aGUgZmlsZSBvciBkaXJlY3Rvcnkgd2FzIGxhc3QgbW9kaWZpZWQuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgbW9kaWZpY2F0aW9uVGltZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGZpbGUsIGluIGJ5dGVzLiBUaGlzIG11c3QgcmV0dXJuIDAgZm9yIGRpcmVjdG9yaWVzLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbGFncyB7XG4gIC8qKlxuICAgKiBVc2VkIHRvIGluZGljYXRlIHRoYXQgdGhlIHVzZXIgd2FudHMgdG8gY3JlYXRlIGEgZmlsZSBvciBkaXJlY3RvcnkgaWYgaXQgd2FzIG5vdCBwcmV2aW91c2x5IHRoZXJlLlxuICAgKi9cbiAgY3JlYXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnkgaXRzZWxmLCBleGNsdXNpdmUgbXVzdCBoYXZlIG5vIGVmZmVjdC4gVXNlZCB3aXRoIGNyZWF0ZSwgaXQgbXVzdCBjYXVzZSBnZXRGaWxlIGFuZCBnZXREaXJlY3RvcnkgdG8gZmFpbCBpZiB0aGVcbiAgICogdGFyZ2V0IHBhdGggYWxyZWFkeSBleGlzdHMuXG4gICAqL1xuICBleGNsdXNpdmU/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVN5c3RlbSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoZSBmaWxlIHN5c3RlbS4gVGhlIHNwZWNpZmljcyBvZiBuYW1pbmcgZmlsZXN5c3RlbXMgaXMgdW5zcGVjaWZpZWQsIGJ1dCBhIG5hbWUgbXVzdCBiZSB1bmlxdWVcbiAgICogYWNyb3NzIHRoZSBsaXN0IG9mIGV4cG9zZWQgZmlsZSBzeXN0ZW1zLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBmaWxlIHN5c3RlbS5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICByb290OiBEaXJlY3RvcnlFbnRyeTtcblxuICB0b0pTT04oKTogc3RyaW5nO1xuXG4gIGVuY29kZVVSSVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5IHtcbiAgLyoqXG4gICAqIEVudHJ5IGlzIGEgZmlsZS5cbiAgICovXG4gIGlzRmlsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW50cnkgaXMgYSBkaXJlY3RvcnkuXG4gICAqL1xuICBpc0RpcmVjdG9yeTogYm9vbGVhbjtcblxuICAvKipcbiAgICogTG9vayB1cCBtZXRhZGF0YSBhYm91dCB0aGlzIGVudHJ5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgdGltZSBvZiB0aGUgbGFzdCBtb2RpZmljYXRpb24uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBnZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogU2V0IHRoZSBtZXRhZGF0YSBvZiB0aGUgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIE1ldGFkYXRhIG9iamVjdFxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgRmlsZUVycm9yXG4gICAqIEBwYXJhbSBtZXRhZGF0YU9iamVjdCB7TWV0YWRhdGF9IGtleXMgYW5kIHZhbHVlcyB0byBzZXRcbiAgICovXG4gIHNldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjazogRXJyb3JDYWxsYmFjaywgbWV0YWRhdGFPYmplY3Q6IE1ldGFkYXRhKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGVudHJ5LCBleGNsdWRpbmcgdGhlIHBhdGggbGVhZGluZyB0byBpdC5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmdWxsIGFic29sdXRlIHBhdGggZnJvbSB0aGUgcm9vdCB0byB0aGUgZW50cnkuXG4gICAqL1xuICBmdWxsUGF0aDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZpbGUgc3lzdGVtIG9uIHdoaWNoIHRoZSBlbnRyeSByZXNpZGVzLlxuICAgKi9cbiAgZmlsZXN5c3RlbTogRmlsZVN5c3RlbTtcbiAgLyoqXG4gICAqIGFuIGFsdGVybmF0ZSBVUkwgd2hpY2ggY2FuIGJlIHVzZWQgYnkgbmF0aXZlIHdlYnZpZXcgY29udHJvbHMsIGZvciBleGFtcGxlIG1lZGlhIHBsYXllcnMuXG4gICAqL1xuICBuYXRpdmVVUkw6IHN0cmluZztcblxuICAvKipcbiAgICogTG9vayB1cCBtZXRhZGF0YSBhYm91dCB0aGlzIGVudHJ5LlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgdGltZSBvZiB0aGUgbGFzdCBtb2RpZmljYXRpb24uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBnZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogU2V0IHRoZSBtZXRhZGF0YSBvZiB0aGUgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIE1ldGFkYXRhIG9iamVjdFxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgRmlsZUVycm9yXG4gICAqIEBwYXJhbSBtZXRhZGF0YU9iamVjdCB7TWV0YWRhdGF9IGtleXMgYW5kIHZhbHVlcyB0byBzZXRcbiAgICovXG4gIHNldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjazogRXJyb3JDYWxsYmFjaywgbWV0YWRhdGFPYmplY3Q6IE1ldGFkYXRhKTogdm9pZDtcblxuICAvKipcbiAgICogTW92ZSBhbiBlbnRyeSB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0uIEl0IGlzIGFuIGVycm9yIHRvIHRyeSB0bzpcbiAgICpcbiAgICogPHVpPlxuICAgKiA8bGk+bW92ZSBhIGRpcmVjdG9yeSBpbnNpZGUgaXRzZWxmIG9yIHRvIGFueSBjaGlsZCBhdCBhbnkgZGVwdGg7PC9saT5cbiAgICogPGxpPm1vdmUgYW4gZW50cnkgaW50byBpdHMgcGFyZW50IGlmIGEgbmFtZSBkaWZmZXJlbnQgZnJvbSBpdHMgY3VycmVudCBvbmUgaXNuJ3QgcHJvdmlkZWQ7PC9saT5cbiAgICogPGxpPm1vdmUgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxuICAgKiA8bGk+bW92ZSBhIGRpcmVjdG9yeSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBmaWxlOzwvbGk+XG4gICAqIDxsaT5tb3ZlIGFueSBlbGVtZW50IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeSB3aGljaCBpcyBub3QgZW1wdHkuPC9saT5cbiAgICogPHVsPlxuICAgKlxuICAgKiBBIG1vdmUgb2YgYSBmaWxlIG9uIHRvcCBvZiBhbiBleGlzdGluZyBmaWxlIG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBmaWxlLlxuICAgKiBBIG1vdmUgb2YgYSBkaXJlY3Rvcnkgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGVtcHR5IGRpcmVjdG9yeSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZGlyZWN0b3J5LlxuICAgKi9cbiAgbW92ZVRvKFxuICAgIHBhcmVudDogRGlyZWN0b3J5RW50cnksXG4gICAgbmV3TmFtZT86IHN0cmluZyxcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBFbnRyeUNhbGxiYWNrLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvcHkgYW4gZW50cnkgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gb24gdGhlIGZpbGUgc3lzdGVtLiBJdCBpcyBhbiBlcnJvciB0byB0cnkgdG86XG4gICAqXG4gICAqIDx1bD5cbiAgICogPGxpPiBjb3B5IGEgZGlyZWN0b3J5IGluc2lkZSBpdHNlbGYgb3IgdG8gYW55IGNoaWxkIGF0IGFueSBkZXB0aDs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYW4gZW50cnkgaW50byBpdHMgcGFyZW50IGlmIGEgbmFtZSBkaWZmZXJlbnQgZnJvbSBpdHMgY3VycmVudCBvbmUgaXNuJ3QgcHJvdmlkZWQ7PC9saT5cbiAgICogPGxpPiBjb3B5IGEgZmlsZSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnk7PC9saT5cbiAgICogPGxpPiBjb3B5IGEgZGlyZWN0b3J5IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGZpbGU7PC9saT5cbiAgICogPGxpPiBjb3B5IGFueSBlbGVtZW50IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeSB3aGljaCBpcyBub3QgZW1wdHkuPC9saT5cbiAgICogPGxpPiBBIGNvcHkgb2YgYSBmaWxlIG9uIHRvcCBvZiBhbiBleGlzdGluZyBmaWxlIG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBmaWxlLjwvbGk+XG4gICAqIDxsaT4gQSBjb3B5IG9mIGEgZGlyZWN0b3J5IG9uIHRvcCBvZiBhbiBleGlzdGluZyBlbXB0eSBkaXJlY3RvcnkgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0XG4gICAqIGRpcmVjdG9yeS48L2xpPlxuICAgKiA8L3VsPlxuICAgKlxuICAgKiBEaXJlY3RvcnkgY29waWVzIGFyZSBhbHdheXMgcmVjdXJzaXZlLS10aGF0IGlzLCB0aGV5IGNvcHkgYWxsIGNvbnRlbnRzIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAqL1xuICBjb3B5VG8oXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcbiAgICBuZXdOYW1lPzogc3RyaW5nLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIFVSTCB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgZW50cnkuIFVubGlrZSB0aGUgVVJOIGRlZmluZWQgaW4gW0ZJTEUtQVBJLUVEXSwgaXQgaGFzIG5vIHNwZWNpZmljXG4gICAqIGV4cGlyYXRpb247IGFzIGl0IGRlc2NyaWJlcyBhIGxvY2F0aW9uIG9uIGRpc2ssIGl0IHNob3VsZCBiZSB2YWxpZCBhdCBsZWFzdCBhcyBsb25nIGFzIHRoYXQgbG9jYXRpb24gZXhpc3RzLlxuICAgKi9cbiAgdG9VUkwoKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBVUkwgdGhhdCBjYW4gYmUgcGFzc2VkIGFjcm9zcyB0aGUgYnJpZGdlIHRvIGlkZW50aWZ5IHRoaXMgZW50cnkuXG4gICAqIEByZXR1cm4gc3RyaW5nIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeVxuICAgKi9cbiAgdG9JbnRlcm5hbFVSTCgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBmaWxlIG9yIGRpcmVjdG9yeS4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBkZWxldGUgYSBkaXJlY3RvcnkgdGhhdCBpcyBub3QgZW1wdHkuIEl0IGlzIGFuIGVycm9yIHRvXG4gICAqIGF0dGVtcHQgdG8gZGVsZXRlIHRoZSByb290IGRpcmVjdG9yeSBvZiBhIGZpbGVzeXN0ZW0uXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIHJlbW92ZShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBMb29rIHVwIHRoZSBwYXJlbnQgRGlyZWN0b3J5RW50cnkgY29udGFpbmluZyB0aGlzIEVudHJ5LiBJZiB0aGlzIEVudHJ5IGlzIHRoZSByb290IG9mIGl0cyBmaWxlc3lzdGVtLCBpdHMgcGFyZW50XG4gICAqIGlzIGl0c2VsZi5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgcGFyZW50IEVudHJ5LlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldFBhcmVudChzdWNjZXNzQ2FsbGJhY2s6IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRpcmVjdG9yeSBvbiBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeUVudHJ5IGV4dGVuZHMgRW50cnkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBEaXJlY3RvcnlSZWFkZXIgdG8gcmVhZCBFbnRyaWVzIGZyb20gdGhpcyBEaXJlY3RvcnkuXG4gICAqL1xuICBjcmVhdGVSZWFkZXIoKTogRGlyZWN0b3J5UmVhZGVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG9yIGxvb2tzIHVwIGEgZmlsZS5cbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZmlsZSB0byBiZSBsb29rZWQgdXAgb3JcbiAgICogICBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGZpbGUgd2hvc2UgaW1tZWRpYXRlIHBhcmVudCBkb2VzIG5vdCB5ZXQgZXhpc3QuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqICAgICA8dWw+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGFuZCBleGNsdXNpdmUgYXJlIGJvdGggdHJ1ZSwgYW5kIHRoZSBwYXRoIGFscmVhZHkgZXhpc3RzLCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgY3JlYXRlIGl0IGFzIGFcbiAgICogICB6ZXJvLWxlbmd0aCBmaWxlIGFuZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIEZpbGVFbnRyeS48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGV4aXN0cywgYnV0IGlzIGEgZGlyZWN0b3J5LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPk90aGVyd2lzZSwgaWYgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgcmV0dXJuIGEgRmlsZUVudHJ5IGNvcnJlc3BvbmRpbmcgdG8gcGF0aC48L2xpPlxuICAgKiAgICAgPC91bD5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgRmlsZSBzZWxlY3RlZCBvciBjcmVhdGVkLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldEZpbGUocGF0aDogc3RyaW5nLCBvcHRpb25zPzogRmxhZ3MsIHN1Y2Nlc3NDYWxsYmFjaz86IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBwYXRoIEVpdGhlciBhbiBhYnNvbHV0ZSBwYXRoIG9yIGEgcmVsYXRpdmUgcGF0aCBmcm9tIHRoaXMgRGlyZWN0b3J5RW50cnkgdG8gdGhlIGRpcmVjdG9yeSB0byBiZSBsb29rZWQgdXBcbiAgICogICBvciBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGRpcmVjdG9yeSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogICAgIDx1bD5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCBjcmVhdGUgYW5kIHJldHVyblxuICAgKiAgIGEgY29ycmVzcG9uZGluZyBEaXJlY3RvcnlFbnRyeS48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBmaWxlLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IHJldHVybiBhIERpcmVjdG9yeUVudHJ5IGNvcnJlc3BvbmRpbmcgdG8gcGF0aC48L2xpPlxuICAgKiAgICAgPC91bD5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayAgIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBEaXJlY3RvcnlFbnRyeSBzZWxlY3RlZCBvciBjcmVhdGVkLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICpcbiAgICovXG4gIGdldERpcmVjdG9yeShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEZsYWdzLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogRGVsZXRlcyBhIGRpcmVjdG9yeSBhbmQgYWxsIG9mIGl0cyBjb250ZW50cywgaWYgYW55LiBJbiB0aGUgZXZlbnQgb2YgYW4gZXJyb3IgW2UuZy4gdHJ5aW5nIHRvIGRlbGV0ZSBhIGRpcmVjdG9yeVxuICAgKiB0aGF0IGNvbnRhaW5zIGEgZmlsZSB0aGF0IGNhbm5vdCBiZSByZW1vdmVkXSwgc29tZSBvZiB0aGUgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeSBtYXkgYmUgZGVsZXRlZC4gSXQgaXMgYW4gZXJyb3JcbiAgICogdG8gYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgcmVtb3ZlUmVjdXJzaXZlbHkoc3VjY2Vzc0NhbGxiYWNrOiBWb2lkQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgbGV0cyBhIHVzZXIgbGlzdCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgaW4gYSBkaXJlY3RvcnkuIElmIHRoZXJlIGFyZSBubyBhZGRpdGlvbnMgdG8gb3JcbiAqIGRlbGV0aW9ucyBmcm9tIGEgZGlyZWN0b3J5IGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IGNhbGwgdG8gcmVhZEVudHJpZXMsIGFuZCBubyBlcnJvcnMgb2NjdXIsIHRoZW46XG4gKiA8dWw+XG4gKiA8bGk+IEEgc2VyaWVzIG9mIGNhbGxzIHRvIHJlYWRFbnRyaWVzIG11c3QgcmV0dXJuIGVhY2ggZW50cnkgaW4gdGhlIGRpcmVjdG9yeSBleGFjdGx5IG9uY2UuPC9saT5cbiAqIDxsaT4gT25jZSBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBuZXh0IGNhbGwgdG8gcmVhZEVudHJpZXMgbXVzdCBwcm9kdWNlIGFuIGVtcHR5IGFycmF5LjwvbGk+XG4gKiA8bGk+IElmIG5vdCBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBhcnJheSBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBiZSBlbXB0eS48L2xpPlxuICogPGxpPiBUaGUgZW50cmllcyBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBpbmNsdWRlIHRoZSBkaXJlY3RvcnkgaXRzZWxmIFtcIi5cIl0gb3IgaXRzIHBhcmVudCBbXCIuLlwiXS48L2xpPlxuICogPC91bD5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvcnlSZWFkZXIge1xuICBsb2NhbFVSTDogc3RyaW5nO1xuICBoYXNSZWFkRW50cmllczogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVhZCB0aGUgbmV4dCBibG9jayBvZiBlbnRyaWVzIGZyb20gdGhpcyBkaXJlY3RvcnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQ2FsbGVkIG9uY2UgcGVyIHN1Y2Nlc3NmdWwgY2FsbCB0byByZWFkRW50cmllcyB0byBkZWxpdmVyIHRoZSBuZXh0IHByZXZpb3VzbHktdW5yZXBvcnRlZFxuICAgKiAgIHNldCBvZiBFbnRyaWVzIGluIHRoZSBhc3NvY2lhdGVkIERpcmVjdG9yeS4gSWYgYWxsIEVudHJpZXMgaGF2ZSBhbHJlYWR5IGJlZW4gcmV0dXJuZWQgZnJvbSBwcmV2aW91cyBpbnZvY2F0aW9uc1xuICAgKiAgIG9mIHJlYWRFbnRyaWVzLCBzdWNjZXNzQ2FsbGJhY2sgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIHplcm8tbGVuZ3RoIGFycmF5IGFzIGFuIGFyZ3VtZW50LlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIGluZGljYXRpbmcgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyBmcm9tIHRoZSBEaXJlY3RvcnkuXG4gICAqL1xuICByZWFkRW50cmllcyhzdWNjZXNzQ2FsbGJhY2s6IEVudHJpZXNDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZmlsZSBvbiBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbnRyeSBleHRlbmRzIEVudHJ5IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVdyaXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIGZpbGUgdGhhdCB0aGlzIEZpbGVFbnRyeSByZXByZXNlbnRzLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgbmV3IEZpbGVXcml0ZXIuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgY3JlYXRlV3JpdGVyKHN1Y2Nlc3NDYWxsYmFjazogRmlsZVdyaXRlckNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBGaWxlIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBGaWxlLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGZpbGUoc3VjY2Vzc0NhbGxiYWNrOiBGaWxlQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBXaGVuIHJlcXVlc3RGaWxlU3lzdGVtKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZVN5c3RlbUNhbGxiYWNrID0gKGZpbGVzeXN0ZW06IEZpbGVTeXN0ZW0pID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cnlDYWxsYmFjayA9IChlbnRyeTogRW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRmlsZUVudHJ5IG9iamVjdHMuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBGaWxlRW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRGlyZWN0b3J5RW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRGlyZWN0b3J5RW50cnlDYWxsYmFjayA9IChlbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogV2hlbiByZWFkRW50cmllcygpIHN1Y2NlZWRzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEVudHJpZXNDYWxsYmFjayA9IChlbnRyaWVzOiBFbnRyeVtdKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIGZpbGUgYW5kIGRpcmVjdG9yeSBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IHR5cGUgTWV0YWRhdGFDYWxsYmFjayA9IChtZXRhZGF0YTogTWV0YWRhdGEpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGNyZWF0ZSBhIEZpbGVXcml0ZXIuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVXcml0ZXJDYWxsYmFjayA9IChmaWxlV3JpdGVyOiBGaWxlV3JpdGVyKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBvYnRhaW4gYSBGaWxlLlxuICovXG5leHBvcnQgdHlwZSBGaWxlQ2FsbGJhY2sgPSAoZmlsZTogSUZpbGUpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBnZW5lcmljIGNhbGxiYWNrIHVzZWQgdG8gaW5kaWNhdGUgc3VjY2VzcyBvZiBhbiBhc3luY2hyb25vdXMgbWV0aG9kLlxuICovXG5leHBvcnQgdHlwZSBWb2lkQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFdoZW4gYW4gZXJyb3Igb2NjdXJzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEVycm9yQ2FsbGJhY2sgPSAoZXJyOiBGaWxlRXJyb3IpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZlUmVzdWx0IHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgZmlsZVJlbW92ZWQ6IEVudHJ5O1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVNhdmVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICAvKipcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcbiAgICogaW1wbGVtZW50aW5nIHRoZSBXb3JrZXJVdGlscyBpbnRlcmZhY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxuICAgKiA8b2w+XG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xuICAgKiBlbHNlLiA8L2xpPlxuICAgKiA8bGk+IFNldCByZWFkeVN0YXRlIHRvIERPTkUuIDwvbGk+XG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcbiAgICogdGFza3MuIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoZSB3cml0ZSBhbGdvcml0aG0gYmVpbmcgcHJvY2Vzc2VkLiA8L2xpPlxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgd3JpdGUgZW5kIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoaXMgYWxnb3JpdGhtLiA8L2xpPlxuICAgKiA8L29sPlxuICAgKi9cbiAgYWJvcnQoKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIGJsb2IgaXMgYmVpbmcgd3JpdHRlbi5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBJTklUOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgb2JqZWN0IGhhcyBiZWVuIGNvbnN0cnVjdGVkLCBidXQgdGhlcmUgaXMgbm8gcGVuZGluZyB3cml0ZS5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBXUklUSU5HOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgZW50aXJlIEJsb2IgaGFzIGJlZW4gd3JpdHRlbiB0byB0aGUgZmlsZSwgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSB3cml0ZSwgb3IgdGhlIHdyaXRlIHdhcyBhYm9ydGVkIHVzaW5nXG4gICAqIGFib3J0KCkuIFRoZSBGaWxlU2F2ZXIgaXMgbm8gbG9uZ2VyIHdyaXRpbmcgdGhlIGJsb2IuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgRE9ORTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIEZpbGVTYXZlciBvYmplY3QgY2FuIGJlIGluIG9uZSBvZiAzIHN0YXRlcy4gVGhlIHJlYWR5U3RhdGUgYXR0cmlidXRlLCBvbiBnZXR0aW5nLCBtdXN0IHJldHVybiB0aGUgY3VycmVudFxuICAgKiBzdGF0ZSwgd2hpY2ggbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAqIDx1bD5cbiAgICogPGxpPklOSVQ8L2xpPlxuICAgKiA8bGk+V1JJVElORzwvbGk+XG4gICAqIDxsaT5ET05FPC9saT5cbiAgICogPHVsPlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHJlYWR5U3RhdGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgb24gdGhlIEZpbGVTYXZlci5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBlcnJvcjogRXJyb3I7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBzdGFydCBldmVudHNcbiAgICovXG4gIG9ud3JpdGVzdGFydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgcHJvZ3Jlc3MgZXZlbnRzLlxuICAgKi9cbiAgb25wcm9ncmVzczogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZXZlbnRzLlxuICAgKi9cbiAgb253cml0ZTogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgYWJvcnQgZXZlbnRzLlxuICAgKi9cbiAgb25hYm9ydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgZXJyb3IgZXZlbnRzLlxuICAgKi9cbiAgb25lcnJvcjogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZW5kIGV2ZW50cy5cbiAgICovXG4gIG9ud3JpdGVlbmQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcbiAgICogaW1wbGVtZW50aW5nIHRoZSBXb3JrZXJVdGlscyBpbnRlcmZhY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxuICAgKiA8b2w+XG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xuICAgKiBlbHNlLiA8L2xpPlxuICAgKiA8bGk+IFNldCByZWFkeVN0YXRlIHRvIERPTkUuIDwvbGk+XG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcbiAgICogdGFza3MuIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoZSB3cml0ZSBhbGdvcml0aG0gYmVpbmcgcHJvY2Vzc2VkLiA8L2xpPlxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgd3JpdGVlbmQgPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhpcyBhbGdvcml0aG0uIDwvbGk+XG4gICAqIDwvb2w+XG4gICAqL1xuICBhYm9ydCgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIFRoaXMgaW50ZXJmYWNlIGV4cGFuZHMgb24gdGhlIEZpbGVTYXZlciBpbnRlcmZhY2UgdG8gYWxsb3cgZm9yIG11bHRpcGxlIHdyaXRlIGFjdGlvbnMsIHJhdGhlciB0aGFuIGp1c3Qgc2F2aW5nIGFcbiAqICAgc2luZ2xlIEJsb2IuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVXcml0ZXIgZXh0ZW5kcyBGaWxlU2F2ZXIge1xuICAvKipcbiAgICogVGhlIGJ5dGUgb2Zmc2V0IGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHRvIHRoZSBmaWxlIHdpbGwgb2NjdXIuIFRoaXMgbXVzdCBiZSBubyBncmVhdGVyIHRoYW4gbGVuZ3RoLlxuICAgKiBBIG5ld2x5LWNyZWF0ZWQgRmlsZVdyaXRlciBtdXN0IGhhdmUgcG9zaXRpb24gc2V0IHRvIDAuXG4gICAqL1xuICBwb3NpdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBmaWxlLiBJZiB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIHJlYWQgYWNjZXNzIHRvIHRoZSBmaWxlLCB0aGlzIG11c3QgYmUgdGhlIGhpZ2hlc3QgYnl0ZSBvZmZzZXQgYXRcbiAgICogd2hpY2ggdGhlIHVzZXIgaGFzIHdyaXR0ZW4uXG4gICAqL1xuICBsZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogV3JpdGUgdGhlIHN1cHBsaWVkIGRhdGEgdG8gdGhlIGZpbGUgYXQgcG9zaXRpb24uXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBibG9iIHRvIHdyaXRlLlxuICAgKi9cbiAgd3JpdGUoZGF0YTogQXJyYXlCdWZmZXIgfCBCbG9iIHwgc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogU2VlayBzZXRzIHRoZSBmaWxlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHdpbGwgb2NjdXIuXG4gICAqIEBwYXJhbSBvZmZzZXQgSWYgbm9ubmVnYXRpdmUsIGFuIGFic29sdXRlIGJ5dGUgb2Zmc2V0IGludG8gdGhlIGZpbGUuIElmIG5lZ2F0aXZlLCBhbiBvZmZzZXQgYmFjayBmcm9tIHRoZSBlbmQgb2ZcbiAgICogICB0aGUgZmlsZS5cbiAgICovXG4gIHNlZWsob2Zmc2V0OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgdG8gdGhhdCBzcGVjaWZpZWQuIElmIHNob3J0ZW5pbmcgdGhlIGZpbGUsIGRhdGEgYmV5b25kIHRoZSBuZXcgbGVuZ3RoIG11c3QgYmVcbiAgICogZGlzY2FyZGVkLiBJZiBleHRlbmRpbmcgdGhlIGZpbGUsIHRoZSBleGlzdGluZyBkYXRhIG11c3QgYmUgemVyby1wYWRkZWQgdXAgdG8gdGhlIG5ldyBsZW5ndGguXG4gICAqIEBwYXJhbSBzaXplIFRoZSBzaXplIHRvIHdoaWNoIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgaXMgdG8gYmUgYWRqdXN0ZWQsIG1lYXN1cmVkIGluIGJ5dGVzLlxuICAgKi9cbiAgdHJ1bmNhdGUoc2l6ZTogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVPcHRpb25zIHtcbiAgcmVwbGFjZT86IGJvb2xlYW47XG4gIGFwcGVuZD86IGJvb2xlYW47XG4gIHRydW5jYXRlPzogbnVtYmVyOyAvLyBpZiBwcmVzZW50LCBudW1iZXIgb2YgYnl0ZXMgdG8gdHJ1bmNhdGUgZmlsZSB0byBiZWZvcmUgd3JpdGluZ1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZUVycm9yIHtcbiAgc3RhdGljIE5PVF9GT1VORF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFNFQ1VSSVRZX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgQUJPUlRfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBOT1RfUkVBREFCTEVfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBFTkNPRElOR19FUlI6IG51bWJlcjtcbiAgc3RhdGljIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgSU5WQUxJRF9TVEFURV9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFNZTlRBWF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIElOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgUVVPVEFfRVhDRUVERURfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBUWVBFX01JU01BVENIX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgUEFUSF9FWElTVFNfRVJSOiBudW1iZXI7XG4gIC8qKiBFcnJvciBjb2RlICovXG4gIGNvZGU6IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvZGU6IG51bWJlcik7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlUmVhZGVyIHtcbiAgc3RhdGljIEVNUFRZOiBudW1iZXI7XG4gIHN0YXRpYyBMT0FESU5HOiBudW1iZXI7XG4gIHN0YXRpYyBET05FOiBudW1iZXI7XG4gIHN0YXRpYyBSRUFEX0NIVU5LX1NJWkU6IG51bWJlcjtcblxuICByZWFkeVN0YXRlOiBudW1iZXI7IC8vIHNlZSBjb25zdGFudHMgaW4gdmFyIGRlY2xhcmF0aW9uIGJlbG93XG4gIGVycm9yOiBFcnJvcjtcbiAgcmVzdWx0OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjsgLy8gdHlwZSBkZXBlbmRzIG9uIHJlYWRBc1hYWCgpIGNhbGwgdHlwZVxuXG4gIG9ubG9hZHN0YXJ0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbnByb2dyZXNzOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmxvYWQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9uZXJyb3I6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9ubG9hZGVuZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25hYm9ydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcblxuICBhYm9ydCgpOiB2b2lkO1xuXG4gIHJlYWRBc1RleHQoZmU6IElGaWxlLCBlbmNvZGluZz86IHN0cmluZyk6IHZvaWQ7XG5cbiAgcmVhZEFzRGF0YVVSTChmZTogSUZpbGUpOiB2b2lkO1xuXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhmZTogSUZpbGUpOiB2b2lkO1xuXG4gIHJlYWRBc0FycmF5QnVmZmVyKGZlOiBJRmlsZSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIFdpbmRvdyBleHRlbmRzIExvY2FsRmlsZVN5c3RlbSB7fVxuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogV2luZG93O1xuXG4vKipcbiAqIEBuYW1lIEZpbGVcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaW1wbGVtZW50cyBhIEZpbGUgQVBJIGFsbG93aW5nIHJlYWQvd3JpdGUgYWNjZXNzIHRvIGZpbGVzIHJlc2lkaW5nIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogVGhlIEZpbGUgY2xhc3MgaW1wbGVtZW50cyBzdGF0aWMgY29udmVuaWVuY2UgZnVuY3Rpb25zIHRvIGFjY2VzcyBmaWxlcyBhbmQgZGlyZWN0b3JpZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYFxuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlLmNoZWNrRGlyKHRoaXMuZmlsZS5kYXRhRGlyZWN0b3J5LCAnbXlkaXInKS50aGVuKF8gPT4gY29uc29sZS5sb2coJ0RpcmVjdG9yeSBleGlzdHMnKSkuY2F0Y2goZXJyID0+XG4gKiAgIGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZG9lc24ndCBleGlzdCcpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiAgVGhpcyBwbHVnaW4gaXMgYmFzZWQgb24gc2V2ZXJhbCBzcGVjcywgaW5jbHVkaW5nIDogVGhlIEhUTUw1IEZpbGUgQVBJIGh0dHA6IC8vd3d3LnczLm9yZy9UUi9GaWxlQVBJL1xuICogIFRoZSAobm93LWRlZnVuY3QpIERpcmVjdG9yaWVzIGFuZCBTeXN0ZW0gZXh0ZW5zaW9ucyBMYXRlc3Q6IGh0dHA6IC8vd3d3LnczLm9yZy9UUi8yMDEyL1dELWZpbGUtc3lzdGVtLWFwaS0yMDEyMDQxNy9cbiAqICBBbHRob3VnaCBtb3N0IG9mIHRoZSBwbHVnaW4gY29kZSB3YXMgd3JpdHRlbiB3aGVuIGFuIGVhcmxpZXIgc3BlYyB3YXMgY3VycmVudDogaHR0cDpcbiAqICAgLy93d3cudzMub3JnL1RSLzIwMTEvV0QtZmlsZS1zeXN0ZW0tYXBpLTIwMTEwNDE5LyBJdCBhbHNvIGltcGxlbWVudHMgdGhlIEZpbGVXcml0ZXIgc3BlYyA6IGh0dHA6XG4gKiAgIC8vZGV2LnczLm9yZy8yMDA5L2RhcC9maWxlLXN5c3RlbS9maWxlLXdyaXRlci5odG1sXG4gKiAgQGludGVyZmFjZXNcbiAqICBJRmlsZVxuICogIEVudHJ5XG4gKiAgRGlyZWN0b3J5RW50cnlcbiAqICBEaXJlY3RvcnlSZWFkZXJcbiAqICBGaWxlU3lzdGVtXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmlsZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLmZpbGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIFJlYWQtb25seSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBhcHBsaWNhdGlvbkRpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgUmVhZC1vbmx5IGRpcmVjdG9yeSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgaW5zdGFsbGVkLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uU3RvcmFnZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZGF0YURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWNoZWQgZmlsZXMgdGhhdCBzaG91bGQgc3Vydml2ZSBhcHAgcmVzdGFydHMuXG4gICAqIEFwcHMgc2hvdWxkIG5vdCByZWx5IG9uIHRoZSBPUyB0byBkZWxldGUgZmlsZXMgaW4gaGVyZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBjYWNoZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkOiB0aGUgYXBwbGljYXRpb24gc3BhY2Ugb24gZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbEFwcGxpY2F0aW9uU3RvcmFnZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgQW5kcm9pZDogV2hlcmUgdG8gcHV0IGFwcC1zcGVjaWZpYyBkYXRhIGZpbGVzIG9uIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxEYXRhRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQ6IHRoZSBhcHBsaWNhdGlvbiBjYWNoZSBvbiBleHRlcm5hbCBzdG9yYWdlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQ2FjaGVEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZDogdGhlIGV4dGVybmFsIHN0b3JhZ2UgKFNEIGNhcmQpIHJvb3QuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxSb290RGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlPUzogVGVtcCBkaXJlY3RvcnkgdGhhdCB0aGUgT1MgY2FuIGNsZWFyIGF0IHdpbGwuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgdGVtcERpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpT1M6IEhvbGRzIGFwcC1zcGVjaWZpYyBmaWxlcyB0aGF0IHNob3VsZCBiZSBzeW5jZWQgKGUuZy4gdG8gaUNsb3VkKS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBzeW5jZWREYXRhRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlPUzogRmlsZXMgcHJpdmF0ZSB0byB0aGUgYXBwLCBidXQgdGhhdCBhcmUgbWVhbmluZ2Z1bCB0byBvdGhlciBhcHBsaWNhdGlvbnMgKGUuZy4gT2ZmaWNlIGZpbGVzKVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRvY3VtZW50c0RpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCbGFja0JlcnJ5MTA6IEZpbGVzIGdsb2JhbGx5IGF2YWlsYWJsZSB0byBhbGwgYXBwc1xuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHNoYXJlZERpcmVjdG9yeTogc3RyaW5nO1xuXG4gIGNvcmRvdmFGaWxlRXJyb3I6IGFueSA9IHtcbiAgICAxOiAnTk9UX0ZPVU5EX0VSUicsXG4gICAgMjogJ1NFQ1VSSVRZX0VSUicsXG4gICAgMzogJ0FCT1JUX0VSUicsXG4gICAgNDogJ05PVF9SRUFEQUJMRV9FUlInLFxuICAgIDU6ICdFTkNPRElOR19FUlInLFxuICAgIDY6ICdOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlInLFxuICAgIDc6ICdJTlZBTElEX1NUQVRFX0VSUicsXG4gICAgODogJ1NZTlRBWF9FUlInLFxuICAgIDk6ICdJTlZBTElEX01PRElGSUNBVElPTl9FUlInLFxuICAgIDEwOiAnUVVPVEFfRVhDRUVERURfRVJSJyxcbiAgICAxMTogJ1RZUEVfTUlTTUFUQ0hfRVJSJyxcbiAgICAxMjogJ1BBVEhfRVhJU1RTX0VSUicsXG4gICAgMTM6ICdXUk9OR19FTlRSWV9UWVBFJyxcbiAgICAxNDogJ0RJUl9SRUFEX0VSUicsXG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZW1haW5pbmcgZnJlZSBkaXNrIHNwYWNlIGluIEJ5dGVzXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZ2V0RnJlZURpc2tTcGFjZSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29yZG92YS5leGVjKHJlc29sdmUgYXMgKGRhdGE6IGFueSkgPT4gYW55LCByZWplY3QgYXMgKGRhdGE6IGFueSkgPT4gYW55LCAnRmlsZScsICdnZXRGcmVlRGlza1NwYWNlJywgW10pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgZGlyZWN0b3J5IGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpciBOYW1lIG9mIGRpcmVjdG9yeSB0byBjaGVja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSBkaXJlY3RvcnkgZXhpc3RzIG9yIHJlamVjdHMgd2l0aCBhblxuICAgKiAgIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNoZWNrRGlyKHBhdGg6IHN0cmluZywgZGlyOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoICsgZGlyO1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwoZnVsbFBhdGgpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBkaXJlY3RvcnkgaW4gdGhlIHNwZWNpZmljIHBhdGguXG4gICAqIFRoZSByZXBsYWNlIGJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RpbmcgZGlyZWN0b3J5IHdpdGggdGhlIHNhbWUgbmFtZS5cbiAgICogSWYgYW4gZXhpc3RpbmcgZGlyZWN0b3J5IGV4aXN0cyBhbmQgdGhlIHJlcGxhY2UgdmFsdWUgaXMgZmFsc2UsIHRoZSBwcm9taXNlIHdpbGwgZmFpbCBhbmQgcmV0dXJuIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSWYgdHJ1ZSwgcmVwbGFjZXMgZmlsZSB3aXRoIHNhbWUgbmFtZS4gSWYgZmFsc2UgcmV0dXJucyBlcnJvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIERpcmVjdG9yeUVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjcmVhdGVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBGbGFncyA9IHtcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICBvcHRpb25zLmV4Y2x1c2l2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKS50aGVuKGZzZSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBkaXJlY3RvcnkgYXQgYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBkaXJlY3RvcnkgbmFtZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGRlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYSBkaXJlY3RvcnkgdG8gYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgc291cmNlIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBUaGUgc291cmNlIGRpcmVjdG9yeSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIFRoZSBkZXN0aW5hdGlvbiBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0Rpck5hbWUgVGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5fEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IERpcmVjdG9yeUVudHJ5IG9iamVjdCBvclxuICAgKiAgIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBtb3ZlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0Rpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnkgfCBFbnRyeT4ge1xuICAgIG5ld0Rpck5hbWUgPSBuZXdEaXJOYW1lIHx8IGRpck5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNkZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZW5hdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNkZSwgZGVzdGVuYXRpb24sIG5ld0Rpck5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgYSBkaXJlY3RvcnkgaW4gdmFyaW91cyBtZXRob2RzLiBJZiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtcyBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjb3B5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0Rpck5hbWUgTmV3IG5hbWUgb2YgZGlyZWN0b3J5IHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRW50cnkgb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjb3B5RGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0Rpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNkZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29weShzcmNkZSwgZGVzdGUsIG5ld0Rpck5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3QgZmlsZXMgYW5kIGRpcmVjdG9yeSBmcm9tIGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtcyBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeVtdPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBhcnJheSBvZiBFbnRyeSBvYmplY3RzIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBsaXN0RGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeVtdPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PEVudHJ5W10+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwge1xuICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgZXhjbHVzaXZlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBkZS5jcmVhdGVSZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEVudHJpZXMocmVhZGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGZpbGVzIGFuZCB0aGUgZGlyZWN0b3J5IGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVSZWN1cnNpdmVseShwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PFJlbW92ZVJlc3VsdD4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yaW1yYWYoZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBmaWxlIGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlIHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjaGVja0ZpbGUocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKHBhdGggKyBmaWxlKS50aGVuKGZzZSA9PiB7XG4gICAgICBpZiAoZnNlLmlzRmlsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xuICAgICAgICBlcnIubWVzc2FnZSA9ICdpbnB1dCBpcyBub3QgYSBmaWxlJztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGJvb2xlYW4+KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBmaWxlIGluIHRoZSBzcGVjaWZpYyBwYXRoLlxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgKiBJZiBhbiBleGlzdGluZyBmaWxlIGV4aXN0cyBhbmQgdGhlIHJlcGxhY2UgdmFsdWUgaXMgZmFsc2UsIHRoZSBwcm9taXNlIHdpbGwgZmFpbCBhbmQgcmV0dXJuIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogUHJvbWlzZTxGaWxlRW50cnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBGbGFncyA9IHtcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICBvcHRpb25zLmV4Y2x1c2l2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKS50aGVuKGZzZSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBmaWxlIGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gcmVtb3ZlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlbW92ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShmZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIG5ldyBmaWxlIHRvIHRoZSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IGNvbnRlbnQsIGJsb2Igb3IgQXJyYXlCdWZmZXIgdG8gd3JpdGVcbiAgICogQHBhcmFtIHtJV3JpdGVPcHRpb25zfSB3aGV0aGVyIHRvIHJlcGxhY2UvYXBwZW5kIHRvIGFuIGV4aXN0aW5nIGZpbGUuIFNlZSBJV3JpdGVPcHRpb25zIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHVwZGF0ZWQgZmlsZSBlbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgd3JpdGVGaWxlKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxuICAgIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcixcbiAgICBvcHRpb25zOiBJV3JpdGVPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RmlsZU9wdHM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiAhb3B0aW9ucy5hcHBlbmQsXG4gICAgICBleGNsdXNpdmU6ICFvcHRpb25zLnJlcGxhY2UsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUsIGdldEZpbGVPcHRzKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlRW50cnkoZmlsZUVudHJ5LCB0ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGNvbnRlbnQgdG8gRmlsZUVudHJ5LlxuICAgKiBAaGlkZGVuXG4gICAqIFdyaXRlIHRvIGFuIGV4aXN0aW5nIGZpbGUuXG4gICAqIEBwYXJhbSB7RmlsZUVudHJ5fSBmZSBmaWxlIGVudHJ5IG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxuICAgKiBAcGFyYW0ge0lXcml0ZU9wdGlvbnN9IG9wdGlvbnMgcmVwbGFjZSBmaWxlIGlmIHNldCB0byB0cnVlLiBTZWUgV3JpdGVPcHRpb25zIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fSAgUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZUZpbGVFbnRyeShmZTogRmlsZUVudHJ5LCB0ZXh0OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIsIG9wdGlvbnM6IElXcml0ZU9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVXcml0ZXIoZmUpXG4gICAgICAudGhlbih3cml0ZXIgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5hcHBlbmQpIHtcbiAgICAgICAgICB3cml0ZXIuc2Vlayh3cml0ZXIubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnRydW5jYXRlKSB7XG4gICAgICAgICAgd3JpdGVyLnRydW5jYXRlKG9wdGlvbnMudHJ1bmNhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUod3JpdGVyLCB0ZXh0KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBmZSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgdG8gYW4gZXhpc3RpbmcgZmlsZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBwYXRoIHJlbGF0aXZlIHRvIGJhc2UgcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2J9IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICB3cml0ZUV4aXN0aW5nRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB8IEJsb2IpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy53cml0ZUZpbGUocGF0aCwgZmlsZU5hbWUsIHRleHQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBjb250ZW50cyBvZiBhIGZpbGUgYXMgdGV4dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgb3IgcmVqZWN0cyB3aXRoXG4gICAqICAgYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzVGV4dChwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnVGV4dCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiYXNlNjQgZW5jb2RlZCBkYXRhIHVybC5cbiAgICogQSBkYXRhIHVybCBpcyBvZiB0aGUgZm9ybTpcbiAgICogICAgICBkYXRhOiBbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIGRhdGEgVVJMIG9yIHJlamVjdHNcbiAgICogICB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc0RhdGFVUkwocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ0RhdGFVUkwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGEgYmluYXJ5IGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgc3RyaW5nIHJlamVjdHMgd2l0aCBhblxuICAgKiAgIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnQmluYXJ5U3RyaW5nJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhbiBBcnJheUJ1ZmZlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIEFycmF5QnVmZmVyIG9yXG4gICAqICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlYWRBc0FycmF5QnVmZmVyKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPEFycmF5QnVmZmVyPihwYXRoLCBmaWxlLCAnQXJyYXlCdWZmZXInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIGEgZmlsZSB0byBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIG1vdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RmlsZU5hbWUgTmV3IG5hbWUgb2YgZmlsZSB0byBtb3ZlIHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBtb3ZlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICBuZXdGaWxlTmFtZSA9IG5ld0ZpbGVOYW1lIHx8IGZpbGVOYW1lO1xuXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0ZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3JjZmUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoc3JjZmUsIGRlc3RlLCBuZXdGaWxlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSBhIGZpbGUgaW4gdmFyaW91cyBtZXRob2RzLiBJZiBmaWxlIGV4aXN0cywgd2lsbCBmYWlsIHRvIGNvcHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIGNvcHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RmlsZU5hbWUgTmV3IG5hbWUgb2YgZmlsZSB0byBjb3B5IHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY29weUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0ZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgbmV3RmlsZU5hbWUgPSBuZXdGaWxlTmFtZSB8fCBmaWxlTmFtZTtcblxuICAgIGlmICgvXlxcLy8udGVzdChuZXdGaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNyY2ZlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2ZlLCBkZXN0ZSwgbmV3RmlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgZmlsbEVycm9yTWVzc2FnZShlcnI6IEZpbGVFcnJvcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBlcnIubWVzc2FnZSA9IHRoaXMuY29yZG92YUZpbGVFcnJvcltlcnIuY29kZV07XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGZpbGUgc3lzdGVtIFVSTFxuICAgKiBAcGFyYW0gZmlsZVVybCB7c3RyaW5nfSBmaWxlIHN5c3RlbSB1cmxcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZmlsZVVybDogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTChcbiAgICAgICAgICBmaWxlVXJsLFxuICAgICAgICAgIChlbnRyeTogRW50cnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZW50cnkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGRpcmVjdG9yeSB1cmxcbiAgICogQHBhcmFtIGRpcmVjdG9yeVVybCB7c3RyaW5nfSBkaXJlY3Rvcnkgc3lzdGVtIHVybFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVzb2x2ZURpcmVjdG9yeVVybChkaXJlY3RvcnlVcmw6IHN0cmluZyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGRpcmVjdG9yeVVybCkudGhlbihkZSA9PiB7XG4gICAgICBpZiAoZGUuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIGRlIGFzIERpcmVjdG9yeUVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGRpcmVjdG9yeSc7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxEaXJlY3RvcnlFbnRyeT4oZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxuICAgKiBAcGFyYW0gZGlyZWN0b3J5TmFtZSB7c3RyaW5nfSBEaXJlY3RvcnkgbmFtZVxuICAgKiBAcGFyYW0gZmxhZ3Mge0ZsYWdzfSBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXREaXJlY3RvcnkoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5LCBkaXJlY3RvcnlOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RGlyZWN0b3J5RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldERpcmVjdG9yeShcbiAgICAgICAgICBkaXJlY3RvcnlOYW1lLFxuICAgICAgICAgIGZsYWdzLFxuICAgICAgICAgIGRlID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBmaWxlXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlFbnRyeSB7RGlyZWN0b3J5RW50cnl9IERpcmVjdG9yeSBlbnRyeSwgb2J0YWluZWQgYnkgcmVzb2x2ZURpcmVjdG9yeVVybCBtZXRob2RcbiAgICogQHBhcmFtIGZpbGVOYW1lIHtzdHJpbmd9IEZpbGUgbmFtZVxuICAgKiBAcGFyYW0gZmxhZ3Mge0ZsYWdzfSBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZ2V0RmlsZShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGZpbGVOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RmlsZUVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RmlsZShmaWxlTmFtZSwgZmxhZ3MsIHJlc29sdmUsIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZEZpbGU8VD4oXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGZpbGU6IHN0cmluZyxcbiAgICByZWFkQXM6ICdBcnJheUJ1ZmZlcicgfCAnQmluYXJ5U3RyaW5nJyB8ICdEYXRhVVJMJyB8ICdUZXh0J1xuICApOiBQcm9taXNlPFQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChmaWxlRW50cnk6IEZpbGVFbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZXR1cm4gZ2V0UHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZWFkZXIucmVzdWx0ICE9PSB1bmRlZmluZWQgfHwgcmVhZGVyLnJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgYW55IGFzIFQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWFkZXIuZXJyb3IgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIuZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoeyBjb2RlOiBudWxsLCBtZXNzYWdlOiAnUkVBREVSX09OTE9BREVORF9FUlInIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmaWxlRW50cnkuZmlsZShcbiAgICAgICAgICAgIGZpbGUgPT4ge1xuICAgICAgICAgICAgICByZWFkZXJbYHJlYWRBcyR7cmVhZEFzfWBdLmNhbGwocmVhZGVyLCBmaWxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZShmZTogRW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW1vdmVSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZlLnJlbW92ZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZmUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlKHNyY2U6IEVudHJ5LCBkZXN0ZGlyOiBEaXJlY3RvcnlFbnRyeSwgbmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3JjZS5tb3ZlVG8oXG4gICAgICAgIGRlc3RkaXIsXG4gICAgICAgIG5ld05hbWUsXG4gICAgICAgIGRlc3RlID0+IHtcbiAgICAgICAgICByZXNvbHZlKGRlc3RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGNvcHkoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcmNlLmNvcHlUbyhcbiAgICAgICAgZGVzdGRpcixcbiAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgZGVzdGUgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmVhZEVudHJpZXMoZHI6IERpcmVjdG9yeVJlYWRlcik6IFByb21pc2U8RW50cnlbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBkci5yZWFkRW50cmllcyhcbiAgICAgICAgZW50cmllcyA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShlbnRyaWVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHJpbXJhZihkZTogRGlyZWN0b3J5RW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW1vdmVSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGRlLnJlbW92ZVJlY3Vyc2l2ZWx5KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUsIGZpbGVSZW1vdmVkOiBkZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVdyaXRlcihmZTogRmlsZUVudHJ5KTogUHJvbWlzZTxGaWxlV3JpdGVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVXcml0ZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZlLmNyZWF0ZVdyaXRlcihcbiAgICAgICAgd3JpdGVyID0+IHtcbiAgICAgICAgICByZXNvbHZlKHdyaXRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZSh3cml0ZXI6IEZpbGVXcml0ZXIsIGd1OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChndSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgIHJldHVybiB0aGlzLndyaXRlRmlsZUluQ2h1bmtzKHdyaXRlciwgZ3UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdyaXRlci5vbndyaXRlZW5kID0gZXZ0ID0+IHtcbiAgICAgICAgaWYgKHdyaXRlci5lcnJvcikge1xuICAgICAgICAgIHJlamVjdCh3cml0ZXIuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZXZ0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdyaXRlci53cml0ZShndSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZUZpbGVJbkNodW5rcyh3cml0ZXI6IEZpbGVXcml0ZXIsIGZpbGU6IEJsb2IpIHtcbiAgICBjb25zdCBCTE9DS19TSVpFID0gMTAyNCAqIDEwMjQ7XG4gICAgbGV0IHdyaXR0ZW5TaXplID0gMDtcblxuICAgIGZ1bmN0aW9uIHdyaXRlTmV4dENodW5rKCkge1xuICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgubWluKEJMT0NLX1NJWkUsIGZpbGUuc2l6ZSAtIHdyaXR0ZW5TaXplKTtcbiAgICAgIGNvbnN0IGNodW5rID0gZmlsZS5zbGljZSh3cml0dGVuU2l6ZSwgd3JpdHRlblNpemUgKyBzaXplKTtcblxuICAgICAgd3JpdHRlblNpemUgKz0gc2l6ZTtcbiAgICAgIHdyaXRlci53cml0ZShjaHVuayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3cml0ZXIub25lcnJvciA9IHJlamVjdCBhcyAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gICAgICB3cml0ZXIub253cml0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdyaXR0ZW5TaXplIDwgZmlsZS5zaXplKSB7XG4gICAgICAgICAgd3JpdGVOZXh0Q2h1bmsoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3cml0ZU5leHRDaHVuaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "KRBT":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: InterceptorService, InterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorModule", function() { return InterceptorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let InterceptorService = class InterceptorService {
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1`,
                'plm': 'da'
            }
        });
        return next.handle(request);
    }
};
InterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], InterceptorService);

let InterceptorModule = class InterceptorModule {
};
InterceptorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: InterceptorService, multi: true }
        ]
    })
], InterceptorModule);



/***/ }),

/***/ "XSEc":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************/
/*! exports provided: HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP", function() { return HTTP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var HTTP = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTP.prototype.getBasicAuthHeader = function (username, password) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getBasicAuthHeader", { "sync": true }, arguments); };
    HTTP.prototype.useBasicAuth = function (username, password) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "useBasicAuth", { "sync": true }, arguments); };
    HTTP.prototype.getHeaders = function (host) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getHeaders", { "sync": true }, arguments); };
    HTTP.prototype.setHeader = function (host, header, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setHeader", { "sync": true }, arguments); };
    HTTP.prototype.getDataSerializer = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setDataSerializer = function (serializer) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setCookie = function (url, cookie) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setCookie", { "sync": true }, arguments); };
    HTTP.prototype.clearCookies = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clearCookies", { "sync": true }, arguments); };
    HTTP.prototype.removeCookies = function (url, cb) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeCookies", { "sync": true }, arguments); };
    HTTP.prototype.getCookieString = function (url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCookieString", { "sync": true }, arguments); };
    HTTP.prototype.getRequestTimeout = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setRequestTimeout = function (timeout) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.getFollowRedirect = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setFollowRedirect = function (follow) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setFollowRedirect", { "sync": true }, arguments); };
    HTTP.prototype.setServerTrustMode = function (mode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setServerTrustMode", {}, arguments); };
    HTTP.prototype.post = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "post", {}, arguments); };
    HTTP.prototype.postSync = function (url, body, headers, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "post", { "methodName": "post", "sync": true }, arguments); };
    HTTP.prototype.get = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "get", {}, arguments); };
    HTTP.prototype.getSync = function (url, parameters, headers, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "get", { "methodName": "get", "sync": true }, arguments); };
    HTTP.prototype.put = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "put", {}, arguments); };
    HTTP.prototype.putSync = function (url, body, headers, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "put", { "methodName": "put", "sync": true }, arguments); };
    HTTP.prototype.patch = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "patch", {}, arguments); };
    HTTP.prototype.patchSync = function (url, body, headers, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "patch", { "methodName": "patch", "sync": true }, arguments); };
    HTTP.prototype.delete = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "delete", {}, arguments); };
    HTTP.prototype.deleteSync = function (url, parameters, headers, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "delete", { "methodName": "delete", "sync": true }, arguments); };
    HTTP.prototype.head = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "head", {}, arguments); };
    HTTP.prototype.headSync = function (url, parameters, headers, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "head", { "methodName": "head", "sync": true }, arguments); };
    HTTP.prototype.options = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "options", {}, arguments); };
    HTTP.prototype.optionsSync = function (url, parameters, headers, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "options", { "methodName": "options", "sync": true }, arguments); };
    HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "uploadFile", {}, arguments); };
    HTTP.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "uploadFile", { "methodName": "uploadFile", "sync": true }, arguments); };
    HTTP.prototype.downloadFile = function (url, body, headers, filePath) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "downloadFile", {}, arguments); };
    HTTP.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "downloadFile", { "methodName": "downloadFile", "sync": true }, arguments); };
    HTTP.prototype.sendRequest = function (url, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendRequest", {}, arguments); };
    HTTP.prototype.sendRequestSync = function (url, options, success, failure) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendRequest", { "methodName": "sendRequest", "sync": true }, arguments); };
    HTTP.prototype.abort = function (requestId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "abort", {}, arguments); };
    Object.defineProperty(HTTP.prototype, "ErrorCode", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "ErrorCode"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "ErrorCode", value); },
        enumerable: false,
        configurable: true
    });
    HTTP.pluginName = "HTTP";
    HTTP.plugin = "cordova-plugin-advanced-http";
    HTTP.pluginRef = "cordova.plugin.http";
    HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
    HTTP.platforms = ["Android", "iOS"];
HTTP.??fac = function HTTP_Factory(t) { return ??HTTP_BaseFactory(t || HTTP); };
HTTP.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: HTTP, factory: function (t) { return HTTP.??fac(t); } });
var ??HTTP_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getInheritedFactory"](HTTP);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](HTTP, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return HTTP;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaHR0cC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDekY7QUFHTyxJQXVFbUIsd0JBQWlCO0FBQUM7QUFFOUI7QUFBeUU7QUFBTSxJQXNCM0YsaUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtBQUs3QixJQUt4QiwyQkFBWSxhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7QUFJNUMsSUFJSCx5QkFBVSxhQUFDLElBQVk7QUFLWSxJQU1uQyx3QkFBUyxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYTtBQUdGLElBSW5ELGdDQUFpQjtBQUtxQyxJQUt0RCxnQ0FBaUIsYUFBQyxVQUFnRTtBQUlqRCxJQUlqQyx3QkFBUyxhQUFDLEdBQVcsRUFBRSxNQUFjO0FBS2hCLElBQ3JCLDJCQUFZO0FBS04sSUFHTiw0QkFBYSxhQUFDLEdBQVcsRUFBRSxFQUFjO0FBSTVCLElBR2IsOEJBQWUsYUFBQyxHQUFXO0FBS2EsSUFJeEMsZ0NBQWlCO0FBTWIsSUFHSixnQ0FBaUIsYUFBQyxPQUFlO0FBSWhDLElBR0QsZ0NBQWlCO0FBS29DLElBSXJELGdDQUFpQixhQUFDLE1BQWU7QUFHMEIsSUFTM0QsaUNBQWtCLGFBQUMsSUFBaUQ7QUFLOUMsSUFPdEIsbUJBQUksYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZQSx1QkFBUSxhQUNOLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1AsSUFNeEIsa0JBQUcsYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZQyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1QsSUFNdEIsa0JBQUcsYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZQyxzQkFBTyxhQUNMLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1gsSUFNcEIsb0JBQUssYUFBQyxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQVk7QUFLekMsSUFZRCx3QkFBUyxhQUNQLEdBQVcsRUFDWCxJQUFTLEVBQ1QsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1IsSUFNdkIscUJBQU0sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZRix5QkFBVSxhQUNSLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT0osSUFNM0IsbUJBQUksYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZQSx1QkFBUSxhQUNOLEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT1osSUFNbkIsc0JBQU8sYUFBQyxHQUFXLEVBQUUsVUFBZSxFQUFFLE9BQVk7QUFLL0MsSUFZSCwwQkFBVyxhQUNULEdBQVcsRUFDWCxVQUFlLEVBQ2YsT0FBWSxFQUNaLE9BQXVDLEVBQ3ZDLE9BQTZCO0FBT2tCLElBUWpELHlCQUFVLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLEVBQUUsUUFBMkIsRUFBRSxJQUF1QjtBQU0zRixJQWFWLDZCQUFjLGFBQ1osR0FBVyxFQUNYLElBQVMsRUFDVCxPQUFZLEVBQ1osUUFBMkIsRUFDM0IsSUFBdUIsRUFDdkIsT0FBOEIsRUFDOUIsT0FBNkI7QUFRaEMsSUFNQywyQkFBWSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQWdCO0FBTXZELElBWVosK0JBQWdCLGFBQ2QsR0FBVyxFQUNYLElBQVMsRUFDVCxPQUFZLEVBQ1osUUFBZ0IsRUFDaEIsT0FBOEIsRUFDOUIsT0FBNkI7QUFRNUIsSUFjSCwwQkFBVyxhQUNULEdBQVcsRUFDWCxPQVVDO0FBT0osSUFvQkMsOEJBQWUsYUFDYixHQUFXLEVBQ1gsT0FVQyxFQUNELE9BQXVDLEVBQ3ZDLE9BQTZCO0FBTStCLElBRzlELG9CQUFLLGFBQUMsU0FBaUI7QUFJcEIsMEJBdGlCTSwyQkFBUztBQUNwQjtBQUU0QjtBQUkxQjtBQUEyQjtBQUNUO0FBR25CO0FBQ3dCO0FBQWtEO0FBQzVDO0FBRUY7d0NBdEI1QixVQUFVOzs7OzswQkFDTDtBQUFDLGVBNUVQO0FBQUUsRUE0RXdCLGlCQUFpQjtBQUMxQyxTQURZLElBQUk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSFRUUFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBIVFRQIHN0YXR1cyBudW1iZXIgb2YgdGhlIHJlc3BvbnNlIG9yIGEgbmVnYXRpdmUgaW50ZXJuYWwgZXJyb3IgY29kZS5cbiAgICovXG4gIHN0YXR1czogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlYWRlcnMgb2YgdGhlIHJlc3BvbnNlLlxuICAgKi9cbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgdGhlIGZpbmFsIFVSTCBvYnRhaW5lZCBhZnRlciBhbnkgcmVkaXJlY3RzLlxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSB0aGF0IGlzIGluIHRoZSByZXNwb25zZS4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlc29sdmVzLlxuICAgKi9cbiAgZGF0YT86IGFueTtcbiAgLyoqXG4gICAqIEVycm9yIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci4gVGhpcyBwcm9wZXJ0eSB1c3VhbGx5IGV4aXN0cyB3aGVuIGEgcHJvbWlzZSByZXR1cm5lZCBieSBhIHJlcXVlc3QgbWV0aG9kIHJlamVjdHMuXG4gICAqL1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFib3J0ZWRSZXNwb25zZSB7XG4gIGFib3J0ZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgSFRUUFxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIC8gUGhvbmVnYXAgcGx1Z2luIGZvciBjb21tdW5pY2F0aW5nIHdpdGggSFRUUCBzZXJ2ZXJzLiBTdXBwb3J0cyBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogQWR2YW50YWdlcyBvdmVyIEphdmFzY3JpcHQgcmVxdWVzdHM6XG4gKiAtIFNTTCAvIFRMUyBQaW5uaW5nXG4gKiAtIENPUlMgcmVzdHJpY3Rpb25zIGRvIG5vdCBhcHBseVxuICogLSBIYW5kbGluZyBvZiBIVFRQIGNvZGUgNDAxIC0gcmVhZCBtb3JlIGF0IFtJc3N1ZSBDQi0yNDE1XShodHRwczovL2lzc3Vlcy5hcGFjaGUub3JnL2ppcmEvYnJvd3NlL0NCLTI0MTUpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIVFRQKSB7fVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9pb25pYy5pbycsIHt9LCB7fSlcbiAqICAgLnRoZW4oZGF0YSA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAqICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpOyAvLyBkYXRhIHJlY2VpdmVkIGJ5IHNlcnZlclxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuaGVhZGVycyk7XG4gKlxuICogICB9KVxuICogICAuY2F0Y2goZXJyb3IgPT4ge1xuICpcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmVycm9yKTsgLy8gZXJyb3IgbWVzc2FnZSBhcyBzdHJpbmdcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEhUVFBSZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hUVFAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW4uaHR0cCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBlbnVtIHJlcHJlc2VudHMgdGhlIGludGVybmFsIGVycm9yIGNvZGVzIHdoaWNoIGNhbiBiZSByZXR1cm5lZCBpbiBhIEhUVFBSZXNwb25zZSBvYmplY3QuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHJlYWRvbmx5IEVycm9yQ29kZToge1xuICAgIEdFTkVSSUM6IG51bWJlcjtcbiAgICBTU0xfRVhDRVBUSU9OOiBudW1iZXI7XG4gICAgU0VSVkVSX05PVF9GT1VORDogbnVtYmVyO1xuICAgIFRJTUVPVVQ6IG51bWJlcjtcbiAgICBVTlNVUFBPUlRFRF9VUkw6IG51bWJlcjtcbiAgICBOT1RfQ09OTkVDVEVEOiBudW1iZXI7XG4gICAgUE9TVF9QUk9DRVNTSU5HX0ZBSUxFRDogbnVtYmVyO1xuICAgIEFCT1JURUQ6IG51bWJlcjtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyByZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRpbmcgYSBiYXNpYyBIVFRQIEF1dGhvcml6YXRpb24gaGVhZGVyIG9mIHRoZSBmb3JtLlxuICAgKiBAcGFyYW0gdXNlcm5hbWUge3N0cmluZ30gVXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIHtzdHJpbmd9IFBhc3N3b3JkXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFuIG9iamVjdCByZXByZXNlbnRpbmcgYSBiYXNpYyBIVFRQIEF1dGhvcml6YXRpb24gaGVhZGVyIG9mIHRoZSBmb3JtIHsnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBiYXNlNjRFbmNvZGVkVXNlcm5hbWVBbmRQYXNzd29yZCd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QmFzaWNBdXRoSGVhZGVyKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB7IEF1dGhvcml6YXRpb246IHN0cmluZyB9IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBzZXRzIHVwIGFsbCBmdXR1cmUgcmVxdWVzdHMgdG8gdXNlIEJhc2ljIEhUVFAgYXV0aGVudGljYXRpb24gd2l0aCB0aGUgZ2l2ZW4gdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlxuICAgKiBAcGFyYW0gdXNlcm5hbWUge3N0cmluZ30gVXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIHtzdHJpbmd9IFBhc3N3b3JkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXNlQmFzaWNBdXRoKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgaGVhZGVycyBkZWZpbmVkIGZvciBhIGdpdmVuIGhvc3RuYW1lLlxuICAgKiBAcGFyYW0gaG9zdCB7c3RyaW5nfSBUaGUgaG9zdG5hbWVcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJuIGFsbCBoZWFkZXJzIGRlZmluZWQgZm9yIHRoZSBob3N0bmFtZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEhlYWRlcnMoaG9zdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgaGVhZGVyIGZvciBhbGwgZnV0dXJlIHJlcXVlc3RzLiBUYWtlcyBhIGhvc3RuYW1lLCBhIGhlYWRlciBhbmQgYSB2YWx1ZS5cbiAgICogQHBhcmFtIGhvc3Qge3N0cmluZ30gVGhlIGhvc3RuYW1lIHRvIGJlIHVzZWQgZm9yIHNjb3BpbmcgdGhpcyBoZWFkZXJcbiAgICogQHBhcmFtIGhlYWRlciB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgaGVhZGVyXG4gICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIGhlYWRlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEhlYWRlcihob3N0OiBzdHJpbmcsIGhlYWRlcjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRhdGEgc2VyaWFsaXplciB3aGljaCB3aWxsIGJlIHVzZWQgZm9yIGFsbCBmdXR1cmUgUE9TVCBhbmQgUFVUIHJlcXVlc3RzLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBjb25maWd1cmVkIGRhdGEgc2VyaWFsaXplclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldERhdGFTZXJpYWxpemVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBzZXJpYWxpemVyIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGZ1dHVyZSBQT1NULCBQVVQgYW5kIFBBVENIIHJlcXVlc3RzLiBUYWtlcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIHNlcmlhbGl6ZXIuXG4gICAqIEBwYXJhbSBzZXJpYWxpemVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBzZXJpYWxpemVyLlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaWxraW1lbi9jb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwI3NldGRhdGFzZXJpYWxpemVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RGF0YVNlcmlhbGl6ZXIoc2VyaWFsaXplcjogJ3VybGVuY29kZWQnIHwgJ2pzb24nIHwgJ3V0ZjgnIHwgJ211bHRpcGFydCcgfCAncmF3Jyk6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIGNvb2tpZS5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBTY29wZSBvZiB0aGUgY29va2llXG4gICAqIEBwYXJhbSBjb29raWUge3N0cmluZ30gUkZDIGNvbXBsaWFudCBjb29raWUgc3RyaW5nXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q29va2llKHVybDogc3RyaW5nLCBjb29raWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGNvb2tpZXMuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2xlYXJDb29raWVzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVtb3ZlIGNvb2tpZXMgZm9yIGdpdmVuIFVSTC5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gY2JcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVDb29raWVzKHVybDogc3RyaW5nLCBjYjogKCkgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzb2x2ZSBjb29raWUgc3RyaW5nIGZvciBnaXZlbiBVUkwuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDb29raWVTdHJpbmcodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZSBpbiBzZWNvbmRzLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSByZXR1cm5zIHRoZSBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UmVxdWVzdFRpbWVvdXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWUgaW4gc2Vjb25kcy5cbiAgICogQHBhcmFtIHRpbWVvdXQge251bWJlcn0gVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy4gRGVmYXVsdCA2MFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJlcXVlc3RUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzb2x2ZSBpZiBpdCBzaG91bGQgZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyB0cnVlIGlmIGl0IGlzIGNvbmZpZ3VyZWQgdG8gZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Rm9sbG93UmVkaXJlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBpZiBpdCBzaG91bGQgZm9sbG93IHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcGFyYW0gZm9sbG93IHtib29sZWFufSBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBmb2xsb3dpbmcgcmVkaXJlY3RzIGF1dG9tYXRpY2FsbHlcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGb2xsb3dSZWRpcmVjdChmb2xsb3c6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldCBzZXJ2ZXIgdHJ1c3QgbW9kZSwgYmVpbmcgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgKiBkZWZhdWx0OiBkZWZhdWx0IFNTTCB0cnVzdHNoaXAgYW5kIGhvc3RuYW1lIHZlcmlmaWNhdGlvbiBoYW5kbGluZyB1c2luZyBzeXN0ZW0ncyBDQSBjZXJ0cztcbiAgICogbGVnYWN5OiB1c2UgbGVnYWN5IGRlZmF1bHQgYmVoYXZpb3IgKDwgMi4wLjMpLCBleGNsdWRpbmcgdXNlciBpbnN0YWxsZWQgQ0EgY2VydHMgKG9ubHkgZm9yIEFuZHJvaWQpO1xuICAgKiBub2NoZWNrOiBkaXNhYmxlIFNTTCBjZXJ0aWZpY2F0ZSBjaGVja2luZyBhbmQgaG9zdG5hbWUgdmVyaWZpY2F0aW9uLCB0cnVzdGluZyBhbGwgY2VydHMgKG1lYW50IHRvIGJlIHVzZWQgb25seSBmb3IgdGVzdGluZyBwdXJwb3Nlcyk7XG4gICAqIHBpbm5lZDogdHJ1c3Qgb25seSBwcm92aWRlZCBjZXJ0aWZpY2F0ZXM7XG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbGtpbWVuL2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAjc2V0c2VydmVydHJ1c3Rtb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHNlcnZlciB0cnVzdCBtb2RlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFNlcnZlclRydXN0TW9kZShtb2RlOiAnZGVmYXVsdCcgfCAnbGVnYWN5JyB8ICdub2NoZWNrJyB8ICdwaW5uZWQnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQT1NUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgUE9TVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAncG9zdCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcG9zdFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIEdFVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgR0VUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdnZXQnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGdldFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBVVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgUFVUIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdwdXQnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHB1dFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBBVENIIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzeW5jIFBBVENIIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIGJvZHkge09iamVjdH0gVGhlIGJvZHkgb2YgdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHBhcmFtIHN1Y2Nlc3Mge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZFxuICAgKiBAcGFyYW0gZmFpbHVyZSB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBmYWlsZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBhIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlcXVlc3RJZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG1ldGhvZE5hbWU6ICdwYXRjaCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcGF0Y2hTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBERUxFVEUgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlKHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzeW5jIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnZGVsZXRlJyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkZWxldGVTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBIRUFEIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhlYWQodXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN5bmMgSEVBRCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBzdWNjZXNzIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRcbiAgICogQHBhcmFtIGZhaWx1cmUge2Z1bmN0aW9ufSBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHJlcXVlc3QgZmFpbGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgYSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSByZXF1ZXN0SWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBtZXRob2ROYW1lOiAnaGVhZCcsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGVhZFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55LFxuICAgIGhlYWRlcnM6IGFueSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBPUFRJT05TIHJlcXVlc3RcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBUaGUgdXJsIHRvIHNlbmQgdGhlIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHBhcmFtZXRlcnMge09iamVjdH0gUGFyYW1ldGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3RcbiAgICogQHBhcmFtIGhlYWRlcnMge09iamVjdH0gVGhlIGhlYWRlcnMgdG8gc2V0IGZvciB0aGlzIHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wdGlvbnModXJsOiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhbiBzeW5jIE9QVElPTlMgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ29wdGlvbnMnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG9wdGlvbnNTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtZXRlcnM6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgc3VjY2VzczogKHJlc3VsdDogSFRUUFJlc3BvbnNlKSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgbG9jYWwgcGF0aChzKSBvZiB0aGUgZmlsZShzKSB0byB1cGxvYWRcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIG5hbWUocykgb2YgdGhlIHBhcmFtZXRlciB0byBwYXNzIHRoZSBmaWxlKHMpIGFsb25nIGFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdXBsb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSwgbmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIGxvY2FsIHBhdGgocykgb2YgdGhlIGZpbGUocykgdG8gdXBsb2FkXG4gICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFRoZSBuYW1lKHMpIG9mIHRoZSBwYXJhbWV0ZXIgdG8gcGFzcyB0aGUgZmlsZShzKSBhbG9uZyBhc1xuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3VwbG9hZEZpbGUnLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHVwbG9hZEZpbGVTeW5jKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzOiBhbnksXG4gICAgZmlsZVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIG5hbWU6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIHN1Y2Nlc3M6IChyZXN1bHQ6IGFueSkgPT4gdm9pZCxcbiAgICBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgRmlsZUVudHJ5IHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIHBhdGggdG8gZG93bmxvYWQgdGhlIGZpbGUgdG8sIGluY2x1ZGluZyB0aGUgZmlsZSBuYW1lLlxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ2Rvd25sb2FkRmlsZScsXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZG93bmxvYWRGaWxlU3luYyhcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgaGVhZGVyczogYW55LFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsXG4gICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB2b2lkLFxuICAgIGZhaWx1cmU6IChlcnJvcjogYW55KSA9PiB2b2lkXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgcmVxdWVzdFxuICAgKiBAcGFyYW0gb3B0aW9ucy5tZXRob2Qge3N0cmluZ30gcmVxdWVzdCBtZXRob2RcbiAgICogQHBhcmFtIG9wdGlvbnMuZGF0YSB7T2JqZWN0fSBwYXlsb2FkIHRvIGJlIHNlbmQgdG8gdGhlIHNlcnZlciAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5wYXJhbXMge09iamVjdH0gcXVlcnkgcGFyYW1zIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBVUkwgKG9ubHkgYXBwbGljYWJsZSBvbiBnZXQsIGhlYWQsIGRlbGV0ZSwgdXBsb2FkIG9yIGRvd25sb2FkIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlcmlhbGl6ZXIge3N0cmluZ30gZGF0YSBzZXJpYWxpemVyIHRvIGJlIHVzZWQgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcyksIGRlZmF1bHRzIHRvIGdsb2JhbCBzZXJpYWxpemVyIHZhbHVlLCBzZWUgc2V0RGF0YVNlcmlhbGl6ZXIgZm9yIHN1cHBvcnRlZCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMudGltZW91dCB7bnVtYmVyfSB0aW1lb3V0IHZhbHVlIGZvciB0aGUgcmVxdWVzdCBpbiBzZWNvbmRzLCBkZWZhdWx0cyB0byBnbG9iYWwgdGltZW91dCB2YWx1ZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5oZWFkZXJzIHtPYmplY3R9IGhlYWRlcnMgb2JqZWN0IChrZXkgdmFsdWUgcGFpciksIHdpbGwgYmUgbWVyZ2VkIHdpdGggZ2xvYmFsIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5maWxlUGF0aCB7c3RyaW5nfSBmaWxlIHBhdGgocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIGFuZCBkb3dubG9hZCBzZWUgdXBsb2FkRmlsZSBhbmQgZG93bmxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5uYW1lIHtzdHJpbmd9IG5hbWUocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIHNlZSB1cGxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5yZXNwb25zZVR5cGUge3N0cmluZ30gcmVzcG9uc2UgdHlwZSwgZGVmYXVsdHMgdG8gdGV4dFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlcXVlc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbWV0aG9kOiAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnIHwgJ3BhdGNoJyB8ICdoZWFkJyB8ICdkZWxldGUnIHwgJ29wdGlvbnMnIHwgJ3VwbG9hZCcgfCAnZG93bmxvYWQnO1xuICAgICAgZGF0YT86IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcbiAgICAgIHBhcmFtcz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICAgIHNlcmlhbGl6ZXI/OiAnanNvbicgfCAndXJsZW5jb2RlZCcgfCAndXRmOCcgfCAnbXVsdGlwYXJ0JyB8ICdyYXcnO1xuICAgICAgdGltZW91dD86IG51bWJlcjtcbiAgICAgIGhlYWRlcnM/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICBmaWxlUGF0aD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgbmFtZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ3RleHQnIHwgJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJztcbiAgICB9XG4gICk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IG9wdGlvbnMgZm9yIGluZGl2aWR1YWwgcmVxdWVzdFxuICAgKiBAcGFyYW0gb3B0aW9ucy5tZXRob2Qge3N0cmluZ30gcmVxdWVzdCBtZXRob2RcbiAgICogQHBhcmFtIG9wdGlvbnMuZGF0YSB7T2JqZWN0fSBwYXlsb2FkIHRvIGJlIHNlbmQgdG8gdGhlIHNlcnZlciAob25seSBhcHBsaWNhYmxlIG9uIHBvc3QsIHB1dCBvciBwYXRjaCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5wYXJhbXMge09iamVjdH0gcXVlcnkgcGFyYW1zIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBVUkwgKG9ubHkgYXBwbGljYWJsZSBvbiBnZXQsIGhlYWQsIGRlbGV0ZSwgdXBsb2FkIG9yIGRvd25sb2FkIG1ldGhvZHMpXG4gICAqIEBwYXJhbSBvcHRpb25zLnNlcmlhbGl6ZXIge3N0cmluZ30gZGF0YSBzZXJpYWxpemVyIHRvIGJlIHVzZWQgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcyksIGRlZmF1bHRzIHRvIGdsb2JhbCBzZXJpYWxpemVyIHZhbHVlLCBzZWUgc2V0RGF0YVNlcmlhbGl6ZXIgZm9yIHN1cHBvcnRlZCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMudGltZW91dCB7bnVtYmVyfSB0aW1lb3V0IHZhbHVlIGZvciB0aGUgcmVxdWVzdCBpbiBzZWNvbmRzLCBkZWZhdWx0cyB0byBnbG9iYWwgdGltZW91dCB2YWx1ZVxuICAgKiBAcGFyYW0gb3B0aW9ucy5oZWFkZXJzIHtPYmplY3R9IGhlYWRlcnMgb2JqZWN0IChrZXkgdmFsdWUgcGFpciksIHdpbGwgYmUgbWVyZ2VkIHdpdGggZ2xvYmFsIHZhbHVlc1xuICAgKiBAcGFyYW0gb3B0aW9ucy5maWxlUGF0aCB7c3RyaW5nfSBmaWxlIHBhdGgocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIGFuZCBkb3dubG9hZCBzZWUgdXBsb2FkRmlsZSBhbmQgZG93bmxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5uYW1lIHtzdHJpbmd9IG5hbWUocykgdG8gYmUgdXNlZCBkdXJpbmcgdXBsb2FkIHNlZSB1cGxvYWRGaWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucy5yZXNwb25zZVR5cGUge3N0cmluZ30gcmVzcG9uc2UgdHlwZSwgZGVmYXVsdHMgdG8gdGV4dFxuICAgKiBAcGFyYW0gc3VjY2VzcyB7ZnVuY3Rpb259IEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkXG4gICAqIEBwYXJhbSBmYWlsdXJlIHtmdW5jdGlvbn0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSByZXF1ZXN0IGZhaWxlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGEgc3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVxdWVzdElkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgbWV0aG9kTmFtZTogJ3NlbmRSZXF1ZXN0JyxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZW5kUmVxdWVzdFN5bmMoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgbWV0aG9kOiAnZ2V0JyB8ICdwb3N0JyB8ICdwdXQnIHwgJ3BhdGNoJyB8ICdoZWFkJyB8ICdkZWxldGUnIHwgJ29wdGlvbnMnIHwgJ3VwbG9hZCcgfCAnZG93bmxvYWQnO1xuICAgICAgZGF0YT86IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfTtcbiAgICAgIHBhcmFtcz86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICAgIHNlcmlhbGl6ZXI/OiAnanNvbicgfCAndXJsZW5jb2RlZCcgfCAndXRmOCcgfCAnbXVsdGlwYXJ0JztcbiAgICAgIHRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICBoZWFkZXJzPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgZmlsZVBhdGg/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIG5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICd0ZXh0JyB8ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbic7XG4gICAgfSxcbiAgICBzdWNjZXNzOiAocmVzdWx0OiBIVFRQUmVzcG9uc2UpID0+IHZvaWQsXG4gICAgZmFpbHVyZTogKGVycm9yOiBhbnkpID0+IHZvaWRcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHJlcXVlc3RJZCB7c3RyaW5nfSBUaGUgUmVxdWVzdElkIG9mIHRoZSByZXF1ZXN0IHRvIGFib3J0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFib3J0KHJlcXVlc3RJZDogc3RyaW5nKTogUHJvbWlzZTxBYm9ydGVkUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "Z2+D":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "b6c8":
/*!****************************************************************!*\
  !*** ./src/app/pages/customer/conferinta/conferinta.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".webPage {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background-color: transparent;\n  padding: 1rem;\n}\n\n.resp-container {\n  position: relative;\n  overflow: hidden;\n  padding-top: 177%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXIvY29uZmVyaW50YS9jb25mZXJpbnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFGSjs7QUFJQztFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3VzdG9tZXIvY29uZmVyaW50YS9jb25mZXJpbnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWJQYWdle1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDIwMCU7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiB9XHJcbiAucmVzcC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxNzclO1xyXG59Il19 */");

/***/ }),

/***/ "cKCH":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer/conferinta/conferinta.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"header-background\">\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title slot=\"start\" style=\"display:inline-block;position: relative;top: 5px;left: 5px;\">\r\n      <ion-label >Conferinta Online</ion-label>\r\n   </ion-title>\r\n   <ion-thumbnail slot=\"end\" style=\"display:inline-block;margin-right:5%\">\r\n    <img src=\"assets/images/logo.png\" style=\"transform:scale(0.7);\">\r\n  </ion-thumbnail>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"url_conferinta\" >\r\n              <ion-card-content class=\"resp-container\">\r\n                  <iframe id=\"iframe\" #iframe class=\"webPage\" allow=\"microphone *; camera; fullscreen; display-capture\"  [src]=\"url_conferinta  | safe\" ></iframe>\r\n                  <!-- <div id=\"jitsi-iframe\"></div> -->\r\n              </ion-card-content>\r\n            </ion-card>\r\n             <ion-card *ngIf=\"url_conferinta\" >\r\n              <ion-card-content>\r\n                <ngx-dropzone [multiple]=\"false\" [maxFileSize]=\"10000000\" (change)=\"onSelect($event)\">\r\n                  <ngx-dropzone-label>Faceti click sau trageti fisierul in interiorul acestei casete pentru a putea incarca documentele.</ngx-dropzone-label>\r\n                  <ngx-dropzone-preview *ngFor=\"let f of files\" [removable]=\"true\" (removed)=\"onRemove(f)\">\r\n                    <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\r\n                  </ngx-dropzone-preview>\r\n                </ngx-dropzone>\r\n                 <!-- <form  [formGroup]=\"dropzone\" (ngSubmit)=\"onSubmitDropzone()\">\r\n                      <div class=\"dz-message\" data-dz-message><span>Faceti click sau trageti fisierul in interiorul acestei casete pentru a putea incarca documentele</span></div>\r\n                  </form> -->\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <ion-card *ngIf=\"url_conferinta\" >\r\n                <ion-card-header>\r\n                  <ion-card-title>Fisiere incarcate de doctor</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                \r\n                  <ul class=\"list-group\" id=\"file_listing\" *ngFor=\"let fisier of fisiere;\">\r\n                      <li class=\"list-group-item\"><a (click)=\"downloadFile(fisier.nume_fisier)\" >{{fisier.nume_fisier}}</a></li> \r\n                  </ul>\r\n                  <!-- <button class=\"btn btn-primary mt-2 mb-3 w-100\" id=\"refresh_files\"><i class=\"fas fa-sync-alt mr-2\"></i>Reimprospateaza fisiere</button>                                                                        -->\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <ion-card *ngIf=\"!url_conferinta\">\r\n                <ion-card-header>\r\n                  <ion-card-title>Momentan nu ai nicio camera de consultatie deschisa</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                          <p class=\"card-text\">Daca astepti sa intri in conferinta, camera se va deschide imediat ce doctorul va porni consultatia, indiferent daca consultatia va avea loc pentru unul din conturile asociate.\r\n                          </p>\r\n                          <!-- <a href=\"{{route('consultatie.online')}}\" class=\"btn btn-primary waves-effect waves-light\">Reincearca conectarea la consultatia online</a> -->\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "eGy0":
/*!************************************************************************!*\
  !*** ./src/app/pages/customer/conferinta/conferinta-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ConferintaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferintaPageRoutingModule", function() { return ConferintaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _conferinta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conferinta.page */ "ucb+");




const routes = [
    {
        path: '',
        component: _conferinta_page__WEBPACK_IMPORTED_MODULE_3__["ConferintaPage"]
    }
];
let ConferintaPageRoutingModule = class ConferintaPageRoutingModule {
};
ConferintaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConferintaPageRoutingModule);



/***/ }),

/***/ "kvL/":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js ***!
  \*************************************************************************/
/*! exports provided: NgxDropzoneModule, NgxDropzoneComponent, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneVideoPreviewComponent, NgxDropzoneRemoveBadgeComponent, ??b, ??a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneModule", function() { return NgxDropzoneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneComponent", function() { return NgxDropzoneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzonePreviewComponent", function() { return NgxDropzonePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneImagePreviewComponent", function() { return NgxDropzoneImagePreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneVideoPreviewComponent", function() { return NgxDropzoneVideoPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDropzoneRemoveBadgeComponent", function() { return NgxDropzoneRemoveBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??b", function() { return NgxDropzoneLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??a", function() { return NgxDropzoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-dropzone-remove-badge", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = [[["ngx-dropzone-label"]]];
const _c1 = ["ngx-dropzone-label"];
const _c2 = ["fileInput"];
function NgxDropzoneComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](0, 2, ["*ngIf", "!_hasPreviews"]);
} }
const _c3 = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]];
const _c4 = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];
function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-dropzone-remove-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function NgxDropzoneVideoPreviewComponent_video_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "video", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDropzoneVideoPreviewComponent_video_0_Template_video_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.sanitizedVideoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-dropzone-remove-badge", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4._remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class NgxDropzoneLabelDirective {
}
NgxDropzoneLabelDirective.??fac = function NgxDropzoneLabelDirective_Factory(t) { return new (t || NgxDropzoneLabelDirective)(); };
NgxDropzoneLabelDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: NgxDropzoneLabelDirective, selectors: [["ngx-dropzone-label"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxDropzoneLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ngx-dropzone-label'
            }]
    }], null, null); })();

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
    return value != null && `${value}` !== 'false';
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
    return (!isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value))) ? Number(value) : null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const KEY_CODE = {
    BACKSPACE: 8,
    DELETE: 46,
};
KEY_CODE[KEY_CODE.BACKSPACE] = 'BACKSPACE';
KEY_CODE[KEY_CODE.DELETE] = 'DELETE';
class NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
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
    get removable() {
        return this._removable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set removable(value) {
        this._removable = coerceBooleanProperty(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyEvent(event) {
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
    get hostStyle() {
        /** @type {?} */
        const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * Remove method to be used from the template.
     * @param {?} event
     * @return {?}
     */
    _remove(event) {
        event.stopPropagation();
        this.remove();
    }
    /**
     * Remove the preview item (use from component code).
     * @return {?}
     */
    remove() {
        if (this._removable) {
            this.removed.next(this.file);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    readFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    resolve(((/** @type {?} */ (e.target))).result);
                });
                reader.onerror = (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    console.error(`FileReader failed on file ${this.file.name}.`);
                    reject(e);
                });
                if (!this.file) {
                    return reject('No file to read. Please provide a file using the [file] Input property.');
                }
                reader.readAsDataURL(this.file);
            }));
        });
    }
}
NgxDropzonePreviewComponent.??fac = function NgxDropzonePreviewComponent_Factory(t) { return new (t || NgxDropzonePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
NgxDropzonePreviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgxDropzonePreviewComponent, selectors: [["ngx-dropzone-preview"]], hostVars: 3, hostBindings: function NgxDropzonePreviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function NgxDropzonePreviewComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????hostProperty"]("tabindex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](ctx.hostStyle);
    } }, inputs: { removable: "removable", file: "file" }, outputs: { removed: "removed" }, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"]], template: function NgxDropzonePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template, 1, 0, "ngx-dropzone-remove-badge", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.removable);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent]; }, styles: ["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"] });
/** @nocollapse */
NgxDropzonePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
NgxDropzonePreviewComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    keyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    hostStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['tabindex',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxDropzonePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-preview',
                template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host():focus,:host():hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}`]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['tabindex']
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }], hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style']
        }], file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

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
class NgxDropzoneService {
    /**
     * @param {?} files
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} multiple
     * @return {?}
     */
    parseFileList(files, accept, maxFileSize, multiple) {
        /** @type {?} */
        const addedFiles = [];
        /** @type {?} */
        const rejectedFiles = [];
        for (let i = 0; i < files.length; i++) {
            /** @type {?} */
            const file = files.item(i);
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
        const result = {
            addedFiles,
            rejectedFiles
        };
        return result;
    }
    /**
     * @private
     * @param {?} file
     * @param {?} accept
     * @return {?}
     */
    isAccepted(file, accept) {
        if (accept === '*') {
            return true;
        }
        /** @type {?} */
        const acceptFiletypes = accept.split(',').map((/**
         * @param {?} it
         * @return {?}
         */
        it => it.toLowerCase().trim()));
        /** @type {?} */
        const filetype = file.type.toLowerCase();
        /** @type {?} */
        const filename = file.name.toLowerCase();
        /** @type {?} */
        const matchedFileType = acceptFiletypes.find((/**
         * @param {?} acceptFiletype
         * @return {?}
         */
        acceptFiletype => {
            // check for wildcard mimetype (e.g. image/*)
            if (acceptFiletype.endsWith('/*')) {
                return filetype.split('/')[0] === acceptFiletype.split('/')[0];
            }
            // check for file extension (e.g. .csv)
            if (acceptFiletype.startsWith(".")) {
                return filename.endsWith(acceptFiletype);
            }
            // check for exact mimetype match (e.g. image/jpeg)
            return acceptFiletype == filetype;
        }));
        return !!matchedFileType;
    }
    /**
     * @private
     * @param {?} rejectedFiles
     * @param {?} file
     * @param {?} reason
     * @return {?}
     */
    rejectFile(rejectedFiles, file, reason) {
        /** @type {?} */
        const rejectedFile = (/** @type {?} */ (file));
        rejectedFile.reason = reason;
        rejectedFiles.push(rejectedFile);
    }
}
NgxDropzoneService.??fac = function NgxDropzoneService_Factory(t) { return new (t || NgxDropzoneService)(); };
NgxDropzoneService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: NgxDropzoneService, factory: NgxDropzoneService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxDropzoneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
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
    get _hasPreviews() {
        return !!this._previewChildren.length;
    }
    /**
     * Disable any user interaction with the component.
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this._isHovered) {
            this._isHovered = false;
        }
    }
    /**
     * Allow the selection of multiple files.
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = coerceBooleanProperty(value);
    }
    /**
     * Set the maximum size a single file may have.
     * @return {?}
     */
    get maxFileSize() {
        return this._maxFileSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxFileSize(value) {
        this._maxFileSize = coerceNumberProperty(value);
    }
    /**
     * Allow the dropzone container to expand vertically.
     * @return {?}
     */
    get expandable() {
        return this._expandable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandable(value) {
        this._expandable = coerceBooleanProperty(value);
    }
    /**
     * Open the file selector on click.
     * @return {?}
     */
    get disableClick() {
        return this._disableClick;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableClick(value) {
        this._disableClick = coerceBooleanProperty(value);
    }
    /**
     * Show the native OS file explorer to select files.
     * @return {?}
     */
    _onClick() {
        if (!this.disableClick) {
            this.showFileSelector();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOver(event) {
        if (this.disabled) {
            return;
        }
        this.preventDefault(event);
        this._isHovered = true;
    }
    /**
     * @return {?}
     */
    _onDragLeave() {
        this._isHovered = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDrop(event) {
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
    showFileSelector() {
        if (!this.disabled) {
            ((/** @type {?} */ (this._fileInput.nativeElement))).click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onFilesSelected(event) {
        /** @type {?} */
        const files = event.target.files;
        this.handleFileDrop(files);
        // Reset the native file input element to allow selecting the same file again
        this._fileInput.nativeElement.value = '';
        // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
        this.preventDefault(event);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    handleFileDrop(files) {
        /** @type {?} */
        const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
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
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
NgxDropzoneComponent.??fac = function NgxDropzoneComponent_Factory(t) { return new (t || NgxDropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NgxDropzoneService, 2)); };
NgxDropzoneComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgxDropzoneComponent, selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]], contentQueries: function NgxDropzoneComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????contentQuery"](dirIndex, NgxDropzonePreviewComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx._previewChildren = _t);
    } }, viewQuery: function NgxDropzoneComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx._fileInput = _t.first);
    } }, hostVars: 8, hostBindings: function NgxDropzoneComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgxDropzoneComponent_click_HostBindingHandler() { return ctx._onClick(); })("dragover", function NgxDropzoneComponent_dragover_HostBindingHandler($event) { return ctx._onDragOver($event); })("dragleave", function NgxDropzoneComponent_dragleave_HostBindingHandler() { return ctx._onDragLeave(); })("drop", function NgxDropzoneComponent_drop_HostBindingHandler($event) { return ctx._onDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("ngx-dz-hovered", ctx._isHovered)("ngx-dz-disabled", ctx.disabled)("expandable", ctx.expandable)("unclickable", ctx.disableClick);
    } }, inputs: { accept: "accept", disabled: "disabled", multiple: "multiple", maxFileSize: "maxFileSize", expandable: "expandable", disableClick: "disableClick", id: "id", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedBy: ["aria-describedby", "ariaDescribedBy"] }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([NgxDropzoneService])], ngContentSelectors: _c4, decls: 5, vars: 8, consts: [["type", "file", 3, "id", "multiple", "accept", "disabled", "change"], ["fileInput", ""], [4, "ngIf"]], template: function NgxDropzoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function NgxDropzoneComponent_Template_input_change_0_listener($event) { return ctx._onFilesSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxDropzoneComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](4, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", ctx.id)("multiple", ctx.multiple)("accept", ctx.accept)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx._hasPreviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}"] });
/** @nocollapse */
NgxDropzoneComponent.ctorParameters = () => [
    { type: NgxDropzoneService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
NgxDropzoneComponent.propDecorators = {
    _previewChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgxDropzonePreviewComponent, { descendants: true },] }],
    _fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileInput',] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-disabled',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxFileSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expandable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.expandable',] }],
    disableClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.unclickable',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-describedby',] }],
    _isHovered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-dz-hovered',] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    _onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    _onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave',] }],
    _onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxDropzoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone, [ngx-dropzone]',
                template: `<input #fileInput type="file" [id]="id" [multiple]="multiple" [accept]="accept" [disabled]="disabled"
  (change)="_onFilesSelected($event)" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledby"
  [attr.aria-describedby]="ariaDescribedBy">
<ng-content select="ngx-dropzone-label" *ngIf="!_hasPreviews"></ng-content>
<ng-content select="ngx-dropzone-preview"></ng-content>
<ng-content></ng-content>
`,
                styles: [`:host(){display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host().ngx-dz-hovered{border-style:solid}:host().ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host().expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host().unclickable{cursor:default}:host() ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host() input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host() input:focus+::ng-deep ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}`],
                providers: [NgxDropzoneService]
            }]
    }], function () { return [{ type: NgxDropzoneService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _isHovered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-hovered']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.ngx-dz-disabled']
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxFileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expandable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.expandable']
        }], disableClick: [{
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
        }], _previewChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NgxDropzonePreviewComponent, { descendants: true }]
        }], _fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
        }], ariaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super(sanitizer);
        /**
         * The image data source.
         */
        this.defualtImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
        this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defualtImgLoading);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.readFile()
            .then((/**
         * @param {?} img
         * @return {?}
         */
        img => setTimeout((/**
         * @return {?}
         */
        () => this.imageSrc = img))))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        err => console.error(err)));
    }
}
NgxDropzoneImagePreviewComponent.??fac = function NgxDropzoneImagePreviewComponent_Factory(t) { return new (t || NgxDropzoneImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
NgxDropzoneImagePreviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgxDropzoneImagePreviewComponent, selectors: [["ngx-dropzone-image-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            {
                provide: NgxDropzonePreviewComponent,
                useExisting: NgxDropzoneImagePreviewComponent
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]], template: function NgxDropzoneImagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.removable);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent]; }, styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   img[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"] });
/** @nocollapse */
NgxDropzoneImagePreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxDropzoneImagePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-image-preview',
                template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus img,:host():hover img{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() img{max-height:100%;border-radius:5px;opacity:.8}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}`],
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneImagePreviewComponent
                    }
                ]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneRemoveBadgeComponent {
}
NgxDropzoneRemoveBadgeComponent.??fac = function NgxDropzoneRemoveBadgeComponent_Factory(t) { return new (t || NgxDropzoneRemoveBadgeComponent)(); };
NgxDropzoneRemoveBadgeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgxDropzoneRemoveBadgeComponent, selectors: [["ngx-dropzone-remove-badge"]], decls: 3, vars: 0, consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]], template: function NgxDropzoneRemoveBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "line", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxDropzoneRemoveBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-remove-badge',
                template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
                styles: [`:host(){display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}:host():hover{background:#aeaeae}:host()>svg{height:10px;width:10px}:host()>svg>line{stroke-width:2px;stroke:#fff}`]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        super(sanitizer);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    ngOnDestroy() {
        URL.revokeObjectURL(this.videoSrc);
    }
}
NgxDropzoneVideoPreviewComponent.??fac = function NgxDropzoneVideoPreviewComponent_Factory(t) { return new (t || NgxDropzoneVideoPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
NgxDropzoneVideoPreviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NgxDropzoneVideoPreviewComponent, selectors: [["ngx-dropzone-video-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([
            {
                provide: NgxDropzonePreviewComponent,
                useExisting: NgxDropzoneVideoPreviewComponent
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]], template: function NgxDropzoneVideoPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NgxDropzoneVideoPreviewComponent_video_0_Template, 2, 1, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.sanitizedVideoSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.removable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NgxDropzoneRemoveBadgeComponent], styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   video[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{max-height:100%;border-radius:5px}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"] });
/** @nocollapse */
NgxDropzoneVideoPreviewComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxDropzoneVideoPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropzone-video-preview',
                template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
                styles: [`:host(){min-width:unset!important;max-width:unset!important;padding:0!important}:host():focus video,:host():hover video{opacity:.7}:host():focus ngx-dropzone-remove-badge,:host():hover ngx-dropzone-remove-badge{opacity:1}:host() ngx-dropzone-remove-badge{opacity:0}:host() video{max-height:100%;border-radius:5px}:host() ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}`],
                providers: [
                    {
                        provide: NgxDropzonePreviewComponent,
                        useExisting: NgxDropzoneVideoPreviewComponent
                    }
                ]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDropzoneModule {
}
NgxDropzoneModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: NgxDropzoneModule });
NgxDropzoneModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function NgxDropzoneModule_Factory(t) { return new (t || NgxDropzoneModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NgxDropzoneModule, { declarations: function () { return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxDropzoneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                declarations: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ],
                exports: [
                    NgxDropzoneComponent,
                    NgxDropzoneLabelDirective,
                    NgxDropzonePreviewComponent,
                    NgxDropzoneImagePreviewComponent,
                    NgxDropzoneRemoveBadgeComponent,
                    NgxDropzoneVideoPreviewComponent,
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmpzIiwic291cmNlcyI6WyJuZzovbmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtbGFiZWwuZGlyZWN0aXZlLnRzIiwibmc6L25neC1kcm9wem9uZS9saWIvaGVscGVycy50cyIsIm5nOi9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS1wcmV2aWV3L25neC1kcm9wem9uZS1wcmV2aWV3LmNvbXBvbmVudC50cyIsIm5nOi9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS5zZXJ2aWNlLnRzIiwibmc6L25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lL25neC1kcm9wem9uZS5jb21wb25lbnQudHMiLCJuZzovbmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy5jb21wb25lbnQudHMiLCJuZzovbmd4LWRyb3B6b25lL2xpYi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlL25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UuY29tcG9uZW50LnRzIiwibmc6L25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6L25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BS2EseUJBQXlCO0FBQUc7cURBSHhDLFNBQVMsU0FBQyxrQkFDVixRQUFRLEVBQUUsb0JBQW9CO0VBQzlCOzs7Ozs7MEJBQ0s7QUFBQztBQUFDO0FBQUk7QUFDVDtBQUFxSDtBQUFJO0FBQUk7QUFBaUU7QUFB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QSxBQUFBLEFBQUEsQUFBQSxBQW5EQSxBQU1BLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFPQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFZQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU1BLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQWxHQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUlBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFmQSxBQUFBLEFBdUJBLEFBQUEsQUFHQSxBQUFBLEFBVUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFhQSxBQUFBLEFBQUEsQUFBQSxBQW9CQSxBQUFBLEFBQUEsQUFBQSxBQ3pFQSxBQTBCQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUF4RUEsQUFBQSxBQ3pCQSxBQXVCQSxBQUFBLEFBRUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQWVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFVQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBVUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFXQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBU0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQW5GQSxBQU1BLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFZQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUlBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFjQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBcktBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBTUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQXJCQSxBQUFBLEFBeUJBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFjQSxBQUFBLEFBVUEsQUFBQSxBQVVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQVVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQVVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBT0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVVBLEFBQUEsQUFBQSxBQUFBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ3ZJQSxBQW9CQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSkEsQUFNQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFoQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFLQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQWpCQSxBQUFBLEFDRkEsQUFZQSxBQUFBLEFBVkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFLQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFDWEEsQUFzQkEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU9BLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBL0NBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBT0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFuQkEsQUFBQSxBQ0ZBLEFBOEJBLEFBQUEsQUFyQkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1sYWJlbCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSB7IH1cbiIsIlxuLyoqXG4gKiBDb2VyY2VzIGEgZGF0YS1ib3VuZCB2YWx1ZSAodHlwaWNhbGx5IGEgc3RyaW5nKSB0byBhIGJvb2xlYW4uXG4gKiBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvYmxvYi9tYXN0ZXIvc3JjL2Nkay9jb2VyY2lvbi9ib29sZWFuLXByb3BlcnR5LnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWU6IGFueSk6IGJvb2xlYW5cbntcblx0cmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBjb25zaWRlcmVkIGEgbnVtYmVyLlxuICogVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3NyYy9jZGsvY29lcmNpb24vbnVtYmVyLXByb3BlcnR5LnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZTogYW55KTogbnVtYmVyXG57XG5cdC8vIHBhcnNlRmxvYXQodmFsdWUpIGhhbmRsZXMgbW9zdCBvZiB0aGUgY2FzZXMgd2UncmUgaW50ZXJlc3RlZCBpbiAoaXQgdHJlYXRzIG51bGwsIGVtcHR5IHN0cmluZyxcblx0Ly8gYW5kIG90aGVyIG5vbi1udW1iZXIgdmFsdWVzIGFzIE5hTiwgd2hlcmUgTnVtYmVyIGp1c3QgdXNlcyAwKSBidXQgaXQgY29uc2lkZXJzIHRoZSBzdHJpbmdcblx0Ly8gJzEyM2hlbGxvJyB0byBiZSBhIHZhbGlkIG51bWJlci4gVGhlcmVmb3JlIHdlIGFsc28gY2hlY2sgaWYgTnVtYmVyKHZhbHVlKSBpcyBOYU4uXG5cdHJldHVybiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgYW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpKSA/IE51bWJlcih2YWx1ZSkgOiBudWxsO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgU2FmZVN0eWxlLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZW51bSBLRVlfQ09ERSB7XG5cdEJBQ0tTUEFDRSA9IDgsXG5cdERFTEVURSA9IDQ2XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1kcm9wem9uZS1wcmV2aWV3Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZHJvcHpvbmUtbGFiZWxcIj48L25nLWNvbnRlbnQ+XG5cdFx0PG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2UgKm5nSWY9XCJyZW1vdmFibGVcIiAoY2xpY2spPVwiX3JlbW92ZSgkZXZlbnQpXCI+XG5cdFx0PC9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlPlxuXHRgLFxuXHRzdHlsZXM6IFtgOmhvc3QoKXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byB0b3AsI2VkZWRlZCwjZWZlZmVmLCNmMWYxZjEsI2Y0ZjRmNCwjZjZmNmY2KX06aG9zdCgpOmZvY3VzLDpob3N0KCk6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCNlM2UzZTMsI2ViZWFlYSwjZThlN2U3LCNlYmVhZWEsI2Y0ZjRmNCk7b3V0bGluZTowfTpob3N0KCk6Zm9jdXMgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSw6aG9zdCgpOmhvdmVyIG5neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2V7b3BhY2l0eToxfTpob3N0KCkgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjB9Omhvc3QoKSA6Om5nLWRlZXAgbmd4LWRyb3B6b25lLWxhYmVse292ZXJmbG93LXdyYXA6YnJlYWstd29yZH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuXHQpIHsgfVxuXG5cdC8qKiBUaGUgZmlsZSB0byBwcmV2aWV3LiAqL1xuXHRASW5wdXQoKSBmaWxlOiBGaWxlO1xuXG5cdC8qKiBBbGxvdyB0aGUgdXNlciB0byByZW1vdmUgZmlsZXMuICovXG5cdEBJbnB1dCgpXG5cdGdldCByZW1vdmFibGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX3JlbW92YWJsZTtcblx0fVxuXHRzZXQgcmVtb3ZhYmxlKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fcmVtb3ZhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblx0fVxuXHRwcm90ZWN0ZWQgX3JlbW92YWJsZSA9IGZhbHNlO1xuXG5cdC8qKiBFbWl0dGVkIHdoZW4gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHJlbW92ZWQuICovXG5cdEBPdXRwdXQoKSByZWFkb25seSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlPigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcblx0a2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdGNhc2UgS0VZX0NPREUuQkFDS1NQQUNFOlxuXHRcdFx0Y2FzZSBLRVlfQ09ERS5ERUxFVEU6XG5cdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0LyoqIFdlIHVzZSB0aGUgSG9zdEJpbmRpbmcgdG8gcGFzcyB0aGVzZSBjb21tb24gc3R5bGVzIHRvIGNoaWxkIGNvbXBvbmVudHMuICovXG5cdEBIb3N0QmluZGluZygnc3R5bGUnKVxuXHRnZXQgaG9zdFN0eWxlKCk6IFNhZmVTdHlsZSB7XG5cdFx0Y29uc3Qgc3R5bGVzID0gYFxuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGhlaWdodDogMTQwcHg7XG5cdFx0XHRtaW4taGVpZ2h0OiAxNDBweDtcblx0XHRcdG1pbi13aWR0aDogMTgwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IDE4MHB4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0bWFyZ2luOiAxMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGA7XG5cblx0XHRyZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlcyk7XG5cdH1cblxuXHQvKiogTWFrZSB0aGUgcHJldmlldyBpdGVtIGZvY3VzYWJsZSB1c2luZyB0aGUgdGFiIGtleS4gKi9cblx0QEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYkluZGV4ID0gMDtcblxuXHQvKiogUmVtb3ZlIG1ldGhvZCB0byBiZSB1c2VkIGZyb20gdGhlIHRlbXBsYXRlLiAqL1xuXHRfcmVtb3ZlKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5yZW1vdmUoKTtcblx0fVxuXG5cdC8qKiBSZW1vdmUgdGhlIHByZXZpZXcgaXRlbSAodXNlIGZyb20gY29tcG9uZW50IGNvZGUpLiAqL1xuXHRyZW1vdmUoKSB7XG5cdFx0aWYgKHRoaXMuX3JlbW92YWJsZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVkLm5leHQodGhpcy5maWxlKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgYXN5bmMgcmVhZEZpbGUoKTogUHJvbWlzZTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBBcnJheUJ1ZmZlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuXHRcdFx0cmVhZGVyLm9ubG9hZCA9IGUgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKChlLnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQpO1xuXHRcdFx0fTtcblxuXHRcdFx0cmVhZGVyLm9uZXJyb3IgPSBlID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgRmlsZVJlYWRlciBmYWlsZWQgb24gZmlsZSAke3RoaXMuZmlsZS5uYW1lfS5gKTtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCF0aGlzLmZpbGUpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdCgnTm8gZmlsZSB0byByZWFkLiBQbGVhc2UgcHJvdmlkZSBhIGZpbGUgdXNpbmcgdGhlIFtmaWxlXSBJbnB1dCBwcm9wZXJ0eS4nKTtcblx0XHRcdH1cblxuXHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlKTtcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTZWxlY3RSZXN1bHQge1xuXG5cdC8qKiBUaGUgYWRkZWQgZmlsZXMsIGVtaXR0ZWQgaW4gdGhlIGZpbGVzQWRkZWQgZXZlbnQuICovXG5cdGFkZGVkRmlsZXM6IEZpbGVbXTtcblxuXHQvKiogVGhlIHJlamVjdGVkIGZpbGVzLCBlbWl0dGVkIGluIHRoZSBmaWxlc1JlamVjdGVkIGV2ZW50LiAqL1xuXHRyZWplY3RlZEZpbGVzOiBSZWplY3RlZEZpbGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWplY3RlZEZpbGUgZXh0ZW5kcyBGaWxlIHtcblxuXHQvKiogVGhlIHJlYXNvbiB0aGUgZmlsZSB3YXMgcmVqZWN0ZWQuICovXG5cdHJlYXNvbj86IFJlamVjdFJlYXNvbjtcbn1cblxuZXhwb3J0IHR5cGUgUmVqZWN0UmVhc29uID0gJ3R5cGUnIHwgJ3NpemUnIHwgJ25vX211bHRpcGxlJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgY29udGFpbnMgdGhlIGZpbHRlcmluZyBsb2dpYyB0byBiZSBhcHBsaWVkIHRvXG4gKiBhbnkgZHJvcHBlZCBvciBzZWxlY3RlZCBmaWxlLiBJZiBhIGZpbGUgbWF0Y2hlcyBhbGwgY3JpdGVyaWFcbiAqIGxpa2UgbWF4aW11bSBzaXplIG9yIGFjY2VwdCB0eXBlLCBpdCB3aWxsIGJlIGVtaXR0ZWQgaW4gdGhlXG4gKiBhZGRlZEZpbGVzIGFycmF5LCBvdGhlcndpc2UgaW4gdGhlIHJlamVjdGVkRmlsZXMgYXJyYXkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVNlcnZpY2Uge1xuXG5cdHBhcnNlRmlsZUxpc3QoZmlsZXM6IEZpbGVMaXN0LCBhY2NlcHQ6IHN0cmluZywgbWF4RmlsZVNpemU6IG51bWJlciwgbXVsdGlwbGU6IGJvb2xlYW4pOiBGaWxlU2VsZWN0UmVzdWx0IHtcblxuXHRcdGNvbnN0IGFkZGVkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXHRcdGNvbnN0IHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBmaWxlID0gZmlsZXMuaXRlbShpKTtcblxuXHRcdFx0aWYgKCF0aGlzLmlzQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ3R5cGUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtYXhGaWxlU2l6ZSAmJiBmaWxlLnNpemUgPiBtYXhGaWxlU2l6ZSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ3NpemUnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghbXVsdGlwbGUgJiYgYWRkZWRGaWxlcy5sZW5ndGggPj0gMSkge1xuXHRcdFx0XHR0aGlzLnJlamVjdEZpbGUocmVqZWN0ZWRGaWxlcywgZmlsZSwgJ25vX211bHRpcGxlJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGRlZEZpbGVzLnB1c2goZmlsZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0OiBGaWxlU2VsZWN0UmVzdWx0ID0ge1xuXHRcdFx0YWRkZWRGaWxlcyxcblx0XHRcdHJlamVjdGVkRmlsZXNcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHByaXZhdGUgaXNBY2NlcHRlZChmaWxlOiBGaWxlLCBhY2NlcHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKGFjY2VwdCA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBhY2NlcHRGaWxldHlwZXMgPSBhY2NlcHQuc3BsaXQoJywnKS5tYXAoaXQgPT4gaXQudG9Mb3dlckNhc2UoKS50cmltKCkpO1xuXHRcdGNvbnN0IGZpbGV0eXBlID0gZmlsZS50eXBlLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgZmlsZW5hbWUgPSBmaWxlLm5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGNvbnN0IG1hdGNoZWRGaWxlVHlwZSA9IGFjY2VwdEZpbGV0eXBlcy5maW5kKGFjY2VwdEZpbGV0eXBlID0+IHtcblxuXHRcdFx0Ly8gY2hlY2sgZm9yIHdpbGRjYXJkIG1pbWV0eXBlIChlLmcuIGltYWdlLyopXG5cdFx0XHRpZiAoYWNjZXB0RmlsZXR5cGUuZW5kc1dpdGgoJy8qJykpIHtcblx0XHRcdFx0cmV0dXJuIGZpbGV0eXBlLnNwbGl0KCcvJylbMF0gPT09IGFjY2VwdEZpbGV0eXBlLnNwbGl0KCcvJylbMF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGZvciBmaWxlIGV4dGVuc2lvbiAoZS5nLiAuY3N2KVxuXHRcdFx0aWYgKGFjY2VwdEZpbGV0eXBlLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG5cdFx0XHRcdHJldHVybiBmaWxlbmFtZS5lbmRzV2l0aChhY2NlcHRGaWxldHlwZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNoZWNrIGZvciBleGFjdCBtaW1ldHlwZSBtYXRjaCAoZS5nLiBpbWFnZS9qcGVnKVxuXHRcdFx0cmV0dXJuIGFjY2VwdEZpbGV0eXBlID09IGZpbGV0eXBlO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICEhbWF0Y2hlZEZpbGVUeXBlO1xuXHR9XG5cblx0cHJpdmF0ZSByZWplY3RGaWxlKHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdLCBmaWxlOiBGaWxlLCByZWFzb246IFJlamVjdFJlYXNvbikge1xuXG5cdFx0Y29uc3QgcmVqZWN0ZWRGaWxlID0gZmlsZSBhcyBSZWplY3RlZEZpbGU7XG5cdFx0cmVqZWN0ZWRGaWxlLnJlYXNvbiA9IHJlYXNvbjtcblxuXHRcdHJlamVjdGVkRmlsZXMucHVzaChyZWplY3RlZEZpbGUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0LCBWaWV3Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBTZWxmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVNlcnZpY2UsIEZpbGVTZWxlY3RSZXN1bHQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5neERyb3B6b25lQ2hhbmdlRXZlbnQge1xuICBzb3VyY2U6IE5neERyb3B6b25lQ29tcG9uZW50O1xuICBhZGRlZEZpbGVzOiBGaWxlW107XG4gIHJlamVjdGVkRmlsZXM6IEZpbGVbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lLCBbbmd4LWRyb3B6b25lXScsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICNmaWxlSW5wdXQgdHlwZT1cImZpbGVcIiBbaWRdPVwiaWRcIiBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIiBbYWNjZXB0XT1cImFjY2VwdFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIChjaGFuZ2UpPVwiX29uRmlsZXNTZWxlY3RlZCgkZXZlbnQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxuICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImFyaWFEZXNjcmliZWRCeVwiPlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCIgKm5nSWY9XCIhX2hhc1ByZXZpZXdzXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLXByZXZpZXdcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoxODBweDtiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6IzcxNzM4Njtib3JkZXI6MnB4IGRhc2hlZCAjNzE3Mzg2O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxNnB4O292ZXJmbG93LXg6YXV0b306aG9zdCgpLm5neC1kei1ob3ZlcmVke2JvcmRlci1zdHlsZTpzb2xpZH06aG9zdCgpLm5neC1kei1kaXNhYmxlZHtvcGFjaXR5Oi41O2N1cnNvcjpuby1kcm9wO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoKS5leHBhbmRhYmxle292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6dW5zZXQ7bWluLWhlaWdodDoxODBweDtmbGV4LXdyYXA6d3JhcH06aG9zdCgpLnVuY2xpY2thYmxle2N1cnNvcjpkZWZhdWx0fTpob3N0KCkgOjpuZy1kZWVwIG5neC1kcm9wem9uZS1sYWJlbHt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjEwO21hcmdpbjoxMHB4IGF1dG99Omhvc3QoKSBpbnB1dHt3aWR0aDouMXB4O2hlaWdodDouMXB4O29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMX06aG9zdCgpIGlucHV0OmZvY3VzKzo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7b3V0bGluZTojMDAwIGRvdHRlZCAxcHg7b3V0bGluZTotd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHh9YF0sXG4gIHByb3ZpZGVyczogW05neERyb3B6b25lU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgcHJpdmF0ZSBzZXJ2aWNlOiBOZ3hEcm9wem9uZVNlcnZpY2VcbiAgKSB7IH1cblxuICAvKiogQSBsaXN0IG9mIHRoZSBjb250ZW50LXByb2plY3RlZCBwcmV2aWV3IGNoaWxkcmVuLiAqL1xuICBAQ29udGVudENoaWxkcmVuKE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfcHJldmlld0NoaWxkcmVuOiBRdWVyeUxpc3Q8Tmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50PjtcblxuICBnZXQgX2hhc1ByZXZpZXdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX3ByZXZpZXdDaGlsZHJlbi5sZW5ndGg7XG4gIH1cblxuICAvKiogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQuICovXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIF9maWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEVtaXR0ZWQgd2hlbiBhbnkgZmlsZXMgd2VyZSBhZGRlZCBvciByZWplY3RlZC4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd4RHJvcHpvbmVDaGFuZ2VFdmVudD4oKTtcblxuICAvKiogU2V0IHRoZSBhY2NlcHRlZCBmaWxlIHR5cGVzLiBEZWZhdWx0cyB0byAnKicuICovXG4gIEBJbnB1dCgpIGFjY2VwdCA9ICcqJztcblxuICAvKiogRGlzYWJsZSBhbnkgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKiogQWxsb3cgdGhlIHNlbGVjdGlvbiBvZiBtdWx0aXBsZSBmaWxlcy4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlwbGUgPSB0cnVlO1xuXG4gIC8qKiBTZXQgdGhlIG1heGltdW0gc2l6ZSBhIHNpbmdsZSBmaWxlIG1heSBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4RmlsZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RmlsZVNpemU7XG4gIH1cbiAgc2V0IG1heEZpbGVTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhGaWxlU2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9tYXhGaWxlU2l6ZTogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBBbGxvdyB0aGUgZHJvcHpvbmUgY29udGFpbmVyIHRvIGV4cGFuZCB2ZXJ0aWNhbGx5LiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGFibGUnKVxuICBnZXQgZXhwYW5kYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kYWJsZTtcbiAgfVxuICBzZXQgZXhwYW5kYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2V4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogT3BlbiB0aGUgZmlsZSBzZWxlY3RvciBvbiBjbGljay4gKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51bmNsaWNrYWJsZScpXG4gIGdldCBkaXNhYmxlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVDbGljaztcbiAgfVxuICBzZXQgZGlzYWJsZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZUNsaWNrID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlQ2xpY2sgPSBmYWxzZTtcblxuICAvKiogRXhwb3NlIHRoZSBpZCwgYXJpYS1sYWJlbCwgYXJpYS1sYWJlbGxlZGJ5IGFuZCBhcmlhLWRlc2NyaWJlZGJ5IG9mIHRoZSBuYXRpdmUgZmlsZSBpbnB1dCBmb3IgcHJvcGVyIGFjY2Vzc2liaWxpdHkuICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgnYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRCeTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWR6LWhvdmVyZWQnKVxuICBfaXNIb3ZlcmVkID0gZmFsc2U7XG5cbiAgLyoqIFNob3cgdGhlIG5hdGl2ZSBPUyBmaWxlIGV4cGxvcmVyIHRvIHNlbGVjdCBmaWxlcy4gKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfb25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZUNsaWNrKSB7XG4gICAgICB0aGlzLnNob3dGaWxlU2VsZWN0b3IoKTtcbiAgICB9IFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBfb25EcmFnT3ZlcihldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScpXG4gIF9vbkRyYWdMZWF2ZSgpIHtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBfb25Ecm9wKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZUZpbGVEcm9wKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gIH1cbiAgXG4gIHNob3dGaWxlU2VsZWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAodGhpcy5fZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBfb25GaWxlc1NlbGVjdGVkKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZXM6IEZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgIHRoaXMuaGFuZGxlRmlsZURyb3AoZmlsZXMpO1xuXG4gICAgLy8gUmVzZXQgdGhlIG5hdGl2ZSBmaWxlIGlucHV0IGVsZW1lbnQgdG8gYWxsb3cgc2VsZWN0aW5nIHRoZSBzYW1lIGZpbGUgYWdhaW5cbiAgICB0aGlzLl9maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuXG4gICAgLy8gZml4KCMzMik6IFByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnQgYmVoYXZpb3VyIHdoaWNoIGNhdXNlZCB0aGUgY2hhbmdlIGV2ZW50IHRvIGVtaXQgdHdpY2UuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZpbGVEcm9wKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5wYXJzZUZpbGVMaXN0KGZpbGVzLCB0aGlzLmFjY2VwdCwgdGhpcy5tYXhGaWxlU2l6ZSwgdGhpcy5tdWx0aXBsZSk7XG5cbiAgICB0aGlzLmNoYW5nZS5uZXh0KHtcbiAgICAgIGFkZGVkRmlsZXM6IHJlc3VsdC5hZGRlZEZpbGVzLFxuICAgICAgcmVqZWN0ZWRGaWxlczogcmVzdWx0LnJlamVjdGVkRmlsZXMsXG4gICAgICBzb3VyY2U6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmVudERlZmF1bHQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VTcmNcIiAvPlxuXHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kcm9wem9uZS1sYWJlbFwiPjwvbmctY29udGVudD5cbiAgICA8bmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZSAqbmdJZj1cInJlbW92YWJsZVwiIChjbGljayk9XCJfcmVtb3ZlKCRldmVudClcIj5cbiAgICA8L25neC1kcm9wem9uZS1yZW1vdmUtYmFkZ2U+XG5cdGAsXG4gIHN0eWxlczogW2A6aG9zdCgpe21pbi13aWR0aDp1bnNldCFpbXBvcnRhbnQ7bWF4LXdpZHRoOnVuc2V0IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50fTpob3N0KCk6Zm9jdXMgaW1nLDpob3N0KCk6aG92ZXIgaW1ne29wYWNpdHk6Ljd9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIGltZ3ttYXgtaGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1cHg7b3BhY2l0eTouOH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge1xuICAgIHN1cGVyKHNhbml0aXplcik7XG4gIH1cblxuICAvKiogVGhlIGltYWdlIGRhdGEgc291cmNlLiAqL1xuICAgZGVmdWFsdEltZ0xvYWRpbmcgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCemRIbHNaVDBpYldGeVoybHVPaUJoZFhSdk95QmlZV05yWjNKdmRXNWtPaUJ5WjJJb01qUXhMQ0F5TkRJc0lESTBNeWtnYm05dVpTQnlaWEJsWVhRZ2MyTnliMnhzSURBbElEQWxPeUJrYVhOd2JHRjVPaUJpYkc5amF6c2djMmhoY0dVdGNtVnVaR1Z5YVc1bk9pQmhkWFJ2T3lJZ2QybGtkR2c5SWpJeU5IQjRJaUJvWldsbmFIUTlJakl5TkhCNElpQjJhV1YzUW05NFBTSXdJREFnTVRBd0lERXdNQ0lnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWVFMXBaRmxOYVdRaVBnbzhZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSXhOQ0lnYzNSeWIydGxMWGRwWkhSb1BTSXpJaUJ6ZEhKdmEyVTlJaU00TldFeVlqWWlJSE4wY205clpTMWtZWE5vWVhKeVlYazlJakl4TGprNU1URTBPRFUzTlRFeU9EVTFNaUF5TVM0NU9URXhORGcxTnpVeE1qZzFOVElpSUdacGJHdzlJbTV2Ym1VaUlITjBjbTlyWlMxc2FXNWxZMkZ3UFNKeWIzVnVaQ0krQ2lBZ1BHRnVhVzFoZEdWVWNtRnVjMlp2Y20wZ1lYUjBjbWxpZFhSbFRtRnRaVDBpZEhKaGJuTm1iM0p0SWlCMGVYQmxQU0p5YjNSaGRHVWlJR1IxY2owaU1TNHhOakkzT1RBMk9UYzJOelEwTVRnMGN5SWdjbVZ3WldGMFEyOTFiblE5SW1sdVpHVm1hVzVwZEdVaUlHdGxlVlJwYldWelBTSXdPekVpSUhaaGJIVmxjejBpTUNBMU1DQTFNRHN6TmpBZ05UQWdOVEFpUGp3dllXNXBiV0YwWlZSeVlXNXpabTl5YlQ0S1BDOWphWEpqYkdVK0NqeGphWEpqYkdVZ1kzZzlJalV3SWlCamVUMGlOVEFpSUhJOUlqRXdJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqTWlJSE4wY205clpUMGlJMkppWTJWa1pDSWdjM1J5YjJ0bExXUmhjMmhoY25KaGVUMGlNVFV1TnpBM09UWXpNalkzT1RRNE9UWTJJREUxTGpjd056azJNekkyTnprME9EazJOaUlnYzNSeWIydGxMV1JoYzJodlptWnpaWFE5SWpFMUxqY3dOemsyTXpJMk56azBPRGsyTmlJZ1ptbHNiRDBpYm05dVpTSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWo0S0lDQThZVzVwYldGMFpWUnlZVzV6Wm05eWJTQmhkSFJ5YVdKMWRHVk9ZVzFsUFNKMGNtRnVjMlp2Y20waUlIUjVjR1U5SW5KdmRHRjBaU0lnWkhWeVBTSXhMakUyTWpjNU1EWTVOelkzTkRReE9EUnpJaUJ5WlhCbFlYUkRiM1Z1ZEQwaWFXNWtaV1pwYm1sMFpTSWdhMlY1VkdsdFpYTTlJakE3TVNJZ2RtRnNkV1Z6UFNJd0lEVXdJRFV3T3kwek5qQWdOVEFnTlRBaVBqd3ZZVzVwYldGMFpWUnlZVzV6Wm05eWJUNEtQQzlqYVhKamJHVStDandoTFMwZ1cyeGthVzlkSUdkbGJtVnlZWFJsWkNCaWVTQm9kSFJ3Y3pvdkwyeHZZV1JwYm1jdWFXOHZJQzB0UGp3dmMzWm5QZz09JztcbiAgaW1hZ2VTcmM6IGFueSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodGhpcy5kZWZ1YWx0SW1nTG9hZGluZyk7IFxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVhZEZpbGUoKVxuICAgICAgLnRoZW4oaW1nID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbWFnZVNyYyA9IGltZykpXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnPlxuICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIwXCIgeDI9XCIxMFwiIHkyPVwiMTBcIiAvPlxuICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIxMFwiIHgyPVwiMTBcIiB5Mj1cIjBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjIycHg7d2lkdGg6MjJweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NXB4O3JpZ2h0OjVweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNiYmI7Y29sb3I6IzMzMztjdXJzb3I6cG9pbnRlcn06aG9zdCgpOmhvdmVye2JhY2tncm91bmQ6I2FlYWVhZX06aG9zdCgpPnN2Z3toZWlnaHQ6MTBweDt3aWR0aDoxMHB4fTpob3N0KCk+c3ZnPmxpbmV7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2U6I2ZmZn1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vbmd4LWRyb3B6b25lLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUtdmlkZW8tcHJldmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHZpZGVvICpuZ0lmPVwic2FuaXRpemVkVmlkZW9TcmNcIiBjb250cm9scyAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICA8c291cmNlIFtzcmNdPVwic2FuaXRpemVkVmlkZW9TcmNcIiAvPlxuICAgIDwvdmlkZW8+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRyb3B6b25lLWxhYmVsXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlICpuZ0lmPVwicmVtb3ZhYmxlXCIgKGNsaWNrKT1cIl9yZW1vdmUoJGV2ZW50KVwiPlxuICAgIDwvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZT5cblx0YCxcbiAgc3R5bGVzOiBbYDpob3N0KCl7bWluLXdpZHRoOnVuc2V0IWltcG9ydGFudDttYXgtd2lkdGg6dW5zZXQhaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnR9Omhvc3QoKTpmb2N1cyB2aWRlbyw6aG9zdCgpOmhvdmVyIHZpZGVve29wYWNpdHk6Ljd9Omhvc3QoKTpmb2N1cyBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLDpob3N0KCk6aG92ZXIgbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZXtvcGFjaXR5OjF9Omhvc3QoKSBuZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdle29wYWNpdHk6MH06aG9zdCgpIHZpZGVve21heC1oZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjVweH06aG9zdCgpIDo6bmctZGVlcCBuZ3gtZHJvcHpvbmUtbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3ctd3JhcDpicmVhay13b3JkfWBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnRcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVWaWRlb1ByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7XG4gICAgc3VwZXIoc2FuaXRpemVyKTtcbiAgfVxuXG4gIC8qKiBUaGUgdmlkZW8gZGF0YSBzb3VyY2UuICovXG4gIHNhbml0aXplZFZpZGVvU3JjOiBTYWZlVXJsO1xuXG4gIHByaXZhdGUgdmlkZW9TcmM6IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZmlsZSB0byByZWFkLiBQbGVhc2UgcHJvdmlkZSBhIGZpbGUgdXNpbmcgdGhlIFtmaWxlXSBJbnB1dCBwcm9wZXJ0eS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSBzYW5pdGl6ZSB0aGUgVVJMIGhlcmUgdG8gZW5hYmxlIHRoZSBwcmV2aWV3LlxuICAgICAqIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBjb3VsZCBjYXVzZSBzZWN1cml0eSBpc3N1ZXMhXG4gICAgICoqL1xuICAgIHRoaXMudmlkZW9TcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZSk7XG4gICAgdGhpcy5zYW5pdGl6ZWRWaWRlb1NyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodGhpcy52aWRlb1NyYyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMudmlkZW9TcmMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neERyb3B6b25lTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL25neC1kcm9wem9uZS1sYWJlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS9uZ3gtZHJvcHpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neERyb3B6b25lSW1hZ2VQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVSZW1vdmVCYWRnZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXJlbW92ZS1iYWRnZS9uZ3gtZHJvcHpvbmUtcmVtb3ZlLWJhZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcvbmd4LWRyb3B6b25lLXZpZGVvLXByZXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHROZ3hEcm9wem9uZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUxhYmVsRGlyZWN0aXZlLFxuXHRcdE5neERyb3B6b25lUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZUltYWdlUHJldmlld0NvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVJlbW92ZUJhZGdlQ29tcG9uZW50LFxuXHRcdE5neERyb3B6b25lVmlkZW9QcmV2aWV3Q29tcG9uZW50LFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Tmd4RHJvcHpvbmVDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVMYWJlbERpcmVjdGl2ZSxcblx0XHROZ3hEcm9wem9uZVByZXZpZXdDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVJbWFnZVByZXZpZXdDb21wb25lbnQsXG5cdFx0Tmd4RHJvcHpvbmVSZW1vdmVCYWRnZUNvbXBvbmVudCxcblx0XHROZ3hEcm9wem9uZVZpZGVvUHJldmlld0NvbXBvbmVudCxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZU1vZHVsZSB7IH1cbiJdfQ==

/***/ }),

/***/ "stGv":
/*!****************************************************************!*\
  !*** ./src/app/pages/customer/conferinta/conferinta.module.ts ***!
  \****************************************************************/
/*! exports provided: ConferintaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferintaPageModule", function() { return ConferintaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _conferinta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conferinta-routing.module */ "eGy0");
/* harmony import */ var _conferinta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conferinta.page */ "ucb+");
/* harmony import */ var src_app_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/safe.pipe */ "Z2+D");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "c7Fb");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var src_app_services_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/interceptor.service */ "KRBT");











// import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';



let ConferintaPageModule = class ConferintaPageModule {
};
ConferintaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conferinta_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConferintaPageRoutingModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"],
            src_app_services_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["InterceptorModule"]
        ],
        declarations: [_conferinta_page__WEBPACK_IMPORTED_MODULE_6__["ConferintaPage"], src_app_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"],],
        providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_11__["PreviewAnyFile"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_12__["Media"]]
    })
], ConferintaPageModule);



/***/ }),

/***/ "ucb+":
/*!**************************************************************!*\
  !*** ./src/app/pages/customer/conferinta/conferinta.page.ts ***!
  \**************************************************************/
/*! exports provided: ConferintaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferintaPage", function() { return ConferintaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conferinta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conferinta.page.html */ "cKCH");
/* harmony import */ var _conferinta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conferinta.page.scss */ "b6c8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "ej43");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "c7Fb");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/ion-loader.service */ "G8uT");
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ "YCdq");















let ConferintaPage = class ConferintaPage {
    // constructor( private media: Media,private previewAnyFile: PreviewAnyFile, private platform: Platform, private file: File2,private menu: MenuController, private router: Router, private authService: AuthenticationService,private http: HttpClient,private ionLoaderService: IonLoaderService,private userAgent: UserAgent) {
    constructor(androidPermissions, media, previewAnyFile, platform, file, menu, router, authService, http, ionLoaderService, alertCtrl) {
        this.androidPermissions = androidPermissions;
        this.media = media;
        this.previewAnyFile = previewAnyFile;
        this.platform = platform;
        this.file = file;
        this.menu = menu;
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.ionLoaderService = ionLoaderService;
        this.alertCtrl = alertCtrl;
        this.domain = "voice.infragroup.ro"; // For self hosted use your domain
        // audioList: any[] = [];
        // url = "https://probe.infragroup.ro";
        // url = "https://medicall.medicover.ro";
        this.url = "http://127.0.0.1:8000";
        this.title = 'dropzone';
        this.files = [];
    }
    fetchUrl() {
        //  if(this.platform.is('iphone') || this.platform.is('ios') ){
        // // // this.userAgent.set('Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1')
        // // // .then((res: any) => console.log(res))
        // // // .catch((error: any) => console.error(error));
        // //  }
        // this.http.get(`${this.url}/api/conferinta/roomOpened/${localStorage.getItem("user_id")}`).subscribe(data=>{
        // this.http.get(`${this.url}/api/conferinta/roomOpened/2`).subscribe(data=>{
        this.http.get(`http://127.0.0.1:8000/api/conferinta/roomOpened/49`).subscribe(data => {
            if (this.platform.is('ios')) {
                if (data['url_consult']) {
                    console.log('ios');
                    // this.url_conferinta = this.url+'api/conferinta/roomRedirect/'+localStorage.getItem("user_id");
                    this.url_conferinta = this.url + '/api/conferinta/roomRedirect/49';
                }
            }
            else {
                this.url_conferinta = data['url_consult'];
            }
            console.log(this.url_conferinta);
            this.id_consult = data['id_consult'];
            this.fisiere = data['fisiere'];
            this.ionLoaderService.dismissLoader();
        });
    }
    setUserAgent(window, userAgent) {
        if (window.navigator.userAgent != userAgent) {
            var userAgentProp = { get: function () { return userAgent; } };
            try {
                Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
            }
            catch (e) {
                window.navigator = Object.create(navigator, {
                    userAgent: userAgentProp
                });
            }
        }
    }
    ngOnInit() {
        // console.log( window.document.querySelectorAll("iframe"));
        // this.setUserAgent(window, 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1');
        //     const element: HTMLIFrameElement = document.getElementById('iframe') as HTMLIFrameElement;
        // // const iframe = element.contentWindow;
        // var frame = (document.querySelector('#iframe') as HTMLIFrameElement) 
        // console.log( frame);
        //   this.setUserAgent(
        //     this.hostElement.nativeElement.querySelector('iframe').contentWindow.document.querySelector, 
        //     'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1'
        // );
        alert(window.navigator.userAgent);
        this.ionLoaderService.simpleLoader();
        this.url_conferinta = null;
        this.menu.enable(true);
        this.fetchUrl();
        if (!this.url_conferinta) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(30000).subscribe(x => {
                // this.ionLoaderService.dismissLoader();
                this.fetchUrl();
            });
        }
        else {
            this.audio.startRecord();
            this.audio.stopRecord();
        }
    }
    onSelect(event) {
        if (event.rejectedFiles.length == 0) {
            console.log(event.addedFiles, event.rejectedFiles);
            this.files.push(...event.addedFiles);
            const formData = new FormData();
            for (var i = 0; i < this.files.length; i++) {
                formData.append("file", this.files[i]);
            }
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Accept': '*/*',
                'enctype': "multipart/form-data"
            });
            let options = { headers: headers };
            this.http.post(`${this.url}/api/conferinta/fileupload/${this.id_consult}`, formData, options)
                // this.http.post(`http://127.0.0.1:8000/api/conferinta/fileupload/${this.id_consult}`, formData, options)
                .subscribe(res => {
                //  console.log(res);
                let alert = this.alertCtrl.create({
                    // title: '',
                    message: 'Fisier incarcat cu succes',
                    buttons: [
                        {
                            text: 'Ok',
                            cssClass: 'icon-color',
                        }
                    ]
                });
                alert.then(alert => alert.present());
            });
        }
        else {
            let alert = this.alertCtrl.create({
                // title: 'Fisier prea mare',
                cssClass: "my-custom-class",
                message: 'Dimensiunea maxima a fisierului poate fi de 10 MB',
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'icon-color',
                    }
                ]
            });
            alert.then(alert => alert.present());
        }
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    downloadFile(nume_fisier) {
        this.http.get(`${this.url}/api/conferinta/filedownload/${nume_fisier}`)
            .subscribe((response) => {
            console.log(response);
            this.previewAnyFile.preview("https://infraspaces.ams3.digitaloceanspaces.com/" + response).then((res) => {
                console.log(res);
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
};
ConferintaPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_11__["Media"] },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__["PreviewAnyFile"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_app_services_ion_loader_service__WEBPACK_IMPORTED_MODULE_12__["IonLoaderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ConferintaPage.propDecorators = {
    iframe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['iframe', { static: false },] }]
};
ConferintaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conferinta',
        template: _raw_loader_conferinta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conferinta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConferintaPage);



/***/ })

}]);
//# sourceMappingURL=pages-customer-conferinta-conferinta-module-es2015.js.map