(function () {

  'use strict'

  angular
      .module('application.workbook')
      .component('workbookAssignmentForm', {
        bindings: {
          assignment: '='
        },
        controller: 'workbookAssignmentFormController',
        controllerAs: 'self',
        templateUrl: 'static/components/workbook/workbook-assignment-form.component.html'
      });
})();
