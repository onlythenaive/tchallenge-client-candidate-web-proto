(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    apply: function (server, routePrefix) {
      server.use(routePrefix + it.path, it.router);
    }
  };

  it.path = '/forums';

  it.router = imports.express.Router()

      .get('/:forumId', function (request, response) {
        response.json(it.forums.findOne({id:request.params.forumId}));
      });

  it.forums = imports.database.collection('forums');
})({

  express: require('express'),

  database: require('../utility/database')
});
