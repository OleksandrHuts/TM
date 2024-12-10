"use strict";

(function transformName() {
  var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Oleg';

  if (!userName) {
    return false;
  }

  console.log(userName.toUpperCase());
})();