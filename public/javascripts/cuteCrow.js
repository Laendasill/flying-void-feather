'use strict';

var cuteCrow = {
  VERSION: '0.0.1'
};
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cuteCrow = cuteCrow || {};
cuteCrow.game = (function () {
  function game() {
    var players = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var questions = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    _classCallCheck(this, game);

    this.players = players;
    this.questions = questions;
  }

  _createClass(game, [{
    key: "init",
    value: function init() {}
  }, {
    key: "addPlayer",
    value: function addPlayer(player) {
      this.players.push(player);
    }
  }, {
    key: "removePlayer",
    value: function removePlayer(player) {
      var todel = this.players.map(function (el) {
        if (el.id === player.id) {
          return el.id;
        }
      });
      throw "not implemented";
    }
  }]);

  return game;
})();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cuteCrow = cuteCrow || {};
cuteCrow.player = function player() {
  var points = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var name = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];
  var id = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  _classCallCheck(this, player);

  this.id = id;
  this.points = points;
  this.name = name;
};
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cuteCrow = cuteCrow || {};
cuteCrow.quizElement = (function () {
  function quizElement(id) {
    var question = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];
    var ansers = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
    var correct = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

    _classCallCheck(this, quizElement);

    this.id = id;
    this.question = question;
    this.ansers = ansers;
    this.correct = correct;
  }

  _createClass(quizElement, null, [{
    key: "fromObject",
    value: function fromObject(object) {
      if (cuteCrow.utils.validateObject(object, ["question", "id", "ansers", "correct"])) {
        return new cuteCrow.quizElement(object.id, object.question, object.ansers, object.correct);
      } else {
        return false;
      }
    }
  }]);

  return quizElement;
})();
/*
var question = (function(){
  var question,
      ansers = [],
      correct = 0;
      //idk what to do
  function fromJson(js){

  }


  return {

    question: "",
    ansers: [],
    correct: 0
  };
})();
*/
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cuteCrow = cuteCrow || {};
cuteCrow.utils = (function () {
  function utils() {
    _classCallCheck(this, utils);
  }

  _createClass(utils, null, [{
    key: "validateObject",
    value: function validateObject(object, properties) {
      var props = "";
      properties.forEach(function (prop) {
        if (!object.hasOwnProperty(prop)) {
          props += prop + ", ";
        }
      });
      if (props.length > 1) {
        console.error("Object is missing properties " + props);
        return false;
      } else {
        return true;
      }
    }
  }]);

  return utils;
})();
//# sourceMappingURL=cuteCrow.js.map