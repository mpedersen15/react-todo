var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
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

    it('should filter todos when search text is valid and uppercase', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'Second');

      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos when search text is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });
  });
});
