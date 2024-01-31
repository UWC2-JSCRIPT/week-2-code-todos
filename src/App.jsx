import { useState } from "react";
import "./App.css";
import TodoListItems from "./TodoListItems";
import TodoForm from "./TodoForm";

function App() {
  const [itemToAdd, setItemToAdd] = useState("");
  const [todos, setTodos] = useState([
    { text: "wash dishes", isCompleted: false },
    { text: "mop floor", isCompleted: false },
    { text: "teach class", isCompleted: false },
    { text: "cook food", isCompleted: false },
    { text: "tune guitar", isCompleted: false },
  ]);

  const addItem = (event) => {
    event.preventDefault();

    if (itemToAdd === "") {
      window.alert("You must type in a value");
      return;
    }

    setTodos([...todos, { text: itemToAdd, isCompleted: false }]);
    setItemToAdd("");
  };

  return (
    <>
      <TodoForm
        addItem={addItem}
        itemToAdd={itemToAdd}
        setItemToAdd={setItemToAdd}
        setTodos={setTodos}
      />
      <TodoListItems todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
