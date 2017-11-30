/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addons_notifications__ = __webpack_require__(7);


$(document).ready(function () {
  var notificationTop = new __WEBPACK_IMPORTED_MODULE_0__addons_notifications__["a" /* default */]();
  var notificationBottom = new __WEBPACK_IMPORTED_MODULE_0__addons_notifications__["a" /* default */]({ position: 'bottom' });

  $('#notificationDemo').on('submit', function (e) {
    e.preventDefault();

    var values = {};
    $.each($(this).serializeArray(), function (_, kv) {
      if (values.hasOwnProperty(kv.name)) {
        values[kv.name] = $.makeArray(values[kv.name]);
        values[kv.name].push(kv.value);
      } else {
        values[kv.name] = kv.value;
      }
    });

    var options = {
      autoHide: values.demoAutoHide === "1" ? true : false,
      playSound: values.demoSound === "1" ? true : false,
      style: values.demoStyle
    };

    if (values.demoPosition === 'top') {
      notificationTop.fire(values.demoText, options);
    } else {
      notificationBottom.fire(values.demoText, options);
    }
  });
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotificationHandler = function () {
  _createClass(NotificationHandler, [{
    key: 'getDefaultOptions',
    value: function getDefaultOptions() {
      return {
        position: 'top',
        notificationSound: '/dist/media/notification.mp3',
        volume: 0.2,
        notification: {
          autoHide: false,
          playSound: true,
          duration: 5000,
          style: 'default'
        }
      };
    }
  }]);

  function NotificationHandler(options) {
    _classCallCheck(this, NotificationHandler);

    this.options = Object.assign({}, this.getDefaultOptions(), options);

    // Create container element
    this.container = $('<div class="notifications notifications-position-' + this.options.position + '"></div>').appendTo('body');
    this.player = $('\n      <audio preload="auto" volume="' + this.options.volume + '">\n        <source src="' + this.options.notificationSound + '" type="audio/mpeg" />\n        <embed hidden="true" autostart="true" loop="false" src="' + this.options.notificationSound + '" />\n      </audio>\n    ').appendTo('body');
    this.player[0].volume = this.options.volume;
  }

  _createClass(NotificationHandler, [{
    key: 'generateNotificationCode',
    value: function generateNotificationCode(text, style) {
      return '\n      <div class="notification notification-' + style + '">\n        <div class="container d-flex justify-content-between align-items-center">\n          <div class="notification-text">' + text + '</div>\n          <button type="button" class="close" aria-label="Close">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">\n              <line x1="18" y1="6" x2="6" y2="18"></line>\n              <line x1="6" y1="6" x2="18" y2="18"></line>\n            </svg>\n          </button>\n        </div>\n      </div>\n    ';
    }
  }, {
    key: 'fire',
    value: function fire(text, forceOptions) {
      var options = Object.assign({}, this.options.notification, forceOptions);

      // Play Notificatino sound
      if (options.playSound === true) {
        this.player.trigger("stop");
        this.player.trigger("play");
      }

      // append notification
      var notification = $(this.generateNotificationCode(text, options.style)).prependTo(this.container);
      notification.hide().slideDown();

      // add close handler
      notification.on('click', '.close', function (e) {
        e.preventDefault();

        notification.slideUp(function () {
          notification.remove();
        });
      });

      if (options.autoHide === true) {
        setTimeout(function () {
          notification.slideUp(function () {
            notification.remove();
          });
        }, options.duration);
      }
    }
  }]);

  return NotificationHandler;
}();

/* harmony default export */ __webpack_exports__["a"] = (NotificationHandler);

/***/ })
/******/ ]);