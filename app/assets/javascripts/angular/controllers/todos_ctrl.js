app.controller('TodosCtrl', ['$scope', 'Todo',
  function($scope, Todo) {
    $scope.reloadTodos = reloadTodos;
    $scope.updateTodo = updateTodo;
    $scope.createTodo = createTodo;

    $scope.reloadTodos();

    function reloadTodos() {
      $scope.todos = Todo.all();
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
