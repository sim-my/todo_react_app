
import * as todoActions from "../actions/TodoAction";

import { connect } from "react-redux";

const TodoInput = (props) => {
  return (
    <div>
      <input value={props.input} onChange={(event) => props.changeInput(event.target.value)} className="todo-input" type="text" />
      <button type="button" onClick={() => {
        props.addTodo({title:props.input});
        props.changeInput("");
        }}>Add</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    input: state.input,
    todoList : state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo : todo => dispatch(todoActions.addTodo(todo)),
    changeInput: input => dispatch(todoActions.changeInput(input))
  }  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);

