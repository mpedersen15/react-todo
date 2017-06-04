var React = require('react'),
ReactDOM = require('react-dom'),
{Provider} = require('react-redux'),
TestUtils = require('react-addons-test-utils'),
expect = require('expect'),
$ = require('jQuery');

// var TodoList = require('TodoList');
import { configure } from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it ('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each Todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Test todo 1',
        completed: false,
        completedAt: undefined,
        createdAt: 1515
      },
      {
        id: 2,
        text: 'Test todo 2',
        completed: true,
        completedAt: 2020,
        createdAt: 1515
      }
    ];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todoComponents.length).toBe(2);
  });

  it('should render empty message if no todos', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
});
