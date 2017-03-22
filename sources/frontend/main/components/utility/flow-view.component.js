(function () {

  'use strict'

  angular
      .module('application.utility')
      .component('flowView', {
        controller: 'flowViewController',
        controllerAs: 'self',
        templateUrl: 'static/components/utility/flow-view.component.html'
      });
})();
