(function () {

  'use strict'

  angular
      .module('application.workbook')
      .controller('workbookFeedbackViewController', [
        '$stateParams',
        'workbookService',
        WorkbookFeedbackViewController
      ]);

  function WorkbookFeedbackViewController($stateParams, workbookService) {

    var self = this;

    download();

    function download() {
      workbookService
          .get($stateParams['workbookId'])
          .then(update);
    }

    function update(result) {
      self.workbook = result.data;
    }
  }
})();
