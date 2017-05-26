var React = require('react');

var TodoList = require('TodoList');

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
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
