const Todo = (props) => {
  return (
    <div>
      <span>{props.todo.title} - {props.todo.completed ? "Completed" : "Not Completed"}</span>
      <button type="button">Done</button>
    </div>
  );
};

export default Todo;
