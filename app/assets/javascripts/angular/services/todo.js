app.factory('Todo', ['$resource', function($resource) {
  function Todo() {
    this.service = $resource('/api/todos/:todoId', {todoId: '@id'});
  }
  Todo.prototype.all = function() {
    return this.service.query();
  };
  return new Todo;
}]);
