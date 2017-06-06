var React = require('react'),
ReactDOM = require('react-dom'),
TestUtils = require('react-addons-test-utils'),
expect = require('expect'),
$ = require('jQuery');

var {Todo} = require('Todo');

describe('Todo', () => {
  it ('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo test',
      completed: true
    }

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: "TOGGLE_TODO",
      id: todoData.id
    });
  });
});
