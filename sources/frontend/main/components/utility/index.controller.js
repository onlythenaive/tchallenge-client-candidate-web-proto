(function () {

  'use strict'

  angular
      .module('application.utility')
      .controller('indexController', [
        '$state',
        IndexController
      ]);


  function IndexController($state) {

    if ($state.is('application')) {
      $state.go('application.forum', {
        forumId: "it2017"
      });
    }
  }
})();
