(function () {

  'use strict'

  angular
      .module('application.forum')
      .service('forumService', [
        '$http',
        'urlResolverService',
        ForumService
      ]);

  function ForumService($http, urlResolverService) {

    var self = this;

    self.get = function (forumId) {
      return $http
          .get(urlResolverService.resolveDataUrl('forums', forumId));
    };
  }
})();
