var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Do homework'
        },
        {
          id: 2,
          text: 'Feed dogs'
        },
        {
          id: 3,
          text: 'Learn React'
        },
        {
          id: 4,
          text: 'Become awesome!'
        }
      ]
    };
  },
  handleAddTodo: function(newText){
    console.log('handling add todo', newText);
    var newTodos = this.state.todos.slice(0);
    newTodos.push({
      id: newTodos.length + 1,
      text: newText
    });
    this.setState({
      todos: newTodos
    });
  },
  handleSearch: function(searchText, showCompleted){
    console.log('handle search', searchText, showCompleted);
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
