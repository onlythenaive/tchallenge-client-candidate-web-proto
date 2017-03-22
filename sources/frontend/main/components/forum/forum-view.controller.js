(function () {

  'use strict'

  angular
      .module('application.forum')
      .controller('forumViewController', [
        '$state',
        '$stateParams',
        'forumService',
        'forumAdmissionService',
        ForumViewController
      ]);

  function ForumViewController($state, $stateParams, forumService, forumAdmissionService) {

    var self = this;

    init();

    function init() {
      forumService
          .get($stateParams['forumId'])
          .then(function (result) {
            self.forum = result.data;
          });
    }
  }
})();
