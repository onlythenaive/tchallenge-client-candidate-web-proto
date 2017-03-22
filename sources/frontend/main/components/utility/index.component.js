(function () {

  'use strict'

  angular
      .module('application.utility')
      .component('index', {
        controller: 'indexController',
        controllerAs: 'self',
        templateUrl: 'static/components/utility/index.component.html'
      });
})();
