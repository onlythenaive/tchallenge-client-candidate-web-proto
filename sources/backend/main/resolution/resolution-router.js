(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/admissions';

  it.router = imports.express.Router()

      .get('/', function (request, response) {
        response.json(imports.service.getAll());
      })

      .get('/:admissionId', function (request, response) {
        response.json(imports.service.getById(request.params.admissionId));
      })

      .post('/', function (request, response) {
        response.json(imports.service.create(request.body));
      });
})({

  express: require('express'),

  service: require('./admission-service')
});
