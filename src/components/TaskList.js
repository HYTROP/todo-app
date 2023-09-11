
// import { Component } from 'react';
import Task from './Task';

export default function TaskList({ data,
  handleOnDelete,
  handleOnEdit,
  handleEditTask,
  handleIsDone,
  taskClassName }) {

  const elements = data.map((item) => {

    return (
      // <div key={item.id} >
      <Task {...item} key={item.id}
        taskClassName={taskClassName}
        data
        handleOnDelete={() => handleOnDelete(item.id)}
        addTask
        isDone={item.isDone}
        handleIsDone={handleIsDone}
        handleEditTask={handleEditTask}
        handleOnEdit={handleOnEdit}
        isEditing={item.isEditing}
      />
      // </div>
    )
  })

  return (
    <ul className='todo-list'>
      {elements}
    </ul>
  )
}

