(function () {

  'use strict'

  angular
      .module('application.workbook')
      .controller('workbookFeedbackViewController', [
        '$state',
        '$stateParams',
        'workbookService',
        WorkbookFeedbackViewController
      ]);

  function WorkbookFeedbackViewController($state, $stateParams, workbookService) {

    var self = this;

    self.overalls = [
      {
        code: "5",
        title: "На отлично!"
      },
      {
        code: "4",
        title: "Неплохо"
      },
      {
        code: "3",
        title: "Скорее понравился"
      },
      {
        code: "2",
        title: "Скорее не понравился"
      },
      {
        code: "1",
        title: "Совсем не понравился"
      }
    ];

    self.feedback = {
      overall: self.overalls[0]
    };

    this.submitFeedback = function () {
      workbookService
          .submitFeedback({workbookId: self.workbook.id})
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
