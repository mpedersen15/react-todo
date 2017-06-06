import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAjNQvpJRss4BZ81T_a9okiowZUZfxypOM",
  authDomain: "mjp-todo.firebaseapp.com",
  databaseURL: "https://mjp-todo.firebaseio.com",
  projectId: "mjp-todo",
  storageBucket: "mjp-todo.appspot.com",
  messagingSenderId: "674411854674"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
      name: 'Todo App',
      version: '1.0.0'
  },
  isRunning: false,
  user: {
    name: 'Matt',
    age: 27
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Feed the dogs'
});

todosRef.push({
  text: 'Play with the dogs'
});

todosRef.once('value').then((snapshot) => {
  console.log('snapshot', snapshot.val());
});
