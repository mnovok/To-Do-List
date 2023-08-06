import React, {useState} from 'react'

export const ToDoForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); //prevent page reloading

        addTodo(value);

        setValue("");
    }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input autoFocus
        type='text' 
        className='todo-input' 
        value={value}
        placeholder='What to do, Ditto?'
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
