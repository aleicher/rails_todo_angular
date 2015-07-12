app.controller('TodosCtrl', ['$scope', 'Todo',
  function($scope, Todo) {
    $scope.reloadTodos = reloadTodos;
    $scope.updateTodo = updateTodo;
    $scope.createTodo = createTodo;

    $scope.reloadTodos();

    function reloadTodos() {
      $scope.todos = [];
      Todo.all().$promise.then(function(todos){
        for (var i = 0; i < todos.length; i++){
          $scope.todos.push(todos[i]);
        }
      });
    }

    function updateTodo(todo) {
      Todo.update(todo);
    }

    function createTodo() {
      Todo.create($scope.newTodo);
      $scope.reloadTodos();
    }
  }
]);
