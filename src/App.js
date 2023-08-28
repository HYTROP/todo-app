// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'

import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

import './App.css';


export default function App() {

  const tasksData = [
    { label: '1st Task', id: 'saa', important: true, isDone: true },
    { label: '2nd Task', id: 'das', important: false, isDone: false },
    { label: '3rd Task', id: 'asda', important: false, isDone: false },
  ]

  // const [inputText, setInputText] = useState(null) // new task form
  // const [taskList, setTaskList] = useState([]) // task list []

  // function handleSetInput(e) {
  //   setInputText(e.target.value)
  // }

  // function handleAddTask(inputText) {
  //   setTaskList([...taskList, inputText])
  // }


  return (
    <section className="todoapp" >
      <header>
        <h1>ToDos</h1>
        <NewTaskForm
        // setInput={handleSetInput} // указываем целью инпут
        // addTask={handleAddTask} // добавляем в массив тасок новый объект инпута
        // inputText={inputText} // храним в переменной состояния значения переданные в инпут
        />
      </header>
      <section className="main">
        <TaskList
          isDone
          data={tasksData}
        />

        <Footer
        //  data={tasksData} 
        />
      </section>
    </section>

  );
}

