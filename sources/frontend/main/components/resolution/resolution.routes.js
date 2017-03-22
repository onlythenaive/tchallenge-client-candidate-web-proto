(function () {

  'use strict'

  angular
      .module('application.resolution')
      .config([
        '$stateProvider',
        configureResolutionStates
      ]);

  function configureResolutionStates($stateProvider) {

    $stateProvider

        .state('application.resolution', {
          url: 'resolutions/:resolutionId',
          views: {
            '@application': {
              component: 'resolutionView'
            }
          }
        });
  }
})();
