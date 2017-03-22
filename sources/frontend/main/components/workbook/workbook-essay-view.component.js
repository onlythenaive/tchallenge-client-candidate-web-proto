(function () {

  'use strict'

  angular
      .module('application.workbook')
      .component('workbookEssayView', {
        controller: 'workbookEssayViewController',
        controllerAs: 'self',
        templateUrl: 'static/components/workbook/workbook-essay-view.component.html'
      });
})();
