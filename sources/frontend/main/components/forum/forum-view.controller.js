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

    self.$onInit = function () {
      init();
    };

    self.toForm = function () {
      $('html, body').animate({
        scrollTop: $("#shortname").offset().top - 100
      }, 1000);
      $("#shortname").focus();
    }

    function init() {
      forumService
          .get($stateParams['forumId'])
          .then(function (result) {
            self.forum = result.data;
          });
    }
  }
})();
