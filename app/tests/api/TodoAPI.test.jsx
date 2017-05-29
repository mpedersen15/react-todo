var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 15,
        text: 'Test todo',
        completed: true
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);

    });

    it('should not set invalid todos array', () => {
      var badTodos = {
        a: 'b'
      };

      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return an empty array', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return valid todos array', () => {
      var todos = [{
        id: 15,
        text: 'Test todo',
        completed: true
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);

    });
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'First todo',
        completed: true
      },{
        id: 2,
        text: 'Second todo',
        completed: false
      },{
        id: 3,
        text: 'Third todo',
        completed: true
      },
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed todos if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort todos with non-completed todos first', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos when search text is valid', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'second');

      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos when search text is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });
  });
});
