class TodosController < ApplicationController
  respond_to :json
  def index
    respond_with Todo.all
  end

  def create
    todo = Todo.new(todo_params)
    todo.done = false
    todo.save
    respond_with todo
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :description, :done)
  end

end
