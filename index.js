"use strict";

var owns = Object.prototype.hasOwnProperty;
module.exports = function objectFirstKey(object) {
  for (var key in object) {
    if (owns.call(object, key)) {
      return key;
    }
  }
};
