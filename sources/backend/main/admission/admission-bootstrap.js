(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {
      it.bootstrapAdmissions.forEach(function (admission) {
        imports.service.create(admission);
      });
    }
  };

  it.bootstrapAdmissions = [
    {
      forumId: '1',
      candidateId: '1',
      specializationId: 'JAVADEV'
    }
  ];
})({

  service: require('./admission-service')
});
