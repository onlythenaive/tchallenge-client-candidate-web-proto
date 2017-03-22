(function () {

  'use strict'

  angular
      .module('application.utility')
      .service('urlResolverService', [
        UrlResolverService
      ]);

  function UrlResolverService() {

    // var baseUrl =  'http://t-challenge.ru:3000';
    var baseUrl =  'http://localhost:3000';

    var prefixData = 'data';

    var self = this;

    self.resolveDataUrl = function () {
      var url = [];
      if (baseUrl) {
        url.push(baseUrl);
      }
      url.push(prefixData);
      for (var i = 0; i < arguments.length; i++) {
        url.push(arguments[i]);
      }
      return url.join('/');
    };
  }
})();
