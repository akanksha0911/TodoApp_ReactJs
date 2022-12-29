import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => { 
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((t) => t.id === editId);
      const updatedTodos = todos.map((t) => {
        if (t.id === editId) {
        
          return {id: t.id, todo};
        }
        return t;
      });
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    
    if (todo !== "") {
      setTodos([{id: `${todo}-${Date.now()}`, todo},...todos]);
      setTodo("");
      setEditId(0);
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo);
    setEditId(id);

  };



  return (
    <div className='app'>
      <div className='container'>
        <h1>To-Do List App</h1>


         <form className='todoForm' onSubmit={handleSubmit}>
          <input type = 'text' 
                 value={todo} 
                 onChange={(e)=> setTodo(e.target.value)}/>
          <button type="submit">{editId? "Edit" : "Go"}</button>
         </form>



         <ul className="todolist">
          {todos.map((t) => (
            <li className='singletodo'>
              <span className="todotext" key={t.id}>{t.todo}</span>
              <button onClick={() => handleEdit(t.id)} >Edit</button>
              
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
        ))}  
            
        </ul>


      </div>

   
    </div>  
  )
}

export default App
