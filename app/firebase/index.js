import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAjNQvpJRss4BZ81T_a9okiowZUZfxypOM",
    authDomain: "mjp-todo.firebaseapp.com",
    databaseURL: "https://mjp-todo.firebaseio.com",
    projectId: "mjp-todo",
    storageBucket: "mjp-todo.appspot.com",
    messagingSenderId: "674411854674"
  };

  firebase.initializeApp(config);
} catch(err) {
  console.log('error in firebase setup', err)
}

export var firebaseRef = firebase.database().ref();

export default firebase;
