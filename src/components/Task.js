import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Timer from './Timer';

export default class Task extends Component {
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
      min,
      sec,
    } = this.props;
    // console.log(min, sec)

    if (isEditing) {
      this.taskClassName = 'editing';
      return (
        <>
          <input
            id={id}
            type="edit"
            className="edit"
            defaultValue={label}
            onChange={onValueChange}
            autoFocus
            onKeyUp={(e) => {
              if (e.code === 'Enter') {
                handleEditTask(e.target.value, id);
              }
            }}
            style={{ width: 500 }}
          ></input>

          <button
            type="button"
            className="cancel-edit"
            onClick={() => {
              this.setState(() => {
                handleEditTask(label, id);
              });
            }}
          ></button>
        </>
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
            <span className="created">{label}</span>

            {(min === 0 && sec === 0) || min < 0 || sec < 0 ? null : <Timer min={min} sec={sec} />}

            <span className="description">
              created&nbsp;
              {formatDistanceToNow(timeStamp, { includeSeconds: true })} ago
            </span>

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
