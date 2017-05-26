var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Do homework',
          completed: false
        },
        {
          id: uuid(),
          text: 'Feed dogs',
          completed: true
        },
        {
          id: uuid(),
          text: 'Learn React',
          completed: false
        },
        {
          id: uuid(),
          text: 'Become awesome!',
          completed: false
        }
      ]
    };
  },
  handleAddTodo: function(newText){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newText,
          completed: false
        }
      ]
    });
  },
  handleSearch: function(searchText, showCompleted){
    console.log('handle search', searchText, showCompleted);
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
