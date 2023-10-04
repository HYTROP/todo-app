import Task from './Task';

export default function TaskList({
  data,
  handleOnDelete,
  handleOnEdit,
  handleEditTask,
  handleIsDone,
  taskClassName,
  saveTimerValueById,
}) {
  const elements = data.map((item) => {
    return (
      <Task
        {...item}
        key={item.id}
        taskClassName={taskClassName}
        data
        handleOnDelete={() => handleOnDelete(item.id)}
        addTask
        handleIsDone={handleIsDone}
        handleEditTask={handleEditTask}
        handleOnEdit={handleOnEdit}
        isEditing={item.isEditing}
        isDone={item.isDone}
        saveTimerValueById={saveTimerValueById}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}
