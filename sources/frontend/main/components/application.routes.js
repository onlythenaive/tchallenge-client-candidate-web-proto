(function () {

  'use strict'

  angular

      .module('application')

      .config([
        '$stateProvider',
        configureStateProvider
      ]);

  function configureStateProvider($stateProvider) {

    $stateProvider

        .state('application', {
          url: '/',
          views: {
            '': {
              component: 'index'
            }
          }
        })

        .state('application.flow', {
          abstract: true,
          views: {
            '@application': {
              component: 'flowView'
            }
          }
        });
  }
})();
