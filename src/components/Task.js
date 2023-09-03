
import { Component } from "react";
// import { formatDistanceToNow } from 'date-fns';


export default class Task extends Component {

  state = {
    isEditing: false,
    editingText: '',
  };

  handleIsDone = () => {
    this.setState(({ isDone }) => ({ isDone: !isDone }))
  }

  handleOnEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
    // (() => this.handleEditTask)
  }



  render() {
    const { id, label, handleOnEdit, handleOnDelete, handleEditTask } = this.props;
    const { isDone, isEditing } = this.state;

    // const currentDate = new Date(); 
    // const createDate = new Date('1995-12-17T03:24:00'); // тут дата создания
    // formatDistanceToNow(createDate, currentDate);

    let taskClassName = '';

    if (isDone) {
      taskClassName += 'completed'
    }

    if (isEditing) {
      taskClassName += 'editing'
      return (
        <input
          key={id}
          type="text"
          className="edit"
          defaultValue={label}
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
      <li className={taskClassName} >
        <div className="view">
          <input
            id={id}
            onClick={this.handleIsDone}
            className='toggle' type="checkbox" />
          <label >
            <span htmlFor={id}
              className='description'
            >
              {label}
            </span>
            <span className='created'>created 5 minutes ago</span>
            <button
              className="icon icon-edit"
              onClick={this.handleOnEdit}>
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
