(function () {

  'use strict'

  angular
      .module('application.security')
      .service('authenticationService', [
        AuthenticationService
      ]);

  function AuthenticationService() {

    var permanentToken;

    var self = this;

    self.getPermanentToken = function () {
      return permanentToken;
    };

    self.setPermanentToken = function (token) {
      console.log("token set: " + token);
      permanentToken = token;
    };
  }
})();
