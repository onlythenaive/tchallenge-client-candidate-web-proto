(function () {

  'use strict'

  angular
      .module('application.forum')
      .controller('forumAdmissionFormController', [
        '$state',
        '$stateParams',
        'forumAdmissionService',
        ForumAdmissionFormController
      ]);

  function ForumAdmissionFormController($state, $stateParams, forumAdmissionService) {

    var self = this;

    self.essayFieldsVisible = false;

    self.$onInit = function () {
      self.admission = {
        specialization: self.forum.specializations[0],
        seniority: self.forum.seniorities[0]
      };
    };

    self.showEssayFields = function () {
      self.essayFieldsVisible = true;
    };

    self.submitForChallenge = function () {
      self.admission.purpose = "CHALLENGE";
      submit();
    };

    self.submitForEssay = function () {
      self.admission.purpose = "ESSAY";
      submit();
    };

    function submit() {
      forumAdmissionService
          .post(self.admission)
          .then(function (result) {
            $state.go('application.forumAdmission', {
              admissionId: result.data.id
            });
          }, function () {
            console.log("failed");
          });
    }
  }
})();
