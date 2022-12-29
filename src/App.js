import React, { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((t) => t.id === editId);
      const updatedTodos = todos.map((t) => {
        if (t.id === editTodo.id) {
        
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

        <TodoForm 
          handleSubmit={handleSubmit} 
          todo = {todo} 
          setTodo={setTodo} 
          editId={editId}
        />

        <Todolist
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />


      </div>
    </div>  
  )
}

export default App
