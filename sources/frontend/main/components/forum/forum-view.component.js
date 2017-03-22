(function () {

  'use strict'

  angular
      .module('application.forum')
      .component('forumView', {
        controller: 'forumViewController',
        controllerAs: 'self',
        templateUrl: 'static/components/forum/forum-view.component.html'
      });
})();
