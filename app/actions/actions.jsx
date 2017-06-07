import firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
}

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
}

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  }
}

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
}

export var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  };
}

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
}

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
}

export var addTodos = (todos) => {
  return {
    type: "ADD_TODOS",
    todos
  };
}

export var startAddTodos = () => {
  return (dispatch, getState) => {
    return firebaseRef.child('todos').once('value').then((snapshot) => {
      var todosObject = snapshot.val();
      var keys = Object.keys(todosObject);
      var todosArray = keys.map((key) => {
        return {
          ...todosObject[key],
          id: key
        }
      });
      dispatch(addTodos(todosArray));
    });
  }
}
