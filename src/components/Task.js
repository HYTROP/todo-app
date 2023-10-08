import { formatDistanceToNow } from 'date-fns';
import Timer from './Timer';

export default function Task({
  id,
  label,
  timeStamp,
  handleOnEdit,
  handleOnDelete,
  handleIsDone,
  isDone,
  isEditing,
  taskClassName,
  handleEditTask,
  onValueChange,
  min,
  sec,
  saveTimerValueById,
  stopTimerDate,
}) {
  if (isEditing) {
    taskClassName = 'editing';
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

        <button type="button" className="cancel-edit" onClick={() => handleEditTask(label, id)}></button>
      </>
    );
  }

  const onTimerUnmount = ({ min, sec, stopTimerDate }) => {
    console.log(min, sec, stopTimerDate);
    saveTimerValueById(id, min, sec, stopTimerDate);
  };

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
          <span className="title">{label}</span>
          <div className="timer">
            {(min === 0 && sec === 0) || min < 0 || sec < 0 ? null : (
              <Timer min={min} sec={sec} onTimerUnmount={onTimerUnmount} stopTimerDate={stopTimerDate} />
            )}
          </div>

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
