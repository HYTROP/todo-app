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
        label: '1st', active: false,
        completed: false, id: '', isDone: false,
      },
    ],
    editingText: '',
    // isDone: false,
    isEditing: false,
  }


  handleIsDone = (id) => {
    this.setState(prevState => ({
      tasksData: prevState.tasksData.map(task => {
        if (task.id === id) {
          console.log(task)
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

  // handleEditTask = (editingText) => {
  //   const editItem = {
  //     label: editingText,
  //     id: uuidv4(),
  //     isDone: false,
  //     timeStamp: Date.now()
  //   }
  //   this.setState((tasksData) => {
  //     const newArray = [...tasksData, editItem];
  //     return {
  //       tasksData: newArray
  //     }
  //   })
  // }

  handleOnEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {

    const { tasksData, isEditing } = this.state;

    const doneCount = tasksData.filter((el) => el.isDone).length;
    const todoCount = tasksData.length - doneCount;


    let taskClassName = '';

    // console.log('IsDone из render', tasksData)

    if (tasksData.isDone) {

      taskClassName += 'completed'
    }

    if (isEditing) {
      taskClassName += 'editing'
      return (
        <input
          key={this.id}
          type="text"
          className="edit"
          value={this.label}
          onChange={this.handleOnEdit}
          autoFocus
          onKeyUp={(e) => {
            if (e.code === 'Enter') {
              this.handleEditTask(e.target.value)
              this.setState({
                isEditing: false
              })
            }
          }
          }
        ></input>
      )
    }

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
            onToggleDone={this.onToggleDone}
            addTask={this.handleAddTask}
            handleOnEdit={this.handleOnEdit}
            // handleEditTask={this.handleEditTask}
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

