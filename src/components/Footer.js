import TaskFilter from "./TasksFilter";

export default function Footer({ handleIsDoneFilter, todoCount }) {



  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TaskFilter
        handleIsDoneFilter={handleIsDoneFilter}
      />
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
