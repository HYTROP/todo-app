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
      // { label: '1st', active: false, completed: false, id: '', },
    ],
    editingText: '',
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

  handleEditTask = (editingText) => {
    const editItem = {
      label: editingText,
      id: uuidv4(),
      isDone: false,
      timeStamp: Date.now()
    }
    this.setState(() => {
      const newArray = [editItem];
      return {
        tasksData: newArray
      }
    })
  }

  render() {
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
            addTask={this.handleAddTask}
            handleOnEdit={this.handleOnEdit}
            handleEditTask={this.handleEditTask}
            data={this.state.tasksData}
            handleOnDelete={this.handleOnDelete}
          />

          <Footer
            data={this.state.tasksData}
            filter={this.state.filter}
            handleIsDoneFilter={this.handleIsDoneFilter}
          />
        </section>
      </section>
    );
  }
}

