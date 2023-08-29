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
    }
    this.setState(({ tasksData }) => {
      const newArray = [...tasksData, newItem];
      return {
        tasksData: newArray
      }
    })
  }


  render() {

    const { handleIsDoneFilter } = this.props;

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
            isDone
            data={this.state.tasksData}
            handleOnDelete={this.handleOnDelete}
            addTask
          />

          <Footer
            data={this.state.tasksData}
            handleIsDoneFilter={handleIsDoneFilter}
          />
        </section>
      </section>
    );
  }
}

