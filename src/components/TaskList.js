
// import { Component } from 'react';
import Task from './Task';

export default function TaskList({ data, handleOnDelete, handleOnEdit, handleEditTask }) {

  const elements = data.map((item) => {

    const { id, ...itemProps } = item;
    return (
      <div key={id} >
        <Task {...itemProps}
          data
          handleOnDelete={() => handleOnDelete(id)}
          addTask
          handleOnEdit={handleOnEdit}
          handleEditTask={handleEditTask}
        />
      </div>
    )
  })

  return (
    <ul className='todo-list'>
      {elements}
    </ul>
  )
}

