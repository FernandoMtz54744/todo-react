const ToDoItem = ({tarea, id, completado, deleteTodo,updateCompleted, editTodo})=>{
    return(
        <div className="Todo" id={id} completado={completado.toString()}>
            <p>{tarea}</p>    
            <div className="actions">
                <button onClick={()=>updateCompleted(id, completado)} className="buttonVerde">✔️</button>
                <button onClick={()=> editTodo(id)} className="buttonNaranja">✏️</button>
                <button onClick={()=>deleteTodo(id)} className="buttonRojo">🗑️</button>
            </div>
        </div>
    )
}

export default ToDoItem;