app.factory('Todo', ['$resource', function($resource) {
  function Todo() {
    this.service = $resource('/api/todos/:todoId',
      {todoId: '@id'},
      {update: {method: 'PUT'}}
    );
  }
  Todo.prototype.all = function() {
    return this.service.query();
  };

  Todo.prototype.create = function(attributes) {
    return this.service.save(attributes);
  };

  Todo.prototype.update = function($id, attributes) {
    return this.service.update({todoId: $id}, attributes);
  };

  return new Todo;
}]);
