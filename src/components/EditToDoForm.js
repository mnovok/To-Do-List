import React, {useState} from 'react'

export const EditToDoForm = ({editTodo, task}) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); //prevent page reloading

        editTodo(value, task.id);

        setValue("");
    }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input' 
        value={value}
        placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
