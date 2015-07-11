app.controller('TodosCtrl', ['$scope', 'Todo', function($scope, Todo) {
  $scope.todos = Todo.all();
  Todo.update(1, {title: "updated title"});

  $scope.reloadTodos = function() {
    $scope.todos = Todo.all();
  };
  $scope.createTodo = function(){
    Todo.create($scope.newTodo);
    $scope.reloadTodos();
  };
}]);
