(function () {

  'use strict'

  angular
      .module('application.workbook')
      .controller('workbookEssayViewController', [
        '$stateParams',
        'workbookService',
        WorkbookEssayViewController
      ]);

  function WorkbookEssayViewController($stateParams, workbookService) {

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
