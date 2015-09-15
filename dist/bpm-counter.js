"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BpmCounter = (function () {
  function BpmCounter() {
    _classCallCheck(this, BpmCounter);

    this.numTaps = 0;
    this.bpm = 0;
    this.lastTappedTime = new Date();
  }

  _createClass(BpmCounter, [{
    key: "restart",
    value: function restart() {
      this.numTaps = 0;
      this.bpm = 0;
      this.lastTappedTime = new Date();
    }
  }, {
    key: "tick",
    value: function tick() {
      this.numTaps++;

      var currentTime = new Date();

      var timeDifferenceInMS = currentTime - this.lastTappedTime;

      this.bpm = this.numTaps / (timeDifferenceInMS / 1000);
    }
  }]);

  return BpmCounter;
})();