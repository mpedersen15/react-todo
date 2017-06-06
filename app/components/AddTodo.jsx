var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var newTodo = this.refs.newTodo.value;

    if (newTodo.length > 0){
      // console.log('need to call this.props.onAddTodo(newTodo) with new todo', newTodo);
      this.refs.newTodo.value = "";
      dispatch(actions.startAddTodo(newTodo));
    }else{
      this.refs.newTodo.focus();
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="newTodo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});


export default connect()(AddTodo);
