import { useEffect, useState } from 'react'

const EditarForm = ({editToDo, setEditar, id, tarea}) => {

    useEffect(()=>{
        setInput(tarea);
    }, [tarea]);

    const [input, setInput] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEditar({editable:false, id:0});
        if(input.length > 0){
            editToDo(id, input)
        }
        setInput("");
    }
    
    const handleChange = ({target})=>{
        setInput(target.value);
    }

    const cancelar = ()=>{
        setInput(tarea);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange}/>
            <button className="buttonVerde">Guardar</button>
            <button onClick={cancelar} className="buttonRojo">Cancelar</button>
        </form>
    )
}

export default EditarForm;
