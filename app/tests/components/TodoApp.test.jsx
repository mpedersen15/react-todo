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
      expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });
  });

  describe('handleToggle', () => {
    it('should toggle completed value to true', () => {
      var todoData = {
        id: 11,
        text: "Test features",
        completed: false,
        createdAt: 0,
        completedAt: undefined
      }

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      expect(todoApp.state.todos[0].completed).toBe(false);

      todoApp.handleToggle(11);

      expect(todoApp.state.todos[0].completed).toBe(true);
      expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle completed value to false', () => {
      var todoData = {
        id: 11,
        text: "Test features",
        completed: true,
        createdAt: 0,
        completedAt: 150000
      }

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      expect(todoApp.state.todos[0].completed).toBe(true);

      todoApp.handleToggle(11);

      expect(todoApp.state.todos[0].completed).toBe(false);
      expect(todoApp.state.todos[0].completedAt).toNotExist();
    });

  });
});
