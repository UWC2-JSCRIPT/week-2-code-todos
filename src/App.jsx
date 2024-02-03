import { useState } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const updateTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
      <ThemeContext.Provider value={{ theme, updateTheme }}>
      <TodoApp />
    </ThemeContext.Provider>
  );
}

export default App;
