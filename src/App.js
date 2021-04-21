import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoItem from './Components/ToDoItem';
import EditarForm from './Components/EditarForm';

const Filter_MAP = {
  All: ()=> true,
  Unfinished: (todo) => !todo.completado,
  Finished: (todo) => todo.completado
}

function App() {
  const [Todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const deleteTodo = (id)=>{
    const newTodos = Todos.filter(todo => todo.id!==id);
    setTodos(newTodos);
  }

  const updateCompleted = (id, completado)=>{
    setTodos(Todos.map(todo =>{
      if(todo.id === id){
        todo.completado = !completado
      }
      return todo;
    }));
  }

  const editToDo = (id, editado)=>{
    const newTodos = Todos.map(todo =>{
      if(todo.id === id){
        return {...todo, tarea:editado}
      }else{
        return todo;
      }
    });
    setTodos(newTodos);
  }

  //agregar condicional para editar
  const [Editar, setEditar] = useState({editable:false, id:0});

  const doEditable = (id)=>{
    setEditar({editable:true, id:id})
  }

  const cambiarFiltro = (filtro)=>{
    setFilter(filtro)
  }

  return (
    <div className="App">
      <Form Todos={Todos} setTodos={setTodos}/>
      <div className="botonesFiltro">
      <button onClick={() => cambiarFiltro("All")} className={filter==="All"?"activo":""}>Todos</button>
      <button onClick={() => cambiarFiltro("Finished")} className={filter==="Finished"?"activo":""}>Terminados</button>
      <button onClick={() => cambiarFiltro("Unfinished")} className={filter==="Unfinished"?"activo":""}>Sin terminar</button>
      </div>
      {!Editar.editable?
      Todos.filter(Filter_MAP[filter]).map(todo => 
      <ToDoItem key={todo.id} tarea={todo.tarea} id={todo.id} 
                completado={todo.completado} deleteTodo={deleteTodo} 
                updateCompleted = {updateCompleted} editTodo = {doEditable}/>)
      :
      Todos.filter(todo => todo.id === Editar.id).map(todo => 
      <EditarForm key={todo.id} editToDo={editToDo} setEditar={setEditar} id={todo.id} tarea={todo.tarea}/>)
      }
    </div>
  );
}

export default App;
