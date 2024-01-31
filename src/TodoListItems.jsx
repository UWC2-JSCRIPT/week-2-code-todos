import PropTypes from "prop-types";

const TodoListItems = ({ todos, setTodos }) => {
  const handleToDoFinished = (index) => {
    // const arrOne = todos.slice(0, index);
    // const arrTwo = todos.slice(index+ 1);

    // todos[index].isCompleted = false;

    // setTodos([...arrOne, ...arrTwo])

    const updatedTodo = todos[index];
    updatedTodo.isCompleted = !updatedTodo.isCompleted;

    const arrOne = todos.slice(0, index);
    const arrTwo = todos.slice(index + 1);

    setTodos([...arrOne, updatedTodo, ...arrTwo]);
  };

  return (
    <div>
      <h2>Not Yet Completed</h2>
      <ul>
        {todos.map((todo, index) => {
          if (todo.isCompleted === false) {
            return (
              <li key={`todo-${index}`}>
                {todo.text} {index}{" "}
                <button onClick={() => handleToDoFinished(index)}>
                  {todo.isCompleted ? "UNDO" : "DONE"}
                </button>
              </li>
            );
          }
        })}
      </ul>

      <h2>Completed</h2>
      <ul>
        {todos.map((todo, index) => {
          if (todo.isCompleted === true) {
            return (
              <li key={`todo-${index}`}>
                {todo.text}{" "}
                <button onClick={() => handleToDoFinished(index)}>
                  {todo.isCompleted ? "UNDO" : "DONE"}
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

TodoListItems.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isCompleted: PropTypes.bool,
    }),
  ).isRequired,
  setTodos: PropTypes.func,
};

export default TodoListItems;
