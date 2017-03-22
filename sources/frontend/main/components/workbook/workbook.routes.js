(function () {

  'use strict'

  angular
      .module('application.workbook')
      .config([
        '$stateProvider',
        configureStates
      ]);

  function configureStates($stateProvider) {

    $stateProvider

        .state('application.flow.workbook', {
          url: 'workbooks/:workbookId',
          views: {
            '@application.flow': {
              component: 'workbookView'
            }
          }
        })

        .state('application.flow.workbookEssay', {
          url: 'workbooks/:workbookId/essay',
          views: {
            '@application.flow': {
              component: 'workbookEssayView'
            }
          }
        })

        .state('application.flow.workbookFeedback', {
          url: 'workbooks/:workbookId/feedback',
          views: {
            '@application.flow': {
              component: 'workbookFeedbackView'
            }
          }
        });
  }
})();
