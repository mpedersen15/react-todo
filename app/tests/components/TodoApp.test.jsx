var React = require('react'),
ReactDOM = require('react-dom'),
TestUtils = require('react-addons-test-utils'),
expect = require('expect'),
$ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it ('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTodo', () => {
    it('should add new todo to todos state', () => {
      var todoText = "A new test todo";

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

      todoApp.setState({todos: []});
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos.length).toBe(1);
      expect(todoApp.state.todos[0].text).toBe(todoText);
    });
  });

  describe('handleToggle', () => {
    it('should toggle completed value', () => {
      var todoData = {
        id: 11,
        text: "Test features",
        completed: false
      }

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      expect(todoApp.state.todos[0].completed).toBe(false);
      
      todoApp.handleToggle(11);

      expect(todoApp.state.todos[0].completed).toBe(true);
    });
  });
});
