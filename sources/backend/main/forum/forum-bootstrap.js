(function (imports) {

  'use strict';

  var it = {};

  module.exports = {

    run: function () {
      it.bootstrapForums.forEach(function (forum) {
        it.forums.insertOne(forum);
      });
    }
  };

  it.forums = imports.database.collection('forums');

  it.bootstrapForums = [
    {
      id: "it2017",
      title: "Найти IT 2017",
      description: "Для посетителей конференции Найти IT 2017",
      introduction: "Добро пожаловать на эту ежегодную конференцию",
      specializations: [
        {
          id: "JAVADEV",
          title: "Java-разработчик"
        },
        {
          id: "TEST",
          title: "Тестировщик ПО"
        }
      ],
      seniorities: [
        {
          id: "STUDENT",
          title: "Студент, начало карьеры"
        },
        {
          id: "JUNIOR",
          title: "Младший инженер"
        }
      ],
      status: "APPROVED",
      periods: [
        {
          since: "2017-04-01T09:00",
          until: "2017-04-01T18:00"
        }
      ]
    },
    {
      id: "joker2016",
      title: "Joker 2016",
      description: "Для посетителей конференции Joker 2016",
      introduction: "Добро пожаловать на эту ежегодную конференцию",
      specializations: [
        {
          id: "JAVADEV",
          title: "Java-разработчик"
        },
        {
          id: "TEST",
          title: "Тестировщик ПО"
        }
      ],
      seniorities: [
        {
          id: "STUDENT",
          title: "Студент, начало карьеры"
        },
        {
          id: "JUNIOR",
          title: "Младший инженер"
        }
      ],
      status: "APPROVED",
      periods: [
        {
          since: "2016-10-14T09:00",
          until: "2016-10-14T18:00"
        },
        {
          since: "2016-10-15T09:00",
          until: "2016-10-15T18:00"
        }
      ]
    }
  ];
})({

  database: require('../utility/database')
});
