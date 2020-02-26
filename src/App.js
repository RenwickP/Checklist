import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

function App() {
  const [todos, setTodos] = useState(["todo1", "todo2"]);
  return (
    <>
      <List toDoList={todos} />

      <input type="text" />
      <button> Add</button>
      <button> Clear </button>
      <div>0 left</div>
    </>
  );
}

export default App;
