
import { Component } from "react";
// import { formatDistanceToNow } from 'date-fns';


export default class Task extends Component {

  // state = {
  //   isDone: false,
  //   isEditing: false,
  //   editingText: '',
  // };

  // handleIsDone = () => {
  //   this.setState(({ isDone }) => ({ isDone: !isDone }))
  // }

  render() {
    const { id, label,
      handleOnEdit,
      handleOnDelete,
      handleIsDone,
      isDone
    } = this.props;

    // const currentDate = new Date(); 
    // const createDate = new Date('1995-12-17T03:24:00'); // тут дата создания
    // formatDistanceToNow(createDate, currentDate);
    // console.log(isDone)

    return (
      <li
        className={!isDone ? 'view' : 'completed'} >
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
              onClick={handleOnEdit}
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
