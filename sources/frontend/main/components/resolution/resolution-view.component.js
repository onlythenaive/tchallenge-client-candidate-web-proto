(function () {

  'use strict'

  angular
      .module('application.resolution')
      .component('resolutionView', {
        controller: 'resolutionViewController',
        controllerAs: 'self',
        templateUrl: 'static/components/resolution/resolution-view.component.html'
      });
})();
