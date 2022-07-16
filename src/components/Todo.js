export const Todo = ({todo, taskCompleted, removeTodo}) => {

    
    function handleRemove () {
        removeTodo(todo.id);
    }
    return(
        <>        
        <div className="d-flex justify-content-center mt-3">          
           <h4>{todo.task}</h4>
           <button onClick={handleRemove} className="btn btn-secondary delete" type="submit">-</button>
        </div>
        
        </>
     
       
    )
}