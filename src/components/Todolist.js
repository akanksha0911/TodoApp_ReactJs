import React from 'react'

const Todolist = ({todos, handleEdit, handleDelete}) => {
  return (
    <ul className="todolist">
    {todos.map((t) => (
      <li className='singletodo'>
        <span className="todotext" key={t.id}>{t.todo}</span>
        <button onClick={() => handleEdit(t.id)} >Edit</button>       
        <button onClick={() => handleDelete(t.id)}>Delete</button>
      </li>
  ))}         
  </ul>
  )
}

export default Todolist
