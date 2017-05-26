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
          text: 'Do homework'
        },
        {
          id: uuid(),
          text: 'Feed dogs'
        },
        {
          id: uuid(),
          text: 'Learn React'
        },
        {
          id: uuid(),
          text: 'Become awesome!'
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
          text: newText
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
