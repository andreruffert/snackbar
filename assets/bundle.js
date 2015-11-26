(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(global){"use strict";function _typeof(obj){return obj&&typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj}(function(f){if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.snackbar=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o])}return s}({1:[function(require,module,exports){"use strict";var _snackbar=require("./snackbar");var _snackbar2=_interopRequireDefault(_snackbar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var instance=undefined;function snackbar(){if(!instance){instance=new _snackbar2.default}return instance}module.exports=snackbar()},{"./snackbar":2}],2:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Snackbar=function(){function Snackbar(){_classCallCheck(this,Snackbar);this.view=document.body.appendChild(document.createElement("div"));this.view.classList.add("snackbar");this.isActive=false;this.queue=[]}_createClass(Snackbar,[{key:"show",value:function show(message){var _this=this;if(this.isActive){this.queue.push(message);return}this.isActive=true;this.view.textContent=message;this.view.classList.add("snackbar--visible");this.queue.shift();setTimeout(function(){return _this.hide()},5e3)}},{key:"hide",value:function hide(){var _this2=this;this.isActive=false;this.view.classList.remove("snackbar--visible");if(this.queue.length){setTimeout(function(){return _this2.show(_this2.queue[0])},250)}}}]);return Snackbar}();exports.default=Snackbar},{}]},{},[1])(1)})}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./snackbar":1}],2:[function(require,module,exports){"use strict";var uniqueRandom=require("unique-random");module.exports=function(arr){var rand=uniqueRandom(0,arr.length-1);return function(){return arr[rand()]}}},{"unique-random":3}],3:[function(require,module,exports){"use strict";module.exports=function(min,max){var prev;return function rand(){var num=Math.floor(Math.random()*(max-min+1)+min);return prev=num===prev&&min!==max?rand():num}}},{}],4:[function(require,module,exports){"use strict";var _snackbar=require("snackbar");var _snackbar2=_interopRequireDefault(_snackbar);var _helloHi=require("./lib/hello-hi");var _helloHi2=_interopRequireDefault(_helloHi);var _days=require("./lib/days");var _days2=_interopRequireDefault(_days);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function init(){setTimeout(function(){_snackbar2.default.show("Ohai!");_snackbar2.default.show("Happy "+_days2.default[(new Date).getDay()]+".")},1e3)}function sayHello(){_snackbar2.default.show((0,_helloHi2.default)())}document.onreadystatechange=function(){console.log(document.readyState);if(document.readyState==="complete"){init()}};document.querySelector('[data-js-trigger="snackbar"]').addEventListener("click",sayHello)},{"./lib/days":5,"./lib/hello-hi":6,snackbar:1}],5:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];exports.default=days},{}],6:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _uniqueRandomArray=require("unique-random-array");var _uniqueRandomArray2=_interopRequireDefault(_uniqueRandomArray);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var helloHi=["'Allo","'Allo 'Allo","Aye oop","Ay up","Ahoy","G'day","Greetings","Hello","Hey there","Hey","Hi there","Hi","Hiya","How are things","How are ya","How ya doin","How's it goin","How's life","Howdy","Sup","What's new","What's up","Yo"];exports.default=(0,_uniqueRandomArray2.default)(helloHi)},{"unique-random-array":2}]},{},[4]);