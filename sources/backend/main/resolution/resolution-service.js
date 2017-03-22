(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    create: function (properties) {
      if (!imports.candidateService.getByEmail(properties.email)) {
      }
      return imports.repository.create(properties);
    },

    getAll: function () {
      return imports.repository.findAll();
    },

    getById: function (id) {
      return imports.repository.findById(id);
    }
  };
})({

  repository: require('./resolution-repository'),
  candidateService: require('../candidate/candidate-service')
});
