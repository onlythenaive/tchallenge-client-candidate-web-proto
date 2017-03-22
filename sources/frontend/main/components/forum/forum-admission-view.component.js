(function () {

  'use strict'

  angular
      .module('application.forum')
      .component('forumAdmissionView', {
        controller: 'forumAdmissionViewController',
        controllerAs: 'self',
        templateUrl: 'static/components/forum/forum-admission-view.component.html'
      });
})();
