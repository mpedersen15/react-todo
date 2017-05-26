var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
  getInitialState: function(){
    return {
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
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
