(function () {

  angular
      .module('application.tasks')
      .component('task', {
        controller: 'taskController',
        controllerAs: 'self',
        templateUrl: 'static/components/tasks/task.component.html'
      });
})();
