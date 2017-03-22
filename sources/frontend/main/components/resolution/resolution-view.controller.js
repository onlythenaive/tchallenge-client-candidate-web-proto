(function () {

  'use strict'

  angular
      .module('application.resolution')
      .controller('resolutionViewController', [
        '$state',
        '$stateParams',
        'resolutionService',
        'workbookService',
        ResolutionViewController
      ]);

  function ResolutionViewController($state, $stateParams, resolutionService, workbookService) {

    var self = this;

    self.$onInit = function () {
      var resolutionId = $stateParams['resolutionId'];
      resolutionService
          .get(resolutionId)
          .then(function (result) {
            self.resolution = result.data;
          });
    };

    self.createWorkbook = function () {
      workbookService
          .create({})
          .then(function (result) {
            console.log("navigate to workbook " + result.data.id);
            $state.go('application.flow.workbook', {
              workbookId: result.data.id
            });
          });
    };
  }
})();
