import { v4 as uuidv4 } from 'uuid';

import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

import './App.css';
import { Component } from 'react';


export default class App extends Component {

  state = {
    tasksData: [],
    newValue: '',
    taskClassName: '',
    filter: 'all'
  }

  handleIsDone = (id) => {
    this.setState(prevState => ({
      tasksData: prevState.tasksData.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone
          };
        } else {
          return task;
        }
      })
    }));
  }


  handleOnDelete = (id) => {
    this.setState(({ tasksData }) => {
      const index = tasksData.findIndex((element) => element.id === id)
      const newArray = [...tasksData.slice(0, index), ...tasksData.slice(index + 1)]
      return {
        tasksData: newArray
      }
    })
  }

  handleAddTask = (inputText) => {
    if (inputText.length === 0) {
      return false
    }
    const newItem = {
      label: inputText,
      id: uuidv4(),
      isDone: false,
      isEditing: false,
      timeStamp: new Date(),
    }
    this.setState(({ tasksData }) => {
      const newArray = [...tasksData, newItem];
      return {
        tasksData: newArray
      }
    })
  }

  handleOnEdit = (id) => {
    this.setState(prevState => ({
      tasksData: prevState.tasksData.map(task => {
        if (task.id === id) {
          return {
            ...task,
            isEditing: !task.isEditing,
          };
        } else {
          return {
            ...task,
          };
        }
      })
    }));
  }

  handleEditTask = (newLabel, id) => {
    this.setState(prevState => ({
      tasksData: prevState.tasksData.map(task => {
        if (task.id === id) {
          return {
            ...task,
            label: newLabel,
            isEditing: false,
          };
        } else {
          return {
            ...task,
          };
        }
      })
    }));
  }

  handleFilter = (name) => {
    this.setState(() => ({
      filter: name
    }))
  }

  getFilteredTasks = () => {
    const { filter, tasksData } = this.state;
    if (filter === 'all') {
      return tasksData
    } else if (filter === 'active') {
      return tasksData.filter((e) => !e.isDone)
    } else if (filter === 'completed') {
      return tasksData.filter((e) => e.isDone)
    }
  }

  handlerClearCompleted = () => {
    this.setState(({ tasksData }) => {
      const index = tasksData.filter((el) => !el.isDone)
      return {
        tasksData: index
      }
    })
  }


  render() {

    const { tasksData, taskClassName } = this.state;
    const doneCount = tasksData.filter((el) => el.isDone).length;
    const todoCount = tasksData.length - doneCount;

    return (
      <section className="todoapp" >
        <header>
          <h1>ToDos</h1>
          <NewTaskForm
            addTask={this.handleAddTask}
          />
        </header>
        <section className="main">
          <TaskList
            data={this.getFilteredTasks()}
            isEditing
            handleIsDone={this.handleIsDone}
            taskClassName={taskClassName}
            addTask={this.handleAddTask}
            handleOnEdit={this.handleOnEdit}
            handleEditTask={this.handleEditTask}
            handleOnDelete={this.handleOnDelete}
          />

          <Footer
            todoCount={todoCount}
            data={this.state.tasksData}
            handleFilter={this.handleFilter}
            handlerClearCompleted={this.handlerClearCompleted}
          />
        </section>
      </section>
    );
  }
}

