var React = require('react'),
ReactDOM = require('react-dom'),
TestUtils = require('react-addons-test-utils'),
expect = require('expect'),
$ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it ('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each Todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Test todo 1',
      },
      {
        id: 2,
        text: 'Test todo 2'
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todoComponents.length).toBe(2);
  });
});
