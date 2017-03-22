(function () {

  'use strict'

  angular

      .module('application', [
        'ui.router',
        'ngStorage',
        'application.utility',
        'application.security',
        'application.forum',
        'application.resolution',
        'application.workbook'
      ]);
})();
