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

  Todo.prototype.update = function(todo, attributes) {
    return this.service.update({todoId: todo.id}, attributes);
  };

  Todo.prototype.get = function($id) {
    return this.service.get({todoId: $id});
  };

  return new Todo;
}]);
