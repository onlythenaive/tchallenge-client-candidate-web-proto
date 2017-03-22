(function () {

  'use strict'

  angular
      .module('application.utility')
      .component('parallax', {
        controller: 'parallaxController',
        controllerAs: 'self',
        templateUrl: 'static/components/utility/parallax.component.html'
      });
})();
