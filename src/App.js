import React, { useState, useRef } from "react";

import List from "./List";

function App() {
  let [todos, setTodos] = useState([]);
  const todoNameRef = useRef;
  function addTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
  }
  return (
    <>
      <List todoList={todos} />

      <input ref={todoNameRef} type="text" />
      <button onClick={addTodo}> Add</button>
      <button> Clear </button>
      <div>0 left</div>
    </>
  );
}

export default App;
