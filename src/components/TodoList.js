import Todo from "./Todo";

import {connect} from "react-redux";

const TodoList = (props) => {
  return (
    <ul>
      {props.todoList.map((todo, index) => (
        <li key={index}>
          <Todo todo={todo} />        </li>
        
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todoList:state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
