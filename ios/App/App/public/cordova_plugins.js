
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open"
        ]
        },
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-android-permissions.Permissions",
          "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
          "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
          "cordova.plugins.permissions"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-preview-any-file.PreviewAnyFile",
          "file": "plugins/cordova-plugin-preview-any-file/www/preview.js",
          "pluginId": "cordova-plugin-preview-any-file",
        "clobbers": [
          "window.PreviewAnyFile"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-android-permissions": "1.1.3",
      "cordova-plugin-preview-any-file": "0.2.9",
      "cordova-plugin-device": "2.1.0",
      "cordova-plugin-inappbrowser": "5.0.0",
      "phonegap-plugin-barcodescanner": "8.1.0"
    };
    // BOTTOM OF METADATA
    });
    