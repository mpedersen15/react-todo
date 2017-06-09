import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123abc',
        text: 'Example todo',
        completed: false,
        createdAt: 1515
      }
    };

    var response = actions.addTodo(action.todo);

    expect(response).toEqual(action);
  });



  it('should generate add todos action', () => {
    var todos =[{
      id: 111,
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 1515
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    }

    var response = actions.addTodos(todos);

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

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {
        completed: false
      }
    };

    var response = actions.updateTodo(action.id, action.updates);

    expect(response).toEqual(action);
  });

  it('should generate login action', () => {
    var action = {
      type: 'LOGIN',
      uid: 1515,
    };

    var response = actions.login(action.uid);

    expect(response).toEqual(action);
  });

  it('should generate logout action', () => {
    var action = {
      type: 'LOGOUT',
    };

    var response = actions.logout();

    expect(response).toEqual(action);
  });

  /*--- FIREBASE TESTS ---*/
  describe('tests with firebase todos', () => {
    var testTodoRef;
    var testTodoText = 'Somthing to do';
    var uid;
    var todosRef;
    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();

      }).then(() => {
        testTodoRef = todosRef.push();

        return testTodoRef.set({
          text: testTodoText,
          completed: false,
          createdAt: 1515
        });
      }).then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    it ('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();

      }, done)
    });

    it('should fetch todos and dispatch ADD_TODOS', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toBe('ADD_TODOS');
        expect(mockActions[0].todos.length).toBe(1);
        expect(mockActions[0].todos[0].text).toBe(testTodoText);

        done();
      }, done);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({auth: {uid}});
      const todoText = "My todo item";

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });

  });

});
