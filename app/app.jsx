var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('My new todo!'))
store.dispatch(actions.setSearchText('new'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<TodoApp />,
	document.getElementById('app')
);
