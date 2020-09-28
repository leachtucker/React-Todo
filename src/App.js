import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskField: '',
      searchField: ''
    }
  }

  onTextFieldChange = (evt) => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  }

  onAddTodoClick = (evt) => {
    evt.preventDefault();

    if (this.state.taskField === '') {
      return;
    }

    const newTodo = {
      task: this.state.taskField,
      id: Date.now(),
      completed: false
    }

    // Resetting taskField and placing new task into state
    this.setState({
      ...this.state,
      taskField: '',
      tasks: [...this.state.tasks, newTodo]
    });
  }

  // Clears tasks that have been checked
  onClearClick = (evt) => {
    evt.preventDefault();
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => {
        return task.completed === false
      })
    });
  }

  onCompletedClick = (taskId) => {
    console.log('Completed task:', taskId);
    this.setState({
      tasks: this.state.tasks.map((task)=>{
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList tasks={this.state.tasks} onCompletedClick={this.onCompletedClick} searchField={this.state.searchField} />
        <TodoForm taskField={this.state.taskField} onTaskFieldChange={this.onTextFieldChange} onClearClick={this.onClearClick} onAddTodoClick={this.onAddTodoClick} />
        <input type='text' name='searchField' value={this.state.searchField} onChange={this.onTextFieldChange} placeholder='Search for something' />
      </div>
    );
  }
}

export default App;
