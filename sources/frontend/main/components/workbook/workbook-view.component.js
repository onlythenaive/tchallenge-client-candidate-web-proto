(function () {

  'use strict'

  angular
      .module('application.workbook')
      .component('workbookView', {
        controller: 'workbookViewController',
        controllerAs: 'self',
        templateUrl: 'static/components/workbook/workbook-view.component.html'
      });
})();
