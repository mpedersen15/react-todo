var expect = require('expect');

var actions = require('actions');

describe('actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Example text'
    };

    var response = actions.setSearchText(action.searchText);

    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Example todo'
    };

    var response = actions.addTodo(action.text);

    expect(response).toEqual(action);
  });

  it('should generate remove todo action', () => {
    var action = {
      type: 'REMOVE_TODO',
      id: 1
    };

    var response = actions.removeTodo(action.id);

    expect(response).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    var response = actions.toggleShowCompleted();

    expect(response).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    var response = actions.toggleTodo(1);

    expect(response).toEqual(action);
  });
});
