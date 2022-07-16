import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

const LOCAL_STORAGE_KEY = "react-toDo-List";
export const Home = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            if (savedTodos){
                setTodos(savedTodos);
            }
        }, [])

    useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
            }, [todos])
    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }

    function removeTodo (id){
        setTodos(todos.filter(todo => todo.id !== id))
    }
    return (
        
        <>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}  removeTodo={removeTodo} />
        </>
    )
}