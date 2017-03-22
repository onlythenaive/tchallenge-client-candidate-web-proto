(function () {

  angular
      .module('application.tasks')
      .controller('taskController', [
        'taskService',
        TaskController
      ]);

  function TaskController(taskService) {

    var self = this;
  }
})();
