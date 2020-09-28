import React from 'react'

const TodoForm = ({ taskField, onTaskFieldChange, onAddTodoClick, onClearClick }) => {
    return (
        <div>
            <input type='text' name='taskField' value={taskField} onChange={onTaskFieldChange} placeholder='...todo' />
            <button onClick={onAddTodoClick} >Add Todo</button>
            <button onClick={onClearClick} >Clear Completed</button>
        </div>
    );
}

export default TodoForm;