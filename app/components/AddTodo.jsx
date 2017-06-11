var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class AddTodo extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
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
  }

  render(){
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="newTodo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
