(function () {

  'use strict'

  angular
      .module('application.forum')
      .component('forumAdmissionForm', {
        bindings: {
          forum: '<'
        },
        controller: 'forumAdmissionFormController',
        controllerAs: 'self',
        templateUrl: 'static/components/forum/forum-admission-form.component.html'
      });
})();
