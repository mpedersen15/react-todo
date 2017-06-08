import firebase from 'firebase';

// console.log('process.env.API_KEY', process.env.API_KEY, process.env.NODE_ENV );

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };


  firebase.initializeApp(config);
} catch(err) {
  console.log('error in firebase setup', err)
}

export var githubProvider = new firebase.auth.GithubAuthProvider();

export var firebaseRef = firebase.database().ref();

export default firebase;
