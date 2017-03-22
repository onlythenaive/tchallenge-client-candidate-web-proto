(function () {

  'use strict'

  angular
      .module('application.utility')
      .controller('screenBlockerController', [
        'ajaxRequestRegistryService',
        ScreenBlockerController
      ]);

  function ScreenBlockerController(ajaxRequestRegistryService) {

    var self = this;

    update();
    ajaxRequestRegistryService.onActiveRequestCountChanged(update);

    function update() {
      self.enabled = ajaxRequestRegistryService.getActiveRequestCount() > 0;
    };
  }
})();
