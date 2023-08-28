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
      { label: '1st Task', id: uuidv4(), isDone: false },
      { label: '2nd Task', id: uuidv4(), isDone: false },
      { label: '3rd Task', id: uuidv4(), isDone: false },
    ]
  }
  newId = uuidv4();


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
      id: this.newId,
      isDone: false,
    }
    // console.log(newItem.id)
    this.setState(({ tasksData }) => {
      const newArray = [...tasksData, newItem];
      return {
        tasksData: newArray
      }
    })

  }

  render() {
    // const { handleOnDelete } = this.props;
    // const { handleOnDelete } = this.state;

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
          />

          <Footer
          //  data={tasksData} 
          />
        </section>
      </section>
    );
  }
}

