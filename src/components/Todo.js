const Todo = (props) => {
  return (
    <div>
      <span>{props.todo}</span>
      <button type="button">Done</button>
    </div>
  );
};

export default Todo;
