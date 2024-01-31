import PropTypes from "prop-types";

const TodoForm = ({ addItem, itemToAdd, setItemToAdd, setTodos }) => {
  const handleClear = () => {
    setTodos([]);
  };

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={addItem}>
        <label htmlFor="todo-input">Todo: </label>
        <input
          id="todo-input"
          type="text"
          onChange={(event) => setItemToAdd(event.target.value)}
          value={itemToAdd}
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={() => handleClear()}>Clear Todos</button>
    </>
  );
};

TodoForm.propTypes = {
  itemToAdd: PropTypes.string,
  addItem: PropTypes.func,
  setItemToAdd: PropTypes.func,
  setTodos: PropTypes.func,
};

export default TodoForm;
