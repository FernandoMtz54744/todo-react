import { useState } from "react";
import {nanoid} from "nanoid"

const Form = ({Todos, setTodos})=>{
    const [input, setInput] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input.length > 0){
            setTodos([{id: nanoid(3), tarea:input, completado:false}, ...Todos]);
        }
        setInput("");
    }

    const handleChange = ({target})=>{
        setInput(target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Agrega tu tarea</h1>
            <div className="datos">
            <input type="text" name="Todo" placeholder="Agrega una tarea" value={input} onChange={handleChange} autoComplete="off"/>
            <button id="agregar" >Agregar tarea</button>
            </div>    
        </form>
    );
}

export default Form;