app.controller('TodosCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Todos = $resource('/api/todos');
  $scope.todos = Todos.query();
}]);
