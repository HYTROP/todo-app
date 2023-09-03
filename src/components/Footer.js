import TaskFilter from "./TasksFilter";

export default function Footer({ data, handleIsDoneFilter }) {

  return (
    <footer className="footer">
      <span className="todo-count">{data.length} items left</span>
      <TaskFilter
        handleIsDoneFilter={handleIsDoneFilter}
      />
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
