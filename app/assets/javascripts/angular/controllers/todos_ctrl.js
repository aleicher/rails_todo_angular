app.controller('TodosCtrl', ['$scope', 'Todo', function($scope, Todo) {
  $scope.todos = Todo.all();

  $scope.reloadTodos = function() {
    $scope.todos = Todo.all();
  };
  $scope.createTodo = function(){
    Todo.create($scope.newTodo);
    $scope.reloadTodos();
  };
}]);
