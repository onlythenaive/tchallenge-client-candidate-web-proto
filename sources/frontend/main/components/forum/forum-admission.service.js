(function () {

  'use strict'

  angular
      .module('application.forum')
      .service('forumAdmissionService', [
        '$http',
        'urlResolverService',
        ForumAdmissionService
      ]);

  function ForumAdmissionService($http, urlResolverService) {

    var self = this;

    self.get = function (admissionId) {
      return $http
          .get(urlResolverService.resolveDataUrl('admissions', admissionId));
    };

    self.post = function (admission) {
      return $http
          .post(urlResolverService.resolveDataUrl('admissions'), admission);
    };
  }
})();
