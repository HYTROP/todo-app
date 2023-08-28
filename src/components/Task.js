
import { Component } from "react";

export default class Task extends Component {

  state = {
    isDone: false
  };

  handleIsDone = () => {
    this.setState(({ isDone }) => ({ isDone: !isDone }))
    // console.log('Done!')
  }
  render() {
    const { id, label, handleOnDelete } = this.props;
    const { isDone } = this.state;

    let onCompleted = '';
    let toggleInput = 'toggle';

    if (isDone) {
      onCompleted += 'completed'
    }

    return (
      <li className={onCompleted} >
        <div className="view">
          <input
            id={id}
            onClick={this.handleIsDone}
            className={toggleInput} type="checkbox" />
          <label >
            <span htmlFor={id}
              className='description'
            // onClick={this.handleIsDone}
            >
              {label}
            </span>
            <span className='created'>created 5 minutes ago</span>
            <button
              className="icon icon-edit">
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
