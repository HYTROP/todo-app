// import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

import './App.css';
import { Component } from 'react';


export default class App extends Component {

  state = {
    tasksData: [
      {
        label: '1st', id: '', isDone: false,
        isEditing: false,
      },
    ],
    editingText: 'try to edit',
    taskClassName: '',
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
    const newItem = {
      label: inputText,
      id: uuidv4(),
      isDone: false,
      timeStamp: Date.now()
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
        console.log(id)
        if (task.id === id) {
          return {
            ...task,
            isEditing: !task.isEditing
          };
        } else {
          return task;
        }
      })
    }));
  }

  handleEditTask = (inputText, id) => {
    // console.log(inputText, id)
    const editItem = {
      label: inputText,
      id: uuidv4(),
      isDone: false,
      // timeStamp: Date.now()
    }
    this.setState(prevState => ({
      tasksData: prevState.tasksData.map(task => {
        console.log(id)
        if (task.id === id) {
          return {
            ...task,
            editItem
          }
        } else {
          return editItem
        }
      })
    })
    )
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
            data={tasksData}
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
            filter={this.state.filter}
            handleIsDoneFilter={this.handleIsDoneFilter}
          />
        </section>
      </section>
    );
  }
}

