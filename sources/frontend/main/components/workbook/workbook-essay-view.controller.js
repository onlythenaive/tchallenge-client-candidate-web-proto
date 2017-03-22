(function () {

  'use strict'

  angular
      .module('application.workbook')
      .controller('workbookEssayViewController', [
        '$state',
        '$stateParams',
        'workbookService',
        WorkbookEssayViewController
      ]);

  function WorkbookEssayViewController($state, $stateParams, workbookService) {

    var self = this;

    this.submitEssay = function () {
      workbookService
          .submitEssay({workbookId: self.workbook.id})
          .then(function () {
            $state.go('application.flow.workbook', {
              workbookId: self.workbook.id
            });
          });
    };

    this.cancel = function () {
      $state.go('application.flow.workbook', {
        workbookId: self.workbook.id
      });
    };

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
