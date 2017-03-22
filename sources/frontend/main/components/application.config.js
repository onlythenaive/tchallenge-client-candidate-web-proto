(function () {

  'use strict'

  angular
      .module('application')
      .config([
        '$locationProvider',
        function ($locationProvider) {
          $locationProvider.html5Mode(true);
        }
      ]);
})();
