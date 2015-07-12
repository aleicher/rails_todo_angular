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
          todo = todos[i];
          todo.due_date = new Date(todo.due_date);
          $scope.todos.push(todo);
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
