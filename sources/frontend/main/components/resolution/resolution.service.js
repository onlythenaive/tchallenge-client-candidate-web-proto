(function () {

  'use strict'

  angular
      .module('application.resolution')
      .service('resolutionService', [
        '$http',
        'urlResolverService',
        ResolutionService
      ]);

  function ResolutionService($http, urlResolverService) {

    var self = this;

    self.get = function (resolutionId) {
      return $http
          .get(urlResolverService.resolveDataUrl('resolutions', resolutionId));
    };
  }
})();
