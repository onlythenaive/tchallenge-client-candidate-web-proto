(function () {

  'use strict'

  angular
      .module('application.utility')
      .controller('flowViewController', [
        '$state',
        '$stateParams',
        FlowViewController
      ]);

  function FlowViewController($state, $stateParams) {

    var self = this;
  }
})();
