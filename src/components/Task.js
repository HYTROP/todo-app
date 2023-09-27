import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
  state = {
    isTimerRunnig: false,
  };

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
      startTimer,
      pauseTimer,
    } = this.props;

    const { isTimerRunning } = this.state;
    const timerDisplay = isTimerRunning ? formatDistanceToNow(timeStamp, { includeSeconds: true }) : '';

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
            <span className="description">{label}</span>

            <span className="description">
              {isTimerRunning ? (
                <button className="icon" onClick={pauseTimer}>
                  ⏸️
                </button>
              ) : (
                <button className="icon" onClick={startTimer}>
                  ▶️
                </button>
              )}
              {timerDisplay}
            </span>

            <span className="created">
              created &nbsp;
              {formatDistanceToNow(timeStamp, { includeSeconds: true })}
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
