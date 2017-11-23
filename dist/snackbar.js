(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.snackbar = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _snackbar = require('./snackbar');

var _snackbar2 = _interopRequireDefault(_snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = void 0;

function snackbar() {
  if (!instance) {
    instance = new _snackbar2.default();
  }
  return instance;
}

module.exports = snackbar();

},{"./snackbar":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snackbar = function () {
  function Snackbar() {
    _classCallCheck(this, Snackbar);

    this.view = document.body.appendChild(document.createElement('div'));
    this.view.classList.add('snackbar');
    this.isActive = false;
    this.queue = [];
    this.gap = 250;
    this.duration = 5000;
  }

  _createClass(Snackbar, [{
    key: 'show',
    value: function show(message) {
      var _this = this;

      if (this.isActive) {
        this.queue.push(message);
        return;
      }
      this.isActive = true;
      this.view.textContent = message;
      this.view.classList.add('snackbar--visible');
      this.queue.shift();
      setTimeout(function () {
        return _this.hide();
      }, this.duration);
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this2 = this;

      this.isActive = false;
      this.view.classList.remove('snackbar--visible');

      if (this.queue.length) {
        setTimeout(function () {
          return _this2.show(_this2.queue[0]);
        }, this.gap);
      }
    }
  }]);

  return Snackbar;
}();

exports.default = Snackbar;

},{}]},{},[1])(1)
});