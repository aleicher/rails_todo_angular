app.controller('TodosCtrl', ['$scope', 'Todo', function($scope, Todo) {
  $scope.todos = Todo.all();
}]);
