var React = require('react'),
ReactDOM = require('react-dom'),
TestUtils = require('react-addons-test-utils'),
expect = require('expect'),
$ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it ('should exist', () => {
    expect(TodoApp).toExist();
  });
});
