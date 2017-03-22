(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {
      it.bootstrapEntities.forEach(function (entity) {
        it.entities.insertOne(entity);
      });
    }
  };

  it.collectionName = 'workbook';

  it.bootstrapEntities = [
  ];

  it.entities = imports.database.collection(it.collectionName);
})({

  database: require('../utility/database')
});
