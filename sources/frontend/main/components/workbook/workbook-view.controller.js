(function () {

  'use strict'

  angular
      .module('application.workbook')
      .controller('workbookViewController', [
        '$state',
        '$stateParams',
        'workbookService',
        WorkbookViewController
      ]);

  function WorkbookViewController($state, $stateParams, workbookService) {

    var self = this;

    self.refresh = function () {
      download();
    };

    self.decline = function () {
      workbookService
          .decline(self.workbook)
          .then(update);
    };

    self.submit = function () {
      workbookService
          .submit(self.workbook)
          .then(update);
    };

    self.changeToEssay = function () {
      $state.go('application.flow.workbookEssay', {
        workbookId: self.workbook.id
      });
    };

    self.changeToFeedback = function () {
      $state.go('application.flow.workbookFeedback', {
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
