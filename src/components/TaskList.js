
// import { Component } from 'react';
import Task from './Task';

export default function TaskList({ data }) {

  const elements = data.map((item) => {

    const { id, ...itemProps } = item;
    return (
      <div key={id} >
        <Task {...itemProps} />
      </div>
    )
  })

  // console.log(data)
  return (
    <ul className='todo-list'>
      {elements}
    </ul>
  )

  // return <ul className="todo-list">{elements}</ul >
}

