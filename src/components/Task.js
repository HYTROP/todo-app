
// import { Component } from "react";


export default function Task({ id, label, isDone = false }) {

  let onCompleted = '';
  if (isDone) {
    onCompleted += 'completed'
  }
  return (
    <li
      className={onCompleted}
    // onClick={handleIsDone}
    >
      <div className="view">
        <input
          // id={id}
          className='toggle' type="checkbox" />
        <label>
          <span
            // key={id}
            className='description'
          // onClick={handleIsDone}
          >
            {label}
          </span>
          <span className='created'>created 5 minutes ago</span>
          <button
            className="icon icon-edit">
          </button>
          <button className="icon icon-destroy"></button>
        </label >
      </div >
    </li >



  )

}
