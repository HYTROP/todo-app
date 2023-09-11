
import { Component } from "react";
// import { formatDistanceToNow } from 'date-fns';


export default class Task extends Component {



  render() {
    const { id, label,
      handleOnEdit,
      handleOnDelete,
      handleIsDone,
      isDone,
      isEditing,
      handleEditTask
    } = this.props;

    // const { taskClassName } = this.state;

    if (isEditing) {
      this.taskClassName += 'editing'
      return (
        <input
          key={id}
          type="text"
          className="edit"
          value={label}
          onChange={handleOnEdit}
          autoFocus
          onKeyUp={(e) => {
            if (e.code === 'Enter') {
              handleEditTask(e.target.value)
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
      <li
        className={!isDone ? '' : 'completed'} >
        <div className="view">
          <input
            id={id}
            onChange={() => {
              handleIsDone(id)
            }}

            className='toggle' type="checkbox" />
          <label
          >
            <span
              className='description'
            >
              {label}
            </span>
            <span className='created'>created 5 minutes ago</span>
            <button
              className="icon icon-edit"
              onClick={() => { handleOnEdit(id) }}
            >
            </button>
            <button
              className="icon icon-destroy"
              onClick={handleOnDelete}>
            </button>
          </label >
        </div >
      </li >
    )
  }
}
