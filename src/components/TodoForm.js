import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import {Form} from "react-bootstrap"


export const TodoForm =({addTodo}) => {
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        isCompleted: false
    })

    function handleTaskInput (e) {
        setTodo({...todo, task: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4()});
            setTodo({ ...todo, task: ""})
        }
    }

    
    return(
        <>
         <div className="container-fluid">
                <div class="row d-flex justify-content-center ">
                    <div class="col-md-12 mainList d-flex align-items-center">
                        <div className="first align-items-center">
                            <h1>To-Do List</h1>
                            <Form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center mt-5" >
                                <input name="task "type="text" value={todo.task} onChange={handleTaskInput}className="mb-6 taskInput" placeholder="Write down a task." />
                                <button className="btn btn-secondary" type="submit">Add</button>
                            </Form>

                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}