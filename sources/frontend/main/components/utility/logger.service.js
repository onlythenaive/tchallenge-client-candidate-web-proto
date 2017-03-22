(function () {

  'use strict'

  angular
      .module('application.utility')
      .service('loggerService', [
        LoggerService
      ]);

  function LoggerService() {

    var self = this;

    self.debug = function (message) {
      console.log(message);
    };
  }
})();
