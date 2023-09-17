import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
  onValueChange = (e) => {
    this.setState({
      newValue: e.target.value,
    });
  };

  render() {
    const {
      id,
      label,
      timeStamp,
      handleOnEdit,
      handleOnDelete,
      handleIsDone,
      isDone,
      isEditing,
      handleEditTask,
      onValueChange,
    } = this.props;

    if (isEditing) {
      this.taskClassName = 'editing';
      return (
        <input
          id={id}
          type="text"
          className="edit"
          defaultValue={label}
          onChange={onValueChange}
          autoFocus
          onKeyUp={(e) => {
            if (e.code === 'Enter') {
              handleEditTask(e.target.value, id);
            }
          }}
        ></input>
      );
    }
    return (
      <li className={!isDone ? '' : 'completed'}>
        <div className="view">
          <input
            id={id}
            onChange={() => {
              handleIsDone(id);
            }}
            className="toggle"
            type="checkbox"
            checked={isDone}
          />
          <label id={id}>
            <span className="description">{label}</span>
            <span className="created">created {formatDistanceToNow(timeStamp, { includeSeconds: true })}</span>
            <button
              className="icon icon-edit"
              onClick={() => {
                handleOnEdit(id, label);
              }}
            ></button>
            <button className="icon icon-destroy" onClick={handleOnDelete}></button>
          </label>
        </div>
      </li>
    );
  }
}
