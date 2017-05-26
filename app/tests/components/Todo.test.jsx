var React = require('react'),
ReactDOM = require('react-dom'),
TestUtils = require('react-addons-test-utils'),
expect = require('expect'),
$ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
  it ('should exist', () => {
    expect(Todo).toExist();
  });
});
