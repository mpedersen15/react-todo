var React = require('react'),
ReactDOM = require('react-dom'),
{Provider} = require('react-redux'),
TestUtils = require('react-addons-test-utils'),
expect = require('expect'),
$ = require('jQuery');

var configureStore = require('configureStore');
import {TodoApp} from 'TodoApp';
// var TodoList = require('TodoList');
import TodoList from 'TodoList';


describe('TodoApp', () => {
  it ('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toBe(1);
  });
});
