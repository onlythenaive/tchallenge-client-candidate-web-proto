(function () {

  'use strict'

  angular
      .module('application.utility')
      .service('ajaxRequestRegistryService', [
        AjaxRequestRegistryService
      ]);

  function AjaxRequestRegistryService() {

    var activeRequestCountChangedHandler;

    var self = this;

    self.onActiveRequestCountChanged = function (handler) {
      activeRequestCountChangedHandler = handler;
    };

    self.getActiveRequestCount = function () {
      return 0;
    };
  }
})();
