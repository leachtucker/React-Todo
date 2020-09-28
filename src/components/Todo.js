import React from 'react'
import styles from './Todo.css'

const Todo = ({task, onCompletedClick, searchField}) => {
    return (
        <div className={task.completed === true ? 'completed' : 'incomplete'} className={task.task.includes(searchField) === true && searchField != '' ? 'highlight' : ''} >
            <p onClick={() => {onCompletedClick(task.id)}} >{task.task}</p>
        </div>
    );
}

export default Todo;