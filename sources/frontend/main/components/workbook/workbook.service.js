(function () {

  'use strict'

  angular
      .module('application.workbook')
      .service('workbookService', [
        '$http',
        'urlResolverService',
        WorkbookService
      ]);

  function WorkbookService($http, urlResolverService) {

    var self = this;

    self.get = function (workbookId) {
      return $http
          .get(urlResolverService.resolveDataUrl('workbooks', workbookId));
    };

    self.create = function (resolution) {
      return $http
          .post(urlResolverService.resolveDataUrl('workbooks'), resolution);
    };

    self.submit = function (workbook) {
      return $http
          .post(urlResolverService.resolveDataUrl('workbooks', workbook.id, 'submission'), workbook);
    };

    self.submitEssay = function (essay) {
      return $http
          .post(urlResolverService.resolveDataUrl('workbooks', essay.workbookId, 'essay'), essay);
    };

    self.submitFeedback = function (feedback) {
      return $http
          .post(urlResolverService.resolveDataUrl('workbooks', feedback.workbookId, 'feedback'), feedback);
    };

    self.decline = function (workbook) {
      return $http
          .post(urlResolverService.resolveDataUrl('workbooks', workbook.id, 'declination'), workbook);
    };
  }
})();
