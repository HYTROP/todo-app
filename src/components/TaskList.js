
// import { Component } from 'react';
import Task from './Task';

export default function TaskList({ data,
  handleOnDelete,
  handleOnEdit,
  handleEditTask,
  handleIsDone,
  taskClassName }) {

  const elements = data.map((item) => {

    // const { id, ...itemProps } = item; 
    return (
      <div key={item.id} >
        <Task {...item}
          taskClassName={taskClassName}
          data
          handleOnDelete={() => handleOnDelete(item.id)}
          addTask
          isDone={item.isDone}
          handleIsDone={handleIsDone}
          handleOnEdit={handleOnEdit}
        // handleEditTask={handleEditTask}
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

