var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('reducers', () => {

  describe('searchTextReducer', () => {
    it ('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted from false to true', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });

    it('should toggle showCompleted from true to false', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(true), df(action));

      expect(res).toBe(false);
    });
  });


  describe('todosReducer', () => {
    it ('should add new todo', () => {
      var action ={
        type: 'ADD_TODO',
        text: 'Feed the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });

    it('should toggle todo to completed', () => {
      var defaultTodos = [{
        id: 15,
        text: 'Write test for toggle todo',
        completed: false,
        createdAt: 1496428153805,
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 15
      }

      var res = reducers.todosReducer(df(defaultTodos), df(action));

      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
    });

    it('should toggle todo to not completed', () => {
      var defaultTodos = [{
        id: 15,
        text: 'Write test for toggle todo',
        completed: true,
        createdAt: 1496428151805,
        completedAt: 1496428153805
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 15
      }

      var res = reducers.todosReducer(df(defaultTodos), df(action));

      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });

});
