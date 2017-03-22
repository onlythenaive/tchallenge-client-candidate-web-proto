(function () {

  'use strict'

  angular
      .module('application.workbook')
      .component('workbookFeedbackView', {
        controller: 'workbookFeedbackViewController',
        controllerAs: 'self',
        templateUrl: 'static/components/workbook/workbook-feedback-view.component.html'
      });
})();
