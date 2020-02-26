import React from "react";
import Todo from "./Todo";

export default function List({ todoList }) {
  return todoList.map(todo => {
    return <Todo key={todo.name} todo={todo} />;
  });
}
