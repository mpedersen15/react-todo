import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase';

var requireLogin = (nextState, replace, next) => {
	if (!firebase.auth().currentUser){
		console.log('not logged in => redirect to login');
		replace('/');
	}
	next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
	if (firebase.auth().currentUser){
		console.log('logged in => redirect to /todos');
		replace('/todos');
	}
	next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" >
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
    </Route>
  </Router>
);
