import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <ul>
      {props.todoList.map((todo, index) => (
        <li key={index}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
