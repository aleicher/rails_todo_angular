app.controller('TodosCtrl', ['$scope', 'Todo', function($scope, Todo) {
  $scope.todos = Todo.all();
  Todo.get(1).$promise.then(function(todo){
    console.log(todo);
    Todo.update(todo, {title: "updated title2"});
  });

  $scope.reloadTodos = function() {
    $scope.todos = Todo.all();
  };
  $scope.createTodo = function(){
    Todo.create($scope.newTodo);
    $scope.reloadTodos();
  };
}]);
