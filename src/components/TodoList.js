// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    const {tasks, onCompletedClick, searchField} = props;

    return (
        <div className="todo-list">
            {tasks.length <= 0 &&
                <h4>Add your tasks!..</h4>
            }
            {
                tasks.map(task => {
                    return (
                        <Todo task={task} key={task.id} onCompletedClick={onCompletedClick} searchField={searchField} />
                    );
                })
            }
        </div>
    );
}

export default TodoList;