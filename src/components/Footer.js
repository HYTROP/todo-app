import TaskFilter from "./TasksFilter";
export default function Footer({ data }) {
  return (
    <footer className="footer">
      {/* <span className="todo-count">{data.length} items left</span> */}
      <TaskFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
