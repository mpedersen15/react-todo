import firebase, {firebaseRef, githubProvider} from 'app/firebase/index';
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

    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

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
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
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
    var uid = getState().auth.uid;
    return firebaseRef.child(`users/${uid}/todos`).once('value').then((snapshot) => {
      var todosObject = snapshot.val() || {};
      var keys = Object.keys(todosObject);
      if (keys.length > 0){
        var todosArray = keys.map((key) => {
          return {
            ...todosObject[key],
            id: key
          }
        });
      }else{
        var todosArray = [];
      }

      dispatch(addTodos(todosArray));
    });
  }
}

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
}

export var logout = () => {
  return {
    type: "LOGOUT"
  };
}

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((res) => {
      console.log('login result', res);
    }, (error) => {
      console.log('login error', err);
    });
  }
}

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('logout success');
    });
  }
}
