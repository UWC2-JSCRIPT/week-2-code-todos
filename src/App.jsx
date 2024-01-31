import { useState } from "react";
import "./App.css";
import TodoListItems from "./TodoListItems";
import TodoForm from "./TodoForm";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [itemToAdd, setItemToAdd] = useState("");
  const [todos, setTodos] = useState([
    { text: "wash dishes", isCompleted: false },
    { text: "mop floor", isCompleted: false },
    { text: "teach class", isCompleted: false },
    { text: "cook food", isCompleted: false },
    { text: "tune guitar", isCompleted: false },
  ]);

  const updateTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

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
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <TodoForm
        addItem={addItem}
        itemToAdd={itemToAdd}
        setItemToAdd={setItemToAdd}
        setTodos={setTodos}
      />
      <TodoListItems todos={todos} setTodos={setTodos} />
    </ThemeContext.Provider>
  );
}

export default App;
