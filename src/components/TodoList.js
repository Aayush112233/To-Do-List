import React from "react";
import { Todo } from "./Todo";
export const TodoList = ({todos, removeTodo}) => {
    return(
      <ul>
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>            
        ))}
      </ul>
    )
}