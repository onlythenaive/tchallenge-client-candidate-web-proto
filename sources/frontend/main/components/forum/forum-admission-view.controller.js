(function () {

  'use strict'

  angular
      .module('application.forum')
      .controller('forumAdmissionViewController', [
        '$state',
        '$stateParams',
        'forumAdmissionService',
        ForumAdmissionViewController
      ]);

  function ForumAdmissionViewController($state, $stateParams, forumAdmissionService) {

    var self = this;

    self.$onInit = function () {
      var admissionId = $stateParams['admissionId'];
      forumAdmissionService
          .get(admissionId)
          .then(function (result) {
            self.admission = result.data;
            self.navigateToResolution();
          });
    };

    self.navigateToResolution = function () {
      $state.go('application.resolution', {resolutionId: self.admission.resolutionId});
    };
  }
})();
