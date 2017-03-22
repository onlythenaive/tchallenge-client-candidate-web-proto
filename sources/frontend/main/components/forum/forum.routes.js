(function () {

  'use strict'

  angular
      .module('application.forum')
      .config([
        '$stateProvider',
        configureForumStates
      ]);

  function configureForumStates($stateProvider) {

    $stateProvider

        .state('application.forum', {
          url: 'forums/:forumId',
          views: {
            '@application': {
              component: 'forumView'
            }
          }
        })

        .state('application.forumAdmission', {
          url: 'forums/admissions/:admissionId',
          views: {
            '@application': {
              component: 'forumAdmissionView'
            }
          }
        });
  }
})();
